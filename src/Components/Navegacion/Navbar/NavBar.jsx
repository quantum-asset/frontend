import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import "./NavBar.scss";
import { YELLOW } from "../../../Theme/MainColors";
export default function NavBar(props) {
  const { title, onChangeMobileMenu } = props;
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenMobileMenu = () => {
    onChangeMobileMenu?.(true);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          height: "65px",
          borderBottom: "7px solid " + YELLOW,
        }}
      >
        <Toolbar variant="dense">
          <div className="navbar-menu-icon">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </div>

          {/*  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography> */}
          <h2 className="navbar-title" style={{ flexGrow: 1 }}>
            {title}
          </h2>
          {/** SPACE */}

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            {" "}
            <Avatar
              style={{ margin: "0%" }}
              alt="Tony Stark"
              src="https://img.vixdata.io/pd/webp-large/es/sites/default/files/btg/tech.batanga.com/files/Asi-es-como-aplicas-la-tecnologia-de-Tony-Stark-a-diario-sin-darte-cuenta-1.jpg"
            />
            <ExpandMore />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar Sesion</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
