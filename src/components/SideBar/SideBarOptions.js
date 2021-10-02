import React from "react";
import IconAssets from "../../icons/IconAssets";
import IconControl from "../../icons/IconControl";
import IconDashBoard from "../../icons/IconDashBoard";
import IconLocation from "../../icons/IconLocation";
import IconRFID from "../../icons/IconRFID";
import IconUserManagement from "../../icons/IconUserManagement";
export const sideBarOptions = [
  { title:"Generación de Reportes",redirect: "/reportes", label: "Reportes" },
  { title:"Gestión de Activos Fijos",redirect: "/activos", label: "Activos" },
  { title:"Toma y control de inventarios",redirect: "/inventario", label: "Inventario" },
  { title:"Gestión de Usuarios y Permisos",redirect: "/permisos", label: "Permisos" },
  { title:"Gestión de Consumibles RFID",redirect: "/tags", label: "Tags RFID" }, //alertas
  { title:"Gestión de Locaciones",redirect: "locaciones", label: "Locaciones" },
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
    default:
      <IconDashBoard {...props} />;
  }
};
export default IconSelector;
