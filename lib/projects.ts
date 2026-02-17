import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface AdditionalImage {
  path: string;
  alt: string;
}

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
  challenge: string;
  solution: string;
  results: string;
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

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter(f => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const challengeMatch = content.match(/## The Challenge\n\n([\s\S]*?)(?=\n## |$)/);
      const solutionMatch = content.match(/## Our Solution\n\n([\s\S]*?)(?=\n## |$)/);
      const resultsMatch = content.match(/## Results\n\n([\s\S]*?)(?=\n## |$)/);

      return {
        ...data,
        slug,
        id: 0,
        content,
        challenge: challengeMatch ? challengeMatch[1].trim() : '',
        solution: solutionMatch ? solutionMatch[1].trim() : '',
        results: resultsMatch ? resultsMatch[1].trim() : '',
      } as Project;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB.getTime() - dateA.getTime();
    });

  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const challengeMatch = content.match(/## The Challenge\n\n([\s\S]*?)(?=\n## |$)/);
    const solutionMatch = content.match(/## Our Solution\n\n([\s\S]*?)(?=\n## |$)/);
    const resultsMatch = content.match(/## Results\n\n([\s\S]*?)(?=\n## |$)/);

    const allProjects = getAllProjects();
    const currentIndex = allProjects.findIndex(p => p.slug === slug);

    return {
      ...data,
      slug,
      id: currentIndex + 1,
      content,
      challenge: challengeMatch ? challengeMatch[1].trim() : '',
      solution: solutionMatch ? solutionMatch[1].trim() : '',
      results: resultsMatch ? resultsMatch[1].trim() : '',
    } as Project;
  } catch (error) {
    console.warn(`[Project Error] Failed to load project: ${slug}`, error);
    return undefined;
  }
}

// ✅ Get all unique tags
export function getAllTags(): string[] {
  const projects = getAllProjects();
  const tags = projects.flatMap(p => p.tags || []);
  return Array.from(new Set(tags)).sort();
}

// ✅ Get projects by tag
export function getProjectsByTag(tag: string): Project[] {
  return getAllProjects().filter(p => p.tags?.includes(tag));
}

export function getRelatedProjects(currentSlug: string, category: string, limit = 3): Project[] {
  return getAllProjects()
    .filter(p => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter(p => p.category === category);
}