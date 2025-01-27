import { useEffect, useState } from "react";

export const SalesReport = () => {
  const [allPizzaData, setAllPizzaData] = useState([]);
  const [selectedMonthPizzas, setSelectedMonthPizzas] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("2025-01");
  const [monthOrderNumber, setMonthOrderNumber] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  const getNumberOfOrders = () => {
    const uniqueOrderIds = new Set(selectedMonthPizzas.map(pizza => pizza.orderId));
    setMonthOrderNumber(uniqueOrderIds.size);
  };

  const calculateTotalSales = () => {
    const sales = selectedMonthPizzas.reduce((acc, pizza) => acc + pizza.order.totalCost, 0);
    setTotalSales(sales);
  };

  const filterPizzasByMonth = () => {
    if (!selectedMonth) return;

    const [year, month] = selectedMonth.split("-").map(Number);
    const filtered = allPizzaData.filter((pizza) => {
      const orderDate = new Date(pizza.order.createdAt);
      return orderDate.getMonth() === month - 1 && orderDate.getFullYear() === year;
    });
    setSelectedMonthPizzas(filtered);
  };

  useEffect(() => {
    fetch("http://localhost:8088/pizzas?_expand=order&_expand=size&_expand=sauce&_expand=cheese&_embed=pizzaToppings&_expand=toppingId")
      .then(res => res.json())
      .then(data => setAllPizzaData(data));
  }, []);

  useEffect(() => {
    filterPizzasByMonth();
  }, [allPizzaData, selectedMonth]);

  useEffect(() => {
    getNumberOfOrders();
    calculateTotalSales();
  }, [selectedMonthPizzas]);

  return (
    <div className="orders-container">
      <div className="order">
        <div>
          <input
            defaultValue={selectedMonth}
            onChange={({ target: { value } }) => {
              setSelectedMonth(value);
            }}
            type="month"
          />
        </div>
        <h1>Sales Report</h1>
        <h2>Orders this Month: {monthOrderNumber}</h2>
        <h2>Total Sales: ${totalSales.toFixed(2)}</h2>
        <h2>Average Order Value: ${totalSales ? (totalSales / monthOrderNumber).toFixed(2) : "0"} </h2>
        <p>day by day: todo</p>
      </div>
    </div>
  );
};




