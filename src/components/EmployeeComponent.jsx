import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/EmployeeService";

const EmployeeComponent = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const navigator = useNavigate();

  function handleFirstName(e) {
    setFirstname(e.target.value);
  }

  function handleLastName(e) {
    setLastname(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function saveEmployee(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    console.log(employee);

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator("/employees");
    });
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">add employee</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label className="form-label">firstName :</label>
                <input
                  type="text"
                  placeholder="Enter employee first name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={handleFirstName}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">lastName :</label>
                <input
                  type="text"
                  placeholder="Enter employee lastName"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={handleLastName}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">email :</label>
                <input
                  type="email"
                  placeholder="Enter employee email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={handleEmail}
                />
              </div>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={saveEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
