import React, { useState } from "react";
import { ArrowUp, ArrowDown, Minus, Brain, Clock, TrendingUp } from "lucide-react";

const TrendIcon = ({ trend }) => {
  if (trend.includes("Naik"))
    return <ArrowUp className="text-red-500" size={16} />;
  if (trend.includes("Turun"))
    return <ArrowDown className="text-aruponic-blue" size={16} />;
  return <Minus className="text-slate-400" size={16} />;
};

const PredictionPanel = ({ predictions }) => {
  const [activeTab, setActiveTab] = useState("1_hour");

  const horizons = [
    { key: "1_hour", label: "1 Jam", icon: Clock },
    { key: "3_hours", label: "3 Jam", icon: Clock },
    { key: "6_hours", label: "6 Jam", icon: Clock },
  ];

  const currentData = predictions[activeTab];

  if (!currentData) return <div>Loading AI...</div>;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
            <Brain className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              AI Prediction
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
              <TrendingUp size={14} />
              <span>MS-CNN-GRU Model • </span>
              <span className="font-mono font-semibold text-aruponic-blue">
                {currentData.timestamp}
              </span>
            </p>
          </div>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
          {horizons.map((h) => {
            const HorizonIcon = h.icon;
            return (
              <button
                key={h.key}
                onClick={() => setActiveTab(h.key)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === h.key
                    ? "bg-white dark:bg-slate-700 text-aruponic-blue shadow-sm"
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                <HorizonIcon size={16} />
                {h.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(currentData.data).map(([key, item]) => (
            <div
              key={key}
              className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-center group hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 hover:shadow-md"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold mb-2">
                {key}
              </p>
              <p className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                {item.value}
              </p>
              <div className="flex items-center justify-center gap-1 text-xs">
                <TrendIcon trend={item.trend} />
                <span
                  className={
                    item.diff > 0
                      ? "text-red-500"
                      : item.diff < 0
                      ? "text-aruponic-blue"
                      : "text-slate-500"
                  }
                >
                  {item.diff > 0 ? "+" : ""}
                  {item.diff}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">{item.trend}</p>
            </div>
          ))}
        </div>

        {/* Confidence Indicator */}
        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 dark:text-slate-400">Confidence Level</span>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: '85%' }}
                ></div>
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionPanel;