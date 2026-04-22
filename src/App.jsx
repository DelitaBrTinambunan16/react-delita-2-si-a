import { useState } from "react";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./layouts/Header";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage from "./components/ErrorPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />

          {/* <Dashboard /> */}
          <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* ERROR ROUTES */}
            <Route path="/error-400" element={<ErrorPage code="400" message="Bad Request" image="/img/400-Error.png" />} />
            <Route path="/error-401" element={<ErrorPage code="401" message="Unauthorized" image="/img/401-Error.png" />} />
            <Route path="/error-403" element={<ErrorPage code="403" message="Forbidden" image="/img/403-Error.png" />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
