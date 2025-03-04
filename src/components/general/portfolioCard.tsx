"use client";

import { PortfolioCardType } from "@/helpers/general/projects";
import ThemedContainer from "./themedContainer";
import Image from "next/image";

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}: PortfolioCardType) => {
  return (
    <ThemedContainer>
      <ThemedContainer
        className={`w-full mx-4 sm:m-0 px-4 ${
          showCard === "" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <ThemedContainer className="relative mb-12 ">
          <ThemedContainer className="overflow-hidden brightness-50 rounded-[10px]">
            <Image
              src={ImageHref.toString()}
              width={500}
              height={500}
              alt="portfolio"
              className="w-full p-2 rounded-lg backdrop-blur-[14px] "
            />
          </ThemedContainer>
          <ThemedContainer className="relative z-10 mx-7 -mt-20 rounded-lg backdrop-blur-[14px] shadow-sm border-t-2 border-t-blue-700 shadow-current  dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </ThemedContainer>
        </ThemedContainer>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default PortfolioCard;
