import { FaTruck, FaWarehouse, FaTools } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <FaTruck className="text-4xl text-orange-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Logistics Delivery</h2>
          <p className="text-gray-600">
            Fast and secure delivery of goods across Nigeria.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <FaWarehouse className="text-4xl text-orange-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Warehousing</h2>
          <p className="text-gray-600">
            Safe storage and inventory management for businesses.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <FaTools className="text-4xl text-orange-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Spare Parts Supply</h2>
          <p className="text-gray-600">
            Genuine vehicle parts at affordable prices.
          </p>
        </div>

      </div>
    </div>
  );
}