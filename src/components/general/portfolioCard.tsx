"use client";

import { PortfolioCardType } from "@/helpers/general/projects";
import ThemedContainer from "./themedContainer";
import Image from "next/image";
import { EmergencyShare, GitHub } from "@mui/icons-material";
import projectCardStyles from "@/styles/components/general/projectCard.module.css";

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  description,
  githubLink,
  liveLink,
}: PortfolioCardType) => {
  return (
    <ThemedContainer
      className={`${projectCardStyles.mainContainer} ${
        showCard === "all projects" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <ThemedContainer className="relative mb-12">
        <ThemedContainer
          className={projectCardStyles.projectCardImageContainer}
        >
          <Image
            src={ImageHref.toString()}
            width={500}
            height={500}
            alt="portfolio"
            className={projectCardStyles.projectCardImage}
          />
        </ThemedContainer>
        <ThemedContainer
          className={projectCardStyles.projectCardTitleContainer}
        >
          <h3 className={projectCardStyles.projectCardTitle}>{title}</h3>
          <p>{description}</p>
          <a
            target="_blank"
            href={githubLink}
            className={projectCardStyles.projectCardRepoLink}
          >
            <GitHub />
          </a>
          <a
            target="_blank"
            href={liveLink}
            className={projectCardStyles.projectCardLiveLink}
          >
            <EmergencyShare />
          </a>
        </ThemedContainer>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default PortfolioCard;
