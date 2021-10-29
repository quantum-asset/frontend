import React, { Fragment, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Maestros.scss";
import Title from "../Components/Title/Title";
import LeftSideActivos from "../Components/Maestros/Activos/Left/LeftSideActivos";
import RightSideActivos from "../Components/Maestros/Activos/Right/RightSideActivos";
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
      <Box sx={{ bgcolor: "#c4c4c4" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
        >
          <Tab label="Activos Fijos" {...a11yProps(0)} />
          <Tab label="Locaciones" {...a11yProps(1)} />
          <Tab label="Tags RFID y alertas" {...a11yProps(2)} />
          <Tab label="Usruarios, Roles y permisos" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
        title={<Title title="Gestión de Activos Fijos" />}
      >
        <div className="left-side"><LeftSideActivos/></div>
        <div className="right-side"><RightSideActivos/></div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        bolii
      </TabPanel>
      <TabPanel value={value} index={2}>
        caracoli
      </TabPanel>
      <TabPanel value={value} index={3}>
        camaron
      </TabPanel>
    </Fragment>
  );
};
export default Maestros;

function TabPanel(props) {
  const { children, value, index, title, ...other } = props;

  return (
    <Fragment>
      {title}{" "}
      <div
        className="tab-panel-maestros"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        //style={{ minHeight: "calc(100vh - 100px)", backgroundColor: "teal" }}
      >
        {value === index && <Fragment>{children}</Fragment>}
      </div>
    </Fragment>
  );
}
function a11yProps(index) {
  return {
    /*  id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`, */
  };
}
