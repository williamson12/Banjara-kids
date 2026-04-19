import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 px-6 md:px-12 border-t border-primary-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src={logoImg} alt="Banjara Kids" className="h-24 object-contain mb-4 -ml-2" />
            <p className="text-primary-foreground/70 font-light mb-2 max-w-sm text-sm italic">
              "A Pre-School That Feels Like Home"
            </p>
            <p className="text-primary-foreground/50 font-light mb-8 max-w-sm text-xs">
              India's first preschool with a skate park. Hormavu, Bengaluru.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold tracking-wider uppercase text-sm mb-6 text-primary-foreground/50">Programs</h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li><a href="#programs" className="hover:text-accent transition-colors">Playgroup (1.5 - 2.5 yrs)</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">Nursery (2.5 - 3.5 yrs)</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">LKG (3.5 - 4.5 yrs)</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">UKG (4.5 - 5.5 yrs)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-wider uppercase text-sm mb-6 text-primary-foreground/50">Clubs</h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li>Skate Club</li>
              <li>Public Speaking</li>
              <li>Music &amp; Drama</li>
              <li>Dance</li>
              <li>Nature Exploration</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-wider uppercase text-sm mb-6 text-primary-foreground/50">Contact Us</h4>
            <ul className="space-y-5 font-light text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span>4th Cross, Trinity Enclave, Banjara Layout, Hormavu, Bengaluru – 560043</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+917619633138" className="hover:text-accent transition-colors">
                  +91 76196 33138
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:director@banjarakids.com" className="hover:text-accent transition-colors break-all">
                  director@banjarakids.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50 font-light">
          <p>&copy; {new Date().getFullYear()} Banjara Kids. All rights reserved. Hormavu, Bengaluru.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
