import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Router/Home";
import RegistrationForm from "../Pages/Registration";
import LogInForm from "../Pages/LogIn";
import Logout from "../Pages/LogOut";
import AccountForm from "../Pages/Account";
import NoPage from "../Pages/NoPage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSessinState = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />}>
          <Route path="registration" element={<RegistrationForm h/>} />
          <Route path="account" element={<AccountForm />} />
          <Route path="login" element={<LogInForm handleLogin={handleSessinState} />} />
          <Route path="logout" element={<Logout handleLogOut={handleSessinState} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;