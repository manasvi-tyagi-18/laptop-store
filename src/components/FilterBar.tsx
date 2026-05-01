import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const brands = ['All Brands', 'Dell', 'HP', 'Lenovo'];

const FilterBar: React.FC<FilterBarProps> = ({ 
  selectedBrand, 
  setSelectedBrand, 
  searchQuery, 
  setSearchQuery 
}) => {
  return (
    <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Search and Brand Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search model or specs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm font-medium transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-50 sm:w-64"
          />
        </div>

        {/* Brand Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                selectedBrand === brand 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Price Slider (UI Only as requested) */}
      <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-2">
        <div className="flex items-center gap-2 px-3">
          <SlidersHorizontal size={16} className="text-gray-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Price Range</span>
        </div>
        <div className="flex items-center gap-3 pr-2">
          <span className="text-sm font-bold text-gray-900">₹15k</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="60"
            className="h-1.5 w-32 cursor-pointer appearance-none rounded-lg bg-gray-100 accent-blue-600 lg:w-48"
          />
          <span className="text-sm font-bold text-gray-900">₹30k+</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
