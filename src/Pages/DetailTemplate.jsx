import { IconButton } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import DefaultMainPage from "../components/DefaultMainPage/DefaultMainPage";
import SideBar from "../components/SideBar/SideBar";
import SideBarMobile from "../components/SideBarMobile/SideBarMobile";
import IconAssets from "../icons/IconAssets";
import IconControl from "../icons/IconControl";
import IconDashBoard from "../icons/IconDashBoard";


const DetailTemplate = (props) => {
  const [open, setOpen] = useState(false);
  const handleCLose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <SideBar>
        <div className="side-bar-icons">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <IconDashBoard color="#fff" size={45} />
          </IconButton>
          Reportes
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <IconAssets color="#fff" size={45} />
          </IconButton>
          Activos
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <IconControl color="#fff" size={45} />
          </IconButton>
          Control
        </div>
      </SideBar>

      <DefaultMainPage
        open={open}
        onOpenSideBar={() => {
          setOpen(true);
        }}
      ></DefaultMainPage>
      <SideBarMobile open={open} onClose={handleCLose} />
    </Fragment>
  );
};
export default DetailTemplate;
