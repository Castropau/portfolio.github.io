import DashboardLayout from '@/app/components/DashboardLayout';
import { Search, ShoppingCart, Heart } from 'lucide-react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'MaterialPro Theme', price: '$45', category: 'Template', image: '🎨', rating: 4.8 },
  { id: 2, name: 'Modernize Dashboard', price: '$39', category: 'Admin Template', image: '📊', rating: 4.9 },
  { id: 3, name: 'Flexy Admin', price: '$49', category: 'Admin Panel', image: '⚡', rating: 4.7 },
  { id: 4, name: 'Xtreme Admin', price: '$35', category: 'Dashboard', image: '🚀', rating: 4.6 },
  { id: 5, name: 'Elite Admin', price: '$55', category: 'Premium', image: '👑', rating: 5.0 },
  { id: 6, name: 'Helping Hands WP', price: '$29', category: 'Theme', image: '🤝', rating: 4.5 },
  { id: 7, name: 'Ample Admin', price: '$42', category: 'Bootstrap', image: '📱', rating: 4.8 },
  { id: 8, name: 'Pro Dashboard', price: '$59', category: 'Premium', image: '💎', rating: 4.9 },
];

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Products</h1>
            <p className="text-gray-600 mt-1">Browse and manage your products</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Add Product
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg hover:shadow-lg transition-shadow overflow-hidden">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-40 flex items-center justify-center text-4xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{product.category}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-xs text-gray-600">⭐ {product.rating}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-sm">
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Heart className="w-4 h-4 text-gray-600" />
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
