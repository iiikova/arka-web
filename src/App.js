import Design from "./pages/Design/Design";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Products from "./pages/Products/Products";
import Merchants from "./pages/Merchants/Merchants";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="main" element={<Layout />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
