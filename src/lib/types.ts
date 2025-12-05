export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageHint: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type SkillCategory = {
  name: string;
  skills: { name: string, proficiency: 'Proficient' | 'Familiar' }[];
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};
