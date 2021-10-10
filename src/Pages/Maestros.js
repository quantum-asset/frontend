import React, { Fragment } from "react";
import AssetTab from "../components/MantenimientosTabs/AssetTab";
import LocationTab from "../components/MantenimientosTabs/LocationTab";
import TagTab from "../components/MantenimientosTabs/TagTab";
import UserTab from "../components/MantenimientosTabs/UserTab";
import MasterTabs from "../components/MasterPage/MasterTabs";
import { useUserValue } from "../context/Sesion";

const Maestros = (props) => {
  const [{ auth }] = useUserValue();
  if (!auth) {
    props.history.push("/");
  }
  return (
    <Fragment>
      <MasterTabs
        labels={[
          "Activos fijos",
          "Locaciones y tipos",
          "Tags RFID",
          "Usuarios, roles y permisos",
        ]}
        content={[<AssetTab />, <LocationTab />, <TagTab />, <UserTab />]}
      />
    </Fragment>
  );
};
export default Maestros;
