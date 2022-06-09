import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import Admin from "./features/admin/pages/Admin";
import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BrandIndex from "./features/admin/brandManagement/brandIndex";
import ProductIndex from "./features/admin/ProductManagement/ProductIndex";
import HomeIndex from "./features/customer/home/HomeIndex";
import Login from "./features/customer/login_register/login";
import Register from "./features/customer/login_register/register";
import DetailIndex from "./features/customer/detail/DetailIndex";
import Introduction from "./features/customer/intro/Introduction";
import Female from "./features/customer/Female/Female";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<Admin />}>
          <Route path="product/*" element={<ProductIndex />} />

          <Route path="brand/*" element={<BrandIndex />} />
        </Route>

        <Route path="/home/*" element={<HomeIndex />} />
        <Route path="/detail/:product_id" element={<DetailIndex />} />
        <Route path="/gioi_thieu" element={<Introduction />} />
        <Route path="nu/" element={<Female />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
