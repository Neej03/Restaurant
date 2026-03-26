import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, CreditCard, Truck, ShieldCheck, ShoppingCart } from 'lucide-react';

export const Checkout = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deliveryFee = 50;
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      alert('Order placed successfully! Thank you for choosing Taste of Tradition.');
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-earth-beige px-4">
        <div className="bg-white p-10 rounded-3xl shadow-lg max-w-md w-full text-center border border-brand-200">
          <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="h-12 w-12 text-earth-red" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-earth-brown mb-4">Your Cart is Empty</h2>
          <p className="text-earth-brown/70 mb-8">Looks like you haven't added any delicious traditional meals yet.</p>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium rounded-xl text-white bg-earth-red hover:bg-earth-brown transition-colors shadow-md"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-earth-beige min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-earth-brown mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Order Summary */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-sm border border-brand-200 overflow-hidden mb-8">
              <div className="p-6 border-b border-brand-100 bg-brand-50">
                <h2 className="text-2xl font-serif font-bold text-earth-brown">Order Summary</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-6 pb-6 border-b border-brand-100 last:border-0 last:pb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl shadow-sm"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-earth-brown font-serif">{item.name}</h3>
                          <span className="font-bold text-saffron-600">₹{item.price * item.quantity}</span>
                        </div>
                        <p className="text-sm text-earth-brown/60 mb-4 line-clamp-1">{item.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-brand-200 rounded-lg bg-brand-50">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label={`Decrease quantity of ${item.name}`}
                              className="p-2 text-earth-brown hover:text-earth-red transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-10 text-center font-medium text-earth-brown">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label={`Increase quantity of ${item.name}`}
                              className="p-2 text-earth-brown hover:text-green-600 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-earth-red/70 hover:text-earth-red transition-colors p-2"
                            title="Remove item"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg border border-brand-200 overflow-hidden sticky top-28"
            >
              <div className="p-6 border-b border-brand-100 bg-brand-50">
                <h2 className="text-2xl font-serif font-bold text-earth-brown">Delivery Details</h2>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-earth-brown mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-brand-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-earth-brown mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-brand-50"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-earth-brown mb-1">Delivery Address</label>
                      <textarea
                        id="address"
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-brand-50 resize-none"
                        placeholder="123 Main St, Apt 4B, City"
                      ></textarea>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-bold text-earth-brown font-serif mb-3">Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-brand-200 rounded-xl cursor-pointer hover:bg-brand-50 transition-colors">
                        <input type="radio" name="payment" value="card" className="text-saffron-600 focus:ring-saffron-500 h-4 w-4" defaultChecked />
                        <CreditCard className="ml-3 mr-2 h-5 w-5 text-earth-brown/70" />
                        <span className="font-medium text-earth-brown">Credit / Debit Card</span>
                      </label>
                      <label className="flex items-center p-4 border border-brand-200 rounded-xl cursor-pointer hover:bg-brand-50 transition-colors">
                        <input type="radio" name="payment" value="cod" className="text-saffron-600 focus:ring-saffron-500 h-4 w-4" />
                        <Truck className="ml-3 mr-2 h-5 w-5 text-earth-brown/70" />
                        <span className="font-medium text-earth-brown">Cash on Delivery</span>
                      </label>
                    </div>
                  </div>

                  {/* Bill Details */}
                  <div className="border-t border-brand-200 pt-6 space-y-3">
                    <div className="flex justify-between text-earth-brown/80">
                      <span>Subtotal</span>
                      <span className="font-medium">₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-earth-brown/80">
                      <span>Delivery Fee</span>
                      <span className="font-medium">₹{deliveryFee}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-earth-brown pt-3 border-t border-brand-200">
                      <span>Total</span>
                      <span className="text-saffron-600">₹{finalTotal}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center py-4 px-6 bg-earth-red text-white text-lg font-bold rounded-xl hover:bg-earth-brown transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </span>
                    ) : (
                      `Place Order • ₹${finalTotal}`
                    )}
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-earth-brown/60 mt-4">
                    <ShieldCheck size={16} className="text-green-600" />
                    <span>Secure Checkout & 100% Hygiene Guaranteed</span>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
