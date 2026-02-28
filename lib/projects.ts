// lib/projects.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface AdditionalImage {
  path: string;
  alt: string;
}

// ============================================================================
// ✅ PROJECT INTERFACE (dengan SEO field)
// ============================================================================

export interface Project {
  id?: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  tags?: string[];
  description: string;
  color: string;
  client: string;
  year: string;
  duration: string;
  services: string[];
  
  // Content sections (locale-specific)
  challenge: string;
  solution: string;
  results: string;
  
  challengeShort?: string;
  solutionShort?: string;
  resultsShort?: string;
  
  content?: string;
  
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  
  externalLinks?: {
    behance?: string;
    dribbble?: string;
    website?: string;
    github?: string;
    instagram?: string;
  };
  
  thumbnail?: string;
  quickViewImage?: string;
  projectShowcase?: string;
  designDetail?: string;
  implementation?: string;
  additionalImages?: AdditionalImage[];
  images?: string[];
  
  // ✅ SEO / Metadata field
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
  };
}

// ============================================================================
// ✅ HELPERS
// ============================================================================

function getProjectDir(locale: string = 'en'): string {
  return path.join(process.cwd(), 'content/projects', locale);
}

function getProjectPath(slug: string, locale: string = 'en'): string {
  return path.join(getProjectDir(locale), `${slug}.md`);
}

