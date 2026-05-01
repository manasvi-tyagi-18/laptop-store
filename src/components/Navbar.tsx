import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Phone, MessageSquare } from 'lucide-react';

import { WHATSAPP_NUMBER } from '../constants';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Laptop size={24} />
          </div>
          <div>
            <span className="block text-xl font-bold tracking-tight text-gray-900 leading-none">Manasvi Infotech</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-blue-600">Refurbished Laptops</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <a href="#inventory" className="hover:text-blue-600 transition-colors">Inventory</a>
          <a href="#brands" className="hover:text-blue-600 transition-colors">Brands</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in buying a refurbished laptop.`} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-100 transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95"
          >
            <MessageSquare size={18} />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
