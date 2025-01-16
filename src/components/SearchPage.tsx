import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";


export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen bg-white w-full">
      <div className="fixed top-0 left-0 right-0 bg-white border-b">
        <div className="px-4 py-3 flex items-center gap-3">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <div className="flex-1 relative">
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="pt-16 px-4">
        {/* This section can be populated with search results */}
        <div className="text-center text-gray-500 py-8">
          Start typing to search for products
        </div>
      </div>
    </div>
  );
};
