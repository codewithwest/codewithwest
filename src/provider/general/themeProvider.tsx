"use client";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Header } from "@/components/general/header";
import styles from "@/styles/provider/general/themeProvider.module.css";
import AuthWrapper from "../auth/authWrapper";
import { themeMode } from "@/redux/slice/themeSlice";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useSelector(themeMode);

  return (
    <body className={`${theme.mode} ${styles.body}`}>
      <AuthWrapper>
        <Header />

        <main className={styles.main}>
          {/* <NavigationBar /> */}
          <section className={styles.section}>{children}</section>
        </main>
      </AuthWrapper>
    </body>
  );
};

export default ThemeProvider;
