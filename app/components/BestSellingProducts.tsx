'use client';

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'MaterialPro', value: 23568, percentage: 55 },
  { name: 'Modernize', value: 24468, percentage: 65 },
];

const COLORS = ['#3b82f6', '#8b5cf6'];

export default function BestSellingProducts() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Best Selling Products</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Overview 2024</p>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => `$${(value as number).toLocaleString()}`} />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {data.map((item, idx) => (
          <div key={idx} className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg transition-colors">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">${item.value.toLocaleString()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
