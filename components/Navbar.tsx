'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Image */}
            <img 
              src="/logo.png" 
              alt="BARADE STUDIO Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Text */}
            <div className="relative">
              <span className="font-display text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">
                BARADE
              </span>
              <span className="font-display text-2xl md:text-3xl font-bold text-brand-lime ml-1">
                STUDIO
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-lime group-hover:w-full transition-all duration-300"></div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-brand-dark hover:text-brand-lime transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-brand-dark hover:text-brand-lime transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/services" className="text-brand-dark hover:text-brand-lime transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-brand-dark hover:text-brand-lime transition-colors duration-300 font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="bg-brand-lime text-brand-dark px-6 py-3 font-bold hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 border-2 border-brand-dark rounded-lg">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          >
            <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link href="/" className="block text-brand-dark hover:text-brand-lime transition-colors duration-300 py-2 font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-brand-dark hover:text-brand-lime transition-colors duration-300 py-2 font-medium">
              About
            </Link>
            <Link href="/services" className="block text-brand-dark hover:text-brand-lime transition-colors duration-300 py-2 font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="block text-brand-dark hover:text-brand-lime transition-colors duration-300 py-2 font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="block bg-brand-lime text-brand-dark px-6 py-3 font-bold hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 border-2 border-brand-dark text-center rounded-lg">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
