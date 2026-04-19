import React from 'react';
import { motion } from 'framer-motion';
import creativeImg from '@/assets/creative.png';

const clubs = [
  { name: "Skate Club", desc: "Balance, coordination, and grit on our custom mini-park." },
  { name: "Public Speaking", desc: "Finding their voice early through structured presentation play." },
  { name: "Music & Drama", desc: "Expressive arts taught by industry professionals." },
  { name: "Dance & Rhythm", desc: "Classical and contemporary movement for physical intelligence." }
];

export default function Clubs() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] aspect-square rounded-full border border-primary-foreground/20" />
        <div className="absolute top-[40%] -left-[20%] w-[50%] aspect-square rounded-full border border-primary-foreground/20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Enrichment</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
              Beyond the Classroom.
            </h2>
            <p className="text-lg text-primary-foreground/70 font-light leading-relaxed mb-12">
              Education doesn't stop at literacy and numeracy. Our specialized clubs are built into the school day, giving every child access to premium extracurriculars without weekend shuttling.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {clubs.map((club, i) => (
                <motion.div 
                  key={club.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l border-accent/50 pl-6"
                >
                  <h4 className="text-xl font-serif mb-2">{club.name}</h4>
                  <p className="text-sm text-primary-foreground/60 font-light">{club.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={creativeImg}
                alt="Creative curriculum and clubs at Banjara Kids"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent p-8 w-64 max-w-[80%]">
              <p className="text-primary font-serif text-xl italic font-medium leading-snug">
                "Art is not a subject. It is a language."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}