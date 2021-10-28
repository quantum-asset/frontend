import React, { Fragment, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Maestros = (props) => {
  const { setNavBarTitle } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setNavBarTitle?.("Gestión de tablas maestras");
  }, []);
  return (
    <Fragment>
      <Box sx={{ width: "100%", bgcolor: "#c4c4c4" }}>
        <Tabs
          style={{
            height: "30px",
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Activos Fijos" />
          <Tab label="Locaciones" />
          <Tab label="Tomas de Inventario y alertas" />
          <Tab label="Tags RFID" />
          <Tab label="Usruarios, Roles y permisos" />
          
        </Tabs>
      </Box>
      
    </Fragment>
  );
};
export default Maestros;
