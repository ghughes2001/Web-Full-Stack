import { Outlet, Link } from "react-router-dom";
import React from "react";
import "../CSS/nav.css";

const home = (props) => {
  const { loggedIn } = props;
  
  return (
    <><div>
    </div>
    
      <ul className="nav">
          <Link to="/"> Home </Link>
        {!loggedIn && (
          <Link to="/registration"> Registration </Link>
        )}
        {!loggedIn && (
            <Link to="/login"> Log In </Link>
        )}
        {loggedIn && (
            <Link to="/account"> Account </Link>
        )}
        {loggedIn && (
          <Link to="/logout"> Log Out </Link>
        )}
      </ul>

    <div>
      <footer className="foot">
        <p> Link: W3Schools <br />
        <Link to="https://www.w3schools.com"> W3Schools </Link>
        </p>
      </footer>
    </div>

    
    <Outlet /></>
  )
};

export default home;