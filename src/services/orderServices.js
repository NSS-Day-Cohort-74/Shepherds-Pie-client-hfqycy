<<<<<<< HEAD
export const getAllOrders = () => {
	return fetch(`http://localhost:8088/orders`).then((res) => res.json());
};
=======
// Fetches all orders
export const GetOrders = () =>
  fetch(
    "http://localhost:8088/orderPizzas?_expand=order&_expand=cheeseOption&_expand=pizzaSize&_expand=sauceOption"
  ).then((res) => res.json());

// Fetches all toppings
export const GetToppings = () =>
  fetch("http://localhost:8088/toppings").then((res) => res.json());

// Creates a new order
export const CreateNewOrder = (orderObj) =>
  fetch("http://localhost:8088/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderObj),
  }).then((res) => res.json());

// Fetches an order by ID
export const GetOrderById = async (orderId) => {
  const response = await fetch(
    `http://localhost:8088/orderPizzas?orderId=${orderId}&_expand=order&_expand=cheeseOption&_expand=pizzaSize&_expand=sauceOption`
  );
  return await response.json();
};

// Fetches toppings for any pizza by ID
export const GetToppingsByPizzaId = (orderPizzaId) =>
  fetch(
    `http://localhost:8088/orderToppings?orderPizzaId=${orderPizzaId}&_expand=topping`
  ).then((res) => res.json());

// Assigns a deliverer to an order
export const AddDeliverer = (orderId, orderObj) =>
  fetch(`http://localhost:8088/orders/${orderId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderObj),
  });

// Deletes a pizza from an order
export const DeletePizza = (orderPizzaId) =>
  fetch(`http://localhost:8088/orderPizzas/${orderPizzaId}`, {
    method: "DELETE",
  });

// Cancels an order
export const CancelOrder = (orderId) =>
  fetch(`http://localhost:8088/orders/${orderId}`, { method: "DELETE" });

// Fetches all orders
export const GrabOrders = () =>
  fetch("http://localhost:8088/orders").then((res) => res.json());

// Updates the price of an order (total)
export const AddOrderTotalPrice = (orderId, orderObj) =>
  fetch(`http://localhost:8088/orders/${orderId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderObj),
  });
>>>>>>> 6063ac3 (v1 of orderServices and OrderDetails)
