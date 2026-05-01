import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_NUMBER, BRAND_NAME } from '../constants';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show a small notification "ping" after 3 seconds to grab attention
    const timer = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const quickLinks = [
    { label: "📦 Check Stock Availability", msg: "Hi! I want to check the current availability of laptops." },
    { label: "🛡️ Warranty & Service", msg: "Hi, I have a question regarding the warranty on your refurbished laptops." },
    { label: "📍 Visit Store / Location", msg: "Hi, I want to visit Manasvi Infotech at Nehru Place. Please share the location." },
    { label: "💼 Bulk Business Inquiry", msg: "Hi, I'm looking to buy laptops in bulk for my office/business." }
  ];

  const handleLinkClick = (msg: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="bg-emerald-600 p-6 text-white text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-2xl opacity-30">
                 <div className="h-24 w-24 rounded-full bg-white" />
               </div>
               
               <button 
                 onClick={() => setIsOpen(false)}
                 className="absolute top-4 right-4 rounded-full p-1 hover:bg-white/10 transition-colors"
                >
                 <X size={20} />
               </button>

               <div className="relative mx-auto mb-3 h-16 w-16 overflow-hidden rounded-full border-4 border-white/20 bg-emerald-500">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                    alt="Agent" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-emerald-600 bg-emerald-500" />
               </div>
               <h3 className="text-lg font-bold">Chat with Sales</h3>
               <p className="text-sm text-emerald-100 opacity-90">Usually replies in a few minutes</p>
            </div>

            {/* Chat Body */}
            <div className="bg-gray-50 p-6">
              <div className="mb-6 rounded-2xl bg-white p-4 text-sm text-gray-700 shadow-sm shadow-gray-100 italic">
                "Hi there! 👋 Welcome to {BRAND_NAME}. How can we help you find the perfect laptop today?"
              </div>

              <div className="flex flex-col gap-2">
                {quickLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(link.label)}
                    className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-left text-sm font-bold text-gray-700 shadow-sm border border-transparent transition-all hover:border-emerald-500 hover:text-emerald-600"
                  >
                    <span>{link.label}</span>
                    <Send size={14} className="opacity-0 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-4 text-center">
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">⚡ Powered by Manasvi Automation</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="relative">
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-gray-950 px-4 py-2 text-sm font-bold text-white shadow-xl"
            >
              Have a question? 👋
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-y-8 border-l-8 border-y-transparent border-l-gray-950" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className={`flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 ${
            isOpen ? 'bg-gray-950 text-white' : 'bg-emerald-500 text-white'
          }`}
        >
          {isOpen ? <X size={28} /> : (
            <div className="relative">
              <MessageSquare size={28} />
              {!isOpen && <span className="absolute -top-1 -right-1 flex h-4 w-4 animate-ping rounded-full bg-white opacity-75" />}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
