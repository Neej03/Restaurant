import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Heart, ArrowRight, Utensils, Clock, Leaf } from 'lucide-react';
import { menuData, testimonials } from '../data/mockData';

export const Home = () => {
  const featuredDishes = menuData.filter((item) => item.isBestseller).slice(0, 3);

  return (
    <div className="bg-earth-beige">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-100 py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542367592-8849eb950fd8?q=80&w=2000&auto=format&fit=crop"
            alt="Spices and ingredients"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-saffron-100 text-saffron-600 font-semibold text-sm mb-6 tracking-wide uppercase">
                Authentic Homemade Cuisine
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-brown leading-tight mb-6">
                The True Taste of <span className="text-earth-red italic">Home</span>
              </h1>
              <p className="text-lg md:text-xl text-earth-brown/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience the warmth of traditional recipes passed down through generations. Prepared with love, fresh ingredients, and authentic spices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-earth-red hover:bg-earth-brown transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-earth-brown bg-white border border-brand-200 hover:bg-brand-50 transition-all shadow-sm hover:shadow-md"
                >
                  Our Story
                </Link>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-earth-brown/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-saffron-500 h-5 w-5" />
                  <span>100% Hygienic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="text-earth-red h-5 w-5" />
                  <span>Made with Love</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-saffron-500 rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop"
                alt="Delicious traditional thali"
                className="relative z-10 w-full max-w-lg mx-auto rounded-full shadow-2xl border-8 border-white object-cover aspect-square"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-brand-100">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Leaf size={24} />
                </div>
                <div>
                  <p className="text-sm text-earth-brown/60 font-medium">Fresh Ingredients</p>
                  <p className="text-lg font-bold text-earth-brown">Sourced Daily</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-brown mb-4">Why Choose Taste of Tradition?</h2>
            <p className="text-lg text-earth-brown/70">We don't just cook food; we craft experiences that remind you of home.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Utensils className="h-8 w-8 text-earth-red" />,
                title: "Heritage Recipes",
                desc: "Secret family recipes passed down through generations, preserving the authentic taste."
              },
              {
                icon: <Leaf className="h-8 w-8 text-green-600" />,
                title: "Fresh & Natural",
                desc: "We use only the freshest, locally sourced ingredients with zero artificial preservatives."
              },
              {
                icon: <Clock className="h-8 w-8 text-saffron-500" />,
                title: "Slow Cooked Perfection",
                desc: "Good food takes time. We slow-cook our meals to bring out the deepest flavors."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-brand-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-earth-brown mb-3 font-serif">{feature.title}</h3>
                <p className="text-earth-brown/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-brown mb-4">Our Signature Dishes</h2>
              <p className="text-lg text-earth-brown/70 max-w-2xl">Handpicked favorites that our customers keep coming back for.</p>
            </div>
            <Link to="/menu" className="hidden md:inline-flex items-center text-earth-red font-semibold hover:text-earth-brown transition-colors">
              View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, idx) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-brand-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {dish.isVegetarian && (
                    <div className="absolute top-4 right-4 bg-white p-1.5 rounded-md shadow-sm">
                      <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center rounded-sm">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-earth-brown font-serif">{dish.name}</h3>
                    <span className="text-lg font-bold text-saffron-600">₹{dish.price}</span>
                  </div>
                  <p className="text-earth-brown/70 text-sm mb-6 line-clamp-2">{dish.description}</p>
                  <Link
                    to="/menu"
                    className="block w-full text-center py-3 px-4 bg-brand-100 text-earth-brown font-semibold rounded-xl hover:bg-earth-red hover:text-white transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/menu" className="inline-flex items-center text-earth-red font-semibold hover:text-earth-brown transition-colors">
              View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-earth-brown text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-brand-200 text-lg">Don't just take our word for it. Here's what people love about our food.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-900/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-800"
              >
                <div className="flex text-saffron-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : 'text-brand-700'}`} />
                  ))}
                </div>
                <p className="text-brand-100 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-700"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-brand-400">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-saffron-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-saffron-400 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-saffron-600 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-brown mb-6">Craving Something Delicious?</h2>
          <p className="text-xl text-earth-brown/80 mb-10 max-w-2xl mx-auto">
            Get 20% off your first order! Experience the magic of traditional cooking delivered right to your doorstep.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-white bg-earth-brown hover:bg-earth-red transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Order Now & Save 20%
          </Link>
        </div>
      </section>
    </div>
  );
};
