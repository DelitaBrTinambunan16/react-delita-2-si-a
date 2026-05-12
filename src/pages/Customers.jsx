import { useState } from "react";
import { Link } from "react-router-dom";
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
    setCustomers([...customers, { ...form, id: customers.length + 1 }]);
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader 
        title="Customers"
        breadcrumb={["Dashboard", "Customer List"]}
      >
        <button 
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

      {/* TABLE */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">

        <table className="w-full text-left whitespace-nowrap">

          <thead>
            <tr className="border-b bg-gray-50 text-xs uppercase text-gray-500">
              <th className="px-6 py-4">Avatar</th>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Loyalty</th>
            </tr>
          </thead>

          <tbody>

            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">

                {/* AVATAR */}
                <td className="px-6 py-4">
                  <img
                    src={`https://i.pravatar.cc/40?img=${c.id}`}
                    className="w-8 h-8 rounded-full"
                    alt="avatar"
                  />
                </td>

                {/* ID */}
                <td className="px-6 py-4">{c.customerId}</td>

                {/* NAME */}
                <td className="px-6 py-4 font-medium">
                  <Link 
                    to={`/customers/${c.id}`}
                    className="text-green-600 hover:underline"
                  >
                    {c.customerName}
                  </Link>
                </td>

                <td className="px-6 py-4 text-gray-500">{c.email}</td>
                <td className="px-6 py-4 text-gray-500">{c.phone}</td>

                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs border
                    ${c.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 
                      c.loyalty === 'Silver' ? 'bg-gray-100 text-gray-800' : 
                      'bg-orange-100 text-orange-800'}`}>
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