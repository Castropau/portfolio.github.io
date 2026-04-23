import DashboardLayout from '@/app/components/DashboardLayout';
import { Search, Download, Eye, Edit, Trash2 } from 'lucide-react';

const invoices = [
  { id: '#001', client: 'Acme Corp', amount: '$2,450', status: 'Paid', date: '24 Mar 2024' },
  { id: '#002', client: 'Tech Solutions', amount: '$1,890', status: 'Pending', date: '23 Mar 2024' },
  { id: '#003', client: 'Global Enterprises', amount: '$3,200', status: 'Paid', date: '22 Mar 2024' },
  { id: '#004', client: 'Startup Inc', amount: '$890', status: 'Overdue', date: '21 Mar 2024' },
  { id: '#005', client: 'Business Group', amount: '$4,100', status: 'Paid', date: '20 Mar 2024' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Paid':
      return 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400';
    case 'Pending':
      return 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400';
    case 'Overdue':
      return 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400';
    default:
      return 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300';
  }
};

export default function InvoicesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Invoices</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your invoices and billing</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 transition-colors">
          <div className="p-6 border-b border-gray-200 dark:border-slate-700">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search invoices..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 text-sm">Invoice ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 text-sm">Client</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 text-sm">Amount</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 text-sm">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 text-sm">Date</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-gray-100">{invoice.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">{invoice.client}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-gray-100">{invoice.amount}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">{invoice.date}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg text-blue-600 dark:text-blue-400 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg text-gray-600 dark:text-gray-400 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg text-red-600 dark:text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
