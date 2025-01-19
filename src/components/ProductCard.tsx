import React, { useState } from "react";
import { Star, ShoppingCart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  rating: number;
  category: string;
}

export function ProductCard({
  id,
  image,
  name,
  currentPrice,
  originalPrice,
  discount,
  rating,
//   category,
}: ProductCardProps) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addToCart } = useCart(); // Access addToCart from the cart context

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent navigation to the product detail page
    event.preventDefault(); // Prevent default link behavior

    const product  = {
        id,
        name,
        currentPrice,
        image,
    }

    // Add the item to the cart
    addToCart(product);

    // console.log("Adding product to cart:", product); // Debugging log

    // Update the UI
    setIsAddedToCart(true);

    // Optional: Reset the button UI after 2 seconds
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 1000);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${id}`} className="group">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm relative flex flex-col hover:shadow-lg transition-shadow">
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
              -{discount}%
            </div>
          )}
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex-grow">
            <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
              {name}
            </h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  } fill-current`}
                />
              ))}
            </div>
            <div className="mt-2 space-y-1">
              <p className="text-lg font-semibold text-blue-600">
                ${currentPrice.toFixed(2)}
              </p>
              {originalPrice > currentPrice && (
                <p className="text-sm text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          {/* Add to cart button */}
          <motion.button
            onClick={handleAddToCart}
            className={`absolute bottom-4 right-4 px-4 py-2 text-sm rounded-full transition-opacity flex items-center gap-2 ${
              isAddedToCart
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white group-hover:opacity-100 opacity-0"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isAddedToCart ? (
              <>
                <CheckCircle size={16} />
                Added
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                Add to Cart
              </>
            )}
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
}
