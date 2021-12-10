import React from "react";
import { connect } from "react-redux";

import { deleteEmployee } from "../../actions";
import "./EmpCard.css";

function EmpCard(props) {
  const emp = props.emp;

  return (
    <div className="row card">
      <div className="col-3 d-flex flex-column emp-img me-3">
        <div>
          <img src="./logo1921.jpg" alt="pic" className="pic" />
        </div>
        <div className="m-auto text-danger trash">
          <i
            className="fa fa-xs fa-trash"
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.deleteEmployee(props.emp.id);
            }}
          />
        </div>
      </div>
      <div className="col-9 card-body">
        <div className="emp-name">{emp.name}</div>
        <div className="emp-pos">{emp.position}</div>
        <div className="emp-dep" style={{ color: "#5c6974" }}>
          {emp.department}
        </div>
        <div className="emp-date">Start: {emp.startDate}</div>
        <div className="icons me-3">
          <a href={"mailto:" + emp.email}>
            <i className="fa fa-xs fa-envelope" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {
  deleteEmployee,
})(EmpCard);
