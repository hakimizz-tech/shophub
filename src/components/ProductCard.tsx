import React from "react";
interface ProductProps {
  name: string;
  price: number;
  image: string;
}
export const ProductCard: React.FC<ProductProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden rounded-md mb-2">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-medium text-gray-900 text-sm truncate">{name}</h3>
      <p className="text-base font-semibold">${price.toFixed(2)}</p>
    </div>
  );
};
