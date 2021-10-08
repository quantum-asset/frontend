import { IconButton } from "@mui/material";
import React from "react";
import logo from "./../../static/logo-h-nb3.png";
import "./SideBarMobile.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import { Close } from "@material-ui/icons";
import { cerrarSesionRedux } from "../../context/actions/sesionAction";
import { useUserValue } from "../../context/Sesion";
const SideBarMobile = (props) => {
  const [{ }, dispatch] = useUserValue();

  const { actions, open, onClose } = props;
  if (open)
    return (
      <div className="main-side-bar-mobile">
        <div className="side-bar-mobile-actions">
          <div className="image-container-mobile">
            <img src={logo} height="60px" alt="logo-terpelisimo" />
            <IconButton
              style={{ color: "white" }}
              aria-label="upload picture"
              component="span"
              size="medium"
              onClick={()=>{onClose?.()}}
            >
              <Close
                style={{ color: "#FF1E0A", 
                justifySelf: "flex-end" }}
              />
            </IconButton>
          </div>
          {actions}
        </div>

        <div className="side-bar-mobile-logout" onClick={()=>{
          cerrarSesionRedux(dispatch);
          }}>
          {" "}
          <IconButton
            aria-label="upload picture"
            component="span"
            size="medium"
          >
            <LogoutIcon style={{ color: "#ffe500" }} />
          </IconButton>
          <div> Cerrar Sesión</div>
        </div>
      </div>
    );
  else return <></>;
};
export default SideBarMobile;
