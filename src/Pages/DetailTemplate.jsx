
import React, { Fragment, useState } from "react";
import DefaultMainPage from "../components/DefaultMainPage/DefaultMainPage";

const DetailTemplate = (props) => {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const handleCLose = () => {
    setOpen(false);
  };
  const handleClick = (page) => {
    setActivePage(page);
  };
  return (
    <Fragment>
      <DefaultMainPage
        open={open}
        onOpenSideBar={() => {
          setOpen(true);
        }}
      >
        {/** PAGE */}
      </DefaultMainPage>
    </Fragment>
  );
};
export default DetailTemplate;
