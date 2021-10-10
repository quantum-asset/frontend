import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./Pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { reinitialize, useUserValue } from "./context/Sesion";
import { iniciarSesionRedux } from "./context/actions/sesionAction";
import {
  EncargadoTomaInventarioRouter,
  EncargadoControlRouter,
  EncargadoRegistroActivosRouter,
} from "./router";

function App(props) {
  const [{ usuario, auth }, dispatch] = useUserValue();
  console.log("APP:", usuario, auth,props);
  if (!auth) {
    const userRecover = reinitialize();
    if (userRecover) {
      iniciarSesionRedux(dispatch, userRecover);
    }
  }
  return (
    <Wrapper>
      <BrowserRouter>
        <Route exact path="/" component={(props) => <Home {...props} />} />

        <Route
          path="/encargado-control-activos"
          component={(props) => (
            <EncargadoControlRouter
              {...props}
              base="encargado-control-activos"
            />
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
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
