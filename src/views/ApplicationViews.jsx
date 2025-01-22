import { useEffect, useState } from "react"
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
        <Route index element={<></>} />

        <Route path="/employees">
          <Route index element={<></>} />
          <Route path=":employeeId" element={<></>} />
          <Route path="edit/:employeeId" element={<></>} />

        </Route>
        <Route path="orders">
          <Route index element={<></>} />
          <Route path=":orderId" element={<></>} />
          <Route path="new" element={<></>} />
          <Route path="edit/:orderId" element={<></>} />

        </Route>

        <Route path="all-orders" element={<></>}></Route>
        <Route path="sales-report" element={<></>}></Route>
      </Route>
    </Routes >
  </>)

}

