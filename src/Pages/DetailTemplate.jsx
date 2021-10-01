import { IconButton } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import DefaultMainPage from "../components/DefaultMainPage/DefaultMainPage";
import SideBar from "../components/SideBar/SideBar";
import SideBarMobile from "../components/SideBarMobile/SideBarMobile";
import IconAssets from "../icons/IconAssets";
import IconControl from "../icons/IconControl";
import IconDashBoard from "../icons/IconDashBoard";
import SideBarButton from "../components/SideBar/SideBarButton";
import IconSelector, {
  sideBarOptions,
} from "../components/SideBar/SideBarOptions";
import SideBarMobileButton from "../components/SideBarMobile/SideBarMobileButton";

const DetailTemplate = (props) => {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const handleCLose = () => {
    setOpen(false);
  };
  const handleClick = (page) => {
    setActivePage(page);
  };
  return (
    <Fragment>
      <SideBar>
        <div className="side-bar-icons">
          {sideBarOptions.map((label, index) => (
            <SideBarButton
              active={activePage === index}
              onClick={(e) => handleClick(index)}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <IconSelector
                  label={label}
                  color={activePage === index ? "#FF1E0A" : "#fff"}
                  size={45}
                />
              </IconButton>
              {label}
            </SideBarButton>
          ))}
        </div>
      </SideBar>

      <DefaultMainPage
        open={open}
        onOpenSideBar={() => {
          setOpen(true);
        }}
      ></DefaultMainPage>
      <SideBarMobile
        open={open}
        onClose={handleCLose}
        actions={sideBarOptions.map((label, index) => (
          <SideBarMobileButton onClick={(e) => handleClick(index)}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <IconSelector
                label={label}
                color={"#ffe500"}
                size={45}
              />
            </IconButton>
            {label}
          </SideBarMobileButton>
        ))}
      />
    </Fragment>
  );
};
export default DetailTemplate;
/**
<SideBarButton
            active={activePage === 0}
            onClick={(e) => handleClick(0)}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <IconDashBoard color="#fff" size={45} />
            </IconButton>
            Reportes
          </SideBarButton>
          <SideBarButton
            active={activePage === 1}
            onClick={(e) => handleClick(1)}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <IconAssets color="#fff" size={45} />
            </IconButton>
            Activos
          </SideBarButton>
          <SideBarButton
            active={activePage === 2}
            onClick={(e) => handleClick(2)}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <IconControl color="#fff" size={45} />
            </IconButton>
            Control
          </SideBarButton>
 */
