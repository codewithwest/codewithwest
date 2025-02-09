"use client";
import React from "react";
import ThemeProvider from "@/provider/general/themeProvider";
import ThemedContainer from "@/components/general/themedContainer";
// import { useDispatch, useSelector } from "react-redux";
// import { ThemeType } from "@/helpers/general/theme";
// import { setTheme } from "@/redux/slice/themeSlice";
import ThemedButton from "@/components/general/themedButton";
// import mainStyles from "@/styles/app/main.module.css";
import ThemedText from "@/components/general/ThemedText";

const Home = () => {
  // const theme = useSelector(
  //   (state: { theme: { theme: ThemeType } }) => state.theme.theme.mode
  // );
  // const dispatch = useDispatch();
  // const handleThemeChange = (newTheme?: string) => {
  //   // newTheme = e.target.value;
  //   dispatch(setTheme(newTheme));
  // };

  return (
    <ThemeProvider>
      <ThemedContainer className="flex flex-col h-full">
        <ThemedContainer className="p-16">
          <ThemedContainer className="p-8  shadow-current  shadow mt-24">
            <ThemedContainer className="grid grid-cols-1 md:grid-cols-3">
              <ThemedContainer className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <ThemedContainer>
                  <ThemedText
                    className="font-bold text-gray-700 text-xl"
                    value={"7"}
                  />
                  <ThemedText className="text-gray-400" value="Projects" />
                </ThemedContainer>
                <ThemedContainer>
                  <ThemedText
                    className="font-bold text-gray-700 text-xl"
                    value="3-4"
                  />
                  <ThemedText className="text-gray-400" value="Years" />
                </ThemedContainer>
                <ThemedContainer>
                  <ThemedText
                    className="font-bold text-gray-700 text-xl"
                    value="6"
                  />
                  <ThemedText className="text-gray-400" value="Rating" />
                </ThemedContainer>
              </ThemedContainer>
              <ThemedContainer className="relative">
                <ThemedContainer className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <svg
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </ThemedContainer>
              </ThemedContainer>
              <ThemedContainer className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <ThemedButton
                  onClick={() => {}}
                  className="text-white py-2 px-2 uppercase rounded hover:shadow-current  shadow hover:shadow-sm font-medium transition transform hover:-translate-y-0.5"
                >
                  Connect
                </ThemedButton>
                <ThemedButton
                  onClick={() => {}}
                  className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-900 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Email
                </ThemedButton>
              </ThemedContainer>
            </ThemedContainer>
            <ThemedContainer className="mt-20 text-center border-b pb-12">
              <ThemedText
                className="text-4xl font-medium"
                value="Jonas Lekgau"
              />
              {/* <ThemedText className="font-light text-gray-500" value="26" /> */}
              <ThemedText
                className="font-light text-gray-600 mt-3"
                value="Pretoria, South Africa"
              />
              <ThemedText
                className="mt-8 text-gray-500"
                value="Backend Developer - Platform Engineer"
              />
              <ThemedText
                className="text-m2 mt-2 text-gray-500"
                value="MERN | LAMP | JAVA | Docker | Jenkins"
              />
            </ThemedContainer>
            <ThemedContainer className="mt-12 flex flex-col justify-center">
              <ThemedText
                className="text-gray-600 text-center font-light lg:px-16"
                value="
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              "
              />
              <ThemedButton
                className="  py-2 px-4  font-medium mt-4"
                onClick={() => {}}
              >
                Show more
              </ThemedButton>
            </ThemedContainer>
          </ThemedContainer>
        </ThemedContainer>
      </ThemedContainer>
    </ThemeProvider>
  );
};

export default Home;
