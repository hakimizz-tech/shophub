/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, createContext, useContext } from "react";

// Interface for individual cart items
interface CartItem {
  id: string; 
  title: string; 
  currentPrice: number; 
  image: string; 
  quantity: number; 
}

// Interface for the Cart Context state and functions
interface CartContextType {
  cart: CartItem[]; // Array of items in the cart
  addToCart: (product: any) => void; 
  removeFromCart: (id: string) => void; 
  updateQuantity: (id: string, quantity: number) => void;
  totalPrice: number; 
  itemCount: number;
}

// Create a context with default values
const CartContext = createContext<CartContextType>({
  cart: [], // Initial empty cart
  addToCart: () => {}, 
  removeFromCart: () => {}, 
  updateQuantity: () => {}, 
  totalPrice: 0, 
  itemCount: 0, 
});

// CartProvider component that manages the cart state
export function CartProvider({ children }: { children: React.ReactNode }) {
  // State to store cart items, retrieved from localStorage if available
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : []; // Parse saved cart or use an empty array
  });


  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  // Effect that updates the localStorage whenever the cart changes
  // Also recalculates total price and item count
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const total = cart.reduce(
      (sum, item) => sum + item.currentPrice * item.quantity, // Calculate total price
      0,
    );
    const count = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate total item count
    setTotalPrice(total); 
    setItemCount(count);  
  }, [cart]); 

  // Function to add a product to the cart
  const addToCart = (product: any) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If the item exists, update its quantity by 1
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1, // Increment quantity
              }
            : item,
        );
      }
      // If the item is not in the cart, add it with quantity 1
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1, // Set initial quantity to 1
        },
      ];
    });
  };

  // Function to remove a product from the cart by its id
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Filter out the item with the given id
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      // If quantity is 0, remove the item from the cart
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity, // Update the quantity of the item
            }
          : item,
      ),
    );
  };

  // Provide the cart context to children components
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalPrice,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the Cart context in components
export const useCart = () => useContext(CartContext);
