import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { ViewAllEmployees } from "../components/employees/ViewAllEmployees"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { AllOrders } from "../components/orders/AllOrders"
import { OrderDetails } from "../components/orders/OrderDetails"
import { PizzaForm } from "../components/Pizza/PizzaForm"


export const ApplicationViews = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("pizza_user")))
  }, [])
  return (<>
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
      }>
        <Route index element={<>Home</>} />

        <Route path="employees">
          <Route index element={<ViewAllEmployees />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
          <Route path="edit/:employeeId" element={<>Edit employee Details</>} />

        </Route>
        <Route path="orders">
          <Route index element={<AllOrders />} />
          <Route path=":orderId" element={<OrderDetails />} />
          <Route path="add-pizza" element={<PizzaForm />} />
          <Route path="new" element={<>New Order</>} />
          <Route path="edit/:orderId" element={<>Edit order</>} />

        </Route>

        <Route path="sales-report" element={<>Sales report</>}></Route>
      </Route>
    </Routes >
  </>)

}

