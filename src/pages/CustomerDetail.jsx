import { useParams, Link } from "react-router-dom";
import customersData from "../data/customersData";

export default function CustomerDetail() {
    const { id } = useParams();

    const customer = customersData.find(
        (c) => c.id === Number(id)
    );

    if (!customer) {
        return (
            <div className="p-6 text-red-600">
                Customer tidak ditemukan
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto mt-6 bg-white shadow-lg rounded-xl p-6">

            {/* AVATAR */}
            <div className="flex flex-col items-center">

                <img
                    src={`https://i.pravatar.cc/150?img=${customer.id}`}
                    alt={customer.customerName}
                    className="w-24 h-24 rounded-full object-cover shadow mb-4"
                />

                <h2 className="text-2xl font-bold">
                    {customer.customerName}
                </h2>

                <p className="text-gray-500">
                    {customer.customerId}
                </p>

            </div>

            {/* DETAIL */}
            <div className="mt-6 space-y-3 text-gray-700">

                <p><b>Email:</b> {customer.email}</p>
                <p><b>Phone:</b> {customer.phone}</p>

                <p>
                    <b>Loyalty:</b>{" "}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ml-2
                        ${customer.loyalty === "Gold"
                            ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                            : customer.loyalty === "Silver"
                            ? "bg-gray-100 text-gray-800 border-gray-300"
                            : "bg-orange-100 text-orange-800 border-orange-200"
                        }`}
                    >
                        {customer.loyalty}
                    </span>
                </p>

            </div>

            {/* BACK */}
            <div className="mt-6 text-center">
                <Link
                    to="/customers"
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                    ← Back to Customers
                </Link>
            </div>

        </div>
    );
}