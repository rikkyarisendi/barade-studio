import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
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
  };
  thumbnail?: string;
  images?: string[];
}

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter(f => f.endsWith('.md'))
    .map(fileName => {
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
        content,
        challenge: challengeMatch ? challengeMatch[1].trim() : '',
        solution: solutionMatch ? solutionMatch[1].trim() : '',
        results: resultsMatch ? resultsMatch[1].trim() : '',
      } as Project;
    })
    .sort((a, b) => a.id - b.id);

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

    return {
      ...data,
      slug,
      content,
      challenge: challengeMatch ? challengeMatch[1].trim() : '',
      solution: solutionMatch ? solutionMatch[1].trim() : '',
      results: resultsMatch ? resultsMatch[1].trim() : '',
    } as Project;
  } catch {
    return undefined;
  }
}

export function getRelatedProjects(currentSlug: string, category: string, limit = 3): Project[] {
  return getAllProjects()
    .filter(p => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter(p => p.category === category);
}
