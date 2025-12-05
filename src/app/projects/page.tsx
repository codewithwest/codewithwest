
"use client";
import React, { useMemo, useState, useEffect } from "react";
import { ApolloProvider, useQuery } from "@apollo/client";
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import PortfolioCard from "@/components/general/portfolioCard";
import {
  GET_PROJECT_CATEGORIES,
  GET_PROJECTS,
} from "@/provider/data_schema/projects.gql";
import { projectCategoryType, projectType } from "@/helpers/general/projects";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { createApolloClient } from "@/services/apolloClient";

const ProjectsPage = () => {
  const [showCard, setShowCard] = useState("all projects");
  
  const { loading, error, data } = useQuery(GET_PROJECTS, {
    variables: { limit: 10 },
  });

  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = useQuery(GET_PROJECT_CATEGORIES, {
    variables: { limit: 10 },
  });

  const projectData = useMemo(() => {
    return loading || !data ? [] : data?.getProjects?.data;
  }, [loading, data]);

  const projectCategoriesData = useMemo(() => {
    return categoriesLoading || !categoriesData ? [] : categoriesData?.getProjectCategories?.data;
  }, [categoriesLoading, categoriesData]);

  const getCategoryName = (categoryId: number): string => {
    const category = projectCategoriesData?.find(
      (cat: projectCategoryType) => cat.id === categoryId
    );
    return category?.name?.toLowerCase() || "";
  };
  
  const handleProject = (category: string) => {
    setShowCard(category.toLowerCase());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Recent Projects</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A showcase of our past, present, and future work.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={showCard === 'all projects' ? 'default' : 'outline'}
                onClick={() => handleProject("all projects")}
              >
                All Projects
              </Button>
              {categoriesLoading ? (
                 Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-10 w-24" />)
              ) : (
                projectCategoriesData?.map((cat: projectCategoryType) => (
                  <Button
                    key={cat.id}
                    variant={showCard === cat.name.toLowerCase() ? 'default' : 'outline'}
                    onClick={() => handleProject(cat.name)}
                  >
                    {cat.name}
                  </Button>
                ))
              )}
            </div>
          </div>

          {error || categoriesError ? (
            <Alert variant="destructive" className="max-w-2xl mx-auto">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error Fetching Data</AlertTitle>
              <AlertDescription>
                Sorry! An error occurred while fetching project information. Please check your API endpoint and configuration in the .env file.
              </AlertDescription>
            </Alert>
          ) : loading ? (
             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-[230px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectData?.map((project: projectType, index: number) => (
                <PortfolioCard
                  key={index}
                  ImageHref={"https://picsum.photos/seed/" + project.id + "/600/400"}
                  category={getCategoryName(project?.project_category_id)}
                  title={project?.name}
                  githubLink={project?.github_link}
                  liveLink={project?.live_link}
                  description={project?.description}
                  showCard={showCard}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ProjectsPageWrapper = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);

  useEffect(() => {
    // Initialize the client on the client-side
    setClient(createApolloClient());
  }, []);

  if (!client) {
      return (
          <div className="flex flex-col min-h-screen items-center justify-center">
              <p>Initializing API client...</p>
          </div>
      );
  }
    
  return (
      <ApolloProvider client={client}>
          <ProjectsPage />
      </ApolloProvider>
  )
}

export default ProjectsPageWrapper;
