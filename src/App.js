import Header from "./pages/Header/Header";
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
