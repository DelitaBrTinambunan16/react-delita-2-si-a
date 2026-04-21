import { useState } from "react";
import Sidebar from "./Layouts/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./Layouts/Header";
import "./assets/tailwind.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
