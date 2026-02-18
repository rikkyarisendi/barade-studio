import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import PortfolioClient from '@/components/PortfolioClient';
import { Metadata } from 'next';

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: 'Portfolio | Baradé Studio',
  description: 'Explore our recent work in branding, web development, and digital design.',
  openGraph: {
    title: 'Portfolio | Baradé Studio',
    description: 'Explore our recent work in branding, web development, and digital design.',
    type: 'website',
  },
};

export default function Portfolio() {
  const projects = getAllProjects();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-[var(--text-primary)]">OUR</span>
            <br />
            <span className="text-brand-lime">PORTFOLIO</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl animate-slide-in">
            Explore our recent work and see how we've helped brands stand out and succeed.
          </p>
        </div>
      </section>

      {/* Client Component - handles filter + modal */}
      {projects.length > 0 ? (
        <PortfolioClient projects={projects} />
      ) : (
        <section className="py-20 px-4 text-center">
          <p className="text-xl text-[var(--text-muted)]/60">
            No projects available yet. Check back soon!
          </p>
        </section>
      )}

      {/* CTA Section - Dark Mode Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-8">
            Let's create something amazing for your brand too.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}