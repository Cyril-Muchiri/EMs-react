import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { listOfEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
  const navigator = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listOfEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewEmployee() {
    navigator('/add-employee')
  }
  return (
    <div className="container">
      <h3>List of Employees</h3>
      
      <button type="button" class="btn btn-secondary" onClick={addNewEmployee}>
        Add
      </button>
      

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee first name</th>
            <th>Employee last name</th>
            <th>Employee email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
