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
          className="bg-hijau text-white px-4 py-2 rounded-lg"
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
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Loyalty</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c.customerId} className="border-b">
                <td>{c.customerId}</td>
                <td>{c.customerName}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}