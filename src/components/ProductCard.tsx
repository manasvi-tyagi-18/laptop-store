import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Cpu, MemoryStick as Memory, HardDrive } from 'lucide-react';
import { Product } from '../data/products';
import { motion } from 'motion/react';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${product.brand} ${product.name}`)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50"
    >
      {/* Badge Section */}
      <div className="absolute left-6 top-6 z-10 flex flex-col gap-2">
        {product.discount > 0 && (
          <span className="inline-flex items-center rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
            {product.discount}% OFF
          </span>
        )}
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm ${
          product.stock === 'IN STOCK' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
        }`}>
          {product.stock}
        </span>
      </div>

      {/* Image Section */}
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
          {product.brand} · {product.generation}
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Specs Grid */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-2 text-center transition-colors group-hover:bg-blue-50/50">
            <Cpu size={14} className="mb-1 text-gray-400 group-hover:text-blue-400" />
            <span className="text-[10px] font-medium text-gray-600">{product.specs.processor.split(' ')[0]}</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-2 text-center transition-colors group-hover:bg-blue-50/50">
            <Memory size={14} className="mb-1 text-gray-400 group-hover:text-blue-400" />
            <span className="text-[10px] font-medium text-gray-600">{product.specs.ram.split(' ')[0]}</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-2 text-center transition-colors group-hover:bg-blue-50/50">
            <HardDrive size={14} className="mb-1 text-gray-400 group-hover:text-blue-400" />
            <span className="text-[10px] font-medium text-gray-600">{product.specs.storage.split(' ')[0]}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-auto mb-5 flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-400 line-through font-medium">₹{product.originalPrice.toLocaleString()}</span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link 
            to={`/product/${product._id}`}
            className="flex items-center justify-center gap-1 rounded-xl border-2 border-gray-900 px-4 py-2.5 text-sm font-black text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
          >
            Details
          </Link>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
          >
            <MessageSquare size={16} />
            Buy
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
