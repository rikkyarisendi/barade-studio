export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  color: string;
  
  // Detail info
  client: string;
  year: string;
  duration: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  
  // Optional external links
  externalLinks?: {
    behance?: string;
    dribbble?: string;
    website?: string;
    github?: string;
  };
  
  // Images (placeholder for now)
  thumbnail?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'modern-cafe-branding',
    title: 'Modern Cafe Branding',
    category: 'Branding',
    description: 'Complete brand identity for a contemporary coffee shop',
    color: 'bg-amber-100',
    client: 'Kopi Kita Cafe',
    year: '2024',
    duration: '3 months',
    services: [
      'Brand Strategy & Positioning',
      'Logo & Visual Identity Design',
      'Packaging Design',
      'Marketing Materials',
      'Social Media Templates',
      'Brand Guidelines',
    ],
    challenge: 'Kopi Kita Cafe approached us with a vision to create a modern coffee shop that would appeal to young professionals while maintaining a warm, community-focused atmosphere. They were entering a highly competitive market dominated by international chains and needed a distinctive brand identity that would help them stand out. The challenge was to balance professionalism with approachability, modern aesthetics with warmth, and create a brand that felt both premium and accessible.',
    solution: 'We developed a comprehensive brand identity centered around the concept of "modern warmth." The visual identity features a custom wordmark with rounded, friendly letterforms paired with a minimalist geometric icon. The color palette combines warm earth tones (terracotta, cream, and coffee brown) with a fresh sage green accent, creating a balance between comfort and contemporary style. We created a modular brand system that includes hand-drawn illustrations of coffee beans, leaves, and steam patterns that can be mixed and matched across different applications. The packaging design uses kraft paper with selective spot colors, emphasizing sustainability while maintaining a premium feel.',
    results: '150% increase in brand recognition within the first 3 months of launch. The cafe was featured in Jakarta Design Magazine and won the "Best New Cafe Brand 2024" award from the Indonesian Coffee Association. Customer base grew by 40%, with 65% of new customers citing the brand aesthetic as a key factor in their first visit. Social media following increased from 0 to 25,000 followers in 4 months, with user-generated content featuring the branded packaging appearing organically.',
    testimonial: {
      quote: "BARADE STUDIO didn't just design a logo – they crafted our entire brand story. The identity they created perfectly captures who we are and has been instrumental in our success. Customers tell us daily how much they love our branding!",
      author: 'Sarah Wijaya',
      position: 'Founder, Kopi Kita Cafe',
    },
    externalLinks: {
      behance: 'https://behance.net/gallery/kopi-kita-branding',
      website: 'https://kopikita.example.com',
    },
  },
  {
    id: 2,
    slug: 'fintech-startup-website',
    title: 'FinTech Startup Website',
    category: 'Web Development',
    description: 'Responsive web platform for innovative payment solutions',
    color: 'bg-blue-100',
    client: 'PayFlow Indonesia',
    year: '2024',
    duration: '4 months',
    services: [
      'UI/UX Design',
      'Frontend Development (Next.js)',
      'Backend Integration',
      'Payment Gateway Implementation',
      'Security Audit & Implementation',
      'SEO Optimization',
      'Performance Optimization',
    ],
    challenge: 'PayFlow, a fintech startup, needed to establish credibility and trust in the competitive digital payment space. They required a website that would not only look modern and professional but also communicate security, reliability, and ease of use. The platform needed to handle sensitive financial information, meet strict security requirements, and provide an intuitive user experience for both individual users and business clients. Additionally, the site needed to load quickly and perform well even on slower internet connections, considering Indonesia\'s diverse connectivity landscape.',
    solution: 'We built a high-performance web application using Next.js 14 with Server-Side Rendering for optimal loading speeds and SEO. The design language emphasizes trust through clean lines, ample white space, and a professional blue-and-white color scheme with strategic use of green to indicate security and success states. We implemented a comprehensive security infrastructure including SSL encryption, two-factor authentication, and compliance with PCI DSS standards. The user interface features intuitive dashboards, real-time transaction tracking, and clear visual hierarchy. We created separate user flows for individual and business accounts, each optimized for their specific needs. Performance optimizations included code splitting, lazy loading, image optimization, and strategic caching, resulting in a PageSpeed score of 95+.',
    results: '200% increase in user registrations within the first quarter post-launch. The platform processed over $5 million in transactions in the first 3 months. User satisfaction rating of 4.8/5 based on 1,000+ reviews. 60% reduction in customer support tickets related to usability issues compared to the old platform. The website was featured on Product Hunt and received "Website of the Day" recognition. Monthly active users grew from 5,000 to 45,000 in 6 months.',
    testimonial: {
      quote: "The website BARADE STUDIO built for us exceeded all expectations. Not only is it beautiful, but it's incredibly fast and secure. Our conversion rate doubled, and users constantly compliment the experience. Best investment we've made.",
      author: 'Michael Tan',
      position: 'CEO, PayFlow Indonesia',
    },
    externalLinks: {
      website: 'https://payflow.example.com',
      github: 'https://github.com/payflow/webapp',
    },
  },
  {
    id: 3,
    slug: 'luxury-fashion-identity',
    title: 'Luxury Fashion Brand Identity',
    category: 'Graphic Design',
    description: 'Sophisticated visual identity for emerging fashion label',
    color: 'bg-pink-100',
    client: 'Elegance by Amara',
    year: '2023',
    duration: '2 months',
    services: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity System',
      'Typography Selection',
      'Color Palette Development',
      'Brand Guidelines Manual',
      'Social Media Templates',
      'Lookbook Design',
    ],
    challenge: 'Elegance by Amara, a luxury fashion brand targeting sophisticated millennials and Gen Z consumers, needed a brand identity that would communicate exclusivity and refinement while remaining accessible and contemporary. The brand was entering a crowded market where established luxury names dominated. They needed to differentiate themselves and create a memorable impression that would resonate with fashion-forward consumers who value both aesthetics and authenticity. The challenge was to create an identity that felt premium without being pretentious, modern without being trendy.',
    solution: 'We created a minimalist yet distinctive brand identity built around the concept of "understated luxury." The logo features a custom serif wordmark with elegant, elongated letterforms and refined curves. We developed a sophisticated color palette of ivory, charcoal, and rose gold, with strategic use of deep burgundy as a signature accent. The typography system pairs a refined serif for headlines with a clean, modern sans-serif for body text. We designed a flexible visual system incorporating abstract floral motifs and geometric patterns that can be adapted across various touchpoints. The brand guidelines include detailed specifications for photography style (soft natural light, minimal compositions), tone of voice, and application across digital and print media.',
    results: 'Brand successfully launched at Jakarta Fashion Week with widespread media coverage. Instagram following grew from 2,000 to 50,000 in the first month, with engagement rates of 8.5% (well above industry average of 1-3%). First collection sold out within 48 hours of launch. The brand was featured in Vogue Indonesia, Harper\'s Bazaar, and Elle Magazine. Collaboration requests from international retailers increased by 300%. Brand recognition surveys showed 73% awareness among target demographic within 3 months.',
    testimonial: {
      quote: "BARADE STUDIO captured the essence of luxury we envisioned. The brand identity is timeless, elegant, and perfectly positions us in the market. Our launch exceeded all expectations thanks to their exceptional work.",
      author: 'Amara Putri',
      position: 'Creative Director, Elegance by Amara',
    },
    externalLinks: {
      behance: 'https://behance.net/gallery/elegance-branding',
      dribbble: 'https://dribbble.com/shots/elegance-identity',
    },
  },
  {
    id: 4,
    slug: 'ecommerce-platform-overhaul',
    title: 'E-commerce Platform Overhaul',
    category: 'Web Development',
    description: 'Complete redesign and development of multi-vendor marketplace',
    color: 'bg-green-100',
    client: 'BazaarHub',
    year: '2024',
    duration: '6 months',
    services: [
      'UX Research & Strategy',
      'UI Design System',
      'Frontend Development',
      'Backend Architecture',
      'Multi-vendor System',
      'Payment Integration',
      'Inventory Management',
      'Analytics Dashboard',
    ],
    challenge: 'BazaarHub, an established multi-vendor marketplace, was struggling with an outdated platform that had poor user experience, slow loading times, and limited vendor management capabilities. They were losing market share to competitors and receiving complaints about checkout abandonment (85% rate), difficult product discovery, and vendor frustration with the management interface. The platform needed a complete overhaul while maintaining business continuity and migrating existing data from 500+ vendors and 100,000+ products without disruption.',
    solution: 'We executed a phased redesign and redevelopment using a headless commerce architecture with Next.js for the frontend and a custom Node.js backend. We conducted extensive UX research including user interviews, heat mapping analysis, and A/B testing to identify pain points. The new design features an intuitive navigation system, advanced filtering and search with AI-powered recommendations, streamlined checkout process, and separate optimized dashboards for customers, vendors, and administrators. We implemented a progressive web app (PWA) for mobile users, real-time inventory synchronization, automated vendor onboarding, and comprehensive analytics. We migrated data in stages during low-traffic periods and ran the old and new systems in parallel for 2 weeks to ensure stability.',
    results: 'Checkout abandonment reduced from 85% to 23% – an 85% improvement. Sales increased by 165% in the first quarter. Average session duration increased from 2 minutes to 8 minutes. Vendor satisfaction scores improved from 3.2/5 to 4.7/5. Platform now handles 10,000+ concurrent users without performance degradation (previously struggled with 1,000). Mobile conversion rate improved by 340%. Customer support tickets related to technical issues decreased by 70%. Monthly active vendors increased from 500 to 1,200.',
    testimonial: {
      quote: "The transformation BARADE STUDIO delivered is incredible. Our marketplace went from barely functional to best-in-class. Revenue has more than doubled, and both our customers and vendors are thrilled with the new experience.",
      author: 'David Kusuma',
      position: 'Founder & CEO, BazaarHub',
    },
    externalLinks: {
      website: 'https://bazaarhub.example.com',
    },
  },
  {
    id: 5,
    slug: 'restaurant-brand-refresh',
    title: 'Restaurant Brand Refresh',
    category: 'Graphic Design',
    description: 'Complete rebrand for upscale dining establishment',
    color: 'bg-red-100',
    client: 'La Bella Cucina',
    year: '2023',
    duration: '3 months',
    services: [
      'Brand Audit & Strategy',
      'Logo Redesign',
      'Menu Design (Print & Digital)',
      'Interior Signage',
      'Tableware Graphics',
      'Website Redesign',
      'Social Media Branding',
      'Photography Direction',
    ],
    challenge: 'La Bella Cucina, a 10-year-old Italian restaurant, had built a loyal customer base but their visual identity had become dated and no longer reflected the quality of their cuisine or ambiance. They were struggling to attract younger diners and compete with newer, more Instagram-worthy establishments. The existing brand lacked cohesiveness across touchpoints – the menu, website, and physical space all felt disconnected. They needed a refresh that would honor their heritage and loyal customers while appealing to a new generation, without losing their established identity entirely.',
    solution: 'We conducted a brand audit and customer research to understand what elements resonated with existing customers. We preserved the restaurant\'s signature burgundy color but modernized it with a refined palette including cream, gold, and deep forest green. The new logo evolved from the old script to a more contemporary yet timeless serif wordmark with a custom illustrated basil leaf icon. We designed elegant menus using premium paper stock with gold foil accents, featuring professional food photography we art-directed. The interior signage system uses a mix of neon, wood, and brass materials. We created cohesive branded elements for table settings, takeout packaging, and staff uniforms. The photography style emphasizes warmth, authenticity, and the artisanal nature of the cuisine.',
    results: 'Customer traffic increased 35% within 2 months of rebrand launch. Average order value increased by 28% with the new menu design leading to better upselling. Social media mentions increased 400% with customers actively photographing and sharing the new branded elements. Positive online reviews increased by 55%. The restaurant was featured in Timeout Jakarta and Jakarta Post\'s "Best Dining Experiences 2024." Reservation booking rate improved by 45%. Brand consistency score (measured across all touchpoints) improved from 42% to 94%.',
    testimonial: {
      quote: "We were nervous about changing our brand after 10 years, but BARADE STUDIO handled it perfectly. They respected our history while bringing us into the modern era. Our regulars love it, and we're attracting a whole new audience.",
      author: 'Giovanni Rossi',
      position: 'Owner, La Bella Cucina',
    },
  },
  {
    id: 6,
    slug: 'corporate-consulting-website',
    title: 'Corporate Consulting Website',
    category: 'Web Development',
    description: 'Professional web presence for B2B consulting firm',
    color: 'bg-purple-100',
    client: 'Stratosphere Consulting',
    year: '2024',
    duration: '3 months',
    services: [
      'Information Architecture',
      'UI/UX Design',
      'Content Strategy',
      'Frontend Development',
      'CMS Implementation',
      'Lead Generation Optimization',
      'SEO & Analytics',
      'Email Integration',
    ],
    challenge: 'Stratosphere Consulting, a B2B management consulting firm, was relying on an outdated website that failed to generate qualified leads or adequately showcase their expertise. Despite having impressive credentials and successful case studies, their digital presence didn\'t reflect their caliber. They needed to establish thought leadership, build trust with C-level executives, and create a lead generation engine. The challenge was to create a sophisticated, professional website that would resonate with their executive audience while clearly communicating complex consulting services and demonstrating proven results.',
    solution: 'We developed a content-first website strategy that positions the firm as thought leaders through detailed case studies, white papers, and insights. The design uses a sophisticated, minimal aesthetic with a navy, silver, and white color scheme that communicates professionalism and trust. We implemented a comprehensive lead generation system with strategic CTAs, gated premium content, newsletter signup, and consultation booking. Each service page features detailed methodology explanations, relevant case studies, and client testimonials. We built a custom CMS that allows easy content updates and integrated advanced analytics to track user journeys and conversion paths. The site is optimized for search with detailed schema markup and content optimization for industry-specific keywords.',
    results: 'Qualified lead generation increased by 312% in the first quarter. Website traffic grew 185% through improved SEO rankings (now ranking page 1 for 15+ key industry terms). Average session duration increased from 1:23 to 5:47 minutes. Case study downloads increased 425%. Consultation booking rate improved by 240%. The website contributed to closing 12 major contracts worth $2.3M in the first 6 months. Client acquisition cost decreased by 35%. Bounce rate reduced from 68% to 32%.',
    testimonial: {
      quote: "BARADE STUDIO transformed our digital presence completely. The website not only looks exceptional but has become our most effective business development tool. We're closing bigger deals with better-qualified leads.",
      author: 'Jennifer Morrison',
      position: 'Managing Partner, Stratosphere Consulting',
    },
    externalLinks: {
      website: 'https://stratosphere-consulting.example.com',
    },
  },
  {
    id: 7,
    slug: 'organic-tea-packaging',
    title: 'Organic Tea Packaging Design',
    category: 'Graphic Design',
    description: 'Eco-friendly packaging for premium tea collection',
    color: 'bg-teal-100',
    client: 'Pure Leaf Organics',
    year: '2023',
    duration: '2 months',
    services: [
      'Packaging Design',
      'Label Design',
      'Illustration',
      'Copywriting',
      'Print Production Management',
      'Sustainable Material Sourcing',
    ],
    challenge: 'Pure Leaf Organics, an organic tea company, was launching a new premium line of single-origin teas targeting health-conscious, environmentally aware consumers. They needed packaging that would stand out on crowded retail shelves while communicating their commitment to sustainability, quality, and transparency. The challenge was to create packaging that felt premium and artisanal while using only eco-friendly materials, maintaining cost-effectiveness for wholesale distribution, and differentiating each tea variety clearly while maintaining brand cohesion across the line.',
    solution: 'We designed a packaging system using 100% recycled kraft paper with biodegradable inner pouches and compostable labels. Each tea variety features custom botanical illustrations hand-drawn to represent the tea\'s origin and flavor profile – delicate cherry blossoms for Japanese green tea, bold tropical leaves for Ceylon black tea, etc. The color-coding system uses natural, muted tones that complement the kraft base while ensuring easy variety identification. We created a clear information hierarchy featuring origin maps, brewing instructions, and transparency information about sourcing. The cylindrical packaging shape is distinctive yet efficient for shipping, with minimal waste. Each package includes a QR code linking to the farmer\'s story and sustainability impact.',
    results: 'Product line launched in 200+ premium retailers across Indonesia and Singapore. First production run of 50,000 units sold out in 6 weeks (projected timeline was 6 months). Packaging won Bronze at the 2024 Asia Pacific Design Awards in the Sustainable Packaging category. Social media engagement increased 380% with customers sharing unboxing experiences. Retail buyers reported 40% higher sell-through rate compared to competitors. Brand was featured in Green Living Magazine and Eco-Warrior Blog. Customer reviews consistently mention packaging as a key differentiator, with 85% stating it influenced their purchase decision.',
    testimonial: {
      quote: "The packaging BARADE STUDIO created is a work of art that perfectly represents our values. Customers tell us they keep the tins even after the tea is gone! It's helped us compete with much bigger brands.",
      author: 'Maya Dewi',
      position: 'Founder, Pure Leaf Organics',
    },
    externalLinks: {
      behance: 'https://behance.net/gallery/pure-leaf-packaging',
    },
  },
  {
    id: 8,
    slug: 'fitness-app-design',
    title: 'Fitness Tracking Mobile App',
    category: 'UI/UX Design',
    description: 'Gamified fitness application for health enthusiasts',
    color: 'bg-orange-100',
    client: 'FitQuest',
    year: '2024',
    duration: '5 months',
    services: [
      'User Research',
      'UX Strategy',
      'UI Design',
      'Prototyping',
      'User Testing',
      'Design System Creation',
      'Animation Design',
      'Developer Handoff',
    ],
    challenge: 'FitQuest wanted to enter the competitive fitness app market with a unique approach: gamification that actually motivates long-term behavior change rather than short-term engagement. They needed to solve common fitness app problems including high user drop-off rates (70% of users abandon within first week), lack of sustained motivation, and overwhelming complexity. The challenge was to create an app that would be engaging for beginners without alienating serious fitness enthusiasts, provide personalized experiences at scale, and maintain motivation through plateaus and setbacks.',
    solution: 'We developed a comprehensive UX strategy based on behavioral psychology research and extensive user testing with 50+ fitness enthusiasts of varying levels. The app features a quest-based progression system where users unlock new challenges, earn badges, and level up their avatar. The UI uses bold, energetic colors (electric blue, vibrant orange, lime green) with smooth animations that celebrate achievements. We designed personalized workout plans that adapt based on user performance and preferences, with clear visual progress tracking through charts, streaks, and milestone celebrations. The social features allow friendly competition without pressure. We created a comprehensive design system with reusable components and clear guidelines for future development.',
    results: '100,000+ downloads in the first 2 months post-launch. User retention rate of 68% after 30 days (industry average is 30%). Average daily active usage of 23 minutes. App Store rating of 4.7/5 based on 8,000+ reviews. Featured in App Store "New Apps We Love" and Google Play "Editor\'s Choice." 45% of users upgraded to premium subscription within first month. Social sharing of achievements generated 25,000+ organic social media posts. App was covered by TechCrunch, Lifehacker, and The Verge.',
    testimonial: {
      quote: "BARADE STUDIO didn't just design an app – they designed an experience that changes lives. The retention numbers speak for themselves. Users are staying engaged because the app actually works and feels amazing to use.",
      author: 'Ryan Martinez',
      position: 'Co-founder, FitQuest',
    },
    externalLinks: {
      dribbble: 'https://dribbble.com/shots/fitquest-app',
      website: 'https://fitquest-app.example.com',
    },
  },
  {
    id: 9,
    slug: 'music-festival-branding',
    title: 'Music Festival Brand Identity',
    category: 'Branding',
    description: 'Complete visual identity for annual music event',
    color: 'bg-yellow-100',
    client: 'SoundWave Festival',
    year: '2023',
    duration: '4 months',
    services: [
      'Brand Strategy',
      'Logo & Identity Design',
      'Event Collateral Design',
      'Environmental Graphics',
      'Merchandise Design',
      'Social Media Campaign',
      'Video Graphics',
      'Sponsor Materials',
    ],
    challenge: 'SoundWave, a new 3-day music festival, needed to establish itself in a market dominated by established festivals. They required a brand identity that would appeal to Gen Z and young millennials, communicate the festival\'s eclectic lineup (from indie to electronic to hip-hop), create shareable moments for social media, and work across diverse applications from giant stage banners to tiny wristbands. The brand needed to be energetic and bold enough to capture attention but flexible enough to accommodate multiple music genres and evolving lineups.',
    solution: 'We created a dynamic, modular brand system built around the concept of "visual frequency." The logo features custom geometric letterforms that can be animated to pulse with music. The color palette is vibrant and diverse – electric purple, hot pink, cyan, and lime green – allowing different combinations for different stages and music genres. We designed a library of animated graphic elements (waveforms, particles, gradients) that can be customized and layered. The typography system pairs a bold, condensed display font with a clean geometric sans-serif. We created templates for poster designs, social media content, stage designs, merchandise, and sponsor materials. The brand system is designed to evolve year-to-year while maintaining core recognition.',
    results: 'Festival sold out all 10,000 tickets in 5 days (previous local festivals averaged 30 days to sell out). Social media campaign generated 15 million impressions with 250,000+ engagements before the event. #SoundWaveFest trended on Twitter during the festival weekend. Merchandise sales exceeded projections by 185%. Post-event survey showed 92% brand recognition among attendees. The festival secured 15 major sponsors (double the initial goal). Festival was featured in Rolling Stone Indonesia, Billboard, and major music blogs. 88% of attendees said they would attend next year. The branding won Gold at the Indonesian Design Awards.',
    testimonial: {
      quote: "The branding BARADE STUDIO created became the soul of our festival. Every touchpoint was perfect – from the massive stage designs to the tiny details on wristbands. The visual identity helped us compete with festivals that have been around for decades.",
      author: 'Alex Chen',
      position: 'Festival Director, SoundWave',
    },
    externalLinks: {
      behance: 'https://behance.net/gallery/soundwave-festival',
      website: 'https://soundwavefest.example.com',
      dribbble: 'https://dribbble.com/shots/soundwave-branding',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, category: string, limit = 3): Project[] {
  return projects
    .filter(p => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(p => p.category === category);
}
