import React from "react";
// import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import NotFound from "./pages/NotFound";
// import ErrorPage from "./components/ErrorPage";
// AuthLayout
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import Loading from "./components/Loading";
import { Suspense } from "react";
// import MainLayout from "./layouts/MainLayout";




function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"))
  const Customers = React.lazy(() => import("./pages/Customers"))
  const Orders = React.lazy(() => import("./pages/Orders"))
  const NotFound = React.lazy(() => import("./pages/NotFound"))
  const Login = React.lazy(() => import("./pages/auth/Login"))
  const Register = React.lazy(() => import("./pages/auth/Register"))
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
  const ErrorPage = React.lazy(() => import("./components/ErrorPage"))
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))

  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
