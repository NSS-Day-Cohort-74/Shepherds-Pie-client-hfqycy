import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"

export const App = () => (
  <>
    <Routes>
      <Route path="/login" element={<></>} />
      <Route path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>}
      />
    </Routes>

  </>
)

