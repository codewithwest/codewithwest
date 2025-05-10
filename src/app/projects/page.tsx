"use client";
import ThemedContainer from "@/components/general/themedContainer";
import ThemeProvider from "@/provider/general/themeProvider";
import { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import PortfolioCard from "@/components/general/portfolioCard";
import {
  GET_PROJECT_CATEGORIES,
  GET_PROJECTS,
} from "@/provider/data_schema/projects.gql";
import { projectCategoryType, projectType } from "@/helpers/general/projects";
import profilePicture from "@/../public/javier-miranda-MrWOCGKFVDg-unsplash.jpg";
import projectStyles from "@/styles/app/project/projects.module.css";

const Projects = () => {
  const [showCard, setShowCard] = useState("all projects");
  const { loading, error, data } = useQuery(GET_PROJECTS, {
    variables: { limit: 10, page: 1 },

    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  const projectCategories = useQuery(GET_PROJECT_CATEGORIES, {
    variables: { limit: 10, page: 1 },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  const projectData = useMemo(() => {
    return loading ? [] : data?.getProjects?.data;
  }, [loading, data]);

  const projectCategoriesData = useMemo(() => {
    return projectCategories?.loading
      ? []
      : projectCategories?.data?.getProjectCategories?.data;
  }, [projectCategories]);

  const getCategoryName = (categoryId: number): string => {
    const category = projectCategoriesData?.find(
      (category: projectCategoryType) => category.id === categoryId
    );
    return category?.name?.toLowerCase() || "";
  };

  const categoryButton = (
    index: number,
    projectCategoryName: string,
    showCard: string
  ) => {
    return (
      <li key={index}>
        <div className={projectStyles.categoryButtonContainer}>
          <button
            onClick={() => {
              handleProject(projectCategoryName.toLowerCase());
            }}
            className={`${projectStyles.categoryButton} ${
              showCard === projectCategoryName.toLowerCase() ||
              (showCard === "all projects" &&
                projectCategoryName.toLowerCase() === "all projects")
                ? `activeClasses border-b border-b-current border-blue-200 transition-all`
                : `inactiveClasses`
            }`}
          >
            {projectCategoryName}
          </button>
        </div>
      </li>
    );
  };

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <ThemeProvider>
      <ThemedContainer className={projectStyles.mainContainer}>
        <ThemedContainer className={projectStyles.innerContainer}>
          <ThemedContainer className={projectStyles.header}>
            <ThemedContainer className={projectStyles.headerInnerContainer}>
              <ThemedContainer className={projectStyles.headerMainContainer}>
                <span className={projectStyles.headerText}>Our Portfolio</span>
                <h2 className={projectStyles.secondHeaderText}>
                  Our Recent Projects
                </h2>
                <p className={projectStyles.headerDescription}>
                  This is where we showcase our past, present and future for
                  none exist without the other
                </p>
              </ThemedContainer>
            </ThemedContainer>
          </ThemedContainer>

          <ThemedContainer className={projectStyles.projectsNavContainer}>
            <ThemedContainer
              className={projectStyles.projectsNavInnerContainer}
            >
              <ul className={projectStyles.projectsCardsContainer}>
                {projectCategories?.loading ? (
                  <>Loading Categories...</>
                ) : (
                  <>
                    {categoryButton(0, "All Projects", showCard)}
                    {projectCategoriesData?.map(
                      (projectCategory: projectCategoryType) =>
                        categoryButton(
                          projectCategory?.id,
                          projectCategory?.name,
                          showCard
                        )
                    )}
                  </>
                )}
              </ul>
            </ThemedContainer>
          </ThemedContainer>
          {error ? (
            <ThemedContainer className="flex  items-center text-md ">
              <p className="m-auto text-red-200">
                Sorry! An Error occurred while fetching projects.
              </p>
            </ThemedContainer>
          ) : loading ? (
            <ThemedContainer className="flex w-full content-center items-center">
              <h2 className="m-auto">Loading ...</h2>
            </ThemedContainer>
          ) : (
            <ThemedContainer className="flex flex-wrap">
              {projectData?.map((project: projectType, index: number) => (
                <PortfolioCard
                  key={index}
                  ImageHref={profilePicture.src}
                  category={getCategoryName(project?.project_category_id)}
                  title={project?.name}
                  githubLink={project?.github_link}
                  liveLink={project?.live_link}
                  description={project?.description}
                  showCard={showCard}
                />
              ))}
            </ThemedContainer>
          )}
        </ThemedContainer>
      </ThemedContainer>
    </ThemeProvider>
  );
};

export default Projects;
