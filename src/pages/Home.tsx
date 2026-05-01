import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import CTA from '../components/CTA';
import { mockProducts } from '../data/mockProducts';
import { motion } from 'motion/react';

const Home = () => {
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesBrand = selectedBrand === 'All Brands' || product.brand === selectedBrand;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.specs.processor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [selectedBrand, searchQuery]);

  return (
    <main>
      <Hero />
      <Brands />
      
      {/* Inventory Section */}
      <section id="inventory" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
              Live Inventory
            </div>
            <h2 className="text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
              Fresh stock, handpicked daily
            </h2>
          </div>

          <FilterBar 
            selectedBrand={selectedBrand} 
            setSelectedBrand={setSelectedBrand}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {filteredProducts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-gray-100 py-32 text-center">
              <p className="text-lg font-bold text-gray-400">No laptops found matching your search.</p>
              <button 
                onClick={() => { setSelectedBrand('All Brands'); setSearchQuery(''); }}
                className="mt-4 text-sm font-bold text-blue-600 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Home;
