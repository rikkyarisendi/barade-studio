// lib/projects.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface AdditionalImage {
  path: string;
  alt: string;
}

export interface Project {
  id?: number;  // ✅ Tetap optional, tapi kita handle dengan safe
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
  
  // Full content untuk Detail Page (locale-specific)
  challenge: string;
  solution: string;
  results: string;
  
  // Short content untuk Quick View Modal
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
}

// ============================================================================
// ✅ TYPES FOR HELPERS
// ============================================================================

interface SectionContent {
  full: string;
  short: string;
}

interface TestimonialData {
  quote: any;
  author: string;
  position: any;
}

// ============================================================================
// ✅ I18N HELPERS
// ============================================================================

function extractContentByLocale(content: string, locale: string): string {
  if (!content) return '';
  const idMatch = content.match(/<!--\s*id\s*-->([\s\S]*?)(?=<!--\s*en\s*-->|$)/i);
  const enMatch = content.match(/<!--\s*en\s*-->([\s\S]*?)(?=<!--\s*id\s*-->|$)/i);
  const idContent = idMatch ? idMatch[1].trim() : '';
  const enContent = enMatch ? enMatch[1].trim() : '';
  if (locale === 'en') return enContent || idContent || content;
  return idContent || enContent || content;
}

function getTranslatedField(field: any, locale: string, fallback = ''): string {
  if (field === null || field === undefined) return fallback;
  if (typeof field === 'string') return field.trim();
  if (typeof field === 'object' && !Array.isArray(field)) {
    return (field[locale] || field.id || field.en || Object.values(field)[0] || fallback)?.toString().trim() || fallback;
  }
  return String(field).trim();
}

