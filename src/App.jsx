import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>

        <Header></Header>
        <Routes>

          <Route path="/" element ={<ListEmployee></ListEmployee>}>
          </Route>

          <Route path="/employees" element ={<ListEmployee></ListEmployee>}>
          </Route>
          <Route path="/add-employee" element={<EmployeeComponent></EmployeeComponent>}>

          </Route>

        </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </>
  );
}

export default App;
