export const getEmployeeById = (id) => {
  return fetch(`http://localhost:8088/employees/${id}`).then(res => res.json())
}
