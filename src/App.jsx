import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";


//useState()(REACT) = const [stateVariable, setterFunction], must pass in an initial value for useState("[], 0, '', boolean"), must be imported from REACT
export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
