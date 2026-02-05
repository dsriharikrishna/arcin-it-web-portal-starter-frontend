"use client";

import { useCallback, useState } from "react";

export interface Tab {
  id: string;
  label: string;
  content?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: "default" | "pills";
  className?: string;
}

export default function Tabs({
  tabs,
  defaultTab,
  onChange,
  variant = "default",
  className = "",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = useCallback(
    (tabId: string) => {
      setActiveTab(tabId);
      onChange?.(tabId);
    },
    [onChange]
  );

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="relative">
        <div className="custom-scrollbar flex items-center gap-2 overflow-x-auto pb-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  variant === "pills"
                    ? isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "bg-[#F0F4FF] text-slate-700 hover:bg-[#E0E7FF]"
                    : isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                } `}
              >
                {tab.label}

                {/* Active Indicator (for default variant) */}
                {variant === "default" && isActive && (
                  <span className="absolute right-0 bottom-0 left-0 h-1 rounded-t-full bg-blue-600" />
                )}
              </button>
            );
          })}
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to right, #3b82f6, #2563eb);
            border-radius: 10px;
          }
        `}</style>

        {/* Bottom Border (for default variant) */}
        {variant === "default" && (
          <div className="absolute right-0 bottom-0 left-0 h-px bg-slate-200" />
        )}
      </div>

      {/* Tab Content */}
      {activeTabData?.content && <div className="mt-6">{activeTabData.content}</div>}
    </div>
  );
}
