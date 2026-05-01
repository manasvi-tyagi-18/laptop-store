import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const CTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-950 px-8 py-20 text-center sm:px-16">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-[80px] opacity-20">
            <div className="h-64 w-64 rounded-full bg-blue-600" />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 blur-[80px] opacity-10">
            <div className="h-64 w-64 rounded-full bg-indigo-600" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-bold text-blue-400">
              <Sparkles size={16} />
              <span>Looking for something specific?</span>
            </div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Tell us what you need. <br className="hidden sm:block" /> We'll source it for you.
            </h2>
            <p className="mb-10 text-lg text-gray-400">
              Not finding the exact model? Contact our sales team and we will find the perfect business laptop that matches your requirement and budget.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I have a specific requirement for a refurbished laptop...`} 
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-10 text-lg font-black text-white shadow-xl shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95"
            >
              <MessageSquare size={20} />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
