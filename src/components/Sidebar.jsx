import {
    MdDashboard,
    MdShoppingCart,
    MdPeople,
    MdWidgets,
    MdInventory,
    MdTune,
    MdErrorOutline,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar(){

  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-4 space-x-2
    ${isActive ? 
      "text-hijau bg-green-200 font-extrabold" : 
      "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div className="w-64 bg-white min-h-screen shadow p-4 flex flex-col">

      {/* LOGO */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Sedap<span className="text-green-500">.</span>
        </h1>
        <p className="text-gray-400 text-sm">Modern Admin Dashboard</p>
      </div>

      {/* MENU */}
      <ul className="space-y-4">

        <li>
          <NavLink to="/" className={menuClass}>
            <MdDashboard size={18} /> <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders" className={menuClass}>
            <MdShoppingCart size={18} /> <span>Order</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers" className={menuClass}>
            <MdPeople size={18} /> <span>Customers</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/components" className={menuClass}>
            <MdWidgets size={18} /> <span>Components</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/product" className={menuClass}>
            <MdInventory size={18} /> <span>Produk Detail</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/FiturXyz" className={menuClass}>
            <MdTune size={18} /> <span>Fitur Xyz</span>
          </NavLink>
        </li>

        {/* ERROR MENU */}
        <li>
          <NavLink to="/error-400" className={menuClass}>
            <MdErrorOutline size={18} /> <span>Error 400</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/error-401" className={menuClass}>
            <MdErrorOutline size={18} /> <span>Error 401</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/error-403" className={menuClass}>
            <MdErrorOutline size={18} /> <span>Error 403</span>
          </NavLink>
        </li>

      </ul>

      {/* FOOTER */}
      <div className="mt-auto">

        <div className="mt-10 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
          <div>
            <p className="text-sm mb-3">
              Please organize your menus through button below!
            </p>
            <button className="bg-white text-green-500 px-3 py-1 rounded">
              + Add Menus
            </button>
          </div>

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>

        <p className="text-gray-400 text-sm mt-4 font-semibold">
          Sedap Restaurant Admin Dashboard
        </p>

        <p className="text-gray-400 text-xs">© 2025 All Rights Reserved</p>
      </div>

    </div>
  );
}