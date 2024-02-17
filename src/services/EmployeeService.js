import axios from "axios";

const BASE_URL='http://localhost:8080/api/employees';
const POST_URL='http://localhost:8080/api/employees/add-employee'
const DELETE_URL='http://localhost:8080/api/employees'
const UPDATE_URL='http://localhost:8080/api/employees'
const GETBYID_URL='http://localhost:8080/api/employees/employee/{id}'
const GETBYEMAIL_URL='http://localhost:8080/api/employees'

export const listOfEmployees=() => axios.get(BASE_URL);
export const createEmployee=(employee) => axios.post(POST_URL,employee);
export const deleteEmployee=(employee) => axios.delete(DELETE_URL,employee);
export const updateEmployee=(employee) => axios.put(UPDATE_URL,employee);
export const getEmployeeById=(employee) => axios.get(GETBYID_URL,employee);
export const getEmployeeByEmail=(employee) => axios.get(GETBYEMAIL_URL,employee);