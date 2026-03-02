# **Baradé Studio** 🎨

> Portfolio website for Baradé Studio — Independent product design and visual identity partner based in Bandung, Indonesia.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel)](https://vercel.com)

---

## **✨ Features**

- 🌐 **Bilingual Support** — Full Indonesian (ID) & English (EN) localization with file-based translations
- 📱 **Fully Responsive** — Mobile-first design that scales beautifully across all devices
- 🎨 **Custom Brand System** — Syne + Plus Jakarta Sans fonts, brand-lime (#dcf900), brand-dark (#1a1a1a)
- 🚀 **Performance Optimized** — Next.js App Router, React Server Components, automatic image optimization
- 🔍 **SEO Ready** — Dynamic metadata per project, Open Graph tags, structured data
- 🎬 **Smooth Animations** — framer-motion for polished UI interactions
- 📝 **Markdown Content** — Project content managed via MD files with frontmatter metadata
- 🧩 **Component Architecture** — Reusable, type-safe components with TypeScript
- 🌓 **Dark Mode Ready** — CSS variables system for easy theme customization

---

## **🛠 Tech Stack**

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14.2.35 (App Router) |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS 3.x + CSS Variables |
| **Fonts** | next/font/google (Syne, Plus Jakarta Sans) |
| **Animations** | framer-motion |
| **Content** | Markdown + gray-matter |
| **i18n** | File-based JSON translations (`locales/*.json`) |
| **Deployment** | Vercel |
| **Package Manager** | npm / pnpm |

---

## **📁 Project Structure**

```
barade-studio/
├── app/
│   ├── [lang]/                    # Dynamic locale routing
│   │   ├── about/page.tsx         # About page (bilingual)
│   │   ├── contact/page.tsx       # Contact page with form
│   │   ├── portfolio/
│   │   │   ├── page.tsx           # Portfolio listing with filters
│   │   │   └── [slug]/page.tsx    # Project detail (dynamic SEO)
│   │   ├── services/page.tsx      # Services overview
│   │   ├── layout.tsx             # Root layout with i18n + fonts
│   │   └── page.tsx               # Home page
│   ├── globals.css                # Global styles + CSS variables
│   └── layout.tsx                 # Root HTML layout
├── components/
│   ├── Navbar.tsx                 # Dynamic client-side navbar
│   ├── Footer.tsx                 # Static footer
│   ├── LanguageToggle.tsx         # ID/EN language switcher
│   ├── ThemeToggle.tsx            # Light/dark theme toggle
│   ├── Logo.tsx                   # Brand logo component
│   └── ClientOnly.tsx             # Client-side render wrapper
├── content/
│   └── projects/
│       ├── en/                    # English project content
│       │   ├── brotrher-boots.md
│       │   ├── misil-tactical.md
│       │   └── sba-transport.md
│       └── id/                    # Indonesian project content
│           ├── brotrher-boots.md
│           ├── misil-tactical.md
│           └── sba-transport.md
├── data/
│   ├── services.json              # Services configuration
│   ├── site.json                  # Site-wide config (nav, contact, social)
│   └── categories.json            # Project categories & tags
├── lib/
│   ├── content.ts                 # Content fetching utilities
│   ├── i18n.ts                    # Translation loader + types
│   └── projects.ts                # Project MDX parser + SEO support
├── locales/
│   ├── en.json                    # English translations
│   └── id.json                    # Indonesian translations
├── public/
│   ├── projects/                  # Project images (organized by slug)
│   ├── images/                    # General images
│   ├── logo.svg                   # Brand logo
│   └── favicon.ico                # Site favicon
├── types/
│   └── content.ts                 # TypeScript type definitions
├── next.config.mjs                # Next.js configuration
├── tailwind.config.ts             # Tailwind + brand colors config
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies + scripts
```

---

## **🚀 Getting Started**

### **Prerequisites**

- Node.js 18.x or higher
- npm, yarn, or pnpm

### **Installation**

```bash
# 1. Clone repository
git clone https://github.com/rikkyarisendi/barade-studio.git
cd barade-studio

# 2. Install dependencies
npm install

# 3. Copy environment example
cp .env.example .env.local

# 4. Start development server
npm run dev
```

### **Available Scripts**

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server (<http://localhost:3000>) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint + TypeScript checks |
| `npm run type-check` | Run TypeScript compiler only |

---

## **🌐 Adding a New Project**

### **Step 1: Create Markdown Files**

```bash
# Create locale folders if not exist
mkdir -p content/projects/en content/projects/id

# Create English version
touch content/projects/en/my-new-project.md

# Create Indonesian version
touch content/projects/id/my-new-project.md
```

### **Step 2: Add Frontmatter (EN Example)**

```yaml
---
# Basic Info
slug: "my-new-project"
date: "2024-01-15"
category: "Web Development"
tags: ["E-Commerce", "UI/UX"]
color: "bg-blue-900"
client: "Client Name"
year: "2024"

# Images
thumbnail: "/projects/my-new-project/thumb.png"
quickViewImage: "/projects/my-new-project/quick.png"
projectShowcase: "/projects/my-new-project/showcase.png"
designDetail: "/projects/my-new-project/detail1.png"
implementation: "/projects/my-new-project/detail2.png"

# Content (English)
title: "My New Project - Short Title"
description: "Brief description of the project in English."
duration: "3 months"

# Services provided
services:
  - "Web Development"
  - "UI/UX Design"
  - "Brand Identity"

# Testimonial
testimonial:
  quote: "Amazing work! Highly recommended."
  author: "Client Name"
  position: "CEO"

# External links
externalLinks:
  website: "https://client-website.com"
  instagram: "https://instagram.com/client"

# SEO Metadata
seo:
  title: "My New Project - E-Commerce Platform | Baradé Studio"
  description: "Baradé Studio built a modern e-commerce platform for Client Name with intuitive UX and scalable architecture."
  keywords:
    - "e-commerce development"
    - "web design Bandung"
    - "UI/UX project"
  image: "/projects/my-new-project/og-image.png"
---

## The Challenge

Describe the client's problem or business challenge here...

## The Approach

Explain your solution methodology and process...

## Outcome

Share the results and impact of your work...
```

### **Step 3: Add Indonesian Version**

Same structure, but translate `title`, `description`, `duration`, `testimonial`, and markdown body content to Indonesian.

### **Step 4: Add Images**

Place project images in `public/projects/my-new-project/`:

```
public/projects/my-new-project/
├── thumb.png          # 400x300px - Portfolio grid thumbnail
├── quick.png          # 800x600px - Quick view modal
├── showcase.png       # 1200x800px - Hero showcase
├── detail1.png        # Design detail image
├── detail2.png        # Implementation screenshot
└── og-image.png       # 1200x630px - Social sharing preview
```

### **Step 5: Test Locally**

```bash
# Visit project pages
http://localhost:3000/en/portfolio/my-new-project
http://localhost:3000/id/portfolio/my-new-project
```

---

## **🌍 Managing Translations**

### **Adding New Translation Keys**

1. **Edit `locales/en.json` and `locales/id.json`**:

    ```json
    {
      "mySection": {
        "newKey": {
          "en": "English text",
          "id": "Teks bahasa Indonesia"
        }
      }
    }
    ```

2. **Update `types/content.ts`** if adding new nested structures:

    ```typescript
    export type Translations = {
      // ... existing types
      mySection: {
        newKey: {
          en: string;
          id: string;
        };
      };
    };
    ```

3. **Use in components**:

    ```tsx
    {t.mySection?.newKey?.[lang]}
    // or with fallback:
    {t.mySection?.newKey?.[lang] || 'Fallback text'}
    ```

### **Translation File Structure**

```
locales/
├── en.json  # All English strings
└── id.json  # All Indonesian strings
```

Keys are organized by section: `nav`, `common`, `home`, `about`, `services`, `portfolio`, `contact`, `project`, `footer`.

---

## **🎨 Brand Guidelines**

### **Colors**

```css
/* tailwind.config.ts */
{
  theme: {
    extend: {
      colors: {
        'brand-lime': '#dcf900',    // Primary accent
        'brand-dark': '#1a1a1a',    // Primary dark
        'brand-cream': '#f5f5f0',   // Light background
      }
    }
  }
}
```

### **Typography**

```tsx
// app/[lang]/layout.tsx
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';

const syne = Syne({ variable: '--font-syne', subsets: ['latin'] });
const jakartaSans = Plus_Jakarta_Sans({ variable: '--font-jakarta-sans', subsets: ['latin'] });

// Usage:
// Headings: className="font-display" (Syne)
// Body: className="font-sans" (Plus Jakarta Sans)
```

### **CSS Variables**

```css
/* app/globals.css */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9f9f9;
  --text-primary: #1a1a1a;
  --text-muted: #666666;
  --border-color: #e5e5e5;
}

.dark {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --text-primary: #f5f5f0;
  --text-muted: #999999;
  --border-color: #333333;
}
```

---

## **🔍 SEO Configuration**

### **Per-Project SEO**

Each project markdown supports custom SEO via frontmatter:

```yaml
seo:
  title: "Custom Title | Baradé Studio"
  description: "Custom meta description for search engines"
  keywords: ["keyword1", "keyword2"]
  image: "/path/to/og-image.png"
```

### **Default Metadata**

Configured in `app/[lang]/layout.tsx`:

```tsx
export async function generateMetadata() {
  return {
    title: { template: '%s | Baradé Studio', default: 'Baradé Studio' },
    description: 'Product design and visual identity studio based in Bandung.',
    alternates: { languages: { id: '/id', en: '/en' } },
  };
}
```

### **Open Graph / Twitter Cards**

Automatically generated from `project.seo.image` or fallback to `projectShowcase`.

---

## **🧩 Component Guidelines**

### **Client vs Server Components**

```tsx
// ✅ Server Component (default)
// app/[lang]/about/page.tsx
export default async function AboutPage() {
  const t = await getTranslations('en');
  return <div>{t.about.title}</div>;
}

// ✅ Client Component (needs 'use client')
// components/Navbar.tsx
'use client';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <nav>...</nav>;
}
```

### **Dynamic Imports for Client-Only Components**

```tsx
// app/[lang]/layout.tsx
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { 
  ssr: false,  // Skip server render to avoid hydration issues
  loading: () => <div className="h-20 bg-[var(--bg-primary)]" />
});
```

### **Type-Safe Props**

```tsx
// components/MyComponent.tsx
interface MyComponentProps {
  lang: Locale;
  t: any; // Translation object
  className?: string;
}

export default function MyComponent({ lang, t, className }: MyComponentProps) {
  return <div className={className}>{t.myKey}</div>;
}
```

---

## **🚢 Deployment (Vercel)**

### **Automatic Deploy**

1. Connect GitHub repo to Vercel
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Add environment variables in Vercel dashboard:

    ```
    NEXT_PUBLIC_SITE_URL=https://your-domain.com
    ```

### **Manual Deploy**

```bash
# Build and preview locally
npm run build
npm run start

# Push to main branch for auto-deploy
git checkout main
git merge your-feature-branch
git push origin main
```

### **Preview Deployments**

Every PR to `main` automatically creates a preview URL for testing.

---

## **🐛 Troubleshooting**

### **Hydration Errors**

```
Error: Hydration failed because the initial UI does not match what was rendered on the server.
```

**Solution**: Wrap browser-only components with `dynamic` + `ssr: false`:

```tsx
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
```

### **TypeScript Errors After Type Changes**

```
Property 'xyz' does not exist on type '...'
```

**Solution**: Restart TypeScript server in VS Code:

1. `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
2. Or restart VS Code entirely

### **Images Not Loading**

```
404: Image not found
```

**Solution**:

1. Ensure image is in `public/` folder (not `src/`)
2. Use absolute path: `src="/projects/slug/image.png"`
3. Clear Next.js cache: `rm -rf .next`

### **Translations Not Updating**

```
Text still shows in old language after changing JSON
```

**Solution**:

1. Verify both `en.json` and `id.json` have the key
2. Clear cache: `rm -rf .next`
3. Restart dev server: `npm run dev`

---

## **🤝 Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m 'feat: add your feature'`
4. Push to branch: `git push origin feat/your-feature`
5. Open a Pull Request

### **Commit Convention**

```
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style changes (formatting, etc)
refactor: Code refactoring
test:     Adding or updating tests
chore:    Maintenance tasks
```

---

## **📄 License**

© {{year}} Baradé Studio. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this codebase is strictly prohibited.

---

## **📬 Contact**

- **Email**: <hello@barade.studio>
- **Website**: [barade.studio](https://barade.studio)
- **Instagram**: [@barade.studio](https://instagram.com/barade.studio)
- **Location**: Bandung, Indonesia

---

> Built with ❤️ by **Rikky Arisendi** using Next.js, TypeScript, and Tailwind CSS.