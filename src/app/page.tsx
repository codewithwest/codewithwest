"use client";
import React from "react";
import ThemeProvider from "@/provider/general/themeProvider";
import ThemedContainer from "@/components/general/themedContainer";
import ThemedText from "@/components/general/ThemedText";
import profileImage from "@/../public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import mainPageStyles from "@/styles/app/mainPage.module.css";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_COUNT } from "@/provider/data_schema/projects.gql";

const Home = () => {
  const { loading, data } = useQuery(GET_PROJECTS_COUNT, {
    variables: { limit: 10, page: 1 },

    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  const projectData = useMemo(() => {
    return loading ? [] : data?.getProjects?.pagination;
  }, [loading, data]);

  return (
    <ThemeProvider>
      <ThemedContainer className={mainPageStyles.mainProfileContainer}>
        <ThemedContainer className={mainPageStyles.innerProfileContainer}>
          <ThemedContainer className={mainPageStyles.profileHeaderItems}>
            <ThemedContainer className={mainPageStyles.statsProfileContainer}>
              <ThemedContainer>
                <ThemedText
                  className={mainPageStyles.statsProfileText}
                  value={projectData?.totalItems ?? 0}
                />
                <ThemedText className="text-gray-400" value="Projects" />
              </ThemedContainer>
              <ThemedContainer>
                <ThemedText
                  className={mainPageStyles.statsProfileText}
                  value="3"
                />
                <ThemedText className="text-gray-400" value="Years" />
              </ThemedContainer>
              <ThemedContainer>
                <ThemedText
                  className={mainPageStyles.statsProfileText}
                  value="7.5"
                />
                <ThemedText className="text-gray-400" value="Rating" />
              </ThemedContainer>
            </ThemedContainer>
            <ThemedContainer className="relative">
              <ThemedContainer className={mainPageStyles.profileImage}>
                <Image
                  src={profileImage}
                  alt="Profile"
                  className="rounded-full w-full"
                />
              </ThemedContainer>
            </ThemedContainer>
            <ThemedContainer className={mainPageStyles.contactProfileContainer}>
              <Link
                href={"https://www.linkedin.com/in/codewithwest/"}
                target="_blank"
                className={mainPageStyles.contentItems}
              >
                <LinkedIn />
                Connect
              </Link>
              <Link
                href={
                  "mailto:jonaslekgau@gmail.com?subject=Inquiry from your profile"
                }
                className={mainPageStyles.contentItems}
              >
                <Email />
                Email
              </Link>
            </ThemedContainer>
          </ThemedContainer>
          <ThemedContainer className={mainPageStyles.name}>
            <ThemedText className="text-4xl font-medium" value="Jonas Lekgau" />
            <ThemedText
              className="mt-8"
              value="Backend Developer - Platform Engineer"
            />
            <ThemedText
              className={mainPageStyles.techStacks}
              value="MERN | LAMP | Flask | Go | JAVA | Docker | Jenkins"
            />
          </ThemedContainer>
          <ThemedContainer className={mainPageStyles.bioContainer}>
            <ThemedText
              className={mainPageStyles.bio}
              value="
                Welcome! I'm Jonas Lekgau, a Software/Platform Engineer with 
                3 years of experience building and scaling high-performance 
                applications. I'm passionate about automation, systems development
                performance optimization, system architecture and others. 
                My experience includes, a work integrated learning program and 
                backend engineer at one of the best commerce development companies 
                in the world [Vaimo].I'm currently working creating a personal 
                alarm system that will be integrated in a custom made OS.
              "
            />

            <ThemedContainer className="text-center center-content items-center mt-2 font-light lg:px-16 w-full">
              <Link
                className="text-lg underline"
                href={"https://github.com/codewithwest"}
                target="_blank"
              >
                <GitHub />
              </Link>
            </ThemedContainer>

            <Link
              href={
                "https://docs.google.com/document/d/19fdnYJYhasnL9dkwBTbl4QdGZKK1mFG6/edit?usp=drive_link&ouid=100736280396810362309&rtpof=true&sd=true"
              }
              target="_blank"
              className={mainPageStyles.resumeLink}
            >
              View Resume
            </Link>
          </ThemedContainer>
        </ThemedContainer>
      </ThemedContainer>
    </ThemeProvider>
  );
};

export default Home;
