import React from "react";
import "./TypeTableList.scss";
const TypeTableList = (props) => {
  return (
    <div className="main-type-list-container">
      <div className="main-type-list-header">
        <div className="list-header-title">Titulo del header</div>
        <div className="list-header-actions">
         
          <p>actions</p>
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
