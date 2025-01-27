import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  AddDeliverer,
  AddOrderTotalPrice,
  CancelOrder,
  DeletePizza,
  GetOrderById,
  GetToppingsByPizzaId,
  GrabOrders,
} from "../../services/orderServices";

import { employeeService } from "../../services/employeeServices";

// Order details state management component
export const OrderDetails = ({ currentUser }) => {
  const [order, setOrder] = useState(null);
  const [toppings, setToppings] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const orderData = await GetOrderById(orderId);
      setOrder(orderData[0]);

      if (orderData[0]?.id) {
        setToppings(await GetToppingsByPizzaId(orderData[0].id));
      }

      employeeService().then((employeesArray) => setEmployees(employeesArray));
    };

    fetchData();
  }, [orderId]);

  // This UseEffect calculates the cost of the order(total)
  useEffect(() => {
    if (!order) return;

    const toppingCost = toppings.length * 0.5;
    const deliveryCost = order.order.orderType === "Delivery" ? 5 : 0;
    setTotalCost(order.size.price + toppingCost + deliveryCost);
  }, [order, toppings]);

  // Event handler for order confirmation
  const handleConfirmOrder = async () => {
    await AddOrderTotalPrice(orderId, { ...order.order, cost: totalCost });
    navigate("/all-orders");
  };

  return (
    <div className="container">
      <h3>Order# {order?.order?.id}</h3>

      <div className="pizza-choices">
        <div>Size: {order?.size.name}</div>
        <div>Cheese: {order?.cheese.name}</div>
        <div>Sauce: {order?.sauce.name}</div>
        <div>
          Toppings:{" "}
          {toppings.map((t) => {
            {
              return t.topping.name + " ";
            }
          })}
        </div>
        <div>Cost: ${totalCost.toFixed(2)}</div>
      </div>

      <button
        className="btn btn-primary"
        onClick={() =>
          navigate(`/orders/add-pizza`, {
            state: { type: "create", orderId: order.order.id },
          })
        }
      >
        Add Pizza
      </button>

      <button className="btn btn-secondary" onClick={handleConfirmOrder}>
        Confirm Order
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => CancelOrder(order?.order?.id)}
      >
        Cancel Order
      </button>

      {currentUser?.isAdmin && order?.order?.isDelivery && (
        <>
          <label>Assign Deliverer</label>
          <select
            className="form-select"
            onChange={(e) =>
              AddDeliverer(orderId, { delivererId: e.target.value })
            }
          >
            <option value="">Choose Driver</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};
