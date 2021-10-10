import React, { Fragment, useState } from "react";
import { Route } from "react-router";
import SideBar from "../components/SideBar/SideBar";
import SideBarButton from "../components/SideBar/SideBarButton";
import IconSelector, {
  sideBarOptions,
} from "../components/SideBar/SideBarOptions";

import InventoryPage from "../Pages/InventoryPage";
import ReportsPage from "../Pages/ReportsPage";
import { useUserValue } from "../context/Sesion";
import SideBarMobile from "../components/SideBarMobile/SideBarMobile";
import SideBarMobileButton from "../components/SideBarMobile/SideBarMobileButton";
import { IconButton } from "@material-ui/core";
import DefaultMainPage from "../components/DefaultMainPage/DefaultMainPage";
import Maestros from "../Pages/Maestros";

const EncargadoControlRouter = (props) => {
  const [{ usuario, auth }] = useUserValue();
  //const { ROL } = usuario;
  if (!auth) {
    props.history.push("/");
  }
  const myOptions = sideBarOptions(props.base) || [];
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [currentLabel, setCurrentLabel] = useState(
    myOptions[1].title
  );

  const handleChangeCurrentLable = (newLabel) => {
    setCurrentLabel(newLabel);
  };
  const handleCLose = () => {
    setOpen(false);
  };
  const handleClick = (page) => {
    setActivePage(page);
    // props.history.push(`/${sideBarOptions[page].redirect}`);
  };
  console.log("EncargadoControlRouter:", props);
  return (
    <Fragment>
      <Fragment>
        <SideBar {...props}>
          <div className="side-bar-icons">
            {myOptions.map(
              ({ label, redirect, title }, index) => (
                <SideBarButton
                  active={activePage === index}
                  onClick={(e) => {
                    handleClick(index);
                    console.log("GO TO", redirect);
                    props.history.push(`/${redirect}`);
                    handleChangeCurrentLable(title);
                  }}
                >
                  <IconSelector
                    label={label}
                    color={activePage === index ? "#FF1E0A" : "#fff"}
                    //color={activePage === index ? "rgb(155, 111, 6)" : "#fff"}

                    size={40}
                  />

                  {label}
                </SideBarButton>
              )
            )}
          </div>
        </SideBar>

        <DefaultMainPage
          open={open}
          onOpenSideBar={() => {
            setOpen(true);
          }}
          label={currentLabel}
        >
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
        </DefaultMainPage>

        {/** MOBILE MENU */}
        <SideBarMobile
          open={open}
          onClose={handleCLose}
          actions={myOptions.map(
            ({ label, redirect, title }, index) => (
              <SideBarMobileButton
                onClick={(e) => {
                  handleClick(index);
                  handleChangeCurrentLable(title);

                  props.history.push(`/${redirect}`);

                  setOpen(false);
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <IconSelector label={label} color={"#ffe500"} size={45} />
                </IconButton>
                {label}
              </SideBarMobileButton>
            )
          )}
        />
      </Fragment>
    </Fragment>
  );
};
export default EncargadoControlRouter;
