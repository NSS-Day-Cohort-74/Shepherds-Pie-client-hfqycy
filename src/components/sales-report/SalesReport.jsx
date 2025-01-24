import { useEffect } from "react"
import { useState } from "react"

{/*http://localhost:8088/pizzas?_expand=order&_expand=size&_expand=sauce&_expand=cheese&_embed=pizzaToppings&_expand=toppingId*/ }


export const SalesReport = () => {
  const [allPizzaData, setAllPizzaData] = useState([])
  const [selectedMonthPizzas, setSelectedMonthPizzas] = useState(allPizzaData)
  const [monthOrderNumber, setMonthOrderNumber] = useState(0)
  const [totalSales, setTotalSales] = useState()
  const getNumberOfOrders = () => {
    const uniqueOrderIds = new Set(selectedMonthPizzas.map(pizza => pizza.orderId))
    setMonthOrderNumber(uniqueOrderIds.size)

  }

  useEffect(() => {
    fetch("http://localhost:8088/pizzas?_expand=order&_expand=size&_expand=sauce&_expand=cheese&_embed=pizzaToppings&_expand=toppingId ")
      .then(res => res.json())
      .then(data => setAllPizzaData(data))
  }, [])
  useEffect(() => {
    setSelectedMonthPizzas(allPizzaData)
    setTimeout(getNumberOfOrders, 100)
    const sales = selectedMonthPizzas.reduce((acc, pizza) => acc + pizza.order.totalPrice, 0)
    setTimeout(setTotalSales, 100)
  }, [allPizzaData])
  return (
    <div className="orders-container">
      <div className="order">
        <div><select>
          <option>--TODO--</option>
        </select></div>
        <h1>Sales Report</h1>
        <h2>Orders this Month: {monthOrderNumber}</h2>
        <h2>Total Sales : {totalSales} </h2>
        <h2>Average Order Value: todo</h2>
        <p>day by day: todo</p>
      </div>
    </div >
  )
}
