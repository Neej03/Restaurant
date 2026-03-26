import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Award, Clock } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-earth-beige min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-earth-brown text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop"
            alt="Kitchen background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-200 max-w-3xl mx-auto leading-relaxed"
          >
            A journey of flavors, tradition, and the love for authentic homemade food.
          </motion.p>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-brown mb-6">
                From Our Grandmother's Kitchen to Your Table
              </h2>
              <div className="space-y-6 text-lg text-earth-brown/80 leading-relaxed">
                <p>
                  Taste of Tradition began with a simple idea: to bring back the authentic, unadulterated flavors of home-cooked meals that we all grew up loving.
                </p>
                <p>
                  Our founder, inspired by her grandmother's secret spice blends and slow-cooking techniques, realized that the fast-paced urban lifestyle was making people miss out on real, wholesome food.
                </p>
                <p>
                  What started as a small kitchen serving a few families has now grown into a beloved brand, but our core philosophy remains unchanged: every meal should feel like a warm hug from home.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-saffron-500/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1000&auto=format&fit=crop"
                alt="Cooking with love"
                className="relative z-10 rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-brown mb-6">Our Core Values</h2>
            <p className="text-lg text-earth-brown/70">The principles that guide every dish we prepare and every customer we serve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-earth-red" />,
                title: "Cooked with Love",
                desc: "We believe that the secret ingredient to any great dish is the care and love put into making it."
              },
              {
                icon: <Award className="h-10 w-10 text-saffron-600" />,
                title: "Uncompromising Quality",
                desc: "From farm-fresh vegetables to pure ghee, we never cut corners on the quality of our ingredients."
              },
              {
                icon: <Users className="h-10 w-10 text-earth-brown" />,
                title: "Community First",
                desc: "We support local farmers and artisans by sourcing our ingredients directly from them."
              },
              {
                icon: <Clock className="h-10 w-10 text-saffron-500" />,
                title: "Time-Honored Recipes",
                desc: "We stay true to traditional cooking methods, avoiding shortcuts and artificial flavor enhancers."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-brand-200"
              >
                <div className="inline-flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-earth-brown mb-4 font-serif">{value.title}</h3>
                <p className="text-earth-brown/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
