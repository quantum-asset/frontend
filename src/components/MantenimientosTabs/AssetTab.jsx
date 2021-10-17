import { Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import Title from "../Title/Title";
import AssetTable from "./Assets/AssetTable";
import "./AssetTab.scss";
import SearchBar from "./common/SearchBar";
import JTableSSJ from "../JMaterialTable/JTableSSJ";
import TypeTableList from "./TypeTableList/TypeTableList";
import ChartSummary from "./ChartSummary/ChartSummary";
const AssetTab = (props) => {
  const [busqueda, setBusqueda] = useState({ avanzada: false, filtros: [] });
  const [defaultSearchValue, setDefaultSearchValue] = useState("");
  const [advanceSearchFilters, setAdvanceSearchFilters] = useState([]);
  const [advanceSearchValues, setAdvanceSearchValues] = useState([]);
  const handleChangeBusqueda = (nuevaBusqueda) => {
    setBusqueda(nuevaBusqueda);
    console.log("AssetTab", nuevaBusqueda);
  };
  useEffect(() => {
    let filters = [
      { label: "Número de tag", tipo: "input" },
      { label: "Locación", tipo: "select", options: [] },
    ];
    setAdvanceSearchFilters(
      filters.map((x, index) => {
        return { ...x, ...{ index: index } };
      })
    );
    setAdvanceSearchValues(filters.map(() => ""));
  }, []);
  return (
    <Fragment>
      <Title subTitle={"Gestión de Activos Fijos"} />
      <div className="main-asset-tab-container">
        <div className="left-side">
          <SearchBar
            onChangeBusqueda={handleChangeBusqueda}
            busqueda={busqueda}
          />
          {/* <JTableSSJ rows={[]} columns={[]} /> */}
          <AssetTable />
        </div>
        <div className="right-side">
          <TypeTableList />
          <ChartSummary />
          {/* <RightTable /> */}
        </div>
      </div>
    </Fragment>
  );
};
export default AssetTab;
