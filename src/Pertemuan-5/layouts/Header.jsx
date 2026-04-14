import { FaSearch, FaBell, FaChartLine, FaCog } from "react-icons/fa";

export default function Header() {
  return (
    <div className="h-24 bg-white border-b border-garis flex items-center justify-between px-8 font-barlow">
      <div className="flex items-center gap-5 w-full max-w-3xl">
        <div className="flex items-center gap-3 bg-latar rounded-full px-5 py-3 w-full shadow-sm border border-white">
          <FaSearch className="text-teks-samping text-lg" />
          <input
            className="bg-transparent outline-none w-full text-sm text-teks"
            placeholder="Search Here..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative w-12 h-12 rounded-full bg-sky-500 text-white shadow-sm flex items-center justify-center hover:bg-sky-600">
          <FaBell />
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-white text-sky-500 text-[10px] font-semibold w-5 h-5">
            50
          </span>
        </button>
        <button className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 shadow-sm flex items-center justify-center hover:bg-sky-200">
          <FaChartLine />
        </button>
        <button className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 shadow-sm flex items-center justify-center hover:bg-pink-200">
          <FaCog />
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-teks-samping">Hello,</div>
            <div className="text-sm font-semibold">Delita Br Tinambunan</div>
          </div>
          <img
            src="https://i.pravatar.cc/40?img=32"
            className="w-12 h-12 rounded-full border-2 border-latar"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}