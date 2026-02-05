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
    <div className={clsx("overflow-visible rounded-xl bg-white p-2 shadow-sm", className)}>
      <div
        className={clsx(
          "flex w-full items-center justify-between rounded-xl px-6 py-4 transition-colors",
          headerClassName || "bg-gray-800 text-white hover:bg-gray-700"
        )}
      >
        <CustomButton
          type="button"
          onClick={onToggle}
          className="flex flex-1 cursor-pointer items-center gap-3"
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
