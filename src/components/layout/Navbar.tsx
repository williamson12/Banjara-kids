import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Programs', href: '#programs' },
    { name: 'Campus', href: '#campus' },
    { name: 'Admissions', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, mobileMenuOpen ? 300 : 0);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2'
          : 'bg-transparent border-b border-transparent py-3'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" aria-label="Banjara Kids — Home" className="z-50 relative flex items-center gap-3">
          <img
            src={logoImg}
            alt="Banjara Kids — A Pre-School That Feels Like Home"
            width={140}
            height={80}
            className={`transition-all duration-500 object-contain w-auto ${
              scrolled ? 'h-11' : 'h-14'
            } ${!scrolled ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]' : ''}`}
          />
          <span className={`hidden sm:flex flex-col leading-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white drop-shadow-sm'}`}>
            <span className="font-serif text-lg font-bold tracking-tight">Banjara Kids</span>
            <span className="text-[10px] font-medium tracking-widest uppercase opacity-60">Hormavu, Bengaluru</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
                scrolled ? 'text-foreground' : 'text-white drop-shadow-sm'
              }`}
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="tel:+917619633138"
            className={`hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent ${
              scrolled ? 'text-foreground/70' : 'text-white/80 drop-shadow-sm'
            }`}
            aria-label="Call us at +91 76196 33138"
          >
            <Phone size={13} />
            <span>+91 76196 33138</span>
          </a>
          <Button
            onClick={() => handleNavClick('#contact')}
            className="rounded-none bg-accent text-accent-foreground hover:bg-accent/85 px-6 h-10 text-sm font-semibold transition-colors duration-300 shadow-sm"
            data-testid="button-nav-book-visit"
          >
            Book a Visit
          </Button>
        </nav>

        {/* Mobile: Call + Hamburger */}
        <div className="md:hidden flex items-center gap-3 z-50 relative">
          <a
            href="tel:+917619633138"
            aria-label="Call Banjara Kids"
            className={`flex items-center justify-center h-9 w-9 rounded-full transition-colors ${
              scrolled || mobileMenuOpen ? 'text-foreground bg-secondary' : 'text-white bg-white/10'
            }`}
          >
            <Phone size={16} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className={`flex items-center justify-center h-9 w-9 rounded-full transition-colors ${
              scrolled || mobileMenuOpen ? 'text-foreground bg-secondary' : 'text-white bg-white/10'
            }`}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 top-0 h-[100dvh] w-full bg-background flex flex-col items-center justify-center gap-0 z-40 overflow-hidden"
            >
              <img src={logoImg} alt="Banjara Kids" className="h-20 object-contain mb-10 opacity-90" />

              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full py-4 text-center text-2xl font-serif text-primary hover:text-accent transition-colors border-b border-border/40 last:border-b-0 px-8"
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-10 flex flex-col items-center gap-4 px-8 w-full"
              >
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full max-w-xs rounded-none bg-primary text-primary-foreground h-14 text-base font-semibold"
                  data-testid="button-mobile-book-visit"
                >
                  Book a Campus Visit
                </Button>
                <a
                  href="tel:+917619633138"
                  className="flex items-center gap-2 text-primary/60 text-sm hover:text-accent transition-colors"
                >
                  <Phone size={14} />
                  +91 76196 33138
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
