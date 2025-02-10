"use client";
import ThemedContainer from "@/components/general/themedContainer";
import ThemeProvider from "@/provider/general/themeProvider";
import { useState } from "react";
import profilePicture from "@/../public/profile.jpg";
import PortfolioCard, {
  PortfolioCardType,
} from "@/components/general/portfolioCard";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  const projects = {
    all_projects: [],
    branding: [
      {
        ImageHref: profilePicture.src,
        category: "Branding",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
      {
        ImageHref: profilePicture.src,
        category: "Branding",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
      {
        ImageHref: profilePicture.src,
        category: "Branding",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
    ],
    marketing: [
      {
        ImageHref: profilePicture.src,
        category: "Marketing",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
      {
        ImageHref: profilePicture.src,
        category: "Marketing",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
      {
        ImageHref: profilePicture.src,
        category: "Marketing",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
    ],
    development: [
      {
        ImageHref: profilePicture.src,
        category: "Development",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
      {
        ImageHref: profilePicture.src,
        category: "Development",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
      {
        ImageHref: profilePicture.src,
        category: "Development",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
    ],
    design: [
      {
        ImageHref: profilePicture.src,
        category: "Design",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
      {
        ImageHref: profilePicture.src,
        category: "Design",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
      {
        ImageHref: profilePicture.src,
        category: "Design",
        title: "Creative Agency",
        button: "View Details",
        buttonHref: "#",
      },
    ],
  };

  return (
    <ThemeProvider>
      <ThemedContainer className="pt-10 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark w-full">
        <ThemedContainer className="container mx-auto">
          <ThemedContainer className="flex flex-wrap -mx-4">
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

          <ThemedContainer className="w-full flex flex-wrap justify-center -mx-4">
            <ThemedContainer className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {Object.keys(projects).map((project: string) => (
                  <li className="mb-1" key={project}>
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleProject(project)}
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm  mx-1 hover:bg-black/90 h-10 p-8  capitalize ${
                          showCard === project
                            ? "activeClasses shadow-current"
                            : "inactiveClasses text-body-color shadow-black  hover:text-white"
                        }`}
                      >
                        {project.split("_").join(" ")}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </ThemedContainer>
          </ThemedContainer>
          <ThemedContainer className="flex flex-wrap -mx-4">
            {Object.values(projects)
              .flat()
              .map((project: PortfolioCardType, index: number) => (
                <PortfolioCard
                  key={index}
                  ImageHref={project.ImageHref}
                  category={project.category}
                  title={project.title}
                  button={project.button}
                  buttonHref={project.buttonHref}
                  showCard={showCard}
                />
              ))}
          </ThemedContainer>
        </ThemedContainer>
      </ThemedContainer>
    </ThemeProvider>
  );
};

export default Portfolio;
