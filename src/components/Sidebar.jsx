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

const menus = [
    { to: "/",          icon: MdDashboard,    label: "Dashboard"     },
    { to: "/orders",    icon: MdShoppingCart, label: "Order"         },
    { to: "/customers", icon: MdPeople,       label: "Customers"     },
    { to: "/components",icon: MdWidgets,      label: "Components"    },
    { to: "/product",   icon: MdInventory,    label: "Produk Detail" },
    { to: "/FiturXyz",  icon: MdTune,         label: "Fitur Xyz"     },
];

const errorMenus = [
    { to: "/error-400", label: "Error 400" },
    { to: "/error-401", label: "Error 401" },
    { to: "/error-403", label: "Error 403" },
];

const menuClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all
    ${isActive
        ? "text-green-700 bg-green-100 font-extrabold"
        : "text-gray-500 hover:text-green-700 hover:bg-green-100 hover:font-extrabold"
    }`;

export default function Sidebar() {
    return (
        <div className="w-64 bg-white min-h-screen shadow p-4 flex flex-col">

            {/* LOGO */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Sedap<span className="text-green-500">.</span>
                </h1>
                <p className="text-gray-400 text-sm">Modern Admin Dashboard</p>
            </div>

            {/* MAIN MENU */}
            <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2 px-1">
                Main Menu
            </p>
            <ul className="space-y-1 mb-6">
                {menus.map(({ to, icon: Icon, label }) => (
                    <li key={to}>
                        <NavLink to={to} className={menuClass}>
                            <Icon size={18} className="shrink-0" />
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* ERROR MENU */}
            <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2 px-1">
                Error Pages
            </p>
            <ul className="space-y-1">
                {errorMenus.map(({ to, label }) => (
                    <li key={to}>
                        <NavLink to={to} className={menuClass}>
                            <MdErrorOutline size={18} className="shrink-0" />
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* FOOTER */}
            <div className="mt-auto">
                <div className="mt-10 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-between gap-3">
                    <div>
                        <p className="text-sm mb-3">
                            Please organize your menus through button below!
                        </p>
                        <button className="bg-white text-green-500 px-3 py-1 rounded text-sm font-semibold">
                            + Add Menus
                        </button>
                    </div>
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="profile"
                        className="w-10 h-10 rounded-full shrink-0"
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