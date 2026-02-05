"use client";

import React, { useState } from "react";
import CustomButton from "./CustomButton";

interface FilledTab {
  id: string;
  label: string;
}

interface FilledTabsProps {
  tabs: FilledTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

const FilledTabs: React.FC<FilledTabsProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  onTabChange,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || "");

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (tabId: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  };

  return (
    <div className="scrollbar-hide w-full overflow-x-auto">
      <div className="inline-flex min-w-full gap-1 rounded-lg bg-gray-50 p-1 sm:min-w-0">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <CustomButton
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-shrink-0 cursor-pointer rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 sm:px-6 sm:py-2.5 sm:text-sm ${
                isActive ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              } `}
            >
              {tab.label}
            </CustomButton>
          );
        })}
      </div>
    </div>
  );
};

export default FilledTabs;
