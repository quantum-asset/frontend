import React, { Fragment, useState } from "react";
import Title from "../Title/Title";
import ChartSummary from "./ChartSummary/ChartSummary";
import TypeTableList from "./TypeTableList/TypeTableList";
import "./styles/Location.scss";
import SearchBar from "./common/SearchBar";
const LocationTab = (props) => {
  const [busqueda, setBusqueda] = useState({ avanzada: false, filtros: [] });

  const handleChangeBusqueda = (nuevaBusqueda) => {
    setBusqueda(nuevaBusqueda);
  };
  return (
    <Fragment>
      <Title subTitle={"Gestión de Locaciones"} />
      <div className="main-asset-tab-container">
        <div className="left-side">
          <SearchBar
            onChangeBusqueda={handleChangeBusqueda}
            busqueda={busqueda}
            avanzada={false}
          />
        </div>
        <div className="right-side">
          <TypeTableList title="Tipos de Locación" />
          <ChartSummary />
        </div>
      </div>
    </Fragment>
  );
};
export default LocationTab;
const inputs = [{ id: 1, label: "Buscar Locaciones" }];
