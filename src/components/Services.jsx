import { FaTruck, FaWarehouse, FaTools } from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logistics */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-2xl transition">
            <FaTruck className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Logistics Delivery</h3>
            <p className="text-gray-600">
              Fast and reliable transportation of goods across Nigeria
              with real-time tracking and safe delivery.
            </p>
          </div>

          {/* Warehousing */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-2xl transition">
            <FaWarehouse className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Warehousing</h3>
            <p className="text-gray-600">
              Secure storage solutions for businesses with modern inventory management systems.
            </p>
          </div>

          {/* Spare Parts */}
          <div className="p-8 rounded-xl shadow-lg border hover:shadow-2xl transition">
            <FaTools className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Vehicle Spare Parts</h3>
            <p className="text-gray-600">
              Genuine and affordable spare parts for various vehicle brands and models.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}