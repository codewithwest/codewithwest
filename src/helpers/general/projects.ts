export type projectCategoryType = {
  id: number;
  name: string;
};

export type PortfolioCardType = {
  showCard?: string | undefined;
  category: string;
  ImageHref: string | ImageData;
  title: string;

  githubLink: string;
  liveLink: string;
  description: string;
};

export type projectType = {
  id: number;
  name: string;
  description: string;
  github_link: string;
  live_link: string;
  project_category_id: number;
  tech_stacks: [];
  test_link: string;
};
