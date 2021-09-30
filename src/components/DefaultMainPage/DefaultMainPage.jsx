import React from "react";
import TopBar from "../TopBar/TopBar";
import "./DefaultMainPage.scss";
import MainPageHeader from "./MainPageHeader";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
const DefaultMainPage = (props) => {
  const { children, onOpenSideBar, open } = props;
  return (
    <div className="main-page-wrapper">
      <TopBar>
        {open && (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={onOpenSideBar}
          >
            <MenuIcon />
          </IconButton>
        )}
      </TopBar>
      <MainPageHeader />
      {children}
    </div>
  );
};
export default DefaultMainPage;
