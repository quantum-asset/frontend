import {
  Button,
  Fab,
  Grid,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React, { Fragment, useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import MuiTextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TemplateDialog from "../../../dialogs/TemplateDialog";
import imgpreview from "../../../static/imgpreview.webp";
import { FormLabel } from "@mui/material";
import { FileItem, FullScreenPreview } from "@dropzone-ui/react";
import { validateFile } from "../../../utils/validateFile";
const maxFileSize = 1024000;
const SearchBar = (props) => {
  const { busqueda, onChangeBusqueda } = props;
  console.log("WWW SearchBar", props);
  const [defaultSearch, setDefaultSearch] = useState("");
  const [lastStatusAvanzada, setLastStatusAvanzada] = useState(false);
  const [onFilter, setOnFilter] = useState([]);
  const [mode, setMode] = useState("");
  const [openAssetDialog, setOpenAssetDialog] = useState(false);
  const [openBulkLoadDialog, setBulkLoadDialog] = useState(false);
  const inputRef = useRef(null);

  const handlecloseAssetDialog = () => {
    setOpenAssetDialog(false);
  };
  const handlecloseBulkLoadDialog = () => {
    setBulkLoadDialog(false);
  };
  function reportWindowSize() {
    //console.log("WWW", window.innerWidth);
    const W = window.innerWidth;
    if (W < 960) {
      if (busqueda.avanzada) {
        console.log("WWW hide advanced search", W);
        console.log("WWW busqueda.avanzada", busqueda.avanzada);
        setLastStatusAvanzada(true);
        onChangeBusqueda({ ...busqueda, ...{ avanzada: false } });
      }
    } else {
      if (lastStatusAvanzada) {
        console.log("WWW recover advanced search", W);
        console.log("WWW busqueda.avanzada", busqueda.avanzada);
        setLastStatusAvanzada(false);
        onChangeBusqueda({ ...busqueda, ...{ avanzada: true } });
      }
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
  /////////// DIALOG
  const [fileImage, setFileImage] = useState(undefined);
  const [imgSource, setImgSource] = useState(undefined);
  const handleOnChangeInput = (evt) => {
    let fileList = evt.target.files;
    const localValidator = {
      maxFileSize: maxFileSize,
    };

    let output = undefined;
    output = validateFile(fileList[0], localValidator);

    setFileImage(output);
  };
  function handleClick(e) {
    let referenceInput = inputRef.current;
    referenceInput?.click();
  }
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
              label={"Denominación"}
              type="search"
              placeholder="Denominación del activo"
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
              placeholder="Búsqueda de activos"
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
            onClick={() => {
              setOpenAssetDialog(true);
            }}
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
            style={{ display: "flex" }}
            // className="search-bar-busqueda-avanzada-label"
            // onClick={handleBusquedaAvanzada}
          >
            <div
              className="search-bar-busqueda-avanzada-label"
              onClick={handleBusquedaAvanzada}
            >
              {" "}
              {"Búsqueda avanzada >"}
            </div>
          </div>
        )}

        {busqueda.avanzada && (
          <Fragment>
            <div className="advanced-search-inputs">
              {/** NUMERO DE TAG */}
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
                variant="outlined"
                size="small"
                placeholder="Numero de Tag"
                // style={{ margin: "0 5px" }}
                // onChange={(e) => {       setDefaultSearch(e.target.value);    }}
                //value={defaultSearch}
              />

              {/** LOCACION */}
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                size="small"
                style={{ margin: "0 5px" }}
                // sx={{ width: 300 }}

                renderInput={(params) => (
                  <MuiTextField
                    size="small"
                    type="search"
                    variant="outlined"
                    {...params}
                    label="Locación"
                    fullWidth
                  />
                )}
              />
              {/** TIPO ACTIVO */}
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                size="small"
                style={{ margin: "0 5px" }}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <MuiTextField {...params} label="Tipo Activo" fullWidth />
                )}
              />

              {/** PROVEEDOR */}
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
              style={{ display: "flex" }}
              // className="search-bar-busqueda-avanzada-label"
              // onClick={handleBusquedaAvanzada}
            >
              <div
                className="search-bar-busqueda-avanzada-label"
                onClick={handleBusquedaSimple}
              >
                {"Búsqueda simple ^"}
              </div>
            </div>
          </Fragment>
        )}
      </div>
      <TemplateDialog
        title={"Agregar / Editar Activo Fijo"}
        open={openAssetDialog}
        onClose={handlecloseAssetDialog}
        onCancel={() => alert("cancel")}
        onAccept={() => alert("Cambios guardados")}
      >
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <FormLabel
              component="legend"
              style={{ fontSize: "1.1rem", color: "black", margin: "10px 0" }}
            >
              Informacion Crítica
            </FormLabel>
            <FormLabel component="legend">Denominación *</FormLabel>
            <TextField
              style={{ margin: "5px 0" }}
              color="primary"
              fullWidth
              id="outlined-email-input"
              // label={"Denominación *"}
              placeholder="Denominación del activo"
              variant="outlined"
              size="small"
            />
            <FormLabel component="legend">Tipo de activo</FormLabel>
            <Autocomplete
              fullWidth
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              size="small"
              style={{ margin: "5px 0" }}
              renderInput={(params) => (
                <MuiTextField
                  size="small"
                  type="search"
                  variant="outlined"
                  {...params}
                  label="Tipo de activo"
                  fullWidth
                />
              )}
            />
            <FormLabel component="legend">Locación</FormLabel>
            <Autocomplete
              fullWidth
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              size="small"
              style={{ margin: "5px 0" }}
              renderInput={(params) => (
                <MuiTextField
                  size="small"
                  type="search"
                  variant="outlined"
                  {...params}
                  label="Locación"
                  fullWidth
                />
              )}
            />
            <FormLabel component="legend">Tag RFID</FormLabel>
            <Autocomplete
              fullWidth
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              size="small"
              style={{ margin: "5px 0" }}
              renderInput={(params) => (
                <MuiTextField
                  size="small"
                  type="search"
                  variant="outlined"
                  {...params}
                  label="Número de tag"
                  fullWidth
                />
              )}
            />
            <FormLabel component="legend">Area Responsable *</FormLabel>
            <Autocomplete
              fullWidth
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              size="small"
              style={{ margin: "5px 0" }}
              renderInput={(params) => (
                <MuiTextField
                  size="small"
                  type="search"
                  variant="outlined"
                  {...params}
                  label="Area Responsable"
                  fullWidth
                />
              )}
            />
            <FormLabel
              component="legend"
              style={{ fontSize: "1.1rem", color: "black", margin: "10px 0" }}
            >
              Informacion General del Activo
            </FormLabel>
            <FormLabel component="legend">Marca</FormLabel>
            <TextField
              color="primary"
              style={{ margin: "5px 0" }}
              fullWidth
              id="outlined-email-input"
              placeholder="Marca del activo"
              variant="outlined"
              size="small"
            />

            <FormLabel component="legend">Modelo</FormLabel>
            <TextField
              style={{ margin: "5px 0" }}
              color="primary"
              fullWidth
              id="outlined-email-input"
              placeholder="Modelo del activo"
              variant="outlined"
              size="small"
            />
            <FormLabel component="legend">Color</FormLabel>
            <TextField
              color="primary"
              style={{ margin: "5px 0" }}
              fullWidth
              id="outlined-email-input"
              placeholder="Color del activo"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item md={5} xs={12}>
            <FormLabel
              component="legend"
              style={{ fontSize: "1.1rem", color: "black", margin: "10px 0" }}
            >
              Informacion de adquicisión
            </FormLabel>
            <FormLabel component="legend">Proveedor*</FormLabel>
            <TextField
              style={{ margin: "5px 0" }}
              color="primary"
              fullWidth
              id="outlined-email-input"
              //label={"RUC del proveedror*"}
              placeholder="Ingrese la razon social del proveedor"
              variant="outlined"
              size="small"
            />
            <FormLabel component="legend">RUC del proveedor*</FormLabel>
            <TextField
              color="primary"
              style={{ margin: "5px 0" }}
              fullWidth
              id="outlined-email-input"
              //label={"RUC del proveedor *"}
              placeholder="Ingrese el número de RUC"
              variant="outlined"
              size="small"
            />
            <FormLabel component="legend">Num. de Guía de remisión*</FormLabel>
            <TextField
              color="primary"
              style={{ margin: "5px 0" }}
              fullWidth
              id="outlined-email-input"
              //label={"RUC del proveedor *"}
              placeholder="Ingrese el número de la guía de remisión"
              variant="outlined"
              size="small"
            />
            <FormLabel component="legend">Num. de factura*</FormLabel>
            <TextField
              color="primary"
              style={{ margin: "5px 0" }}
              fullWidth
              id="outlined-email-input"
              //label={"RUC del proveedor *"}
              placeholder="Ingrese el número de factura"
              variant="outlined"
              size="small"
            />
            <FormLabel component="legend">Costo de adquisición*</FormLabel>
            <TextField
              color="primary"
              style={{ margin: "5px 0" }}
              fullWidth
              id="outlined-email-input"
              // label={"Denominación *"}
              placeholder="Costo del activo en soles"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: <p style={{ marginRight: "4px" }}> {"S/."} </p>,
              }}
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <FormLabel
              component="legend"
              style={{ fontSize: "1.1rem", color: "black", margin: "10px 0" }}
            >
              Foto del Activo
            </FormLabel>

            {fileImage ? (
              <>
                {" "}
                <FileItem
                  {...fileImage}
                  localization="ES-es"
                  preview
                  hd
                  info
                  onDelete={() => {
                    setFileImage(undefined);
                  }}
                  onSee={(src) => {
                    setImgSource(src);
                  }}
                />
                <FullScreenPreview
                  imgSource={imgSource}
                  openImage={imgSource}
                  onClose={() => {
                    setImgSource(undefined);
                  }}
                />
              </>
            ) : (
              <div className="image-add-icon" onClick={handleClick}>
                <input
                  ref={inputRef}
                  onChange={handleOnChangeInput}
                  type="file"
                  accept={"image/*"}
                  style={{ display: "none" }}
                />
                <img height="100%" src={imgpreview} alt="preview" />
                <FormLabel component="legend" style={{ marginBottom: "5px" }}>
                  Haga click para buscar un archivo...
                </FormLabel>
              </div>
            )}
          </Grid>

          <Grid item md={12} xs={12}>
            <FormLabel component="legend" style={{ marginBottom: "5px" }}>
              Características (max. 100 caracteres)
            </FormLabel>

            <TextField
              style={{ margin: "5px 0" }}
              color="primary"
              fullWidth
              id="outlined-email-input"
              multiline
              rows={2}
              //label={"RUC del proveedror*"}
              placeholder="Ingrese las características general del activo"
              variant="outlined"
              size="small"
            />

            <FormLabel component="legend" style={{ marginBottom: "5px" }}>
              Observaciones (max. 100 caracteres)
            </FormLabel>
            <TextField
              style={{ margin: "5px 0" }}
              color="primary"
              fullWidth
              id="outlined-email-input"
              multiline
              rows={2}
              //label={"RUC del proveedror*"}
              placeholder="Ingrese las observaciones al activo"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </TemplateDialog>
    </div>
  );
};
export default SearchBar;
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
