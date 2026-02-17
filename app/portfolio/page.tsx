import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import PortfolioClient from '@/components/PortfolioClient';

export default function Portfolio() {
  const projects = getAllProjects();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-brand-dark">OUR</span>
            <br />
            <span className="text-brand-lime">PORTFOLIO</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl animate-slide-in">
            Explore our recent work and see how we've helped brands stand out and succeed.
          </p>
        </div>
      </section>

      {/* Client Component - handles filter + modal */}
      <PortfolioClient projects={projects} />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="text-xl text-brand-gray mb-8">
            Let's create something amazing for your brand too.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-cream transition-all duration-300 border-2 border-brand-lime rounded-lg"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
