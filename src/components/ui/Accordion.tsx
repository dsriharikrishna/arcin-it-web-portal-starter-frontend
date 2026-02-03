"use client";

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  actionCustomButton?: React.ReactNode;
  className?: string;
  headerClassName?: string;
}

import CustomButton from "./CustomButton";

const Accordion: React.FC<AccordionProps> = ({
  title,
  icon,
  isExpanded,
  onToggle,
  children,
  actionCustomButton,
  className,
  headerClassName,
}) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl shadow-sm overflow-visible p-2",
        className
      )}
    >
      <div
        className={clsx(
          "w-full rounded-xl flex items-center justify-between px-6 py-4 transition-colors",
          headerClassName || "bg-gray-800 text-white hover:bg-gray-700"
        )}
      >
        <CustomButton
          type="button"
          onClick={onToggle}
          className="flex items-center gap-3 flex-1 cursor-pointer"
        >
          {icon}
          <span className="font-semibold">{title}</span>
        </CustomButton>

        <div className="flex items-center gap-3">
          {actionCustomButton && (
            <div onClick={(e) => e.stopPropagation()}>{actionCustomButton}</div>
          )}
          <CustomButton type="button" onClick={onToggle} className="cursor-pointer">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </CustomButton>
        </div>
      </div>

      {isExpanded && <div className="p-6 text-sm text-slate-600">{children}</div>}
    </div>
  );
};

export default React.memo(Accordion);
