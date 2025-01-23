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
    <div className="employee-details-container">
      <div className="employee-details-form">
        <h1>{employee.name}</h1>
        <div className="form-group">
          <h4>Address</h4>
          <input type="text" defaultValue={employee.address} onChange={handleInputChange} name="address" />
        </div>
        <div className="form-group">
          <h4>Email</h4>
          <input type="text" defaultValue={employee.email} onChange={handleInputChange} name="email" />
        </div>
        <div className="form-group">
          <h4>Phone Number</h4>
          <input type="text" defaultValue={employee.phoneNumber} onChange={handleInputChange} name="phoneNumber" />
        </div>
        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  )
}
