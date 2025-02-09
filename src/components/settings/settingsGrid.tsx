import ThemedContainer from "../general/themedContainer";
import { SettingsCard } from "./settingsCard";
import styles from "@/styles/components/settings/settingsGrid.module.css";

export const SettingsGrid = () => {
  return (
    <ThemedContainer className={styles.settingsGridContainer}>
      <SettingsCard
        url="settings/preferences"
        header="Preferences"
        description="Update your display preferences"
        iconSize={33}
      />
    </ThemedContainer>
  );
};
