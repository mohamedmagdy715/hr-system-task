import React, {useState} from "react";
import { connect } from "react-redux";

import { searchEmployees } from "../../actions";
import AddEmployee from "../AddEmployee/AddEmployee";
import "./Header.css";

function Header({ searchEmployees }) {

  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);
  
  const letters = React.useRef();
  const searchSync = () => {
    searchEmployees(letters.current.value);
  };

  return (
    <div className="row mt-3">
      <div className="input-group mb-3">
        <span className="input-group-text search text-primary">
          <i className="fa fa-search"></i>
        </span>
        <input
          type="text"
          className="form-control input"
          placeholder="Search"
          ref={letters}
          onChange={searchSync}
        />
        <button className="btn btn-primary ms-2" onClick={showModal}>
          + Add new
        </button>
        {/* bootstrap modal */}
        <AddEmployee show={show} handleClose={closeModal} />
      </div>
    </div>
  );
}

export default connect(null, {
  searchEmployees,
})(Header);
