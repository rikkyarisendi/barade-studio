import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-brand-dark">ABOUT</span>
            <br />
            <span className="text-brand-lime">BARADE STUDIO</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl animate-slide-in">
            We are a creative studio passionate about transforming ideas into visual masterpieces. Based in Bandung, we serve clients worldwide.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-brand-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6 text-brand-lime">OUR STORY</h2>
            <p className="text-brand-gray mb-4">
              Founded in 2020, BARADE STUDIO emerged from a passion to create meaningful design that tells stories and drives results. What started as a small team has grown into a full-service creative studio.
            </p>
            <p className="text-brand-gray mb-4">
              We believe in the power of great design to transform businesses. Our approach combines strategic thinking with creative execution, ensuring every project not only looks amazing but also achieves its goals.
            </p>
            <p className="text-brand-gray">
              Today, we're proud to work with clients across Indonesia and beyond, from startups to established brands, helping them stand out in a crowded digital landscape.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-brand-lime/20 rounded-lg flex items-center justify-center">
              <span className="font-display text-9xl font-bold text-brand-lime/30">B</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-brand-dark">
            OUR <span className="text-brand-lime">VALUES</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border-2 border-brand-dark hover-lift">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brand-dark">Excellence</h3>
              <p className="text-brand-dark/70">
                We never compromise on quality. Every pixel, every line of code matters to us.
              </p>
            </div>

            <div className="text-center p-8 border-2 border-brand-dark hover-lift">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brand-dark">Collaboration</h3>
              <p className="text-brand-dark/70">
                Your success is our success. We work closely with you every step of the way.
              </p>
            </div>

            <div className="text-center p-8 border-2 border-brand-dark hover-lift">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brand-dark">Innovation</h3>
              <p className="text-brand-dark/70">
                We stay ahead of trends and bring fresh, creative solutions to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gray/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-brand-dark">
            MEET THE <span className="text-brand-lime">TEAM</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Alex Johnson', role: 'Creative Director', emoji: '👨‍🎨' },
              { name: 'Sarah Lee', role: 'Lead Designer', emoji: '👩‍💻' },
              { name: 'Mike Chen', role: 'Web Developer', emoji: '👨‍💻' },
              { name: 'Emma Davis', role: 'Project Manager', emoji: '👩‍💼' },
            ].map((member, index) => (
              <div key={index} className="text-center p-6 bg-brand-cream border-2 border-brand-dark hover-lift">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-display text-xl font-bold mb-2 text-brand-dark">{member.name}</h3>
                <p className="text-brand-dark/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
