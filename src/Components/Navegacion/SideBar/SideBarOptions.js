import React from "react";
import IconAssets from "../../../Icons/IconAssets";
import IconControl from "../../../Icons/IconControl";
import IconDashBoard from "../../../Icons/IconDashBoard";
import IconLocation from "../../../Icons/IconLocation";
import IconRFID from "../../../Icons/IconRFID";
import IconMaestros from "../../../Icons/IconMaestros";
import IconUserManagement from "../../../Icons/IconUserManagement";
export const sideBarOptions = (rol) => [
  {
    title: "Generación de Reportes",
    redirect: `${rol}/reportes`,
    label: "Reportes",
  },
  {
    title: "Gestión Tablas maestras",
    redirect: `${rol}/mantenimientos-maestros`,
    label: "Maestros",
  },
  {
    title: "Toma y control de inventarios",
    redirect: `${rol}/inventario`,
    label: "Inventario",
  },
];
const IconSelector = (props) => {
  const { label } = props;
  switch (label) {
    case "Reportes":
      return <IconDashBoard {...props} />;
    case "Activos":
      return <IconAssets {...props} />;
    case "Inventario":
      return <IconControl {...props} />;
    case "Permisos":
      return <IconUserManagement {...props} />;
    case "Tags RFID":
      return <IconRFID {...props} />;
    case "Locaciones":
      return <IconLocation {...props} />;
    case "Maestros":
      return <IconMaestros {...props} />;
    default:
      <IconDashBoard {...props} />;
  }
};
export default IconSelector;
