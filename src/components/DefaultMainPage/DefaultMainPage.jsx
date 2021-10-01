import React from "react";
import TopBar from "../TopBar/TopBar";
import "./DefaultMainPage.scss";
import MainPageHeader from "./MainPageHeader";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SideBarButton from "../SideBar/SideBarButton";
import IconAssets from "../../icons/IconAssets";
import IconDashBoard from "../../icons/IconDashBoard";
const DefaultMainPage = (props) => {
  const { children, onOpenSideBar } = props;
  return (
    <div className="main-page-wrapper">
      <TopBar>
        <IconButton
          className="menu-button-mobile"
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={onOpenSideBar}
        >
          <MenuIcon />
        </IconButton>
        <SideBarButton></SideBarButton>
      </TopBar>
      <MainPageHeader />
      {children}
    </div>
  );
};
export default DefaultMainPage;
