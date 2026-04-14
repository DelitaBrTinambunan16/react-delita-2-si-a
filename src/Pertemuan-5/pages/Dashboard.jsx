import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaTimesCircle, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="font-barlow">
      <PageHeader />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-garis shadow-sm flex items-center justify-between gap-4">
          <div>
            <p className="text-teks-samping text-sm">Total Orders</p>
            <h2 className="text-2xl font-bold">75</h2>
          </div>
          <div className="w-14 h-14 flex items-center justify-center bg-hijau text-white rounded-full text-xl shadow-sm">
            <FaShoppingCart />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-garis shadow-sm flex items-center justify-between gap-4">
          <div>
            <p className="text-teks-samping text-sm">Total Delivered</p>
            <h2 className="text-2xl font-bold">175</h2>
          </div>
          <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white rounded-full text-xl shadow-sm">
            <FaTruck />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-garis shadow-sm flex items-center justify-between gap-4">
          <div>
            <p className="text-teks-samping text-sm">Total Canceled</p>
            <h2 className="text-2xl font-bold">40</h2>
          </div>
          <div className="w-14 h-14 flex items-center justify-center bg-red-500 text-white rounded-full text-xl shadow-sm">
            <FaTimesCircle />
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-garis shadow-sm flex items-center justify-between gap-4">
          <div>
            <p className="text-teks-samping text-sm">Total Revenue</p>
            <h2 className="text-2xl font-bold">Rp.128</h2>
          </div>
          <div className="w-14 h-14 flex items-center justify-center bg-yellow-400 text-white rounded-full text-xl shadow-sm">
            <FaDollarSign />
          </div>
        </div>
      </div>
    </div>
  );
}