import React from 'react';
import { Laptop, Phone, MessageSquare, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-950 pt-20 pb-10 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-2 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <Laptop size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">Manasvi Infotech</span>
            </div>
            <p className="mb-8 leading-relaxed">
              We specialize in providing high-quality refurbished business laptops from top brands like Dell, HP, Lenovo. Our mission is to make premium technology affordable.
            </p>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-800 transition-colors hover:bg-blue-600 hover:text-white">
                <Instagram size={18} />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-800 transition-colors hover:bg-blue-600 hover:text-white">
                <Facebook size={18} />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-800 transition-colors hover:bg-blue-600 hover:text-white">
                <Twitter size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="#inventory" className="transition-colors hover:text-white">Browse Inventory</a></li>
              <li><a href="#brands" className="transition-colors hover:text-white">Famous Brands</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Support & Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Get in Touch</h4>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-blue-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="mb-1 font-bold text-white">Address</div>
                  <p className="text-sm">103K SIDHARTH BUILDING, NEHRU PLACE, NEW DELHI - 110019</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-blue-500">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="mb-1 font-bold text-white">Phone</div>
                  <p className="text-sm">+91 9560922688</p>
                  <p className="text-sm">+91 8287908586</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-blue-500">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="mb-1 font-bold text-white">Email</div>
                  <p className="text-sm">manasviinfotechs@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-green-500">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="mb-1 font-bold text-white">WhatsApp</div>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-sm border-b border-emerald-900 text-emerald-500 transition-colors hover:text-emerald-400 hover:border-emerald-400">Chat with an Expert</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-900 pt-10 sm:flex-row">
         <p className="text-xs">© 2026 Manasvi Infotech. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Business</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
