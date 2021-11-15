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
import { cerrarSesionRedux } from "../../../Context/actions/sesionAction";
import { useUserValue } from "../../../Context/Sesion";
import { UsuarioController } from "../../../Controller/UsuarioControler";
const createFile = (name, size, type, blob) => {
  const file = new File([blob], name, { type });
  Object.defineProperty(file, "size", {
    get() {
      return size;
    },
  });
  return file;
};
function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
function blobToFile(theBlob, fileName) {
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}
export default function (props) {
  const [imageUser, setImageUser] = React.useState(undefined);
  const { title, onChangeMobileMenu } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [{ auth, usuario }, dispatch] = useUserValue();
  const init = async () => {
    console.log("Navbar id usuario", usuario);

    const { ID_ARCHIVO } = usuario;
    if (ID_ARCHIVO && ID_ARCHIVO.toString() !== "null") {
      const { success, message, data } = await UsuarioController.getImage(
        ID_ARCHIVO
      );
      if (success) {
        setImageUser(data.file);
      } else {
        console.err("Error on image profile: ", message);
      }
      //console.log("Navbar data", data);

      //let file = createFile("kamui.png", 1200, "image/png", [data]);

      // setImageUser(file);

      //console.log("Navbar file", data);
      //const base64 = await blobToBase64([data]);
      // console.log("Navbar archivo base64", base64);
      // setImageUser(file);
      /*   const base64Archivo = await blobToBase64(
        createFile("profile.png", data.length, "image/png", data)
      );
      console.log("Navbar archivo base64", base64Archivo); */
      //setImageUser(createFile("profile.png", data.length, "image/png", data));
    } else {
      console.log("Navbar no hay id-archivo");
    }
  };
  React.useEffect(() => {
    console.log("NAVBAR usuario", usuario);
    console.log("NAVBAR props", props);
    setNombreUsuario(`${usuario.NOMBRES} ${usuario.PRIMER_APELLIDO}`);
    init();
  }, []);
  const handleCerrarSesion = () => {
    cerrarSesionRedux(dispatch);
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
  const [nombreUsuario, setNombreUsuario] = React.useState("");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        style={{
          backgroundColor: "white",
          color: "black",
          height: "65px",
          borderBottom: "7px solid " + YELLOW,
        }}
      >
        <Toolbar variant="dense">
          <div style={{ width: "120px", height: "120px" }}>
            <img width="100%" src={imageUser} alt="blablandca" />
          </div>
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
          <div className="navbar-nombre">{nombreUsuario}</div>
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
              alt={nombreUsuario || "avatar-name"}
              src={
                imageUser ||
                "https://img.vixdata.io/pd/webp-large/es/sites/default/files/btg/tech.batanga.com/files/Asi-es-como-aplicas-la-tecnologia-de-Tony-Stark-a-diario-sin-darte-cuenta-1.jpg"
              }
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
            <MenuItem onClick={handleCerrarSesion}>Cerrar Sesion</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
