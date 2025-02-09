"use client";
import React from "react";
import Link from "next/link";
import ThemedContainer from "@/components/general/themedContainer";
import { BackHand } from "@mui/icons-material";
import ThemeProvider from "@/provider/general/themeProvider";

const Register = () => {
  return (
    <ThemeProvider>
      <ThemedContainer className="flex flex-col h-full  ">
        {[123].map((key: number) => {
          return (
            <Link key={key} className="text-3xl" href={"/"}>
              <BackHand />
            </Link>
          );
        })}
      </ThemedContainer>
    </ThemeProvider>
  );
};

export default Register;
