import React from "react";
import Avatar from '@mui/material/Avatar';

import TopBar from "../TopBar/TopBar";
import "./DefaultMainPage.scss";
import MainPageHeader from "./MainPageHeader";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SideBarButton from "../SideBar/SideBarButton";
import IconAssets from "../../icons/IconAssets";
import IconDashBoard from "../../icons/IconDashBoard";
import Title from "../Title/Title";
const DefaultMainPage = (props) => {
  const { children, onOpenSideBar, label } = props;
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
        <Title title={label} />
        <Avatar alt="Tony Stark" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/715d519f-0e05-4956-8f99-a0dbfd96709f/d2qc5jy-ecc1acd3-c013-4a9e-a6ac-92dbba8c81aa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxNWQ1MTlmLTBlMDUtNDk1Ni04Zjk5LWEwZGJmZDk2NzA5ZlwvZDJxYzVqeS1lY2MxYWNkMy1jMDEzLTRhOWUtYTZhYy05MmRiYmE4YzgxYWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u9FXL-U20gVZ4miAGk13OhvpovI1cBFDzBeHrh2fLAc" />
      </TopBar>
      <MainPageHeader />
      {children}
    </div>
  );
};
export default DefaultMainPage;