function extractSection(content: string, heading: string, maxLength = 100): SectionContent {
  if (!content) return { full: '', short: '' };
  const headingsMap: Record<string, string[]> = {
    'The Challenge': ['The Challenge', 'Tantangan'],
    'Our Solution': ['Our Solution', 'Solusi Kami'],
    'Results': ['Results', 'Hasil'],
  };
  const headingList = headingsMap[heading] || [heading];
  const pattern = headingList.map(h => `##\\s+${h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).join('|');
  const regex = new RegExp(`(?:${pattern})\\r?\\n\\r?\\n([\\s\\S]*?)(?=\\r?\\n##\\s+|$)`, 'm');
  const match = content.match(regex);
  const fullText = match ? match[1].trim() : '';
  const shortText = fullText.length > maxLength ? fullText.substring(0, maxLength).trim() + '...' : fullText;
  return { full: fullText, short: shortText };
}

function getWithFallback(
  data: Record<string, any>, 
  content: string, 
  fieldName: string, 
  heading: string,
  locale: string
): SectionContent {
  const frontmatterValue = getTranslatedField(data[fieldName], locale);
  if (frontmatterValue) {
    const full = frontmatterValue;
    const short = full.length > 100 ? full.substring(0, 100).trim() + '...' : full;
    return { full, short };
  }
  return extractSection(content, heading);
}

// ============================================================================
// ✅ PARSE PROJECT FILE
// ============================================================================

function parseProjectFile(filePath: string, locale: string = 'id'): Project | null {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const localeContent = extractContentByLocale(content, locale);

    const challenge = getWithFallback(data, localeContent, 'challenge', 'The Challenge', locale);
    const solution = getWithFallback(data, localeContent, 'solution', 'Our Solution', locale);
    const results = getWithFallback(data, localeContent, 'results', 'Results', locale);

    const project: Project = {
      // Required fields
      slug: data.slug || path.basename(filePath, '.md'),
      title: getTranslatedField(data.title, locale, data.slug || ''),
      description: getTranslatedField(data.description, locale, ''),
      date: typeof data.date === 'string' ? data.date : '',
      category: typeof data.category === 'string' ? data.category.trim() : 'Other',
      color: typeof data.color === 'string' ? data.color : 'bg-gray-500/20',
      client: typeof data.client === 'string' ? data.client : '',
      year: typeof data.year === 'string' ? data.year : '',
      duration: getTranslatedField(data.duration, locale, ''),
      
      // Arrays
      tags: Array.isArray(data.tags) ? data.tags.map((t: any) => String(t)) : [],
      services: Array.isArray(data.services) ? data.services.map((s: any) => String(s)) : [],
      
      // Content sections
      content: localeContent,
      challenge: challenge.full,
      solution: solution.full,
      results: results.full,
      challengeShort: challenge.short,
      solutionShort: solution.short,
      resultsShort: results.short,
      
      // Images
      thumbnail: typeof data.thumbnail === 'string' ? data.thumbnail : undefined,
      quickViewImage: typeof data.quickViewImage === 'string' ? data.quickViewImage : undefined,
      projectShowcase: typeof data.projectShowcase === 'string' ? data.projectShowcase : undefined,
      designDetail: typeof data.designDetail === 'string' ? data.designDetail : undefined,
      implementation: typeof data.implementation === 'string' ? data.implementation : undefined,
      additionalImages: Array.isArray(data.additionalImages) ? data.additionalImages : [],
      images: Array.isArray(data.images) ? data.images : [],
      
      // Testimonial
      testimonial: data.testimonial ? {
        quote: getTranslatedField((data.testimonial as TestimonialData)?.quote, locale),
        author: typeof (data.testimonial as TestimonialData)?.author === 'string' 
          ? (data.testimonial as TestimonialData).author 
          : '',
        position: getTranslatedField((data.testimonial as TestimonialData)?.position, locale),
      } : undefined,
      
      // External links
      externalLinks: data.externalLinks 
        ? Object.fromEntries(
            Object.entries(data.externalLinks).filter(
              ([key, value]) => !key.endsWith('_label') && typeof value === 'string'
            )
          ) as Project['externalLinks']
        : undefined,
      
      // Optional id (will be set later)
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

export function getAllProjects(locale: string = 'id'): Project[] {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      console.warn(`[Projects Warning] Directory not found: ${projectsDirectory}`);
      return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);

    const projects = fileNames
      .filter(f => f.endsWith('.md') && !f.includes('.id.') && !f.includes('.en.'))
      .map((fileName, index) => {
        const fullPath = path.join(projectsDirectory, fileName);
        const project = parseProjectFile(fullPath, locale);
        if (!project) return null;
        // ✅ Set id dengan type assertion yang aman
        return { ...project, id: index + 1 } as Project;
      })
      // ✅ Type guard yang aman untuk optional id
      .filter((p): p is Project => p !== null && p !== undefined)
      .sort((a, b) => {
        // ✅ Safe sorting dengan null/undefined checks
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        if (dateB !== dateA) return dateB - dateA;
        // ✅ Handle optional id dengan fallback ke 0
        return (b.id ?? 0) - (a.id ?? 0);
      });

    return projects;
  } catch (error) {
    console.error('[Projects Error] Failed to load projects:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string, locale: string = 'id'): Project | undefined {
  try {
    const fileName = `${slug}.md`;
    const fullPath = path.join(projectsDirectory, fileName);
    
    if (!fs.existsSync(fullPath)) {
      return undefined;
    }
    
    const project = parseProjectFile(fullPath, locale);
    if (!project) return undefined;
    
    // Get index for ID without loading all projects
    const allSlugs = fs.readdirSync(projectsDirectory)
      .filter(f => f.endsWith('.md') && !f.includes('.id.') && !f.includes('.en.'))
      .map(f => f.replace(/\.md$/, ''))
      .sort();
    
    const index = allSlugs.indexOf(slug);
    
    // ✅ Set id dengan nullish coalescing untuk optional field
    return { ...project, id: index >= 0 ? index + 1 : undefined };
  } catch (error) {
    console.error(`[Project Error] Failed to load project: ${slug}`, error);
    return undefined;
  }
}

// ============================================================================
// ✅ HELPER FUNCTIONS
// ============================================================================

export function getAllTags(locale: string = 'id'): string[] {
  try {
    const projects = getAllProjects(locale);
    const tags = projects.flatMap(p => p.tags || []);
    return Array.from(new Set(tags)).sort();
  } catch {
    return [];
  }
}

export function getProjectsByTag(tag: string, locale: string = 'id'): Project[] {
  try {
    return getAllProjects(locale).filter(p => p.tags?.includes(tag));
  } catch {
    return [];
  }
}

export function getRelatedProjects(
  currentSlug: string, 
  category: string, 
  locale: string = 'id',
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

export function getProjectsByCategory(category: string, locale: string = 'id'): Project[] {
  try {
    return getAllProjects(locale).filter(p => p.category === category);
  } catch {
    return [];
  }
}

export function getAllProjectSlugs(): string[] {
  try {
    if (!fs.existsSync(projectsDirectory)) return [];
    return fs.readdirSync(projectsDirectory)
      .filter(f => f.endsWith('.md') && !f.includes('.id.') && !f.includes('.en.'))
      .map(f => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}