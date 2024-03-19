import { Outlet, Link } from "react-router-dom";

const { handleLogout } = props;

const logout = async (event) => {
  event.preventDefault();
  handleLogout(false)
}

const Layout = (props) => {
  const { loggedIn } = props

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          {!loggedIn && (
            <li>
              <Link to="/registration"> Registration </Link>
            </li>
          )}
          {!loggedIn && (
            <li>
              <Link to="/login"> Log In </Link>
            </li>
          )}
          {loggedIn && (
            <li>
              <Link to="/account"> Account </Link>
            </li>
          )}
          {loggedIn && (
            <li>
              <Link to="/logout" onClick={logout}> Log Out </Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;