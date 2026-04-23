'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Apr', salary: 3000 },
  { month: 'May', salary: 2800 },
  { month: 'June', salary: 3200 },
  { month: 'July', salary: 2900 },
  { month: 'Aug', salary: 3100 },
  { month: 'Sept', salary: 3400 },
  { month: 'Oct', salary: 3600 },
];

export default function SalesChart() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Employee Salary</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Every month</p>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Bar dataKey="salary" fill="#10b981" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
