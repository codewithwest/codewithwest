"use client";
import { setTheme } from "@/redux/slice/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/components/settings/preferences/preferenceList.module.css";
import { ThemeType } from "@/helpers/general/theme";
import ThemedContainer from "@/components/general/themedContainer";

const PreferenceList = () => {
  const theme = useSelector(
    (state: { theme: { theme: ThemeType } }) => state.theme.theme.mode
  );
  const dispatch = useDispatch();

  const handleThemeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    newTheme?: string
  ) => {
    newTheme = e.target.value;
    dispatch(setTheme(newTheme));
  };
  return (
    <ThemedContainer className={styles.preferenceListThemedContainer}>
      <ThemedContainer
        className={`main-dark-box-shadow ${styles.preferenceCard}`}
      >
        <ThemedContainer className={styles.preferenceCardText}>
          Display Theme
        </ThemedContainer>
        <ThemedContainer className={styles.preferenceCardText}>
          <select
            id="theme-modes"
            name={theme}
            onChange={handleThemeChange}
            defaultValue={theme}
            className={styles.cardSelect}
          >
            <option className={styles.cardSelectOption} value="light">
              light
            </option>
            <option className={styles.cardSelectOption} value="dark">
              dark
            </option>
          </select>
        </ThemedContainer>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default PreferenceList;
