import React, { Fragment, useEffect, useState } from "react";
import "./SideBar.scss";
import logo from "./../../../Static/terpelisimo-logo-white3.png";
import logoMobile from "./../../../Static/logo-h-nb3.png";

import LogoutIcon from "@mui/icons-material/Logout";
import IconSelector, { sideBarOptions } from "./SideBarOptions";
import SideBarButton from "./SideBarButton";
import { Close } from "@mui/icons-material";
import SideBarMobileButton from "./SideBarMobileButton";
import { IconButton } from "@mui/material";
import { cerrarSesionRedux } from "../../../Context/actions/sesionAction";
import { useUserValue } from "../../../Context/Sesion";

const SideBar = (props) => {
  const [{ auth, usuario }, dispatch] = useUserValue();

  const myOptions = sideBarOptions(props.base) || [];
  const { openMobileMenu, onChangeMobileMenu } = props;
  const [activePage, setActivePage] = useState(1);
  //const [open, setOpen] = useState(true);
  const [currentLabel, setCurrentLabel] = useState(myOptions[1].title);
  const [localOpenMobileMenu, setLocalOpenMobileMenu] = useState(false);
  useEffect(() => {
    setLocalOpenMobileMenu(openMobileMenu);
  }, [openMobileMenu]);

  const handleChangeCurrentLable = (newLabel) => {
    setCurrentLabel(newLabel);
  };
  // const handleCLose = () => {
  //   setOpen(false);
  // };
  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <Fragment>
      <div className="main-side-bar">
        <div className="main-side-bar-actions">
          <div className="side-bar-image-container">
            <img src={logo} width="80%" alt="logo-terpelisimo" />
          </div>
          {myOptions.map(({ label, redirect, title }, index) => (
            <SideBarButton
              active={activePage === index}
              onClick={(e) => {
                handleClick(index);
                console.log("GO TO", redirect);
                props.history.push(`/${redirect}`);
                handleChangeCurrentLable(title);
              }}
            >
              <IconSelector
                label={label}
                color={activePage === index ? "#bf8f0b" : "#fff"}
                //color={activePage === index ? "rgb(155, 111, 6)" : "#fff"}

                size={40}
              />

              {label}
            </SideBarButton>
          ))}
        </div>
        {/**LOG OUT */}
        <div
          className="main-side-bar-logout"
          onClick={() => {
           const resposne= cerrarSesionRedux(dispatch);
console.log("logoutttttt",resposne);
          }}
        >
          {" "}
          <IconButton
            style={{ color: "white" }}
            aria-label="upload picture"
            component="span"
            size="medium"
          >
            <LogoutIcon color="#fff" size={45} />
          </IconButton>
          <div> Cerrar</div> <div>Sesión</div>
        </div>
      </div>
      {/** MOBILE MENU */}
      {localOpenMobileMenu && (
        <div className="main-side-bar-mobile-container" onClick={() => {
          onChangeMobileMenu?.(false);
        }}>
          <div className="main-side-bar-mobile"onClick={(e)=>{e.preventDefault()}}>
            <div className="side-bar-mobile-actions">
              <div className="image-container-mobile">
                <img src={logoMobile} height="50px" alt="logo-terpelisimo" />
                <IconButton
                  style={{ color: "white" }}
                  aria-label="upload picture"
                  component="span"
                  size="medium"
                  onClick={() => {
                    onChangeMobileMenu?.(false);
                  }}
                >
                  <Close
                    style={{ color: "#af801b", justifySelf: "flex-end" }}
                  />
                </IconButton>
              </div>

              {myOptions.map(({ label, redirect, title }, index) => (
                <SideBarMobileButton
                  onClick={(e) => {
                    handleClick(index);
                    handleChangeCurrentLable(title);

                    props.history.push(`/${redirect}`);
                    onChangeMobileMenu?.(false);
                    //setOpen(false);
                  }}
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <IconSelector label={label} color={"#af801b"} size={45} />
                  </IconButton>
                  {label}
                </SideBarMobileButton>
              ))}
            </div>

            <div
              className="side-bar-mobile-logout"
              onClick={() => {
                const resposne= cerrarSesionRedux(dispatch);
                console.log("logoutttttt",resposne);
              }}
            >
              {" "}
              <IconButton
                aria-label="upload picture"
                component="span"
                size="medium"
              >
                <LogoutIcon style={{ color: "#af801b" }} />
              </IconButton>
              <div> Cerrar Sesión</div>
            </div>
          </div>
          <div className="layer-side-bar-mobile"></div>
        </div>
      )}
    </Fragment>
  );
};
export default SideBar;
