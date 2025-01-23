import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeById } from "../services/getEmployeeById"
import { updateEmployee } from "../services/updateEmployeeDetails"
import "./Employee.css"

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({})
  const { employeeId } = useParams()

  useEffect(() => {
    const fetchEmployee = async () => {
      const employeeData = await getEmployeeById(employeeId)
      setEmployee(employeeData)
    }
    fetchEmployee()
  }, [employeeId])

  const handleInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveChanges = () => {
    updateEmployee({ ...employee }).then(() => {
      window.alert("Employee updated")
    })
  }

  return (
    <div className="customer customer-details">
      <section className="customer">
        <header className="customer-header">{employee.name}</header>
        <div>
          <span className="customer-info">Address: </span>
          <div>
            <input type="text" defaultValue={employee.address} onChange={handleInputChange} name="address" />
          </div>
        </div>
        <div>
          <span className="customer-info">Email: </span>
          <div>
            <input type="text" defaultValue={employee.email} onChange={handleInputChange} name="email" />
          </div>
        </div>
        <div>
          <span className="customer-info">Phone # </span>
          <div>
            <input type="text" defaultValue={employee.phoneNumber} onChange={handleInputChange} name="phoneNumber" />
          </div>
        </div>
        <button className="save-btn" onClick={handleSaveChanges}>Save Changes</button>
      </section>
    </div>


  )
}

