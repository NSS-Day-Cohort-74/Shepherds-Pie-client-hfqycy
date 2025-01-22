export const getEmployeeByEmail = () => {
    return fetch(`http://localhost:8088/employee?email=${email}`).then((res) => res.json())
}
