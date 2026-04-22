import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/ordersData";

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders([...orders, form]);
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader 
        title="Orders"
        breadcrumb={["Dashboard", "Order List"]}
      >
        <button 
          id="add-button"
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Add Orders
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 mt-4 rounded shadow space-y-3">
          <input placeholder="Order ID" className="border p-2 w-full"
            onChange={(e)=>setForm({...form, orderId:e.target.value})} />

          <input placeholder="Customer Name" className="border p-2 w-full"
            onChange={(e)=>setForm({...form, customerName:e.target.value})} />

          <input placeholder="Total Price" className="border p-2 w-full"
            onChange={(e)=>setForm({...form, totalPrice:e.target.value})} />

          <input type="date" className="border p-2 w-full"
            onChange={(e)=>setForm({...form, orderDate:e.target.value})} />

          <select className="border p-2 w-full"
            onChange={(e)=>setForm({...form, status:e.target.value})}>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </form>
      )}

      {/* TABLE */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500 font-semibold tracking-wider">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {orders.map((o) => (
              <tr key={o.orderId} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">{o.orderId}</td>
                <td className="px-6 py-4">{o.customerName}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border
                    ${o.status === 'Completed' ? 'bg-green-100 text-green-800 border-green-200' : 
                      o.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                      'bg-red-100 text-red-800 border-red-200'}`}>
                    {o.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">Rp {Number(o.totalPrice).toLocaleString('id-ID')}</td>
                <td className="px-6 py-4 text-gray-500">{o.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}