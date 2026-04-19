import React from 'react';
import { motion } from 'framer-motion';
import skateImg from '@/assets/skate-park.png';
import leadershipImg from '@/assets/leadership.png';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-tight">
                Not Just a School. <br />
                <span className="italic text-accent">An Expedition.</span>
              </h2>

              <div className="space-y-6 text-lg text-primary/80 font-light leading-relaxed">
                <p>
                  Banjara means "wanderer." In the spirit of India's great explorers, we believe children are born with an innate curiosity about the world around them. Our campus in Hormavu, Bengaluru is designed to be the canvas for their expeditions.
                </p>
                <p>
                  We are India's first preschool to integrate a real, professionally-designed skate park into our daily curriculum. Why? Because learning to fall and get back up is the foundation of true resilience — a quality every future leader needs.
                </p>
                <p className="font-medium text-primary">
                  We don't just prepare children for the next grade. We prepare them for life.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
                <div>
                  <h4 className="text-4xl font-serif text-primary mb-2">1:8</h4>
                  <p className="text-xs font-bold tracking-wider uppercase text-primary/50">Teacher Ratio</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif text-primary mb-2">50k+</h4>
                  <p className="text-xs font-bold tracking-wider uppercase text-primary/50">Sq Ft Campus</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif text-primary mb-2">#1</h4>
                  <p className="text-xs font-bold tracking-wider uppercase text-primary/50">In Hormavu</p>
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary/50 font-medium border border-border px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                4th Cross, Trinity Enclave, Banjara Layout, Hormavu, Bengaluru
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={skateImg}
                  alt="Children learning on the Banjara Kids skate park"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-2/3 aspect-square border-[8px] border-background overflow-hidden z-20">
                <img
                  src={leadershipImg}
                  alt="Future leaders at Banjara Kids"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-64 h-64 border border-accent rounded-full opacity-20 -z-10 blur-[1px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
