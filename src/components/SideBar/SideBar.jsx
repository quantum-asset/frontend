import React from "react";
import "./SideBar.scss";
import logo from "./../../static/terpelisimo-logo-white3.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@material-ui/core";
import { cerrarSesionRedux } from "../../context/actions/sesionAction";
import { useUserValue } from "../../context/Sesion";
const SideBar = (props) => {
  const [{}, dispatch] = useUserValue();
  const { children } = props;
  return (
    <div className="main-side-bar">
      <div className="main-side-bar-actions">
        <div className="side-bar-image-container">
          <img src={logo} width="80%" alt="logo-terpelisimo" />
        </div>

        {children}
      </div>

      <div
        className="main-side-bar-logout"
        onClick={() => {
          cerrarSesionRedux(dispatch);
          //props.history.push("/")
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
  );
};
export default SideBar;
