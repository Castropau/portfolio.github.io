'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 2000 },
  { month: 'Feb', value: 1500 },
  { month: 'Mar', value: 2500 },
  { month: 'Apr', value: 1800 },
  { month: 'May', value: 3000 },
  { month: 'Jun', value: 2800 },
  { month: 'Jul', value: 3500 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Updates</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Overview of profit</p>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
