import { useState } from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { ProductCard } from "./components/ProductCard";
import { Routes, Route, Link, MemoryRouter } from "react-router-dom";
import { SearchPage } from "./components/SearchPage";
import { AuthPage } from "./components/AuthPage";
import { Sidebar } from "./components/SideBar";
import { products } from "./product";

function MainContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="text-xl font-bold text-gray-900">ShopHub</h1>
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
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to ShopHub</h2>
          <p className="text-xl text-blue-100">
            Discover amazing products across categories
          </p>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 py-12">
        {categories.map((category) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                ))}
            </div>
          </section>
        ))}
      </main>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
              <p className="text-sm">Your one-stop shop for all your needs.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="text-sm hover:text-white cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm">Email: support@shophub.com</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// using react-router to route the path to pages
export function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </MemoryRouter>
  );
}
