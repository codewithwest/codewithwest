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
import profilePicture from "@/../public/profile.jpg";

const Projects = () => {
  const [showCard, setShowCard] = useState("");
  const { loading, error, data } = useQuery(GET_PROJECTS, {
    variables: { limit: 10 },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  const projectCategories = useQuery(GET_PROJECT_CATEGORIES, {
    variables: { limit: 10 },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  const projectData = useMemo(() => {
    return loading ? [] : data?.getProjects;
  }, [loading, data]);

  const getCategoryName = (categoryId: number): string => {
    let categoryName = "";
    projectCategoriesData?.forEach((category: projectCategoryType) => {
      if (category.id === categoryId) categoryName = category?.name;
    });
    return categoryName?.toLowerCase();
  };
  const projectCategoriesData = useMemo(() => {
    return projectCategories?.loading
      ? []
      : projectCategories?.data?.getProjectCategories;
  }, [projectCategories]);

  const categoryButton = (
    index: number,
    projectCategoryName: string,
    showCard: string
  ) => {
    return (
      <li className="mb-1" key={index}>
        <div className="flex justify-center">
          <button
            onClick={() => {
              console.log(
                showCard.toLowerCase(),
                projectCategoryName.toLowerCase()
              );

              handleProject(showCard);
            }}
            className={`inline-flex items-center justify-center whitespace-nowrap 
              rounded-md text-lg font-medium ring-offset-background transition-colors 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
              focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
              shadow-sm mx-1 hover:bg-black/90 h-10 p-8 capitalize ${
                showCard.toLowerCase() === projectCategoryName.toLowerCase()
                  ? "activeClasses shadow-current"
                  : "inactiveClasses text-body-color shadow-black hover:text-white"
              }`}
          >
            {projectCategoryName}
          </button>
        </div>
      </li>
    );
  };

  const handleProject = (category: string) => {
    return category === "" ? setShowCard(category) : setShowCard(category);
  };

  return (
    <ThemeProvider>
      <ThemedContainer className="pt-10 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark w-full">
        <ThemedContainer className="container mx-auto">
          <ThemedContainer className="flex flex-wrap">
            <ThemedContainer className="w-full px-4">
              <ThemedContainer className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </ThemedContainer>
            </ThemedContainer>
          </ThemedContainer>

          <ThemedContainer className="w-full flex flex-wrap justify-center">
            <ThemedContainer className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {projectCategories?.loading ? (
                  <>Loading Categories...</>
                ) : (
                  <>
                    {categoryButton(0, "All Projects", "")}
                    {projectCategoriesData?.map(
                      (projectCategory: projectCategoryType, index: number) =>
                        categoryButton(
                          projectCategory?.id + index,
                          projectCategory?.name,
                          projectCategory?.name?.toLowerCase()
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
                  button={project?.name}
                  buttonHref={project?.name}
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
