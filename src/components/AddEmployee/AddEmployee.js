import React from "react";
import { Modal } from "react-bootstrap";
import { useRef } from "react";
import { connect } from "react-redux";

import { addEmployee } from "../../actions";

function AddEmployee({ show, handleClose, addEmployee }) {
  const myForm = useRef();
  const empName = useRef();
  const empPosition = useRef();
  const empDepartment = useRef();
  const empStartDate = useRef();
  const empEmail = useRef();
  const addNewEmp = () => {
    handleClose();
    let employee = {
      name: empName.current.value,
      position: empPosition.current.value,
      department: empDepartment.current.value,
      startDate: empStartDate.current.value,
      email: empEmail.current.value,
    };
    addEmployee(employee);
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add a new Employee</Modal.Title>
      </Modal.Header>
      <form ref={myForm} onSubmit={(e)=>{
          e.preventDefault()
          addNewEmp();
      }}>
        <Modal.Body>
          <div className="form-group mb-3">
            <label htmlFor="name">Employee name</label>
            <input
              ref={empName}
              type="text"
              name="empName"
              id="name"
              className="form-control"
              placeholder="Enter Employee Name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Pos">Employee Position</label>
            <input
              ref={empPosition}
              type="text"
              name="empPos"
              id="Pos"
              className="form-control"
              placeholder="Enter Employee Position"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="dep">Employee Department</label>
            <input
              ref={empDepartment}
              type="text"
              name="empDep"
              id="dep"
              className="form-control"
              placeholder="Enter Employee Department"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Employee Email</label>
            <input
              ref={empEmail}
              type="email"
              name="empEmail"
              id="email"
              className="form-control"
              placeholder="Enter Employee Email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="date">Employee Start Date</label>
            <input
              ref={empStartDate}
              type="date"
              name="empDate"
              id="date"
              className="form-control"
              placeholder="Enter Employee Start Date"
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" type="submit">
            Add Employee
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default connect(null, {
  addEmployee,
})(AddEmployee);
