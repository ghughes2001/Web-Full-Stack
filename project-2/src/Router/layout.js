import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/registration"> Registration </Link>
          </li>
          <li>
            <Link to="/login"> Log In </Link>
          </li>
          <li>
            <Link to="/account"> Account </Link>
          </li>
          <li>
            <Link to="/logout"> Log Out </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;