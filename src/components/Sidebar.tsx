import React from "react";
import {
  X,
  Ticket,
  Heart,
  Package,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

import {services, categories} from "../Index"

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 py-4">
            <div className="px-4 space-y-2 mb-6">
              <a
                href="#"
                className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <Package className="w-5 h-5" />
                <span>Orders</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <Ticket className="w-5 h-5" />
                <span>Vouchers</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <Heart className="w-5 h-5" />
                <span>Saved Items</span>
              </a>
            </div>
            <div className="mb-6">
              <h3 className="px-4 text-sm font-semibold text-gray-500 mb-2">
                OUR CATEGORIES
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="px-4 text-sm font-semibold text-gray-500 mb-2">
                OUR SERVICES
              </h3>
              <div className="space-y-1">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="border-t pt-4">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                <HelpCircle className="w-5 h-5" />
                <span>Help Center</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
