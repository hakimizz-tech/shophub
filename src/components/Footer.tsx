import React from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { AnimatedText } from "./Animatedtext";

export function Footer() {
  return (
    <div className="w-full">
      <div className="w-full py-12" style={{backgroundColor : '#F4F5F6'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="mb-8 lg:mb-0 lg:w-1/2 lg:pt-8">
              <AnimatedText animatedtext={"ShopHub. Disover Amazing Product"} />
            </div>
            {/* Newsletter */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-center lg:text-left mb-6">
                Subscribe to Our Newsletter
              </h3>
              <div className="max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md mb-4"
                />
                <div className="flex items-start gap-2 mb-4">
                  <input type="checkbox" id="privacy" className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the privacy and cookies policy and understand I
                    can unsubscribe at any time
                  </label>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Join Us On</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
