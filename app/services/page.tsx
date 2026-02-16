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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-lime px-4 py-2 mb-4 font-bold">01</div>
              <h2 className="font-display text-4xl font-bold mb-6 text-brand-dark">
                GRAPHIC DESIGN
              </h2>
              <p className="text-brand-dark/80 mb-6">
                Create a lasting impression with stunning visual designs. From brand identity to marketing materials, we craft designs that speak to your audience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Logo Design & Brand Identity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Print Design (Brochures, Flyers, Business Cards)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Social Media Graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Packaging Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Illustration & Custom Graphics</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-brand-dark text-brand-cream px-8 py-4 font-bold hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark rounded-lg">
                GET STARTED
              </Link>
            </div>
            <div className="relative h-96 bg-brand-dark rounded-lg flex items-center justify-center">
              <span className="font-display text-9xl font-bold text-brand-lime/20">🎨</span>
            </div>
          </div>

          {/* Web Development */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <div className="inline-block bg-brand-lime px-4 py-2 mb-4 font-bold">02</div>
              <h2 className="font-display text-4xl font-bold mb-6 text-brand-dark">
                WEB DEVELOPMENT
              </h2>
              <p className="text-brand-dark/80 mb-6">
                Build your online presence with modern, responsive websites. We create fast, beautiful, and user-friendly web experiences.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Custom Website Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>CMS Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Website Maintenance & Support</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-brand-dark text-brand-cream px-8 py-4 font-bold hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark rounded-lg">
                GET STARTED
              </Link>
            </div>
            <div className="relative h-96 bg-brand-dark rounded-lg flex items-center justify-center md:order-1">
              <span className="font-display text-9xl font-bold text-brand-lime/20">💻</span>
            </div>
          </div>

          {/* Branding */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-lime px-4 py-2 mb-4 font-bold">03</div>
              <h2 className="font-display text-4xl font-bold mb-6 text-brand-dark">
                BRAND STRATEGY
              </h2>
              <p className="text-brand-dark/80 mb-6">
                Define and strengthen your brand identity. We help you create a cohesive brand that resonates with your target audience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Brand Discovery & Research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Brand Positioning & Messaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Visual Identity System</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Brand Guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lime mr-3 text-xl">✓</span>
                  <span>Brand Refresh & Rebranding</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-brand-dark text-brand-cream px-8 py-4 font-bold hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark rounded-lg">
                GET STARTED
              </Link>
            </div>
            <div className="relative h-96 bg-brand-dark rounded-lg flex items-center justify-center">
              <span className="font-display text-9xl font-bold text-brand-lime/20">✨</span>
            </div>
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
            OUR <span className="text-brand-lime">PROCESS</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                1
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brand-lime">Discovery</h3>
              <p className="text-brand-gray">
                We learn about your business, goals, and target audience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                2
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brand-lime">Strategy</h3>
              <p className="text-brand-gray">
                We develop a creative strategy tailored to your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                3
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brand-lime">Design</h3>
              <p className="text-brand-gray">
                We bring your vision to life with stunning visuals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold text-brand-dark">
                4
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-brand-lime">Launch</h3>
              <p className="text-brand-gray">
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
