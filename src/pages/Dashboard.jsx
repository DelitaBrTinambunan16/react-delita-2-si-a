import PageHeader from "../components/PageHeader";

import {
  FaShoppingCart,
  FaTruck,
  FaTimesCircle,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">
      
      <div className="flex-1 p-4">
        
        <PageHeader 
          title="Dashboard"
          breadcrumb={["Dashboard"]}
        />

        {/* CARDS */}
        <div className="grid grid-cols-5 gap-4 mt-6">

          {/* CARD 1 */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaShoppingCart className="text-green-500 text-2xl" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-lg">75</h2>
                <span className="text-xs bg-green-100 text-green-500 px-2 py-1 rounded">
                  +12%
                </span>
              </div>
              <p className="text-gray-400 text-sm">Total Orders</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaTruck className="text-blue-500 text-2xl" />
            </div>
            <div>
              <h2 className="font-bold text-lg">175</h2>
              <p className="text-gray-400 text-sm">Total Delivered</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <FaTimesCircle className="text-red-500 text-2xl" />
            </div>
            <div>
              <h2 className="font-bold text-lg">40</h2>
              <p className="text-gray-400 text-sm">Total Canceled</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaDollarSign className="text-yellow-500 text-2xl" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Rp.128</h2>
              <p className="text-gray-400 text-sm">Total Revenue</p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaClock className="text-purple-500 text-2xl" />
            </div>
            <div>
              <h2 className="font-bold text-lg">18</h2>
              <p className="text-gray-400 text-sm">Pending Orders</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;