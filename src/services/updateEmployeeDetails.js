export const updateEmployee = (employee) => {
	return fetch(`http://localhost:8088/employees/${employee.id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(employee),
	}).then((res) => res.json());
};
