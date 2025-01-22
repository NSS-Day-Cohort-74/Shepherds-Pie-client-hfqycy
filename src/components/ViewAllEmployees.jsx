import { useState } from "react";
import { EmployeeService } from "../EmployeeServices";
import { useEffect } from "react";
import "./ViewAllEmployees.css";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [AllEmployees, setAllEmployees] = useState([]);

  const fillAllEmployees = () => {
    EmployeeService().then((data) => setAllEmployees(data));
    console.log(AllEmployees);
  };

  useEffect(() => {
    fillAllEmployees();
  }, [EmployeeList]);

  return (
    <div className="employee-container">
      {AllEmployees.map((emp) => (
        <div className="all-employees" key={emp.id}>
           
          <section className="employee-name">{emp.employeeName}</section>
          <section className="employee-position">{emp.position}</section>
          <section className="employee-email">{emp.employeeEmail}</section>
          <section className="employee-address">{emp.employeeAddress}</section>
          <section className="employee-phone">{emp.employeePhoneNumber}</section>
            
            
        </div>
      ))}
    </div>
  );
};
