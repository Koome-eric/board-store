"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Tab {
  id: string;
  label: string;
  description: string;
  imageSrc: string;
  svgPath: JSX.Element;
}

const Featurenavs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-1");

  const tabs: Tab[] = [
    {
      id: "tab-1",
      label: "Advanced tools",
      description:
        "Use Preline thoroughly thought and automated libraries to manage your businesses.",
      imageSrc:
        "https://images.unsplash.com/photo-1599651993975-30a482e26467?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      svgPath: (
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zM12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0zM5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0zM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      ),
    },
    {
      id: "tab-2",
      label: "Smart dashboards",
      description:
        "Quickly Preline sample components, copy-paste codes, and start right off.",
      imageSrc:
        "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZSUyMGJvYXJkfGVufDB8fDB8fHww",
      svgPath: <path d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0" />,
    },
    {
      id: "tab-3",
      label: "Powerful features",
      description:
        "Reduce time and effort on building modern look design with Preline only.",
      imageSrc:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZ1cm5pdHVyZSUyMGJvYXJkfGVufDB8fDB8fHww",
      svgPath: (
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3ZM5 3v4M19 17v4M3 5h4M17 19h4" />
      ),
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
              Fully customizable rules to match your unique needs
            </h2>
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {tab.svgPath}
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold text-gray-800">
                        {tab.label}
                      </span>
                      <span className="block mt-1 text-gray-800">
                        {tab.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  id={tab.id}
                  role="tabpanel"
                  className={activeTab === tab.id ? "block" : "hidden"}
                >
                  <Image
                    src={tab.imageSrc}
                    alt={`${tab.label} image`}
                    width={560}
                    height={720}
                    className="shadow-xl rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurenavs;


