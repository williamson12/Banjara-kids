import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Shield, Rocket } from 'lucide-react';

const programs = [
  {
    title: "Playgroup",
    age: "1.5 - 2.5 Years",
    desc: "A gentle introduction to structured learning, focusing on sensory exploration, motor skills, and social connection.",
    icon: Compass,
    color: "bg-secondary"
  },
  {
    title: "Nursery",
    age: "2.5 - 3.5 Years",
    desc: "Building independence and language skills through immersive storytelling, creative arts, and foundational play.",
    icon: BookOpen,
    color: "bg-primary/5"
  },
  {
    title: "LKG",
    age: "3.5 - 4.5 Years",
    desc: "Introducing early literacy, numeracy, and scientific inquiry in a highly interactive, inquiry-based environment.",
    icon: Shield,
    color: "bg-accent/10"
  },
  {
    title: "UKG",
    age: "4.5 - 5.5 Years",
    desc: "Advanced readiness for formal schooling. Fostering critical thinking, leadership, and complex problem-solving.",
    icon: Rocket,
    color: "bg-primary text-primary-foreground"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Curriculum</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              The Blueprint for Brilliance.
            </h2>
            <p className="text-lg text-primary/70 font-light">
              Designed by global education experts, our curriculum adapts to the unique rhythm of every child, moving seamlessly from guided play to formal discovery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 md:p-10 relative overflow-hidden group ${program.color} ${program.title === 'UKG' ? '' : 'border border-border'}`}
            >
              <div className="mb-12">
                <program.icon 
                  size={32} 
                  className={program.title === 'UKG' ? 'text-accent' : 'text-primary'} 
                  strokeWidth={1.5}
                />
              </div>
              
              <h3 className={`font-serif text-2xl font-bold mb-2 ${program.title === 'UKG' ? 'text-primary-foreground' : 'text-primary'}`}>
                {program.title}
              </h3>
              
              <span className={`inline-block py-1 px-3 text-xs font-bold uppercase tracking-wider mb-6 border ${program.title === 'UKG' ? 'border-primary-foreground/30 text-primary-foreground/80' : 'border-primary/20 text-primary/70'}`}>
                {program.age}
              </span>
              
              <p className={`font-light leading-relaxed ${program.title === 'UKG' ? 'text-primary-foreground/80' : 'text-primary/70'}`}>
                {program.desc}
              </p>
              
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500 group-hover:scale-150 ${program.title === 'UKG' ? 'bg-primary-foreground/5' : 'bg-primary/5'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}