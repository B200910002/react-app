import React, { Component } from "react";
import AdminComp from "./adminComp";

class AdminsComp extends Component {
  constructor(props) {
    super(props);
    this.state = { emps: [] };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "employee")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ emps: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }
  render() {
    const { emps } = this.state;

    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          {emps.map((emp) => (
            <div className="col-sm-4">
              <AdminComp
                key={emp.EmployeeId}
                img={emp.PhotoFileName}
                name={emp.EmployeeName}
                dep={emp.Department}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AdminsComp;
