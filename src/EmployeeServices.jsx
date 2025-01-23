export const EmployeeService = () => {
    return fetch(`http://localhost:8088/employees`).then(res => res.json())
}