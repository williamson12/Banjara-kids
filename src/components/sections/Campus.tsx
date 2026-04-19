import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Video, Heart, CheckCircle2 } from 'lucide-react';
import facilityImg from '@/assets/facility.png';
import natureImg from '@/assets/nature.png';

const features = [
  { icon: ShieldCheck, title: "100% Safe Campus", desc: "International standard child-proofing and security protocols." },
  { icon: Video, title: "CCTV Monitored", desc: "Live-feed enabled zones with 24/7 centralized monitoring." },
  { icon: Heart, title: "Expert Educators", desc: "Certified, background-verified professionals who love what they do." },
  { icon: CheckCircle2, title: "Medical Tie-ups", desc: "On-call pediatricians and immediate response protocols." }
];

export default function Campus() {
  return (
    <section id="campus" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Campus</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            A Sanctuary for Growth.
          </h2>
          <p className="text-lg text-primary/70 font-light">
            We've built a space where premium aesthetics meet uncompromising safety. Every corner of Banjara is designed to inspire awe while protecting your most precious asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[16/10] overflow-hidden bg-muted relative group"
          >
            <img src={facilityImg} alt="Banjara Kids premium campus facility" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-8">
              <h3 className="text-2xl font-serif text-primary-foreground">Modern Architecture</h3>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[16/10] overflow-hidden bg-muted relative group"
          >
            <img src={natureImg} alt="Nature trail at Banjara Kids" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-8">
              <h3 className="text-2xl font-serif text-primary-foreground">Immersive Nature Trails</h3>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 border border-border hover:border-primary/20 transition-colors"
            >
              <feature.icon className="text-accent mb-6 h-8 w-8" strokeWidth={1.5} />
              <h4 className="font-serif text-xl text-primary mb-3">{feature.title}</h4>
              <p className="text-primary/60 font-light text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}