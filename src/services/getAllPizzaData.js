export const getAllPizzaData = () =>
	fetch(
		"http://localhost:8088/pizzas?_expand=order&_expand=size&_expand=sauce&_expand=cheese&_embed=pizzaToppings&_expand=toppingId",
	).then((res) => res.json());
