import { useEffect, useRef, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { Routes, Route, Outlet, BrowserRouter, Link } from "react-router-dom";
import { SearchPage } from "./components/SearchPage";
import { AuthPage } from "./components/AuthPage";
import { Sidebar } from "./components/Sidebar";
import { products } from "./product";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./components/ProductDetail";
import Header from "./components/Header";
import { Cart } from "./components/Cart";
import { CartProvider } from "./components/CartContext";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Header setIsSidebarOpen={() => setIsSidebarOpen(true)} />
      <div className="flex-grow">
        {/* Outlet is where the specific page content will render */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export function MainContent() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to ShopHub</h2>
          <p className="text-xl text-blue-100">
            Discover amazing products across categories
          </p>
        </div>
      </div>

      {/* Products Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {categories.map((category) => (
          <CategorySection key={category} category={category} />
        ))}
      </main>
    </div>
  );
}

function CategorySection({ category }: { category: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Detect if the product grid overflows
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setIsOverflowing(container.scrollWidth > container.clientWidth);
    }
  }, []);

  const productsInCategory = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">{category}</h2>
        {isOverflowing && (
          <Link
            to=""
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            See All
          </Link>
        )}
      </div>
      <div
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth scrollbar-hide"
        ref={containerRef}
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {productsInCategory.map((product) => (
          <div
            key={product.id}
            className="snap-start flex-shrink-0 w-[calc(100%/2)] sm:w-[calc(100%/3)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)]"
          >
            <ProductCard
              name={product.name}
              currentPrice={product.currentPrice}
              image={product.image}
              id={product.id}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              category={product.category}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
// using react-router to route the path to pages
export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Routes>
        {/* Wrap all routes with the Layout component */}
        
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
