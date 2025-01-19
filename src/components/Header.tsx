import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

interface HeaderProps {
  setIsSidebarOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen }) => {
  const { itemCount } = useCart(); // Retrieve the item count from the cart context

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={setIsSidebarOpen}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <Link to={'/'}>
                <h1 className="text-xl font-bold text-gray-900">ShopHub</h1>
              </Link>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden md:block relative max-w-xs w-full">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <Link
                to="/search"
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              >
                <Search className="w-6 h-6 text-gray-600" />
              </Link>
              <Link to="/auth" className="p-2 hover:bg-gray-100 rounded-full">
                <User className="w-6 h-6 text-gray-600" />
              </Link>
              <Link
                to="/cart"
                className="relative p-2 hover:bg-gray-100 rounded-full"
              >
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Add this empty div to push content below the fixed header */}
      <div className="h-16"></div>
    </div>
  );
};

export default Header;
