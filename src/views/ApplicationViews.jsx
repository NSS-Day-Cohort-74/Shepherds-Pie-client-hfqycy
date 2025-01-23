import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { ViewAllEmployees } from "../pages/ViewAllEmployees"
import { EmployeeDetails } from "../pages/EmployeeDetails"
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
          <Route index element={<>Orders</>} />
          <Route path=":orderId" element={<>Order Details</>} />
          <Route path="new" element={<>New Order</>} />
          <Route path="edit/:orderId" element={<>Edit order</>} />

        </Route>

        <Route path="sales-report" element={<>Sales report</>}></Route>
      </Route>
    </Routes >
  </>)

}

