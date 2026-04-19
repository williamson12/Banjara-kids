import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The skate park is not just a novelty — I've seen my daughter fall, think, and try again. That mindset is showing up in how she tackles challenges at home too. Banjara is doing something genuinely different in Bengaluru.",
    author: "Rohan & Priya Sharma",
    role: "Parents to Ananya (UKG) — Indiranagar, Bengaluru"
  },
  {
    quote: "We toured eight preschools across Bengaluru before choosing Banjara. The moment we walked into Hormavu, we knew. The environment, the teachers, the warmth — it really does feel like home for our Kabir.",
    author: "Vikram Nair",
    role: "Parent to Kabir (Nursery) — Whitefield, Bengaluru"
  },
  {
    quote: "As a working mother in Bengaluru, trust matters most. The teachers communicate meaningfully, not just with photos but with real observations about my son's development. That level of care is rare anywhere in India.",
    author: "Sneha Rao",
    role: "Parent to Vihaan (LKG) — Manyata Tech Park Area"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="text-accent h-12 w-12 mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            The Parent Perspective.
          </h2>
          <p className="text-primary/50 text-sm uppercase tracking-widest font-bold">From Bengaluru families who chose Banjara</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-10 border border-border relative"
              data-testid={`card-testimonial-${i}`}
            >
              <p className="text-primary/80 font-light text-lg leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-serif text-primary font-bold">{t.author}</p>
                <p className="text-xs uppercase tracking-wider text-primary/50 mt-1 font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
