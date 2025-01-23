import { useState } from "react";
import { useEffect } from "react";
import "./ViewAllEmployees.css";
import { Link } from "react-router-dom";
import { getAllEmployees } from "../services/getAllEmployees";

export const ViewAllEmployees = () => {
  const [AllEmployees, setAllEmployees] = useState([]);

  const fillAllEmployees = () => {
    getAllEmployees().then((data) => setAllEmployees(data));
  };

  useEffect(() => {
    fillAllEmployees();
  }, []);

  return (
    <div className="employee-container">
      {AllEmployees.map((emp) => (
        // we need to add link each employee to their profile details
        <div className="employee" key={emp?.id}>
          <Link to={`/employees/${emp.id}`}>
            <section className="employee-name">{emp.name}</section>
          </Link>
          <section className="employee-position">{emp.position}</section>
          <section className="employee-phone">{emp.phoneNumber}</section>
        </div>
      ))}
    </div>
  );
};
