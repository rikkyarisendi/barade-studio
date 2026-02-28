// types/content.ts

export type Locale = 'id' | 'en';

export type TranslatedString = {
  id: string;
  en: string;
};

// ============================================================================
// SITE CONFIG (data/site.json)
// ============================================================================

export type NavItem = {
  key: string;
  path: string;
  show: boolean;
  order: number;
  highlight?: boolean;
};

export type SocialLink = {
  url: string | null;
  show: boolean;
};

export type ContactHours = {
  weekday: string;
  saturday: string;
  sunday: string;
};

export type Contact = {
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  location: string;
  hours: ContactHours;
};

export type Brand = {
  name: string;
  tagline: TranslatedString;
  logo: string;
  favicon: string;
};

export type Stat = {
  number: string;
  key: string;
  show: boolean;
  order: number;
};

export type Features = {
  darkMode: boolean;
  languageToggle: boolean;
  newsletter: boolean;
  comments: boolean;
};

export type SiteConfig = {
  brand: Brand;
  nav: {
    items: NavItem[];
  };
  contact: Contact;
  social: Record<string, SocialLink>;
  stats: Stat[];
  features: Features;
};

// ============================================================================
// SERVICES (data/services.json) - UPDATED!
// ============================================================================

export type Service = {
  slug: string;
  category: string;
  icon: string;
  featured: boolean;
  order: number;
  title: string;              // ✅ Setelah translate, pasti string
  description: string;        // ✅ Setelah translate, pasti string
  features: string[];
  // ✅ Dihapus karena nggak dipake di UI:
  // pricing: TranslatedString;
  // deliveryTime: TranslatedString;
};

// ============================================================================
// CATEGORIES (data/categories.json)
// ============================================================================

export type Category = {
  slug: string;
  icon?: string;
  color?: string;
  order: number;
  label?: TranslatedString;
};

export type Tag = {
  slug: string;
  label: TranslatedString;
};

export type CategoriesConfig = {
  project: {
    categories: Category[];
    tags: Tag[];
  };
  services: {
    categories: Category[];
  };
};

// ============================================================================
// METADATA (data/metadata.json)
// ============================================================================

export type MetadataDefault = {
  title: string;
  description: TranslatedString;
  keywords: string[];
  author: string;
  robots: string;
  ogImage: string;
};

export type MetadataPage = {
  title: TranslatedString;
};

export type MetadataConfig = {
  default: MetadataDefault;
  pages: Record<string, MetadataPage>;
};

// ============================================================================
// PROJECTS (content/projects/*.md frontmatter)
// ============================================================================

export type ProjectFrontmatter = {
  slug: string;
  title: TranslatedString;
  date: string;
  category: string;
  tags: string[];
  description: TranslatedString;
  color: string;
  client: string;
  year: string;
  duration: string;
  services: string[];
  thumbnail: string;
  additionalImages?: Array<{
    path: string;
    alt: string;
  }>;
  projectShowcase?: string;
  designDetail?: string;
  implementation?: string;
  quickViewImage?: string;
  testimonial?: {
    quote: TranslatedString;
    author: string;
    position: TranslatedString;
  };
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
  };
};

// ============================================================================
// TRANSLATIONS (locales/*.json)
// ============================================================================

export type Translations = {
  nav: Record<string, string>;
  common: {
    buttons: Record<string, string>;
    stats: Record<string, string>;
    labels: Record<string, string>;
  };
  home: {
    hero: {
      title_part1: string;
      title_part2: string;
      subtitle: string;
    };
    services: {
      title: string;
    };
    cta: {
      title: string;
      subtitle: string;
    };
  };
  about: {
    hero: {
      title_part1: string;
      title_part2: string;
    };
    content: {
      title: string;
      body: string;
    };
  };
  portfolio: {
    hero: {
      title_part1: string;
      title_part2: string;
    };
    filters: {
      all: string;
    };
    messages: {
      showing: string;
      project: string;
      projects: string;
      no_results: string;
    };
  };
  contact: {
    hero: {
      title_part1: string;
      title_part2: string;
    };
    form: {
      title: string;
      name_label: string;
      email_label: string;
      message_label: string;
      success_message: string;
    };
    info: {
      title_part1: string;
      title_part2: string;
      email_label: string;
      phone_label: string;
      location_label: string;
    };
  };
  project: {
    back_to_portfolio: string;
    services_provided: string;
    view_project: string;
    client_label: string;
    year_label: string;
    duration_label: string;
    category_label: string;
    services_title: string;
    challenge_title: string;
    solution_title: string;
    results_title: string;
    badge_showcase: string;
    badge_design: string;
    badge_implementation: string;
    more_from_project: string;
    external_links_title: string;
    view_all_projects: string;
    more_title_part1: string;
    more_title_part2: string;
    cta_title_part1: string;
    cta_title_part2: string;
    cta_subtitle: string;
    platforms: {
      behance?: string;
      dribbble?: string;
      website?: string;
      github?: string;
      instagram?: string;
    };
  };
  footer: {
    copyright: string;
    made_with: string;
    quick_links: string;
    contact_info: string;
    business_hours: string;
    tagline: string;
  };
  services: {
    graphic_design: {
      title: string;
      description: string;
      features: string[];
    };
    web_development: {
      title: string;
      description: string;
      features: string[];
    };
    brand_strategy: {
      title: string;
      description: string;
      features: string[];
    };
  };
};