import DashboardLayout from '@/app/components/DashboardLayout';
import { Search, Send, Phone, Video, MoreVertical } from 'lucide-react';

const conversations = [
  { id: 1, name: 'Sarah Anderson', message: 'Thanks for your help!', time: '2 min ago', avatar: '👩‍💼' },
  { id: 2, name: 'John Smith', message: 'Can we schedule a meeting?', time: '5 min ago', avatar: '👨‍💼' },
  { id: 3, name: 'Emma Wilson', message: 'The project is ready', time: '10 min ago', avatar: '👩‍🦰' },
  { id: 4, name: 'Michael Brown', message: 'Let me know about the status', time: '15 min ago', avatar: '👨‍🦱' },
];

export default function ChatsPage() {
  return (
    <DashboardLayout>
      <div className="flex gap-6 h-[calc(100vh-120px)]">
        {/* Conversations List */}
        <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                    {conv.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-900">{conv.name}</p>
                    <p className="text-xs text-gray-500 truncate">{conv.message}</p>
                  </div>
                  <span className="text-xs text-gray-400">{conv.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-lg">
                👩‍💼
              </div>
              <div>
                <p className="font-medium text-gray-900">Sarah Anderson</p>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="flex justify-start">
              <div className="max-w-xs bg-gray-100 text-gray-900 rounded-lg p-3 text-sm">
                Hi there! How are you doing?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-xs bg-blue-600 text-white rounded-lg p-3 text-sm">
                Great! Just finished the project
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-xs bg-gray-100 text-gray-900 rounded-lg p-3 text-sm">
                Thanks for your help!
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
