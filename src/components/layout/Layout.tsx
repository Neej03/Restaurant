import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ExitIntentPopup } from '../ui/ExitIntentPopup';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Layout = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const isCheckout = location.pathname === '/checkout';

  return (
    <div className="min-h-screen flex flex-col bg-earth-beige relative">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ExitIntentPopup />

      {/* Mobile Sticky Order Now / View Cart Button */}
      {!isCheckout && (
        <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-40">
          <Link
            to={totalItems > 0 ? '/checkout' : '/menu'}
            className="flex items-center justify-center w-full py-4 px-6 bg-earth-red text-white text-lg font-bold rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-md"
          >
            {totalItems > 0 ? (
              <>
                <ShoppingBag className="mr-2 h-5 w-5" />
                View Cart ({totalItems})
              </>
            ) : (
              'Order Now'
            )}
          </Link>
        </div>
      )}
    </div>
  );
};
