import DashboardLayout from '@/app/components/DashboardLayout';
import { Search, Trash2, Archive, Flag, Reply } from 'lucide-react';

const emails = [
  { id: 1, from: 'team@company.com', subject: 'Project Update Meeting', preview: 'Hi, let me know when...', time: '10:30 AM', unread: true },
  { id: 2, from: 'support@example.com', subject: 'Your Invoice #2024-001', preview: 'Your invoice has been sent...', time: '9:45 AM', unread: false },
  { id: 3, from: 'notify@system.com', subject: 'System Maintenance Scheduled', preview: 'We will be performing maintenance...', time: 'Yesterday', unread: false },
  { id: 4, from: 'client@business.com', subject: 'Re: Proposal Discussion', preview: 'Thank you for sending the proposal...', time: '2 days ago', unread: false },
];

export default function EmailsPage() {
  return (
    <DashboardLayout>
      <div className="flex gap-6 h-[calc(100vh-120px)]">
        {/* Sidebar */}
        <div className="w-56 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium mb-6">
            + Compose
          </button>

          <div className="space-y-2">
            {['Inbox', 'Sent', 'Drafts', 'Trash'].map((label) => (
              <a
                key={label}
                href="#"
                className={`block px-4 py-2 rounded-lg text-sm ${
                  label === 'Inbox'
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Email List */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search emails..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {emails.map((email) => (
              <div
                key={email.id}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                  email.unread ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm ${email.unread ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                        {email.from}
                      </p>
                      <span className="text-xs text-gray-500">{email.time}</span>
                    </div>
                    <p className={`text-sm mt-1 ${email.unread ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                      {email.subject}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 truncate">{email.preview}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Flag className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
