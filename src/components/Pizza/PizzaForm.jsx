import { useEffect } from "react";
import { useState } from "react";
import {
  addPizza,
  addPizzaTopping,
  getCheeses,
  getSauces,
  getSizes,
  getToppings,
} from "../../services/ingredientsService";
import { useNavigate, useParams } from "react-router-dom";

export const PizzaForm = ({ pizzaId, orderId }) => {
  const [sizes, setSizes] = useState([]);
  const [chosenSize, setChosenSize] = useState(0);
  const [sauces, setSauces] = useState([]);
  const [chosenSauce, setChosenSauce] = useState(0);
  const [cheeses, setCheeses] = useState([]);
  const [chosenCheese, setChosenCheese] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [chosenTopping, setChosenTopping] = useState(0);
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSizes().then((sizesArray) => setSizes(sizesArray));
    getSauces().then((saucesArray) => setSauces(saucesArray));
    getCheeses().then((cheesesArray) => setCheeses(cheesesArray));
    getToppings().then((toppingsArray) => setToppings(toppingsArray));
  }, []);

  const handleSavePizza = () => {
    if (
      chosenSize !== 0 &&
      chosenSauce !== 0 &&
      chosenCheese !== 0 &&
      chosenTopping !== 0
    ) {
      const pizzaFormObject = {
        sizeId: parseInt(chosenSize),
        sauceId: parseInt(chosenSauce),
        cheeseId: parseInt(chosenCheese),
        orderId: orderId,
      };
      addPizza(pizzaFormObject);

      const pizzaToppingsRelationship = {
        pizzaId: pizzaId,
        toppingId: chosenTopping,
      };
      addPizzaTopping(pizzaToppingsRelationship);
      navigate(`/orders/${orderId}`);
    }
  };

  const handleToppingChoice = (event) => {
    if (event.target.value === true) {
      const toppingId = parseInt(event.target.id);
      setChosenTopping(toppingId);
    }
  };

  return (
    <>
      <select>
        <option value="0">Choose a Size</option>
        {sizes.map((size) => {
          return (
            <option
              value={size.id}
              onChange={(event) => {
                setChosenSize(event.target.value);
              }}
            >
              {size.name}
            </option>
          );
        })}
      </select>
      <select>
        <option value="0">Choose a Sauce</option>
        {sauces.map((sauce) => {
          return (
            <option
              value={sauce.id}
              onChange={(event) => {
                setChosenSauce(event.target.value);
              }}
            >
              {sauce.name}
            </option>
          );
        })}
      </select>
      <select>
        <option value="0">Choose a Cheese</option>
        {cheeses.map((cheese) => {
          return (
            <option
              value={cheese.id}
              onChange={(event) => {
                setChosenCheese(event.target.value);
              }}
            >
              {cheese.name}
            </option>
          );
        })}
      </select>
      {toppings.map((topping) => {
        return (
          <input
            type="checkbox"
            id={topping.id}
            onChange={(event) => {
              handleToppingChoice(event);
            }}
          >
            {topping.name}
          </input>
        );
      })}
      <button onClick={handleSavePizza}>Save Pizza to Order</button>
    </>
  );
};
