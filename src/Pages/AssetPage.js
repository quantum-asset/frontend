import React, { Fragment } from "react";
import AssetTabs from "../components/AssetPage/AssetTabs";

const AssetPage = (props) => {
  return (
    <Fragment>
     <AssetTabs labels={["Activos fijos", "Tipos de activos"]} content={[
         <p>Componente 1</p>,
         <p>Componente 2</p>,
     ]}/>

    </Fragment>
  );
};
export default AssetPage;
