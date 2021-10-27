import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Pages/Home";
import EncargadoControlRouter from "./EncargadoControlRouter";
import EncargadoRegistroActivosRouter from "./EncargadoRegistroActivosRouter";
import EncargadoTomaInventarioRouter from "./EncargadoTomaInventarioRouter";
import "../styles/App.scss";
function App() {
  return (
    <Router>
      <Route exact path="/" component={(props) => <Home {...props} />} />

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
