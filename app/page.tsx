import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-40 md:pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-lime/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gray/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-brand-dark">WE CREATE</span>
              <br />
              <span className="text-brand-lime">VISUAL MAGIC</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-dark/80 mb-8 max-w-3xl mx-auto">
              Transform your brand with stunning graphic design and cutting-edge web development. We turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/portfolio" 
                className="bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 border-2 border-brand-dark hover-lift w-full sm:w-auto text-center rounded-lg"
              >
                VIEW OUR WORK
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-dark hover:text-brand-cream transition-all duration-300 border-2 border-brand-dark w-full sm:w-auto text-center rounded-lg"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pb-16 animate-slide-in">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-brand-dark">150+</p>
              <p className="bg-brand-dark text-brand-lime px-1 py-1 text-brand-dark mt-2 border-2 border-brand-dark w-full sm:w-auto text-center rounded-lg">Projects</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-brand-dark">50+</p>
              <p className="bg-brand-dark text-brand-lime px-1 py-1 text-brand-dark mt-2 border-2 border-brand-dark w-full sm:w-auto text-center rounded-lg">Clients</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-brand-dark">5+</p>
              <p className="bg-brand-dark text-brand-lime px-1 py-1 text-brand-dark mt-2 border-2 border-brand-dark w-full sm:w-auto text-center rounded-lg">Years</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-brand-dark">100%</p>
              <p className="bg-brand-dark text-brand-lime px-1 py-1 text-brand-dark mt-2 border-2 border-brand-dark w-full sm:w-auto text-center rounded-lg">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-brand-lime">WHAT WE DO</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Graphic Design */}
            <div className="group p-8 border-2 border-brand-lime/30 hover:border-brand-lime transition-all duration-300 hover-lift rounded-xl">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brand-lime">Graphic Design</h3>
              <p className="text-brand-gray mb-4">
                From logos to complete brand identities, we create visuals that capture your essence and resonate with your audience.
              </p>
              <Link href="/services" className="text-brand-lime hover:underline font-bold">
                Learn More →
              </Link>
            </div>

            {/* Web Development */}
            <div className="group p-8 border-2 border-brand-lime/30 hover:border-brand-lime transition-all duration-300 hover-lift rounded-xl">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brand-lime">Web Development</h3>
              <p className="text-brand-gray mb-4">
                Modern, responsive websites built with the latest technologies. Fast, beautiful, and optimized for success.
              </p>
              <Link href="/services" className="text-brand-lime hover:underline font-bold">
                Learn More →
              </Link>
            </div>

            {/* Branding */}
            <div className="group p-8 border-2 border-brand-lime/30 hover:border-brand-lime transition-all duration-300 hover-lift rounded-xl">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brand-lime">Brand Strategy</h3>
              <p className="text-brand-gray mb-4">
                Build a powerful brand that stands out. We help you define your identity and connect with your customers.
              </p>
              <Link href="/services" className="text-brand-lime hover:underline font-bold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lime">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl text-brand-dark/80 mb-8">
            Let's collaborate and create something amazing together.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-brand-dark text-brand-cream px-8 py-4 font-bold text-lg hover:bg-brand-cream hover:text-brand-dark transition-all duration-300 border-2 border-brand-dark rounded-xl"
          >
            CONTACT US NOW
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
