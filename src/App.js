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
import { useIsOnlineValue } from "./context/isOnline";
import { Dropzone, FileItem } from "./@dropzone-ui";
const App = (props) => {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <Dropzone
      style={{ minWidth: "500px" }}
      onChange={updateFiles}
      value={files}
    >
      {files.map((file) => (
        <FileItem {...file} onDelete={removeFile} preview info />
      ))}
    </Dropzone>
  );
};
function App2(props) {
  const [{ usuario, auth }, dispatch] = useUserValue();
  const mode = useIsOnlineValue();
  console.log("Is online", mode);
  console.log("APP:", usuario, auth, props);
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
