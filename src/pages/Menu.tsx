import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Leaf, Flame, Star } from 'lucide-react';
import { menuData } from '../data/mockData';
import { useCart } from '../context/CartContext';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addItem } = useCart();

  const categories = ['All', ...Array.from(new Set(menuData.map((item) => item.category)))];

  const filteredMenu = activeCategory === 'All'
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-earth-beige min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-brown mb-6">Our Authentic Menu</h1>
          <p className="text-lg text-earth-brown/70">
            Explore our wide range of traditional dishes, prepared fresh daily with the finest ingredients and age-old recipes.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-earth-red text-white shadow-md'
                  : 'bg-white text-earth-brown border border-brand-200 hover:bg-brand-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-brand-100 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.isBestseller && (
                    <span className="bg-saffron-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                      <Flame size={12} /> Bestseller
                    </span>
                  )}
                </div>
                
                <div className="absolute top-4 right-4 bg-white p-1.5 rounded-md shadow-sm">
                  {item.isVegetarian ? (
                    <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center rounded-sm" title="Vegetarian">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                  ) : (
                    <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center rounded-sm" title="Non-Vegetarian">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-earth-brown font-serif leading-tight">{item.name}</h3>
                  <span className="text-lg font-bold text-saffron-600 whitespace-nowrap ml-4">₹{item.price}</span>
                </div>
                <p className="text-earth-brown/70 text-sm mb-6 flex-grow">{item.description}</p>
                
                <button
                  onClick={() => addItem(item)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-earth-red text-white font-semibold rounded-xl hover:bg-earth-brown transition-colors shadow-md hover:shadow-lg active:scale-95"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-earth-brown/60">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
