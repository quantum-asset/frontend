import React from "react";
import "./TypeTableList.scss";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const TypeTableList = (props) => {
  const { title } = props;
  return (
    <div className="main-type-list-container">
      <div className="main-type-list-header">
        <div className="list-header-title">
          <h3>{title || "Titulo del header"}</h3>
        </div>
        <div className="list-header-actions">
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="small" color="primary" aria-label="edit">
            <EditIcon />
          </Fab>

          <Fab size="small" color="primary" aria-label="add">
            <DeleteIcon />
          </Fab>
        </div>
      </div>
      <div className="main-type-list-body">
        <div className="type-list-data">{"Dataaaa"}</div>
        <div className="type-list-data">{"Dataaaa"}</div>
        <div className="type-list-data">{"Dataaaa"}</div>
        <div className="type-list-data">{"Dataaaa"}</div>
        <div className="type-list-data">{"Dataaaa"}</div>
      </div>
      <div className="main-type-list-footer">footert</div>
    </div>
  );
};
export default TypeTableList;
