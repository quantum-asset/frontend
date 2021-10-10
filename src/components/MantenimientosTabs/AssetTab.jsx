import { Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import Title from "../Title/Title";
import AssetTable from "./Assets/AssetTable";
import "./AssetTab.scss";
import RightTable from "./common/RightTable";
import SearchBar from "./common/SearchBar";
const AssetTab = (props) => {
  const [busqueda, setBusqueda] = useState({ avanzada: false, filtros: [] });
  const handleChangeBusqueda = (nuevaBusqueda) => {
    setBusqueda(nuevaBusqueda);
    console.log("AssetTab", nuevaBusqueda);
  };
  return (
    <Fragment>
      <Title title={"Gestión de Activos Fijos"} />
      <div className="main-asset-tab-container">
        <div className="left-side">
          <SearchBar
            onChangeBusqueda={handleChangeBusqueda}
            busqueda={busqueda}
          />
          <AssetTable/>
        </div>
        <div className="right-side">
          <RightTable />
        </div>
      </div>
    </Fragment>
  );
};
export default AssetTab;
