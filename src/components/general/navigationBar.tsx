import {
  AccountCircle,
  AutoGraph,
  Close,
  FlashOn,
  More,
} from "@mui/icons-material";
import Link from "next/link";
import ThemedText from "./ThemedText";
import styles from "@/styles/components/general/navigationBar.module.css";
import ThemedContainer from "./themedContainer";
import ThemedButton from "./themedButton";
import { useState } from "react";

const NavigationBar = () => {
  const [menuHidden, setMenuHidden] = useState(true);

  const handleMenuClick = () => {
    const navigationMenu = document.getElementById("navigationMenu");
    if (navigationMenu) {
      if (navigationMenu.style.display === "flex") {
        navigationMenu.style.display = "none";
        setMenuHidden(true);
      } else {
        navigationMenu.style.display = "flex";
        setMenuHidden(false);
      }
    }
  };

  return (
    <>
      <ThemedButton className={styles.menuButton} onClick={handleMenuClick}>
        {menuHidden ? <ThemedText value="Menu" /> : <Close />}
      </ThemedButton>

      <nav className={styles.navigationThemedContainer} id="navigationMenu">
        {/* <Link className={styles.navigationLink} href={"/"}>
          <ThemedText value="More" className={styles.navigationText} />
          <ThemedContainer className={styles.navigationIcon}>
            <FlashOn fontSize="inherit" />
          </ThemedContainer>
        </Link> */}
        <Link className={styles.navigationLink} href={"/journey"}>
          <ThemedText value="Journey" className={styles.navigationText} />

          <ThemedContainer className={styles.navigationIcon}>
            <AutoGraph fontSize="inherit" />
          </ThemedContainer>
        </Link>
        <Link className={styles.navigationLink} href={"/projects"}>
          <ThemedText value="Projects" className={styles.navigationText} />

          <ThemedContainer className={styles.navigationIcon}>
            <AccountCircle fontSize="inherit" />
          </ThemedContainer>
        </Link>

        <Link className={styles.navigationLink} href={"/"}>
          <ThemedText value="Profile" className={styles.navigationText} />

          <ThemedContainer className={styles.navigationIcon}>
            <More fontSize="inherit" />
          </ThemedContainer>
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;
