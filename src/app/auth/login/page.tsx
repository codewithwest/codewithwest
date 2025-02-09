"use client";
import React from "react";
import Link from "next/link";
import ThemedContainer from "@/components/general/themedContainer";
import { AppRegistration, Home } from "@mui/icons-material";
import ThemeProvider from "@/provider/general/themeProvider";

const Login = () => {
  return (
    <ThemeProvider>
      <ThemedContainer className="flex flex-col h-full">
        {[123].map((key: number) => {
          return (
            <>
              <Link key={key} className="text-3xl" href={"/"}>
                <Home />
              </Link>
              <Link key={2} className=" text-3xl" href={"/auth/register"}>
                <AppRegistration />
              </Link>
            </>
          );
        })}
      </ThemedContainer>
    </ThemeProvider>
  );
};

export default Login;
