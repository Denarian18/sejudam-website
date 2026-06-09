import { FaBullseye, FaEye, FaHandshake, FaTruck, FaShieldAlt, FaClock } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-slate-50">

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-orange-500">Sejudam</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300">
            Delivering trust, efficiency, and reliability through premium
            logistics solutions and genuine vehicle spare parts for
            businesses and individuals across Nigeria and beyond.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sejudam was founded with a simple goal: to provide dependable
              logistics services and quality vehicle spare parts that people
              can trust. We understand that businesses depend on timely
              deliveries and vehicle owners rely on durable components to
              keep moving.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through professionalism, innovation, and customer-focused
              service, we have built a reputation for reliability and
              excellence. Whether transporting goods or supplying genuine
              automotive parts, our commitment remains the same —
              delivering value with every service.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              Why Choose Sejudam?
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaTruck className="text-orange-500 text-2xl" />
                <span>Reliable Logistics Solutions</span>
              </div>

              <div className="flex items-center gap-4">
                <FaShieldAlt className="text-orange-500 text-2xl" />
                <span>Genuine Vehicle Spare Parts</span>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-orange-500 text-2xl" />
                <span>Fast & Efficient Service Delivery</span>
              </div>

              <div className="flex items-center gap-4">
                <FaHandshake className="text-orange-500 text-2xl" />
                <span>Customer-First Approach</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="p-10 rounded-3xl shadow-lg">
            <FaBullseye className="text-4xl text-orange-500 mb-4" />

            <h3 className="text-3xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To provide reliable logistics services and quality vehicle
              spare parts that help businesses and individuals operate
              efficiently while enjoying exceptional customer service.
            </p>
          </div>

          <div className="p-10 rounded-3xl shadow-lg">
            <FaEye className="text-4xl text-orange-500 mb-4" />

            <h3 className="text-3xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become a leading logistics and automotive solutions
              provider recognized for innovation, trust, and operational
              excellence across Africa and international markets.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-4xl font-bold text-orange-500">
                10K+
              </h3>
              <p className="mt-2 text-gray-600">
                Deliveries Completed
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-4xl font-bold text-orange-500">
                5K+
              </h3>
              <p className="mt-2 text-gray-600">
                Happy Customers
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-4xl font-bold text-orange-500">
                24/7
              </h3>
              <p className="mt-2 text-gray-600">
                Customer Support
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-4xl font-bold text-orange-500">
                99%
              </h3>
              <p className="mt-2 text-gray-600">
                Customer Satisfaction
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}