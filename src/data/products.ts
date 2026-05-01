import { Package, ShieldCheck, Zap, Cpu, MemoryStick as Memory, HardDrive } from 'lucide-react';

export interface Product {
  id: string;
  brand: string;
  model: string;
  generation: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
  };
  price: number;
  originalPrice: number;
  condition: 'Like New' | 'Excellent' | 'Good';
  image: string;
  discount: number;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'dell-latitude-7490',
    brand: 'Dell',
    model: 'Latitude 7490',
    generation: '8th Gen',
    specs: {
      processor: 'Core i5-8350U',
      ram: '16GB DDR4',
      storage: '512GB NVMe SSD',
      display: '14" FHD IPS'
    },
    price: 21499,
    originalPrice: 75000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop',
    discount: 71,
    description: 'The Dell Latitude 7490 is a premium business laptop known for its durability and performance. It features a sleek design and a full-FHD display perfect for productivity.',
    features: ['Backlit Keyboard', 'FHD Camera', 'Fast Charging', 'Fingerprint Reader']
  },
  {
    id: 'hp-elitebook-840-g5',
    brand: 'HP',
    model: 'EliteBook 840 G5',
    generation: '8th Gen',
    specs: {
      processor: 'Core i5-8250U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      display: '14" FHD IPS'
    },
    price: 19999,
    originalPrice: 85000,
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=800&auto=format&fit=crop',
    discount: 76,
    description: 'Beautifully crafted with the modern professional in mind, the highly secure and manageable HP EliteBook 840 offers powerful collaboration tools.',
    features: ['Premium Audio', 'Spill-resistant keyboard', 'Thunderbolt support', 'Slim design']
  },
  {
    id: 'lenovo-thinkpad-t480',
    brand: 'Lenovo',
    model: 'ThinkPad T480',
    generation: '8th Gen',
    specs: {
      processor: 'Core i7-8550U',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      display: '14" FHD'
    },
    price: 24999,
    originalPrice: 95000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800&auto=format&fit=crop',
    discount: 73,
    description: 'The gold standard for business laptops. The T480 is legendary for its keyboard and dual-battery system.',
    features: ['Legendary Keyboard', 'Dual Battery', 'MIL-SPEC Durable', 'Trackpoint']
  },
  {
    id: 'apple-macbook-air-m1',
    brand: 'Apple',
    model: 'MacBook Air M1',
    generation: 'M1 Chip',
    specs: {
      processor: 'M1 8-Core',
      ram: '8GB Unified',
      storage: '256GB SSD',
      display: '13.3" Retina'
    },
    price: 48999,
    originalPrice: 92900,
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e523b?q=80&w=800&auto=format&fit=crop',
    discount: 47,
    description: 'Apple silicon M1 chip gives the MacBook Air incredible performance and battery life. Completely silent, fanless design.',
    features: ['Retina Display', 'Touch ID', 'P3 Wide Color', 'All-day battery']
  },
  {
    id: 'dell-latitude-5400',
    brand: 'Dell',
    model: 'Latitude 5400',
    generation: '8th Gen',
    specs: {
      processor: 'Core i5-8365U',
      ram: '16GB DDR4',
      storage: '256GB SSD',
      display: '14" FHD IPS'
    },
    price: 18499,
    originalPrice: 65000,
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785bc67ef7?q=80&w=800&auto=format&fit=crop',
    discount: 71,
    description: 'Versatile and powerful. The 5400 is the workhorse of many corporations, now available for you.',
    features: ['Robust Design', 'Upgrade-friendly', 'Many Ports', 'LTE Optional']
  },
  {
    id: 'hp-probook-440-g7',
    brand: 'HP',
    model: 'ProBook 440 G7',
    generation: '10th Gen',
    specs: {
      processor: 'Core i5-10210U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      display: '14" FHD IPS'
    },
    price: 23999,
    originalPrice: 72000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop',
    discount: 66,
    description: 'Modern design for the growing business. Features the 10th Gen processor for better efficiency and speed.',
    features: ['Thin Bezel', 'Aluminum Top', 'Type-C Charging', 'HD Webcam']
  },
  {
    id: 'lenovo-thinkpad-x1-carbon-g6',
    brand: 'Lenovo',
    model: 'ThinkPad X1 Carbon Gen 6',
    generation: '8th Gen',
    specs: {
      processor: 'Core i7-8650U',
      ram: '16GB LPDDR3',
      storage: '512GB NVMe SSD',
      display: '14" FHD IPS HDR'
    },
    price: 28999,
    originalPrice: 120000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=800&auto=format&fit=crop',
    discount: 75,
    description: 'Ultra-lightweight carbon fiber chassis. The pinnacle of business mobility and prestige.',
    features: ['1.1kg Weight', 'Premium Build', 'HDR Display', 'RapidCharge']
  },
  {
    id: 'asus-zenbook-14',
    brand: 'ASUS',
    model: 'ZenBook 14',
    generation: 'Ryzen 5',
    specs: {
      processor: 'Ryzen 5 4500U',
      ram: '8GB DDR4',
      storage: '512GB SSD',
      display: '14" FHD NanoEdge'
    },
    price: 25499,
    originalPrice: 66000,
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop',
    discount: 61,
    description: 'Stunning design with incredible performance from Ryzen 4000 series. Compact and elegant.',
    features: ['ErgoLift Hinge', 'NanoEdge Display', 'NumPad in Trackpad', 'Military Grade']
  },
  {
    id: 'acer-travelmate-p2',
    brand: 'Acer',
    model: 'TravelMate P2',
    generation: '10th Gen',
    specs: {
      processor: 'Core i3-10110U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      display: '14" FHD'
    },
    price: 15999,
    originalPrice: 45000,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1525547718571-039649701171?q=80&w=800&auto=format&fit=crop',
    discount: 64,
    description: 'Reliability and connectivity for a great price. Perfect for students and basic office work.',
    features: ['Robust Connectivity', 'VGA Port', 'SD Card Reader', 'Great Battery']
  }
];
