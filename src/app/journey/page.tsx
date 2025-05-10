"use client";
import ThemedContainer from "@/components/general/themedContainer";
import ThemeProvider from "@/provider/general/themeProvider";
import journey from "@/provider/data/journey.json";
import { journeyItemType } from "@/helpers/general/journey";
import journeyListItem from "@/components/general/journeyListItem";

const Journey = () => (
  <ThemeProvider>
    <ThemedContainer className="w-full flex sm:mt-0 mt-4">
      <h1 className="text-2xl m-auto font-bold">My Journey</h1>
    </ThemedContainer>
    <ThemedContainer className="w-full max-w-3xl px-4 py-16 mx-auto">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 mb-8">
        {journey
          .filter((item) => item.type === "work")
          .map((journeyItem: journeyItemType, index: number) =>
            journeyListItem(journeyItem, index)
          )}
      </ol>
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {journey
          .filter((item) => item.type === "education")
          .map((journeyItem: journeyItemType, index: number) =>
            journeyListItem(journeyItem, index)
          )}
      </ol>
    </ThemedContainer>
  </ThemeProvider>
);

export default Journey;
