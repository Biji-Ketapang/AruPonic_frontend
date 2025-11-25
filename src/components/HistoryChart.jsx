import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HistoryChart = ({ data, dataKey, color, title }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
        {title}
      </h3>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id={`color${dataKey}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              opacity={0.2}
            />
            <XAxis
              dataKey="timestamp"
              tick={{ fill: "#94a3b8", fontSize: 10 }}
              tickFormatter={(str) => str.split(" ")[1]} // Hanya ambil jam
            />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 10 }}
              domain={["auto", "auto"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              fillOpacity={1}
              fill={`url(#color${dataKey})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistoryChart;
