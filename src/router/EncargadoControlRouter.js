import React, { Fragment } from "react";
import Maestros from "../Pages/Maestros";
import ReportsPage from "../Pages/ReportsPage";
import InventoryPage from "./InventoryPage";
import { Route } from "react-router-dom";
import SideBar from "../Components/Navegacion/SideBar/SideBar";
import PageWrapper from "../Components/MainWrapper/PageWrapper";
import MainWrapper from "../Components/MainWrapper/MainWrapper";
import NavBar from "../Components/Navegacion/Navbar/NavBar";

const EncargadoControlRouter = (props) => {
  return (
    <MainWrapper>
      <SideBar
        openMobileMenu={true}
        base="encargado-control-activos"
        {...props}
      />{" "}
      <PageWrapper>
        <NavBar/>
        <Route
          exact
          path="/encargado-control-activos"
          component={(props) => <Maestros {...props} />}
        />

        <Route
          exact
          path="/encargado-control-activos/mantenimientos-maestros"
          component={(props) => <Maestros {...props} />}
        />

        <Route
          exact
          path="/encargado-control-activos/reportes"
          component={(props) => <ReportsPage {...props} />}
        />
        <Route
          exact
          path="/encargado-control-activos/inventario"
          component={(props) => <InventoryPage {...props} />}
        />
      </PageWrapper>
    </MainWrapper>
  );
};
export default EncargadoControlRouter;
