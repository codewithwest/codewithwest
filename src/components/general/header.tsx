"use client";
import headerStyles from "@/styles/components/general/header.module.css";
import ThemedContainer from "@/components/general/themedContainer";
import {
  AddBoxOutlined,
  ExpandLess,
  ExpandMore,
  Help,
  HelpCenter,
  Info,
  Logout,
  Settings,
  SupportAgent,
} from "@mui/icons-material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { Collapse } from "@mui/material";
import NavigationBar from "./navigationBar";
import Image from "next/image";
import codewithwest from "@/../public/codewithwest.png";

export const Header = ({}) => {
  // const pageHeader = useSelector(
  //   (state: { pageHeader: { value: pageHeaderType } }) =>
  //     state.pageHeader.value.value
  // );
  const [open, setOpen] = useState(false);

  const toggleDropDown = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const [openMore, setOpenMore] = useState(false);

  const toggleDropDownMore = useCallback(() => {
    setOpenMore(!openMore);
  }, [openMore]);

  // const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("click outside", open);
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [toggleDropDown, open]);
  return (
    <header className={`${headerStyles.header}`}>
      <ThemedContainer className={headerStyles.leadingHeader}>
        <Link href={"/"}>
          <Image
            src={codewithwest}
            alt="back"
            width={160}
            height={160}
            className="rounded-full"
          />
        </Link>
        {/* <ThemedText value={pageHeader} className={headerStyles.headerText} /> */}
        <ThemedContainer
          className={`${headerStyles.dropDownListContainer} ${
            open ? "flex" : "hidden"
          }`}
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <List
            sx={{ width: "100%", maxWidth: 360 }}
            component="nav"
            className={headerStyles.dropDownList}
            aria-labelledby="nested-list-subheader"
          >
            {false ? null : (
              <Link className="center-content" href={"/program/new"}>
                <ListItemButton
                  className="drop-down-list-item"
                  onClick={() => toggleDropDown()}
                >
                  <ListItemIcon style={{ color: "inherit" }}>
                    <AddBoxOutlined />
                  </ListItemIcon>
                  <ListItemText primary="New Program" />
                </ListItemButton>
              </Link>
            )}

            <Link className="center-content" href={"/settings"}>
              <ListItemButton
                className="drop-down-list-item"
                onClick={() => toggleDropDown()}
              >
                <ListItemIcon style={{ color: "inherit" }}>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </Link>
            {false ? (
              <ListItemButton
                className="drop-down-list-item"
                onClick={() => {
                  toggleDropDown();
                  // logout();
                }}
              >
                <ListItemIcon style={{ color: "inherit" }}>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            ) : null}
            <ListItemButton onClick={toggleDropDownMore}>
              <ListItemIcon style={{ color: "inherit" }}>
                <Info />
              </ListItemIcon>
              <ListItemText primary="Help & Support" />
              {openMore ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMore} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link href={"/"}>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    className="drop-down-list-item"
                    onClick={() => toggleDropDown()}
                  >
                    <ListItemIcon style={{ color: "inherit" }}>
                      <SupportAgent />
                    </ListItemIcon>
                    <ListItemText primary="Contact Support" />
                  </ListItemButton>
                </Link>
                <Link href={"/"}>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    className="drop-down-list-item"
                    onClick={() => toggleDropDown()}
                  >
                    <ListItemIcon style={{ color: "inherit" }}>
                      <HelpCenter />
                    </ListItemIcon>
                    <ListItemText primary="FAQ" />
                  </ListItemButton>
                </Link>
                <Link href={"/"}>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    className="drop-down-list-item"
                    onClick={() => toggleDropDown()}
                  >
                    <ListItemIcon style={{ color: "inherit" }}>
                      <Help />
                    </ListItemIcon>
                    <ListItemText primary="Info" />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
          </List>
        </ThemedContainer>
      </ThemedContainer>
      {/* <ThemedButton onClick={toggleDropDown}>
        {open ? (
          <DragIndicator style={{ fontSize: 45 }} />
        ) : (
          <GrainIcon style={{ fontSize: 45 }} />
        )}
      </ThemedButton> */}

      <NavigationBar />
    </header>
  );
};
