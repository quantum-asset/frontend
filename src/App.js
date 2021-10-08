import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";

import { BrowserRouter, Route } from "react-router-dom";
import { reinitialize, useUserValue } from "./context/Sesion";
import Home from "./Pages/Home";
import AssetRouter from "./AssetRouter";
import { inicializarSesion, iniciarSesionRedux } from "./context/actions/sesionAction";

function App(props) {
  const [{ usuario, auth }, dispatch] = useUserValue();
  console.log("APP:", usuario, auth);
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
            <AssetRouter {...props} base="encargado-control-activos" />
          )}
        />
        {/* <Route
          exact
          path="/encargado-registro-activos"
          component={(props) => (
            <AssetRouter {...props} base="encargado-registro-activos" />
          )}
        />
        <Route
          exact
          path="/encargado-toma-inventario"
          component={(props) => (
            <AssetRouter {...props} base="encargado-toma-inventario" />
          )}
        /> */}
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
