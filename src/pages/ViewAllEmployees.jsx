import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllEmployees } from "../services/getAllEmployees";
import "./Employee.css"

export const ViewAllEmployees = () => {
  const [AllEmployees, setAllEmployees] = useState([]);

  const fillAllEmployees = () => {
    getAllEmployees().then((data) => setAllEmployees(data));
  };

  useEffect(() => {
    fillAllEmployees();
  }, []);

  return (
    <div className="customers">
      {AllEmployees.map((emp) => (
        // we need to add link each employee to their profile details
        <Link className="all-employees" key={emp.id} to={`/employees/${emp.id}`}>
          <div className="customer" >
            <section className="customer-header">{emp.name}</section>
            <section className="customer-info">{emp.position}</section>
            <section className="customer-info">{emp.phoneNumber}</section>
          </div>
        </Link>
      ))
      }
    </div >
  );
};
