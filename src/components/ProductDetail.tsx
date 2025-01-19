import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, CheckCircle, ShoppingCart } from "lucide-react";
import { products } from "../product";
import { ProductCard } from "./ProductCard";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Track button state
  const { addToCart } = useCart(); // Access cart functionality

  useEffect(() => {
    // Fetch product based on ID
    const foundProduct = products.find((p) => p.id === Number(id));
    setProduct(foundProduct || null);

    // Get the recently viewed products from localStorage when the component mounts
    const savedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    setRecentlyViewed(savedRecentlyViewed); // Initialize state with persisted data

    // Update recently viewed products
    if (id) {
      // Add the new product id to the recently viewed list
      setRecentlyViewed((prev) => {
        const newViewed = [id, ...prev.filter((item) => item !== id)].slice(0, 4);
        
        // Save the updated recently viewed list to localStorage
        localStorage.setItem('recentlyViewed', JSON.stringify(newViewed));
        return newViewed;
      });
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    // Add product to the cart
    addToCart({
      id: product.id,
      title: product.name,
      image: product.image,
      currentPrice: product.currentPrice,
    });

    // Update button state
    setIsAddedToCart(true);

    // Reset button state after 2 seconds
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
        {/* Product Image */}
        <div className="w-full lg:w-1/3">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                fill="currentColor"
              />
            ))}
            <span className="ml-2 text-gray-600">(128 reviews)</span>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold text-blue-600">
              ${product.currentPrice.toFixed(2)}
            </span>
            {product.originalPrice > product.currentPrice && (
              <span className="ml-2 text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.discount > 0 && (
              <span className="ml-2 text-red-500">-{product.discount}%</span>
            )}
          </div>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            className={`mt-6 w-full flex items-center justify-center py-3 rounded-md text-white transition-all ${isAddedToCart ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAddedToCart ? (
              <>
                <CheckCircle size={18} className="mr-2" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .map((relatedProduct) => (
              <div key={relatedProduct.id}>
                <ProductCard {...relatedProduct} />
              </div>
            ))}
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-6 snap-x snap-mandatory snap-start">
            {recentlyViewed
              .map((viewedId) =>
                products.find((p) => p.id === Number(viewedId))
              )
              .filter(Boolean)
              .map((recentProduct) => (
                <div key={recentProduct!.id} className="flex-shrink-0 w-1/3 snap-center">
                  <ProductCard {...recentProduct!} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
