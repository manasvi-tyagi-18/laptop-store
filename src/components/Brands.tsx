import React from 'react';

const brands = [
  { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
  { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
];

const Brands = () => {
  return (
    <section id="brands" className="border-y border-gray-100 bg-gray-50/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          WE STOCK ALL MAJOR TOP-TIER BRANDS
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-60">
          {brands.map((brand) => (
            <img 
              key={brand.name} 
              src={brand.logo} 
              alt={brand.name} 
              className="h-8 w-auto object-contain transition-all hover:grayscale-0 hover:opacity-100"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
