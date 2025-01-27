import { useEffect, useState } from "react";
import { getAllOrders } from "../../services/orderServices";
import { Link } from "react-router-dom";
import "./AllOrders.css";

export const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getAllOrders();
      setAllOrders(data);
    };
    fetchOrders();
  }, []);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = allOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(allOrders.length / ordersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="">
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {currentOrders.map((orderObject) => (
        <div className="order" key={orderObject?.id}>
          <Link to={`/orders/${orderObject.id}`}>
            <section className="">Order# {orderObject.id}</section>
          </Link>
          <section className="">Name: {orderObject.customerName}</section>
          <section className="">Status: {orderObject.status}</section>
        </div>
      ))}
    </div>
  );
};

