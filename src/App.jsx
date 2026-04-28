import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage from "./components/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route
          path="/error-400"
          element={
            <ErrorPage
              code="400"
              message="Bad Request"
              image="/img/400-Error.png"
            />
          }
        />
        <Route
          path="/error-401"
          element={
            <ErrorPage
              code="401"
              message="Unauthorized"
              image="/img/401-Error.png"
            />
          }
        />
        <Route
          path="/error-403"
          element={
            <ErrorPage
              code="403"
              message="Forbidden"
              image="/img/403-Error.png"
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>

         <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>     
    </Routes>
  );
}

export default App;
