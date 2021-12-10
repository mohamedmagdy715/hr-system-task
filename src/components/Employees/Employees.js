import React from "react";
import { connect } from "react-redux";

import EmpCard from "../EmpCard/EmpCard";
import "./Employees.css";
import { getEmployees } from "../../actions";

function Employees({ employees, getEmployees, search,added, deleted}) {
  React.useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleted, added]);

  const renderEmployees = () => {
    if (employees?.length > 0) {
      if (search) {
        let filteredList = employees.filter((emp) => {
          return emp.name.toLowerCase().includes(search);
        });
        if (filteredList.length > 0) {
          return filteredList.map((employee) => (
            <EmpCard emp={employee} key={employee.id}/>
          ));
        }else {
            return (
                <h1 className="alert alert-dark">
                    No Employees Found
                </h1>
            )
        }
      }
      return employees.map((employee) => (
        <EmpCard emp={employee} key={employee.id} />
      ));
    }
    return "loading";
  };
  return <div className="list">{renderEmployees()}</div>;
}
const mapStateToProps = (state) => {
  return {
    employees: state.employeesReducer.employees,
    search: state.employeesReducer.search,
    added: state.employeesReducer.added,
    deleted: state.employeesReducer.deleted
  };
};

export default connect(mapStateToProps, {
  getEmployees,
})(Employees);
