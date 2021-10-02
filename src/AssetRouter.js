import React, { Fragment, useState } from "react";
import { Route } from "react-router";
import SideBar from "./components/SideBar/SideBar";
import SideBarButton from "./components/SideBar/SideBarButton";
import IconSelector, {
  sideBarOptions,
} from "./components/SideBar/SideBarOptions";
import AssetPage from "./Pages/AssetPage";
import LocationsPage from "./Pages/LocationsPage";
import TagsPage from "./Pages/TagsPage";
import PermissionsPage from "./Pages/PermissionsPage";
import InventoryPage from "./Pages/InventoryPage";
import ReportsPage from "./Pages/ReportsPage";
import { useUserValue } from "./context/Sesion";
import SideBarMobile from "./components/SideBarMobile/SideBarMobile";
import SideBarMobileButton from "./components/SideBarMobile/SideBarMobileButton";
import { IconButton } from "@material-ui/core";
import DefaultMainPage from "./components/DefaultMainPage/DefaultMainPage";

const AssetRouter = (props) => {
  const [{ usuario, auth }, dispatch] = useUserValue();
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [currentLabel, setCurrentLabel] = useState("Activos Fijos");
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
  console.log("ROUTER:", props);
  return (
    <Fragment>
      {!auth && (
        <SideBar {...props}>
          <div className="side-bar-icons">
            {sideBarOptions.map(({ label, redirect, title }, index) => (
              <SideBarButton
                active={activePage === index}
                onClick={(e) => {
                  handleClick(index);
                  props.history.push(redirect);
                  handleChangeCurrentLable(title);
                }}
              >
                <IconSelector
                  label={label}
                  color={activePage === index ? "#FF1E0A" : "#fff"}
                  size={40}
                />

                {label}
              </SideBarButton>
            ))}
          </div>
        </SideBar>
      )}

      <DefaultMainPage
        open={open}
        onOpenSideBar={() => {
          setOpen(true);
        }}
        label={currentLabel}
      >
        <Route
          path="/activos"
          component={(props) => <AssetPage {...props} />}
        />
        <Route
          path="/reportes"
          component={(props) => <ReportsPage {...props} />}
        />
        <Route
          path="/inventario"
          component={(props) => <InventoryPage {...props} />}
        />
        <Route
          path="/permisos"
          component={(props) => <PermissionsPage {...props} />}
        />
        <Route path="/tags" component={(props) => <TagsPage {...props} />} />
        <Route
          path="/locaciones"
          component={(props) => <LocationsPage {...props} />}
        />
      </DefaultMainPage>
      {/** MOBILE MENU */}
      <SideBarMobile
        open={open}
        onClose={handleCLose}
        actions={sideBarOptions.map(({ label, redirect, title }, index) => (
          <SideBarMobileButton
            onClick={(e) => {
              handleClick(index);
              handleChangeCurrentLable(title);

              props.history.push(redirect);
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
        ))}
      />
    </Fragment>
  );
};
export default AssetRouter;
