import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, WarningCircle, Info, Warning, X } from "phosphor-react";
import CustomButton from "@/components/ui/CustomButton";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

let toastId = 0;

export default function ToastManager() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [, setQueue] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));

    setQueue((q) => {
      if (q.length > 0) {
        const [next, ...rest] = q;
        setToasts([next]);
        setTimeout(() => removeToast(next.id), 2500);
        return rest;
      }
      return q;
    });
  }, []);

  const addToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = ++toastId;
      const newToast = { id, message, type };

      setToasts((prev) => {
        if (prev.length === 0) {
          // Show immediately if no active toast
          setTimeout(() => removeToast(id), 2500);
          return [newToast];
        } else {
          // Queue it if one is active
          setQueue((q) => [...q, newToast]);
          return prev;
        }
      });
    },
    [removeToast]
  );

  // ✅ Fix: Attach to window safely in client-only effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addToast = addToast;
    }
  }, [addToast]);

  const toastData = {
    success: {
      icon: <CheckCircle size={24} className="text-green-600" />,
      bg: "bg-green-100",
      text: "Success",
      titleClass: "text-green-800",
      messageClass: "text-green-700",
    },
    error: {
      icon: <WarningCircle size={24} className="text-red-600" />,
      bg: "bg-red-100",
      text: "Error",
      titleClass: "text-red-800",
      messageClass: "text-red-700",
    },
    warning: {
      icon: <Warning size={24} className="text-yellow-600" />,
      bg: "bg-yellow-100",
      text: "Warning",
      titleClass: "text-yellow-800",
      messageClass: "text-yellow-700",
    },
    info: {
      icon: <Info size={24} className="text-blue-600" />,
      bg: "bg-blue-100",
      text: "Info",
      titleClass: "text-blue-800",
      messageClass: "text-blue-700",
    },
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex w-full max-w-xs flex-col gap-4">
      <AnimatePresence>
        {toasts.map(({ id, message, type }) => {
          const { icon, bg, text, titleClass, messageClass } = toastData[type];
          return (
            <motion.div
              key={id}
              role="alert"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.3 }}
              className={`${bg} flex items-center space-x-3 rounded-lg p-4 shadow-lg`}
            >
              <div className="shrink-0">{icon}</div>
              <div className="flex flex-grow flex-col">
                <div className={`mb-1 leading-tight font-semibold select-none ${titleClass}`}>
                  {text}
                </div>
                <div className={`text-sm select-text ${messageClass}`}>{message}</div>
              </div>
              <CustomButton
                aria-label="Dismiss toast"
                onClick={() => removeToast(id)}
                className="cursor-pointer rounded-md p-1 text-gray-400 hover:text-gray-700 focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 focus:outline-none"
              >
                <X size={18} weight="bold" />
              </CustomButton>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
