import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-[120px] opacity-20">
        <div className="h-[500px] w-[500px] rounded-full bg-blue-600" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 blur-[120px] opacity-20">
        <div className="h-[400px] w-[400px] rounded-full bg-blue-400" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600"
            >
              <ShieldCheck size={16} />
              <span>Certified Refurbished Experts</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-5xl font-black tracking-tight text-gray-950 sm:text-7xl leading-[1.1]"
            >
              Business-grade laptops at half the <span className="text-blue-600">price.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              Hand-picked Dell, HP and Lenovo business laptops — fully tested and certified. Delivered with warranty and lifetime support.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#inventory" 
                className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gray-950 px-8 text-base font-bold text-white transition-all hover:bg-gray-800 hover:scale-105 active:scale-95"
              >
                Browse Inventory
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm looking for a premium refurbished laptop.`} 
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-emerald-100 bg-emerald-50 px-8 text-base font-bold text-emerald-700 transition-all hover:bg-emerald-100"
              >
                <MessageSquare size={18} />
                Talk to us
              </a>
            </motion.div>

            {/* Ratings */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex text-amber-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-sm font-semibold text-gray-600">
                <span className="text-gray-950">4.9 ⭐</span> from 500+ buyers
              </p>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200"
            >
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop" 
                alt="Premium Laptops" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-8 bottom-12 rounded-2xl bg-white p-6 shadow-2xl border border-gray-100 hidden sm:block"
            >
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">Starting Price</div>
              <div className="text-3xl font-black text-gray-950">₹5,999*</div>
              <div className="mt-2 flex items-center gap-2 text-xs font-bold text-gray-500">
                <ShieldCheck size={14} className="text-emerald-500" />
                1 Month Warranty
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
