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
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const PizzaForm = ({}) => {
  // debugger
  const [sizes, setSizes] = useState([]);
  const [chosenSize, setChosenSize] = useState(0);
  const [sauces, setSauces] = useState([]);
  const [chosenSauce, setChosenSauce] = useState(0);
  const [cheeses, setCheeses] = useState([]);
  const [chosenCheese, setChosenCheese] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [chosenTopping, setChosenTopping] = useState(0);
  const [orderId, setOrderId] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("There is state: ", location.state.orderId);
    setOrderId(location.state.orderId);
    // console.log(orderId)
  }, [location]);
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
              key={size.id}
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
              key={sauce.id}
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
              key={cheese.id}
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
          <div>
          <input
            type="checkbox"
            id={topping.id}
            key={topping.id}
            onChange={(event) => {
              handleToppingChoice(event);
            }}
            /> {topping.name}
            </div>
        );
      })}
      <button onClick={handleSavePizza}>Save Pizza to Order</button>
    </>
  );
};
