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
          className="bg-hijau text-white px-4 py-2 rounded-lg"
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
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.orderId} className="border-b">
                <td>{o.orderId}</td>
                <td>{o.customerName}</td>
                <td>{o.status}</td>
                <td>Rp {o.totalPrice}</td>
                <td>{o.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}