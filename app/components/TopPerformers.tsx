'use client';

import { MoreVertical, Search } from 'lucide-react';

const performers = [
  { id: 1, name: 'Sunil Joshi', role: 'Web Designer', company: 'Elite Admin', priority: 'Low', sales: '3.9k' },
  { id: 2, name: 'John Deo', role: 'Web Developer', company: 'Flexy Admin', priority: 'Medium', sales: '24.5k' },
  { id: 3, name: 'Nirav Joshi', role: 'Web Manager', company: 'Material Pro', priority: 'High', sales: '12.8k' },
  { id: 4, name: 'Yuvraj Sheth', role: 'Project Manager', company: 'Xtreme Admin', priority: 'Low', sales: '4.8k' },
  { id: 5, name: 'Micheal Doe', role: 'Content Writer', company: 'Helping Hands', priority: 'High', sales: '9.3k' },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-700';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-700';
    case 'Low':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default function TopPerformers() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-slate-700 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Performers</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Best employees</p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search User..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 text-sm">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 text-sm">Role</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 text-sm">Company</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 text-sm">Priority</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 text-sm">Sales</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {performers.map((performer) => (
              <tr key={performer.id} className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <td className="py-4 px-4 text-sm text-gray-900 dark:text-gray-100">{performer.name}</td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">{performer.role}</td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">{performer.company}</td>
                <td className="py-4 px-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(performer.priority)}`}>
                    {performer.priority}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">{performer.sales}</td>
                <td className="py-4 px-4 text-center">
                  <button className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
