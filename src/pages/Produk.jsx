import { useState } from "react";
import PageHeader from "../components/PageHeader";
import productsData from "../data/produkData.json";
import { Package, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState(productsData);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    code: "",
    category: "",
    brand: "",
    price: "",
    stock: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts([...products, form]);

    setForm({
      title: "",
      code: "",
      category: "",
      brand: "",
      price: "",
      stock: ""
    });

    setShowForm(false);
  };

  const handleDelete = (code) => {
    setProducts(products.filter((p) => p.code !== code));
  };

  return (
    <div>

      {/* HEADER */}
      <PageHeader
        title="Products"
        breadcrumb={["Dashboard", "Product List"]}
      >
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2.5 rounded-xl shadow-sm"
        >
          Add Product
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 mt-5 rounded-2xl shadow-sm border border-gray-100 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Product Title"
              className="border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Product Code"
              className="border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, code: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Category"
              className="border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Brand"
              className="border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, brand: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Price"
              className="border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Stock"
              className="border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setForm({ ...form, stock: e.target.value })
              }
            />
          </div>

          <div className="flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl">
              Save Product
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 hover:bg-gray-300 transition px-5 py-2 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* TABLE */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">

        <table className="w-full text-left border-collapse whitespace-nowrap">

          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500 font-semibold tracking-wider">
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Brand</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {products.map((p) => (
              <tr
                key={p.code}
                className="hover:bg-gray-50 transition duration-200"
              >
                {/* PRODUCT */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                      <Package size={18} />
                    </div>

                    <span className="font-medium text-gray-900">
                      <Link to={`/products/${p.id}`} className="text-emerald-400 hover:text-emerald-500">
        {p.title}
    </Link>
                    </span>
                  </div>
                </td>

                {/* CODE */}
                <td className="px-6 py-4 text-gray-500">
                  {p.code}
                </td>

                {/* CATEGORY */}
                <td className="px-6 py-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                    {p.category}
                  </span>
                </td>

                {/* BRAND */}
                <td className="px-6 py-4">
                  {p.brand}
                </td>

                {/* PRICE */}
                <td className="px-6 py-4 font-medium text-gray-900">
                  Rp {Number(p.price).toLocaleString("id-ID")}
                </td>

                {/* STOCK */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      p.stock > 20
                        ? "bg-green-100 text-green-700"
                        : p.stock > 10
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.stock} pcs
                  </span>
                </td>

                {/* ACTION */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">

                    <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 p-2 rounded-lg transition">
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(p.code)}
                      className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}