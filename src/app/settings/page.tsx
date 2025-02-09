"use client";
import React from "react";
import ThemeProvider from "../../provider/general/themeProvider";
import styles from "@/styles/app/settings/settings.module.css";
import { SettingsGrid } from "../../components/settings/settingsGrid";
import ThemedContainer from "@/components/general/themedContainer";

const Settings = () => {
  return (
    <ThemeProvider>
      <ThemedContainer className={styles.settings}>
        <SettingsGrid />
      </ThemedContainer>
    </ThemeProvider>
  );
};

export default Settings;
