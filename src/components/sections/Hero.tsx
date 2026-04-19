import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/hero.png';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  const handleCTA = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-primary"
      style={{ minHeight: '100dvh' }}
      aria-label="Hero: Where Future Leaders Begin"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <motion.div style={{ y: y1 }} className="h-[115%] w-full -top-[7.5%] absolute">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, minHeight: '100dvh', paddingTop: 'max(5.5rem, env(safe-area-inset-top, 5.5rem))', paddingBottom: '5rem' }}
        className="relative z-10 container mx-auto px-5 sm:px-6 md:px-12 flex flex-col justify-center"
      >
        <div className="max-w-3xl">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-7"
          >
            <span className="inline-block py-1 px-3 border border-white/30 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-sm bg-white/5">
              India's First Preschool with a Skate Park
            </span>
            <a
              href="https://www.google.com/maps/place/Banjara+Kids/@13.0329151,77.6665135,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae116d650b3b87:0x11ae8b72c391cef1!8m2!3d13.0329151!4d77.6665135!16s%2Fg%2F11n52m75vy?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs font-medium hover:text-accent transition-colors"
              aria-label="View on Google Maps"
            >
              <MapPin size={10} className="text-accent" aria-hidden="true" />
              Hormavu, Bengaluru
            </a>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[2.6rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white mb-4 sm:mb-6"
          >
            Where Future <br className="hidden xs:block" />
            <em className="text-accent not-italic">Leaders</em> Begin.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-white/85 font-light mb-2 sm:mb-3 max-w-xl leading-relaxed"
          >
            Combining world-class early education with India's first on-campus skate park. We build confidence, creativity, and resilience in every child.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-accent font-medium tracking-wide mb-7 sm:mb-10 italic"
          >
            "A Pre-School That Feels Like Home"
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              onClick={handleCTA}
              size="lg"
              className="rounded-none bg-accent hover:bg-accent/90 text-white text-sm sm:text-base h-12 px-6 sm:px-8 border-none font-semibold shadow-lg"
              data-testid="button-book-visit-hero"
            >
              Book a Campus Visit
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              onClick={() => document.querySelector('#philosophy')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="rounded-none border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/5 text-sm sm:text-base h-12 px-6 sm:px-8"
              data-testid="button-explore-philosophy"
            >
              Explore Our Philosophy
            </Button>
          </motion.div>

          {/* Quick stats — hidden on very small mobile to keep layout clean */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 sm:mt-12 hidden sm:flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 text-white/50 text-[10px] sm:text-xs font-medium uppercase tracking-wider"
          >
            {["Bengaluru's Finest", 'Ages 1.5 – 6 Yrs', 'Admissions Open'].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="h-px w-4 bg-white/20" aria-hidden="true" />}
                <span className="h-1 w-1 rounded-full bg-accent inline-block" aria-hidden="true" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating call button — mobile only */}
      <motion.a
        href="tel:+917619633138"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-4 z-50 md:hidden flex items-center gap-2 bg-accent text-white text-sm font-semibold px-4 py-3 shadow-xl rounded-full"
        aria-label="Call us now"
      >
        <Phone size={16} aria-hidden="true" />
        Call Now
      </motion.a>

      {/* Scroll indicator — hidden on mobile to prevent overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center"
        aria-hidden="true"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="h-10 w-px bg-white/20 relative"
        >
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
