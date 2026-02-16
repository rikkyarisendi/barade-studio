import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const projects = [
    {
      title: 'Modern Cafe Branding',
      category: 'Branding',
      description: 'Complete brand identity for a contemporary coffee shop',
      color: 'bg-amber-100',
    },
    {
      title: 'Tech Startup Website',
      category: 'Web Development',
      description: 'Responsive website for a fintech startup',
      color: 'bg-blue-100',
    },
    {
      title: 'Fashion Brand Identity',
      category: 'Graphic Design',
      description: 'Logo and visual identity for fashion brand',
      color: 'bg-pink-100',
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with custom CMS',
      color: 'bg-green-100',
    },
    {
      title: 'Restaurant Menu Design',
      category: 'Graphic Design',
      description: 'Print and digital menu design',
      color: 'bg-red-100',
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional website for consulting firm',
      color: 'bg-purple-100',
    },
    {
      title: 'Product Packaging',
      category: 'Graphic Design',
      description: 'Packaging design for organic tea brand',
      color: 'bg-teal-100',
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'User interface for fitness tracking app',
      color: 'bg-orange-100',
    },
    {
      title: 'Event Branding',
      category: 'Branding',
      description: 'Visual identity for music festival',
      color: 'bg-yellow-100',
    },
  ];

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

      {/* Filter Tabs */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-brand-lime text-brand-dark font-bold border-2 border-brand-dark hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 rounded-lg">
              All Projects
            </button>
            <button className="px-6 py-3 bg-brand-cream text-brand-dark font-bold border-2 border-brand-dark hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 rounded-lg">
              Branding
            </button>
            <button className="px-6 py-3 bg-brand-lime text-brand-dark font-bold border-2 border-brand-dark hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 rounded-lg">
              Web Development
            </button>
            <button className="px-6 py-3 bg-brand-lime text-brand-dark font-bold border-2 border-brand-dark hover:bg-brand-dark hover:text-brand-lime transition-all duration-300 rounded-lg">
              Graphic Design
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${project.color} aspect-square rounded-xl mb-4 flex items-center justify-center border-2 border-brand-dark overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-brand-lime font-display text-2xl font-bold">View Project</span>
                  </div>
                  <span className="font-display text-6xl font-bold text-brand-dark/20">
                    {index + 1}
                  </span>
                </div>
                <div className="inline-block bg-brand-lime px-3 py-1 text-xs font-bold mb-2">
                  {project.category}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-brand-dark">
                  {project.title}
                </h3>
                <p className="text-brand-dark/70">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="text-xl text-brand-gray mb-8">
            Let's create something amazing for your brand too.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-brand-lime text-brand-dark px-8 py-4 font-bold text-lg hover:bg-brand-cream transition-all duration-300 border-2 border-brand-lime rounded-lg"
          >
            START YOUR PROJECT
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
