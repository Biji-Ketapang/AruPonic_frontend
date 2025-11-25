import React from "react";

const Tooltip = ({ children, text }) => (
  <div className="group relative inline-block">
    {children}
    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs px-2 py-1 rounded bg-slate-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
      {text}
    </span>
  </div>
);

export default Tooltip;
