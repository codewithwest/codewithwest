"use client";
import ThemeProvider from "@/provider/general/themeProvider";
import styles from "@/styles/app/settings/preferences/preferences.module.css";
import PreferenceList from "@/components/settings/preferences/preferenceList";
import ThemedThemedContainer from "@/components/general/themedContainer";
const Preferences = () => {
  return (
    <ThemeProvider>
      <ThemedThemedContainer className={styles.preferences}>
        <PreferenceList />
      </ThemedThemedContainer>
    </ThemeProvider>
  );
};

export default Preferences;
