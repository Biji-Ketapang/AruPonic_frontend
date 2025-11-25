import React, { useState, useRef, useEffect } from "react";

const SensorCard = ({ title, value, unit, icon: Icon, colorClass, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState('bottom');
  const cardRef = useRef(null);

  // Check position to prevent tooltip from going off-screen
  useEffect(() => {
    if (showTooltip && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      
      // If there's not enough space below, show tooltip above the card
      if (spaceBelow < 300 && spaceAbove > 300) {
        setTooltipPosition('top');
      } else {
        setTooltipPosition('bottom');
      }
    }
  }, [showTooltip]);

  return (
    <div className="relative" ref={cardRef}>
      {/* Main Card */}
      <div 
        className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-help"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{title}</h3>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">
              {value !== null && value !== undefined ? value.toFixed(2) : '--'}
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-1">{unit}</span>
            </p>
          </div>
          <div className="relative">
            <Icon size={32} className={colorClass} />
            <div className="absolute inset-0 bg-current opacity-10 rounded-full blur-sm"></div>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">Live</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Tooltip dengan positioning yang dinamis */}
      {showTooltip && tooltip && (
        <div 
          className={`fixed z-[9999] w-80 bg-slate-900 dark:bg-slate-700 rounded-xl p-4 shadow-2xl border border-slate-700 animate-fade-in ${
            tooltipPosition === 'bottom' 
              ? 'top-[calc(100%+8px)]' 
              : 'bottom-[calc(100%+8px)]'
          }`}
          style={{
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          {/* Tooltip Arrow */}
          <div className={`absolute w-4 h-4 bg-slate-900 dark:bg-slate-700 rotate-45 border-l border-t border-slate-700 ${
            tooltipPosition === 'bottom' 
              ? '-top-2 left-1/2 -translate-x-1/2' 
              : '-bottom-2 left-1/2 -translate-x-1/2 border-r border-b border-l-0 border-t-0'
          }`}></div>
          
          {/* Tooltip Content */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white text-lg">{tooltip.title}</h4>
              <Icon size={20} className={colorClass} />
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              {tooltip.description}
            </p>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800 rounded-lg p-3">
                <span className="text-slate-400 block mb-1">Ideal Range</span>
                <span className="text-green-400 font-semibold">{tooltip.ideal}</span>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <span className="text-slate-400 block mb-1">Dampak</span>
                <span className="text-blue-400">{tooltip.impact}</span>
              </div>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-red-400">Rendah:</span>
                <span className="text-slate-300 text-right">{tooltip.low}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-400">Tinggi:</span>
                <span className="text-slate-300 text-right">{tooltip.high}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SensorCard;