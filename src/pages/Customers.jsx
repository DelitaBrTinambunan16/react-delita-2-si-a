import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customersData";

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    customerId: "",
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, form]);
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader 
        title="Customers"
        breadcrumb={["Dashboard", "Customer List"]}
      >
        <button 
          id="add-button"
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Add Customer
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 mt-4 rounded shadow space-y-3">
          <input placeholder="Customer ID" className="border p-2 w-full"
            onChange={(e)=>setForm({...form, customerId:e.target.value})} />

          <input placeholder="Customer Name" className="border p-2 w-full"
            onChange={(e)=>setForm({...form, customerName:e.target.value})} />

          <input placeholder="Email" className="border p-2 w-full"
            onChange={(e)=>setForm({...form, email:e.target.value})} />

          <input placeholder="Phone" className="border p-2 w-full"
            onChange={(e)=>setForm({...form, phone:e.target.value})} />

          <select className="border p-2 w-full"
            onChange={(e)=>setForm({...form, loyalty:e.target.value})}>
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>

          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </form>
      )}

      {/* DATA */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500 font-semibold tracking-wider">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Loyalty</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {customers.map((c) => (
              <tr key={c.customerId} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 font-medium text-gray-900">{c.customerId}</td>
                <td className="px-6 py-4">{c.customerName}</td>
                <td className="px-6 py-4 text-gray-500">{c.email}</td>
                <td className="px-6 py-4 text-gray-500">{c.phone}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border
                    ${c.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                      c.loyalty === 'Silver' ? 'bg-gray-100 text-gray-800 border-gray-300' : 
                      'bg-orange-100 text-orange-800 border-orange-200'}`}>
                    {c.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}