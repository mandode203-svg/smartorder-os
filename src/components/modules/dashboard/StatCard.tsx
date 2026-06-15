import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, trend, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900">{value}</h3>
        </div>
        {icon && <div className="text-indigo-600">{icon}</div>}
      </div>
      {trend && (
        <p className="text-xs text-green-600 mt-4 font-semibold">
          {trend}
        </p>
      )}
    </div>
  );
};