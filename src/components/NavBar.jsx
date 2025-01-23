// Problem: We want our users to have ease of navigation on our web app. Our web app will be made up of different pages.
// No matter which page they may be on, they will have the ability to navigate to any other page readily available
// through a navigation bar. The navigation bar will be generated after log in and will persist through all views.

import { Link } from "react-router-dom";
import "./Navbar.css"
// Tasks:
// (1) This is a new component. It should be found in the components folder, under a new folder.
// (2) This component will need to be written in a file, it will require a file.
// (3) This component's function will be used in routing, therefore, it will exported.
export const NavBar = () => {
  // (4) In the component function's return, the return should be wrapped in <ul> elements. It lists.
  return (
    <ul className="navbar">
      {/* (5) Each Na v Bar element should be wrapped in <link> elements imported from react-router-dom. */}
      {/* (6) Each link should include the full path name in a to-"" attribute. */}
      {/* (7) Each Nav Bar element requires text to visually cue the user. <link>Text Here</link>. */}
      <li className="navbar-item">
        <Link to="/orders">All Orders</Link>
      </li>
      <li className="navbar-item">
        <Link to="/orders/new">New Order</Link>
      </li>
      <li className="navbar-item">
        <Link to="/employees">Employees</Link>
      </li>
      <li className="navbar-item">
        <Link to="/sales-report">Sales Report</Link>
      </li>
      {/* (8) The Nav Bar element will include a log out feature, therefore it requires a logout function. */}
      {/* (9) The Nav Bar element log out function should get the current user from localStorage. */}
      {localStorage.getItem("pizza_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              // (10) Once the localStorage has been retrieved, the localStorage should reset user
              localStorage.removeItem("pizza_user");
              // (11) After the user is reset from localStorage, the user should be navigate to the log in page.
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
        // (12) Once the user enters their log in information, they should be redirected to Home component.
      )}
    </ul>
  );
};
