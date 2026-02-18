import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-lime">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-brand-dark">
            OUR SERVICES
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto animate-slide-in">
            Comprehensive creative solutions tailored to elevate your brand and drive results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Graphic Design */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">01</div>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                  GRAPHIC DESIGN
                </h2>
              </div>
              
              {/* Image Placeholder - Show on mobile only */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">🎨</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                Create a lasting impression with stunning visual designs. From brand identity to marketing materials, we craft designs that speak to your audience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Logo Design & Brand Identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Print Design (Brochures, Flyers, Business Cards)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Social Media Graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Packaging Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Illustration & Custom Graphics</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg">
                GET STARTED
              </Link>
            </div>
            
            {/* Image Placeholder - Show on desktop only */}
            <div className="hidden md:block order-2">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">🎨</span>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">02</div>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                  WEB DEVELOPMENT
                </h2>
              </div>
              
              {/* Image Placeholder - Show on mobile only */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">💻</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                Build your online presence with modern, responsive websites. We create fast, beautiful, and user-friendly web experiences.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Custom Website Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">E-commerce Solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Responsive Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">CMS Integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Website Maintenance & Support</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg">
                GET STARTED
              </Link>
            </div>
            
            {/* Image Placeholder - Show on desktop only */}
            <div className="hidden md:block order-2 md:order-1">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">💻</span>
              </div>
            </div>
          </div>

          {/* Branding */}
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center space-y-8 md:space-y-0">
            <div className="order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-lime px-4 py-2 font-bold rounded text-brand-dark">03</div>
                <h2 className="font-display text-4xl font-bold text-[var(--text-primary)]">
                  BRAND STRATEGY
                </h2>
              </div>
              
              {/* Image Placeholder - Show on mobile only */}
              <div className="md:hidden relative h-80 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center mb-6">
                <span className="font-display text-8xl font-bold text-brand-lime/20">✨</span>
              </div>
              
              <p className="text-[var(--text-muted)] mb-6">
                Define and strengthen your brand identity. We help you create a cohesive brand that resonates with your target audience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Brand Discovery & Research</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Brand Positioning & Messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Visual Identity System</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Brand Guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-dark text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[var(--text-primary)]">Brand Refresh & Rebranding</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg">
                GET STARTED
              </Link>
            </div>
            
            {/* Image Placeholder - Show on desktop only */}
            <div className="hidden md:block order-2">
              <div className="relative h-96 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] rounded-2xl border-2 border-[var(--border-color)] flex items-center justify-center">
                <span className="font-display text-9xl font-bold text-brand-lime/20">✨</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Process Section - Dark Mode Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)]">
            OUR <span className="text-brand-lime">PROCESS</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                1
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brand-dark dark:text-brand-lime">Discovery</h3>
              <p className="text-[var(--text-muted)]">
                We learn about your business, goals, and target audience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                2
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brand-dark dark:text-brand-lime">Strategy</h3>
              <p className="text-[var(--text-muted)]">
                We develop a creative strategy tailored to your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                3
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brand-dark dark:text-brand-lime">Design</h3>
              <p className="text-[var(--text-muted)]">
                We bring your vision to life with stunning visuals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                4
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brand-dark dark:text-brand-lime">Launch</h3>
              <p className="text-[var(--text-muted)]">
                We deliver and support your project's success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}