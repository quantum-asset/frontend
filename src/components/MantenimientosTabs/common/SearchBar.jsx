import { Button, Fab, InputAdornment, TextField } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const SearchBar = (props) => {
  const { busqueda, onChangeBusqueda } = props;
  const [defaultSearch, setDefaultSearch] = useState("");
  const [lastStatusAvanzada, setLastStatusAvanzada] = useState(
    busqueda.avanzada
  );
  const [onFilter, setOnFilter] = useState([]);
  const [mode, setMode] = useState("");
  function reportWindowSize() {
    //console.log("WWW", window.innerWidth);
    if (window.innerWidth < 960 && busqueda.avanzada) {
      //console.log("WWW", "change", { ...busqueda, ...{ avanzada: false } });
      setLastStatusAvanzada(busqueda.avanzada);
      onChangeBusqueda({ ...busqueda, ...{ avanzada: false } });
    } else {
      onChangeBusqueda({ ...busqueda, ...{ avanzada: lastStatusAvanzada } });
    }
  }
  useEffect(() => {
    window.onresize = reportWindowSize;
    //setLastStatusAvanzada(busqueda.avanzada);
  }, []);

  const handleBusquedaAvanzada = () => {
    onChangeBusqueda({ ...busqueda, ...{ avanzada: true } });
  };
  const handleBusquedaSimple = () => {
    onChangeBusqueda({ ...busqueda, ...{ avanzada: false } });
  };
  return (
    <div className="main-search-bar-container">
      <div className="main-search-bar">
        <div className="search-side">
          {busqueda.avanzada ? (
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              color="primary"
              fullWidth
              id="outlined-email-input"
              label={"Número de tag"}
              type="search"
              autoComplete="current-password"
              variant="outlined"
              // style={{ margin: "4px 0px" }}
              size="small"
              onChange={(e) => {
                setDefaultSearch(e.target.value);
              }}
              value={defaultSearch}
            />
          ) : (
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              color="primary"
              fullWidth
              id="outlined-email-input"
              label={"Buscar Activos"}
              type="search"
              autoComplete="current-password"
              variant="outlined"
              // style={{ margin: "4px 0px" }}
              size="small"
              onChange={(e) => {
                setDefaultSearch(e.target.value);
              }}
              value={defaultSearch}
            />
          )}
        </div>
        <div className="action-side">
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            style={{ margin: "1px" }}
          >
            <AddIcon />
          </Fab>

          <Button
            color="primary"
            variant="contained"
            size="small"
            //fullWidth
            style={{ margin: "1px" }}
            startIcon={<DownloadIcon />}
            //onClick={iniciarSesion}
            //onClick={iniciarSesion}
          >
            Descargar
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            style={{ margin: "1px" }}
            //fullWidth
            startIcon={<UploadFileIcon />}
            //onClick={iniciarSesion}
            //onClick={iniciarSesion}
          >
            Subir CSV
          </Button>
        </div>
      </div>
      <div className="search-bar-busqueda-avanzada">
        {!busqueda.avanzada && (
          <div
            className="search-bar-busqueda-avanzada-label"
            onClick={handleBusquedaAvanzada}
          >
            {"Búsqueda avanzada"}
          </div>
        )}

        {busqueda.avanzada && (
          <Fragment>
            <div className="advanced-search-inputs">
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                color="primary"
                fullWidth
                id="outlined-email-input"
                label={"Buscar Activos"}
                type="search"
                variant="outlined"
                size="small"
                // style={{ margin: "0 5px" }}
                // onChange={(e) => {       setDefaultSearch(e.target.value);    }}
                //value={defaultSearch}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                style={{ margin: "0 5px" }}
                color="primary"
                fullWidth
                id="outlined-email-input"
                label={"Buscar Activos"}
                type="search"
                variant="outlined"
                size="small"
                // onChange={(e) => {       setDefaultSearch(e.target.value);    }}
                //value={defaultSearch}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                style={{ margin: "0 5px" }}
                color="primary"
                fullWidth
                id="outlined-email-input"
                label={"Buscar Activos"}
                type="search"
                variant="outlined"
                size="small"
                // onChange={(e) => {       setDefaultSearch(e.target.value);    }}
                //value={defaultSearch}
              />
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                //style={{ margin: "0 5px" }}
                color="primary"
                fullWidth
                id="outlined-email-input"
                label={"Buscar Activos"}
                type="search"
                variant="outlined"
                size="small"
                // onChange={(e) => {       setDefaultSearch(e.target.value);    }}
                //value={defaultSearch}
              />
            </div>
            <div
              className="search-bar-busqueda-avanzada-label"
              onClick={handleBusquedaSimple}
            >
              {"Búsqueda simple"}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
