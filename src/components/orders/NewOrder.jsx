import { useState } from "react";
import { CreateNewOrder } from "../../services/orderServices";
import { useNavigate } from "react-router-dom";
import "./NewOrder.css";

// Component that creates the new order
export const NewOrder = ({ currentUser }) => {
  const [newOrder, setNewOrder] = useState({
    tableNumber: null,
    isDelivery: false,
    tip: false,
  });

  const navigate = useNavigate();

  // Event handler for order creation
  const handleCreateOrder = (e) => {
    e.preventDefault();
    CreateNewOrder({
      ...newOrder,
      dateTime: new Date(),
      delivererId: null,
      employeeId: currentUser.id,
      totalCost: null,
    }).then((response) =>
      navigate(`/orders/new/${response.id}`, { state: { orderId: response.id } })
    )
  };

  return (
    <form className="container new-order-container">
      <h3>New Order:</h3>

      {/* Delivery Checkbox */}
      <label className="form-label">
        Is this for delivery?
        <input
          type="checkbox"
          className="form-check"
          checked={newOrder.isDelivery}
          onChange={(e) =>
            setNewOrder({ ...newOrder, isDelivery: e.target.checked })
          }
        />
      </label>

      {/* Table Number Input (only if not delivery) */}
      {!newOrder.isDelivery && (
        <label className="form-label">
          Table Number
          <input
            type="number"
            className="form-control"
            required
            placeholder="Enter table number"
            onChange={(e) =>
              setNewOrder({ ...newOrder, tableNumber: e.target.value })
            }
          />
        </label>
      )}

      {/* Tip Checkbox
      <label className="form-label">
        Tip?
        <input
          type="checkbox"
          className="form-check"
          checked={newOrder.tip}
          onChange={(e) => setNewOrder({ ...newOrder, tip: e.target.checked })}
        />
      </label> */}

      <button className="btn btn-primary" onClick={handleCreateOrder}>
        Create Order
      </button>
    </form>
  );
};
