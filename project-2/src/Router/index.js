import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "../Pages/Home";
import RegistrationForm from "../Pages/Registration";
import LogInForm from "../Pages/LogIn";
import AccountForm from "../Pages/Account";
import NoPage from "../Pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="login" element={<LogInForm />} />
          <Route path="account" element={<AccountForm />} />
          <Route path="logout" element={<LogOut />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}