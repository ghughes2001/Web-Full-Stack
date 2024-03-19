import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "../Pages/Home";
import RegistrationForm from "../Pages/Registration";
import LogInForm from "../Pages/LogIn";
import AccountForm from "../Pages/Account";
import NoPage from "../Pages/NoPage";

const [loggedIn, setLoggedIn] = useState(false);

const App = () => {
  const handleSessionState = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="login" element={<LogInForm handleSignIn={handleSessionState} />} />
          <Route path="account" element={<AccountForm handleSignIn={handleSessionState} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}