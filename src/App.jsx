import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Login } from "./components/auth/Login"

export const App = () => (
  <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>}
      />
    </Routes>

  </>
)
