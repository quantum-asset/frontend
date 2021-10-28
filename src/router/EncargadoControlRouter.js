import React, { useState } from "react";
import Maestros from "../Pages/Maestros";
import ReportsPage from "../Pages/ReportsPage";
import InventoryPage from "./InventoryPage";
import { Route } from "react-router-dom";
import SideBar from "../Components/Navegacion/SideBar/SideBar";
import PageWrapper from "../Components/MainWrapper/PageWrapper";
import MainWrapper from "../Components/MainWrapper/MainWrapper";
import NavBar from "../Components/Navegacion/Navbar/NavBar";

const EncargadoControlRouter = (props) => {
  const [navBarTitle, setNavBarTtle] = useState("");
  const [open, setOpen] = useState(false);
  const handleChangeTitle = (newTitle) => {
    setNavBarTtle(newTitle);
  };
  const handleCloseMobileMenu = (value) => {
    setOpen(value);
  };
  return (
    <MainWrapper>
      <SideBar
        openMobileMenu={open}
        base="encargado-control-activos"
        {...props}
        onChangeMobileMenu={handleCloseMobileMenu}
      />
      <PageWrapper>
        <NavBar
          title={navBarTitle}
          onChangeMobileMenu={handleCloseMobileMenu}
        />
        <Route
          exact
          path="/encargado-control-activos"
          component={(props) => (
            <Maestros {...props} setNavBarTitle={handleChangeTitle} />
          )}
        />

        <Route
          exact
          path="/encargado-control-activos/mantenimientos-maestros"
          component={(props) => (
            <Maestros {...props} setNavBarTitle={handleChangeTitle} />
          )}
        />

        <Route
          exact
          path="/encargado-control-activos/reportes"
          component={(props) => (
            <ReportsPage {...props} setNavBarTitle={handleChangeTitle} />
          )}
        />
        <Route
          exact
          path="/encargado-control-activos/inventario"
          component={(props) => (
            <InventoryPage {...props} setNavBarTitle={handleChangeTitle} />
          )}
        />
      </PageWrapper>
    </MainWrapper>
  );
};
export default EncargadoControlRouter;
