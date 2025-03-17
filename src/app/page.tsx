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
const Home = () => {
  return (
    <ThemeProvider>
      <ThemedContainer className={mainPageStyles.mainProfileContainer}>
        <ThemedContainer className={mainPageStyles.innerProfileContainer}>
          <ThemedContainer className={mainPageStyles.profileHeaderItems}>
            <ThemedContainer className={mainPageStyles.statsProfileContainer}>
              <ThemedContainer>
                <ThemedText
                  className={mainPageStyles.statsProfileText}
                  value={"5"}
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
                  "malito:jonaslekgau@gmail.com?subject=Inquiry from your profile"
                }
                className={mainPageStyles.contentItems}
              >
                <Email />
                Email
              </Link>
            </ThemedContainer>
          </ThemedContainer>
          <ThemedContainer className="mt-20 text-center border-b pb-12">
            <ThemedText className="text-4xl font-medium" value="Jonas Lekgau" />
            {/* <ThemedText className="font-light text-gray-500" value="26" /> */}
            <ThemedText
              className="font-light text-gray-600 mt-3"
              value="Pretoria, South Africa"
            />
            <ThemedText
              className="mt-8  "
              value="Backend Developer - Platform Engineer"
            />
            <ThemedText
              className="text-m2 mt-2 text-gray-500"
              value="MERN | LAMP | JAVA | Docker | Jenkins"
            />
          </ThemedContainer>
          <ThemedContainer className="mt-12 flex flex-col justify-center">
            <ThemedText
              className="text-center font-light lg:px-16"
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
              className="text-gray-300 py-2 px-4 m-auto font-medium mt-4"
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
