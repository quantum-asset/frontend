import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Pages/Home";
import EncargadoControlRouter from "./EncargadoControlRouter";
import EncargadoRegistroActivosRouter from "./EncargadoRegistroActivosRouter";
import EncargadoTomaInventarioRouter from "./EncargadoTomaInventarioRouter";
import "../styles/App.scss";
import { useUserValue } from "../Context/Sesion";
import { inicializarSesion } from "../Context/actions/sesionAction";
import { useEffect } from "react";
import Recover from "../Pages/Recover";
import { useBackDropValue } from "../Context/backdrop";
import { Backdrop, CircularProgress } from "@mui/material";
//import FileItemProps from "../TESTS/FileItemProps";
function App(props) {
  const [{ auth, usuario }, dispatch] = useUserValue();
  const [{ openBackDrop, mensajeBD }, dispatchBackdrop] = useBackDropValue();

  useEffect(() => {
    if (!auth) {
      console.log("MAINAPP", usuario, auth);
      const res = inicializarSesion(dispatch);
      console.log("APP", res);
    }
  }, [auth]);

  return (
    <Router>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
        onClick={() => {}}
      >
        <CircularProgress color="inherit" />
        {mensajeBD || "Cargando..."}
      </Backdrop>
      <Route exact path="/" component={(props) => <Home {...props} />} />
      <Route
        exact
        path="/recover"
        component={(props) => <Recover {...props} />}
      />
      <Route
        exact
        path="/recover/:codigo"
        component={(props) => <Recover {...props} />}
      />
      <Route
        path="/encargado-control-activos"
        component={(props) => (
          <EncargadoControlRouter {...props} base="encargado-control-activos" />
        )}
      />
      <Route
        path="/encargado-toma-inventario"
        component={(props) => (
          <EncargadoTomaInventarioRouter
            {...props}
            base="encargado-toma-inventario"
          />
        )}
      />
      <Route
        path="/encargado-registro-activos"
        component={(props) => (
          <EncargadoRegistroActivosRouter
            {...props}
            base="encargado-registro-activos"
          />
        )}
      />
    </Router>
  );
}

export default App;
