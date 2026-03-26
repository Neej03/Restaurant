import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-earth-brown/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative border-4 border-saffron-500"
          >
            <button
              onClick={() => setIsVisible(false)}
              aria-label="Close popup"
              className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-earth-brown transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop"
                alt="Delicious food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/90 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-saffron-500 p-2 rounded-full">
                    <Gift size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Wait! Don't leave empty-handed.</h3>
                </div>
              </div>
            </div>

            <div className="p-8 text-center">
              <p className="text-lg text-earth-brown/80 mb-6">
                Get <span className="font-bold text-earth-red text-xl">20% OFF</span> your first order of our authentic homemade meals.
              </p>
              
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 mb-6 inline-block">
                <p className="text-sm text-earth-brown/60 mb-1 uppercase tracking-wider font-semibold">Use Code</p>
                <p className="text-2xl font-mono font-bold text-saffron-600 tracking-widest">TASTE20</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/menu"
                  onClick={() => setIsVisible(false)}
                  className="px-8 py-4 bg-earth-red text-white font-bold rounded-xl hover:bg-earth-brown transition-colors shadow-lg"
                >
                  Claim My Discount
                </Link>
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-8 py-4 text-earth-brown font-medium hover:text-earth-red transition-colors"
                >
                  No thanks, I'm not hungry
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
