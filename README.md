# BARADE STUDIO - Creative Digital Agency Website

Professional portfolio website for Barade Studio built with **Next.js 14** and markdown-based content management.

**Live Demo:** [barade-studio.vercel.app](https://barade-studio.vercel.app)

---

## Brand Identity

### Colors
- **Lime (Primary):** `#DCF900`
- **Dark:** `#3f3f3f`
- **Gray:** `#d9d9d9`
- **Cream:** `#f9f9ed`

### Typography
- **Display:** Syne (Google Fonts)
- **Mono:** Space Mono (Google Fonts)

---

## Features

### Portfolio System
- **Filter by Category** - Web Development, Branding, Graphic Design, etc.
- **Tags System** - Multiple labels per project for flexible filtering
- **Quick View Modal** - Preview projects in 16:9 modal without leaving page
- **Load More** - Automatic pagination (6 projects per page)
- **Responsive Grid** - 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

### Case Study Pages
Each project has a dedicated page with:
- **Project Showcase** (16:9 landscape)
- **Design Detail** (1:1 square)
- **Implementation** (1:1 square)
- **Additional Images** (auto grid layout)
- **Client Testimonial**
- **External Links** (Behance, Dribbble, Website, GitHub, Instagram)
- **Related Projects** - Other projects in the same category

### Content Management
- **Markdown-based** - Easy content updates without coding
- **YAML Frontmatter** - Structured project metadata
- **Auto Sorting** - Sort by date (newest projects first)
- **Image Optimization** - Next.js Image component for optimal performance

### Design Features
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Hover effects & transitions
- **Modern UI/UX** - Clean & professional aesthetic
- **SEO Friendly** - Meta tags & semantic HTML

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown + gray-matter
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## Folder Structure

```
barade-studio/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   ├── portfolio/
│   │   ├── page.tsx            # Portfolio listing
│   │   └── [slug]/page.tsx     # Dynamic case study page
│   ├── contact/page.tsx         # Contact page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── Navbar.tsx               # Navigation
│   ├── Footer.tsx               # Footer
│   └── PortfolioClient.tsx      # Portfolio grid & filter (Client Component)
├── lib/
│   └── projects.ts              # Functions to fetch & parse markdown
├── content/
│   └── projects/                # Markdown files for each project
│       ├── project-1.md
│       ├── project-2.md
│       └── ...
├── public/
│   └── projects/                # Images for each project
│       ├── project-1/
│       │   ├── thumb.png
│       │   ├── hero.png
│       │   ├── detail-1.png
│       │   └── detail-2.png
│       └── project-2/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## How to Add New Project

### 1. Create Markdown File

Create new file in `content/projects/nama-project.md`:

```yaml
---
# ============================================
# BASIC INFO
# ============================================
title: "Project Name"
slug: "project-name"              # Must be unique & same as filename
date: "2024-01-15"                # Format: YYYY-MM-DD (for sorting)

# ============================================
# CATEGORY & TAGS
# ============================================
category: "Web Development"       # Main category (required)
tags:                             # Additional labels (multiple)
  - "E-Commerce"
  - "Indonesian Brand"
  - "UI/UX Design"

# ============================================
# DESCRIPTION & PROJECT INFO
# ============================================
description: "Short project description..."
color: "bg-zinc-900"              # Background color for placeholder
client: "Client Name"
year: "2024"
duration: "3 months"

# ============================================
# IMAGE STRUCTURE
# ============================================
thumbnail: "/projects/project-name/thumb.png"          # Card (1:1)
quickViewImage: "/projects/project-name/hero.png"      # Modal (16:9)
projectShowcase: "/projects/project-name/hero.png"     # Showcase (16:9)
designDetail: "/projects/project-name/detail-1.png"    # Detail (1:1)
implementation: "/projects/project-name/detail-2.png"  # Implementation (1:1)

# Optional: Additional images for grid
# additionalImages:
#   - path: "/projects/project-name/extra-1.jpg"
#     alt: "Description 1"
#   - path: "/projects/project-name/extra-2.jpg"
#     alt: "Description 2"

# ============================================
# SERVICES & CONTENT
# ============================================
services:
  - "Web Development"
  - "UI/UX Design"
  - "Frontend Development"

testimonial:
  quote: "Client testimonial..."
  author: "Client Name"
  position: "Position"

externalLinks:
  website: "https://example.com"
  behance: "https://behance.net/..."
  instagram: "https://instagram.com/..."
---

## The Challenge

Description about challenge in this project...

## Our Solution

Solution we implemented...

## Results

Results achieved from this project...
```

### 2. Upload Images

Upload all images to `public/projects/project-name/`:
- `thumb.png` - Thumbnail for card (1:1 square, min 800x800px)
- `hero.png` - Hero image for modal & showcase (16:9, min 1200x675px)
- `detail-1.png` - Design detail (1:1 square, min 800x800px)
- `detail-2.png` - Implementation (1:1 square, min 800x800px)

### 3. Save & Reload

Save file, development server will auto-reload. New project will appear in portfolio.

---

## Installation & Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone repository
git clone https://github.com/rikkyarisendi/barade-studio.git

# Navigate to project
cd barade-studio

# Install dependencies
npm install

# Run development server
npm run dev
```

Website will run at **http://localhost:3000**

### Development Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow instructions** in terminal

4. **Update production:**
   ```bash
   vercel --prod
   ```

### Deploy via GitHub + Vercel (Auto-deploy)

1. Push code to GitHub repository
2. Connect repository to [Vercel Dashboard](https://vercel.com/dashboard)
3. Every push to `main` branch = auto deploy

### Deploy to Other Platforms

- **Netlify:** Build first (`npm run build`), then upload `.next` folder
- **Railway/Render:** Connect GitHub repository
- **Self-hosted:** Build & serve with `npm start`

---

## Advanced Features

### Filter Tags
Projects can be filtered by tags. For example, clicking tag **"Indonesian Brand"** will display all projects with that tag, even if categories are different.

### Auto-generate ID
Project ID is auto-generated based on file order. No manual setting needed.

### Date-based Sorting
Projects automatically sorted by `date` field in frontmatter (newest first).

### Responsive Images
All images use Next.js Image component for:
- Auto optimization
- Lazy loading
- Responsive sizing
- Modern format (WebP)

---

## Performance

This website is optimized for:
- **Fast Loading** - Image optimization & code splitting
- **Mobile Friendly** - Responsive on all devices
- **Accessible** - Semantic HTML & ARIA labels
- **SEO Optimized** - Meta tags & structured data

---

## Troubleshooting

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Images not showing
- Make sure image path in markdown is correct
- Check if file exists in `public/projects/` folder
- Clear browser cache (Ctrl+Shift+R)

### Build error
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Markdown Guide](https://www.markdownguide.org/)

---

## Support

Need help or have questions?

- **GitHub Issues:** [Create an issue](https://github.com/rikkyarisendi/barade-studio/issues)

---

## License

Free to use for personal and commercial projects.

---

**Made for BARADE STUDIO**