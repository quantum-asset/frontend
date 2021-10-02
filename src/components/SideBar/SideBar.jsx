import React from "react";
import "./SideBar.scss";
import logo from "./../../static/terpelisimo-logo-white.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@material-ui/core";
const SideBar = (props) => {
  const { children } = props;
  return (
    <div className="main-side-bar">
      <div className="main-side-bar-actions">
        <div className="image-container">
          <img src={logo} width="80%" alt="logo-terpelisimo" />
        </div>

        {children}
      </div>

      <div className="main-side-bar-logout" onClick={()=>{props.history.push("/")}}>
        {" "}
        <IconButton
          style={{color:"white"}}
          aria-label="upload picture"
          component="span"
          size="medium"
        >
          <LogoutIcon color="#fff" size={45} />
        </IconButton>
        <div> Cerrar</div> <div>Sesión</div>
      </div>
    </div>
  );
};
export default SideBar;
