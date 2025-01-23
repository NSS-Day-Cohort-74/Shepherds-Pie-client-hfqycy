import { getPizzaById } from "./getPizzaById";

const getAllPizzas = async () => {
  const allPizzas = await fetch("http://localhost:8088/pizzas");
  const pizzas = await allPizzas.json();

  const pizzaArr = await Promise.all(
    pizzas.map(async ({ id }) => {
      const pizza = await getOrderPizzaById(id);
      return pizza;
    }),
  );
  return pizzaArr;
};
const test2 = async (thisOrderId) => {
  const allPizzas = await getAllPizzas();
  console.log(allPizzas.filter(({ orderId }) => orderId === thisOrderId));
};
