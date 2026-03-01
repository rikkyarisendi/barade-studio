// components/ProjectGallery.tsx
'use client';  // ✅ Client component boleh pakai useState

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';
import type { AdditionalImage } from '@/lib/projects';

interface ProjectGalleryProps {
  images: AdditionalImage[];
  title: string;
  t: any;
}

export default function ProjectGallery({ images, title, t }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="mt-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
          {t?.more_from_project}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <figure 
              key={idx} 
              className="relative aspect-square rounded-2xl border-4 border-[var(--border-color)] overflow-hidden group hover:scale-[1.02] transition-transform duration-300 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] cursor-zoom-in"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img.path}
                alt={img.alt || `${title} - Image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 rounded-full p-2">
                  <svg className="w-6 h-6 text-brand-dark dark:text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              {img.alt && (
                <figcaption className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="text-brand-lime font-bold text-center text-sm">{img.alt}</span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      <Lightbox
        src={images[currentIndex]?.path || ''}
        alt={images[currentIndex]?.alt || ''}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={images.length > 1}
        hasPrev={images.length > 1}
      />
    </>
  );
}