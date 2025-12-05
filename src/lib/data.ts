import type { Project, SkillCategory, Experience } from './types';
import placeholderData from './placeholder-images.json';

const { placeholderImages } = placeholderData;

const getPlaceholderImage = (id: string) => {
  const image = placeholderImages.find(img => img.id === id);
  return image || { imageUrl: '', imageHint: '' };
};

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with a modern, responsive UI, product management, and a secure checkout process.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    image: getPlaceholderImage('project-1').imageUrl,
    imageHint: getPlaceholderImage('project-1').imageHint,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, built with a real-time database.',
    tags: ['React', 'Firebase', 'Zustand', 'Framer Motion'],
    image: getPlaceholderImage('project-2').imageUrl,
    imageHint: getPlaceholderImage('project-2').imageHint,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, featuring a clean design and smooth animations.',
    tags: ['Next.js', 'TypeScript', 'Shadcn UI', 'Server Actions'],
    image: getPlaceholderImage('project-3').imageUrl,
    imageHint: getPlaceholderImage('project-3').imageHint,
    liveUrl: '#',
  },
  {
    title: 'AI SaaS Platform',
    description:
      'A platform for generating and managing AI-powered content, with a focus on a great user experience and powerful features.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Stripe'],
    image: getPlaceholderImage('project-4').imageUrl,
    imageHint: getPlaceholderImage('project-4').imageHint,
    liveUrl: '#',
    githubUrl: 'https://github.com/codewithwest/ai-saas-platform',
  },
];

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', proficiency: 'Proficient' },
      { name: 'JavaScript', proficiency: 'Proficient' },
      { name: 'Python', proficiency: 'Proficient' },
      { name: 'Go (Golang)', proficiency: 'Familiar' },
      { name: 'Dart', proficiency: 'Familiar' },
      { name: 'PHP', proficiency: 'Familiar' },
      { name: 'SQL', proficiency: 'Familiar' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'Next.js', proficiency: 'Proficient' },
      { name: 'React', proficiency: 'Proficient' },
      { name: 'React Native', proficiency: 'Proficient' },
      { name: 'Node.js', proficiency: 'Proficient' },
      { name: 'Flutter', proficiency: 'Familiar' },
      { name: 'Flask', proficiency: 'Familiar' },
      { name: 'Django', proficiency: 'Familiar' },
      { name: 'Laravel', proficiency: 'Familiar' },
      { name: 'Tailwind CSS', proficiency: 'Proficient' },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Docker', proficiency: 'Proficient' },
      { name: 'Git & GitHub', proficiency: 'Proficient' },
      { name: 'Kubernetes', proficiency: 'Familiar' },
      { name: 'Jenkins', proficiency: 'Familiar' },
      { name: 'Argo CD', proficiency: 'Familiar' },
      { name: 'Firebase', proficiency: 'Proficient' },
      { name: 'MySQL', proficiency: 'Familiar' },
      { name: 'MongoDB', proficiency: 'Familiar' },
      { name: 'GraphQL', proficiency: 'Familiar' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: '2021 - Present',
    description: 'Led the development of scalable web applications using Next.js and TypeScript. Mentored junior developers and improved code quality and deployment pipelines.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Innovate Co.',
    duration: '2019 - 2021',
    description: 'Developed and maintained client websites and internal tools. Worked across the full stack with React, Node.js, and PostgreSQL.',
  },
  {
    role: 'B.S. in Computer Science',
    company: 'State University',
    duration: '2015 - 2019',
    description: 'Focused on software engineering principles, algorithms, and data structures. Graduated with honors.',
  },
];

export const profile = {
  name: 'Jonas Lekgau',
  avatar: getPlaceholderImage('profile-pic').imageUrl,
  avatarHint: getPlaceholderImage('profile-pic').imageHint,
};
