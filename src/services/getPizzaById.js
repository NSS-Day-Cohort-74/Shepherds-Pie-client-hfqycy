

export const getPizzaById = async (pizzaId) => {
  const pizzaResponse = await fetch(
    `http://localhost:8088/pizzas/${pizzaId}?_expand=size&_expand=cheese&_expand=sauce`,
  );
  const pizza = await pizzaResponse.json();

  const toppingsResponse = await fetch(
    `http://localhost:8088/pizzaToppings?pizzaId=${pizzaId}&_expand=topping`,
  );
  const pizzaToppings = await toppingsResponse.json();

  return {
    id: pizza.id,
    size: pizza.size,
    orderId: pizza.orderId,
    cheese: pizza.cheese,
    sauce: pizza.sauce,
    toppings: pizzaToppings.map((topping) => topping.topping),
  };
};

export const getPizzaByOrderId = async (orderId) => {
  return await fetch(`http://localhost:8088/pizzas?id=${orderId}`).then((res) => res.json())
}