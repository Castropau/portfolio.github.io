'use client';

import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon?: ReactNode;
  trend?: 'up' | 'down';
}

export default function StatCard({ title, value, change, icon, trend }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md transition-all dark:hover:shadow-lg dark:hover:shadow-blue-950/20">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {trend === 'up' ? '↑' : '↓'} {change}
            </p>
          )}
        </div>
        {icon && <div className="text-gray-400 dark:text-gray-600">{icon}</div>}
      </div>
    </div>
  );
}
