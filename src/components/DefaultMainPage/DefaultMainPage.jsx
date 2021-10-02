import React from "react";
import Avatar from "@mui/material/Avatar";

import TopBar from "../TopBar/TopBar";
import "./DefaultMainPage.scss";
import MainPageHeader from "./MainPageHeader";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";
import SideBarButton from "../SideBar/SideBarButton";
import IconAssets from "../../icons/IconAssets";
import IconDashBoard from "../../icons/IconDashBoard";
import Title from "../Title/Title";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const navBarStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: { flexGrow: 1 },
  growmid: { flexGrow: 0.05 },
}));

const logoStyles = makeStyles((theme) => ({
  largeLogo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const DefaultMainPage = (props) => {
  const { children, onOpenSideBar, label } = props;
  const classes = logoStyles();
  const classesNavBar = navBarStyles();

  const redirect = (path) => {
    //window.location.replace("/jp");
    console.log("Redicreccion desde NavBar");
    props.history.push(`${path}`);
  };
  const onNavigateHome = () => {
    window.location.replace("/");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickAvatarMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAvatarMenu = () => {
    //cerrarSesion(dispatch, dispatchBackdrop);
    setAnchorEl(null);
  };

  const handleClickPerfil = () => {
    //cerrarSesion(dispatch,dispatchBackdrop);
    /*   const userRol = usuario.rol.nombre.toLowerCase(); //nombre seria el rol
      console.log('rolXXX-> ',userRol);
      props.history.push(`${userRol}/perfil`); */
    //props.history.push("/perfil");
    setAnchorEl(null);
  };
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
        <span className="avatar-menu">
          <Avatar
            alt="Tony Stark"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/715d519f-0e05-4956-8f99-a0dbfd96709f/d2qc5jy-ecc1acd3-c013-4a9e-a6ac-92dbba8c81aa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxNWQ1MTlmLTBlMDUtNDk1Ni04Zjk5LWEwZGJmZDk2NzA5ZlwvZDJxYzVqeS1lY2MxYWNkMy1jMDEzLTRhOWUtYTZhYy05MmRiYmE4YzgxYWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u9FXL-U20gVZ4miAGk13OhvpovI1cBFDzBeHrh2fLAc"
          />
          <IconButton
            aria-haspopup="true"
            color="primary"
            onClick={handleClickAvatarMenu}
            className={classes.margin}
          >
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => {
              setAnchorEl(null);
            }}
          >
            <MenuItem key={1} onClick={handleClickPerfil}>
              Perfil
            </MenuItem>
            <MenuItem key={2} onClick={handleCloseAvatarMenu}>
              Cerrar sesión
            </MenuItem>
          </Menu>
        </span>
      </TopBar>
    
      {children}
    </div>
  );
};
export default DefaultMainPage;