function extractSection(content: string, headings: string[], maxLength = 100): { full: string; short: string } {
  if (!content) return { full: '', short: '' };
  
  const pattern = headings.map(h => `##\\s+${h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).join('|');
  const regex = new RegExp(`(?:${pattern})\\r?\\n\\r?\\n([\\s\\S]*?)(?=\\r?\\n##\\s+|$)`, 'm');
  const match = content.match(regex);
  
  const full = match ? match[1].trim() : '';
  const short = full.length > maxLength ? full.substring(0, maxLength).trim() + '...' : full;
  
  return { full, short };
}

// ============================================================================
// ✅ PARSE PROJECT FILE
// ============================================================================

function parseProjectFile(filePath: string): Project | null {
  try {
    if (!fs.existsSync(filePath)) return null;
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract sections from markdown body
    const challenge = extractSection(content, ['The Challenge', 'Tantangan']);
    const solution = extractSection(content, ['The Approach', 'Our Solution', 'Solusi Kami']);
    const results = extractSection(content, ['Outcome', 'Results', 'Hasil']);

    const project: Project = {
      // Required fields
      slug: data.slug || path.basename(filePath, '.md'),
      title: String(data.title || '').trim(),
      description: String(data.description || '').trim(),
      date: String(data.date || ''),
      category: String(data.category || 'Other').trim(),
      color: String(data.color || 'bg-gray-500/20'),
      client: String(data.client || ''),
      year: String(data.year || ''),
      duration: String(data.duration || ''),
      
      // Arrays
      tags: Array.isArray(data.tags) ? data.tags.map((t: any) => String(t).trim()) : [],
      services: Array.isArray(data.services) ? data.services.map((s: any) => String(s).trim()) : [],
      
      // Content sections
      content,
      challenge: challenge.full,
      solution: solution.full,
      results: results.full,
      challengeShort: challenge.short,
      solutionShort: solution.short,
      resultsShort: results.short,
      
      // Images
      thumbnail: data.thumbnail ? String(data.thumbnail).trim() : undefined,
      quickViewImage: data.quickViewImage ? String(data.quickViewImage).trim() : undefined,
      projectShowcase: data.projectShowcase ? String(data.projectShowcase).trim() : undefined,
      designDetail: data.designDetail ? String(data.designDetail).trim() : undefined,
      implementation: data.implementation ? String(data.implementation).trim() : undefined,
      additionalImages: Array.isArray(data.additionalImages) ? data.additionalImages : [],
      images: Array.isArray(data.images) ? data.images : [],
      
      // Testimonial
      testimonial: data.testimonial ? {
        quote: String(data.testimonial.quote || '').trim(),
        author: String(data.testimonial.author || '').trim(),
        position: String(data.testimonial.position || '').trim(),
      } : undefined,
      
      // External links
      externalLinks: data.externalLinks 
        ? Object.fromEntries(
            Object.entries(data.externalLinks).filter(
              ([key, value]) => !key.endsWith('_label') && typeof value === 'string'
            )
          ) as Project['externalLinks']
        : undefined,
      
      // ✅ SEO / Metadata
      seo: data.seo ? {
        title: data.seo.title ? String(data.seo.title).trim() : undefined,
        description: data.seo.description ? String(data.seo.description).trim() : undefined,
        keywords: Array.isArray(data.seo.keywords) ? data.seo.keywords.map((k: any) => String(k).trim()) : [],
        image: data.seo.image ? String(data.seo.image).trim() : undefined,
      } : undefined,
      
      id: undefined,
    };

    return project;
  } catch (error) {
    console.error(`[Project Parse Error] ${filePath}:`, error);
    return null;
  }
}

// ============================================================================
// ✅ MAIN FUNCTIONS
// ============================================================================

export function getAllProjects(locale: string = 'en'): Project[] {
  try {
    const projectsDir = getProjectDir(locale);
    
    // Fallback to English if locale directory doesn't exist
    if (!fs.existsSync(projectsDir)) {
      if (locale !== 'en') {
        return getAllProjects('en');
      }
      return [];
    }

    const fileNames = fs.readdirSync(projectsDir);
    const mdFiles = fileNames.filter(f => f.endsWith('.md'));

    const projects = mdFiles
      .map((fileName, index) => {
        const fullPath = path.join(projectsDir, fileName);
        const project = parseProjectFile(fullPath);
        if (!project) return null;
        return { ...project, id: index + 1 } as Project;
      })
      .filter((p): p is Project => p !== null)
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        if (dateB !== dateA) return dateB - dateA;
        return (b.id ?? 0) - (a.id ?? 0);
      });

    return projects;
  } catch (error) {
    console.error('[Projects Error] Failed to load projects:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string, locale: string = 'en'): Project | undefined {
  try {
    // Try to get project in requested locale
    let project = parseProjectFile(getProjectPath(slug, locale));
    
    // Fallback to English if not found
    if (!project && locale !== 'en') {
      project = parseProjectFile(getProjectPath(slug, 'en'));
    }
    
    if (!project) return undefined;
    
    // Calculate ID based on sorted slugs in the same locale
    const projectsDir = getProjectDir(locale);
    if (fs.existsSync(projectsDir)) {
      const allSlugs = fs.readdirSync(projectsDir)
        .filter(f => f.endsWith('.md'))
        .map(f => f.replace(/\.md$/, ''))
        .sort();
      const index = allSlugs.indexOf(slug);
      return { ...project, id: index >= 0 ? index + 1 : undefined };
    }
    
    return project;
  } catch (error) {
    console.error(`[Project Error] Failed to load project: ${slug}`, error);
    return undefined;
  }
}

// ============================================================================
// ✅ HELPER FUNCTIONS
// ============================================================================

export function getAllTags(locale: string = 'en'): string[] {
  try {
    const projects = getAllProjects(locale);
    const tags = projects.flatMap(p => p.tags || []);
    return Array.from(new Set(tags)).sort();
  } catch {
    return [];
  }
}

export function getProjectsByTag(tag: string, locale: string = 'en'): Project[] {
  try {
    return getAllProjects(locale).filter(p => p.tags?.includes(tag));
  } catch {
    return [];
  }
}

export function getRelatedProjects(
  currentSlug: string, 
  category: string, 
  locale: string = 'en',
  limit = 3
): Project[] {
  try {
    return getAllProjects(locale)
      .filter(p => p.slug !== currentSlug && p.category === category)
      .slice(0, limit);
  } catch {
    return [];
  }
}

export function getProjectsByCategory(category: string, locale: string = 'en'): Project[] {
  try {
    return getAllProjects(locale).filter(p => p.category === category);
  } catch {
    return [];
  }
}

export function getAllProjectSlugs(): string[] {
  try {
    // Always get slugs from English as the source of truth
    const enDir = getProjectDir('en');
    if (!fs.existsSync(enDir)) return [];
    
    return fs.readdirSync(enDir)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}