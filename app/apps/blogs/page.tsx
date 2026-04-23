import DashboardLayout from '@/app/components/DashboardLayout';
import { Search, Edit, Trash2, Eye, Plus } from 'lucide-react';

const blogs = [
  { id: 1, title: 'Getting Started with React', author: 'Sarah Johnson', views: 1240, date: '15 Mar 2024', status: 'Published' },
  { id: 2, title: 'Tailwind CSS Best Practices', author: 'John Smith', views: 892, date: '12 Mar 2024', status: 'Published' },
  { id: 3, title: 'Advanced Next.js Patterns', author: 'Emma Wilson', views: 456, date: '10 Mar 2024', status: 'Draft' },
  { id: 4, title: 'Building Dashboard UIs', author: 'Michael Brown', views: 2100, date: '8 Mar 2024', status: 'Published' },
  { id: 5, title: 'Web Performance Tips', author: 'Lisa Garcia', views: 678, date: '5 Mar 2024', status: 'Published' },
];

export default function BlogsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600 mt-1">Create and manage your blog content</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Title</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Author</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Views</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">Status</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-700 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{blog.title}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{blog.author}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{blog.views}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{blog.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        blog.status === 'Published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-yellow-50 rounded-lg text-yellow-600">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg text-red-600">
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
