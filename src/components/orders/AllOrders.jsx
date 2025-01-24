import { useEffect, useState } from "react";
import { getAllOrders } from "../../services/orderServices";
import { Link } from "react-router-dom";
import "./AllOrders.css"    

export const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])

    const orders = () => {
        getAllOrders().then((data) => setAllOrders(data))
    }

useEffect(() => {
orders()
}, []);

return (
        <div className="orders">
          {allOrders.map((orderObject) => (
            <div className="order" key={orderObject?.id}>
              <Link to={`/orders/${orderObject.id}`}>
                <section className="order-header">Order# {orderObject.id}</section>
              </Link>
              <section className="order-info">Name: {orderObject.customerName}</section>
              <section className="order-info">Status: {orderObject.status}</section>
            </div>
          ))}
        </div>
)
}