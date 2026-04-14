import { IoHome, IoCart, IoPeople } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="w-72 bg-white border-r border-garis flex flex-col justify-between p-6 h-full font-barlow">
      <div>
        <div>
          <h1 className="font-poppins text-3xl font-semibold">
            Sedap<span className="text-hijau">.</span>
          </h1>
          <p className="text-teks-samping text-sm mt-1">Modern Admin Dashboard</p>
        </div>

        <div className="mt-14 space-y-3">
          <button className="w-full flex items-center gap-3 p-3 rounded-2xl text-teks hover:bg-latar transition">
            <IoHome className="text-xl" />
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-2xl text-teks hover:bg-latar transition">
            <IoCart className="text-xl" />
            Orders
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-2xl text-teks hover:bg-latar transition">
            <IoPeople className="text-xl" />
            Customers
          </button>
        </div>
      </div>

      <div>
        <div className="rounded-[2rem] bg-hijau text-white p-6 space-y-4">
          <p className="text-sm font-semibold leading-6">
            Please organize your menu through button below!
          </p>
          <div className="flex items-center justify-between gap-4">
            <button className="bg-white text-black text-sm px-4 py-2 rounded-full">
              + Add Menus
            </button>
            <img
              src="https://i.pravatar.cc/40?img=32"
              className="w-10 h-10 rounded-full border-2 border-white"
              alt="Avatar"
            />
          </div>
        </div>

        <div className="text-sm text-teks-samping mt-6 leading-5">
          Sedap Restaurant Admin Dashboard
          <div className="mt-2">© 2026 All Right Reserved</div>
        </div>
      </div>
    </div>
  );
}