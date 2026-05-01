import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageSquare, ArrowLeft, ShieldCheck, Zap, Cpu, MemoryStick as Memory, HardDrive, Monitor, CheckCircle2 } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import { motion } from 'motion/react';
import { WHATSAPP_NUMBER } from '../constants';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = mockProducts.find(p => p._id === id);
    setProduct(foundProduct || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center p-4 text-center">
        <h2 className="mb-4 text-3xl font-black text-gray-900">Product Not Found</h2>
        <Link to="/" className="text-blue-600 font-bold hover:underline">Return to Inventory</Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${product.brand} ${product.name}`)}`;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center gap-2 text-sm font-bold text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={18} />
          Back to Listings
        </button>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-50 shadow-2xl shadow-gray-100"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.discount > 0 && (
                <div className="absolute left-8 top-8">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5 text-sm font-black text-white shadow-xl">
                    {product.discount}% OFF
                  </span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: Info Section */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">
                {product.brand} · {product.generation}
              </div>
              <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
                {product.name}
              </h1>
              
              <div className="mb-8 flex items-center gap-4">
                <span className="text-4xl font-black text-gray-950">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through font-bold">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-600">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              {/* Conditions & Trust */}
              <div className="mb-10 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 border border-gray-100">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    product.stock === 'IN STOCK' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                  }`}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Availability</div>
                    <div className="font-black text-gray-950">{product.stock}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 border border-gray-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Warranty</div>
                    <div className="font-black text-gray-950">1 Month Limited</div>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="mb-10">
                <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-gray-400">Technical Specifications</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Cpu className="mt-1 text-blue-600" size={20} />
                    <div>
                      <div className="text-xs font-bold text-gray-400">Processor</div>
                      <div className="font-bold text-gray-900">{product.specs.processor}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Memory className="mt-1 text-blue-600" size={20} />
                    <div>
                      <div className="text-xs font-bold text-gray-400">Memory (RAM)</div>
                      <div className="font-bold text-gray-900">{product.specs.ram}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HardDrive className="mt-1 text-blue-600" size={20} />
                    <div>
                      <div className="text-xs font-bold text-gray-400">Storage</div>
                      <div className="font-bold text-gray-900">{product.specs.storage}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="mt-1 text-blue-600" size={20} />
                    <div>
                      <div className="text-xs font-bold text-gray-400">Display</div>
                      <div className="font-bold text-gray-900">{product.specs.display}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                 <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-gray-400">About this unit</h3>
                 <p className="text-gray-600 leading-relaxed leading-7 bg-blue-50/30 p-6 rounded-2xl border border-blue-50">
                   {product.description}
                 </p>
              </div>

              {/* Features List */}
              <div className="mb-12">
                 <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-gray-400">Premium Features</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                   {product.features.map((feature, idx) => (
                     <div key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       {feature}
                     </div>
                   ))}
                 </div>
              </div>

              {/* CTA */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-8 text-lg font-black text-white shadow-2xl shadow-emerald-200 transition-all hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 sm:w-auto sm:px-12"
              >
                <MessageSquare size={24} />
                Buy on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
