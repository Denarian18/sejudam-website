import {
  FaTruck,
  FaWarehouse,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logisticsImg from "../assets/services/logistics.jpg";
import warehouseImg from "../assets/services/warehouse.jpg";
import sparePartsImg from "../assets/services/spareparts.jpg";

export default function ServicesPage() {
  const services = [
    {
      image: logisticsImg,
      icon: <FaTruck />,
      title: "Logistics Delivery",
      description:
        "Fast, secure, and reliable transportation of goods across Nigeria and beyond.",
      features: [
        "Nationwide Delivery",
        "Real-Time Updates",
        "Secure Handling",
      ],
      popular: true,
    },

    {
      image: warehouseImg,
      icon: <FaWarehouse />,
      title: "Warehousing",
      description:
        "Professional storage and inventory management solutions for businesses of all sizes.",
      features: [
        "Secure Storage",
        "Inventory Tracking",
        "Flexible Capacity",
      ],
    },

    {
      image: sparePartsImg,
      icon: <FaTools />,
      title: "Spare Parts Supply",
      description:
        "Quality vehicle parts sourced from trusted manufacturers and suppliers.",
      features: [
        "Genuine Parts",
        "Competitive Pricing",
        "Bulk Orders Available",
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-500">Services</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300">
            From nationwide logistics solutions to genuine vehicle spare
            parts, Sejudam delivers dependable services that keep businesses
            and individuals moving efficiently.
          </p>

        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                10K+
              </h3>
              <p className="text-gray-600">
                Deliveries
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                5K+
              </h3>
              <p className="text-gray-600">
                Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                24/7
              </h3>
              <p className="text-gray-600">
                Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                99%
              </h3>
              <p className="text-gray-600">
                Satisfaction
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >

                {/* Service Image */}
                <div className="relative h-60 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-white text-2xl font-bold">
                      {service.title}
                    </h3>
                  </div>

                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-2 rounded-full">
                      Most Requested
                    </div>
                  )}

                </div>

                {/* Content */}
                <div className="p-8">

                  <div className="text-5xl text-orange-500 mb-5">
                    {service.icon}
                  </div>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">

                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FaCheckCircle className="text-orange-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}

                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-orange-500 hover:gap-4 transition-all"
                  >
                    Request Service
                    <FaArrowRight />
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Sejudam?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-slate-50 p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">
                10K+
              </h3>
              <p className="text-gray-600">
                Successful Deliveries
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">
                24/7
              </h3>
              <p className="text-gray-600">
                Customer Support
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">
                99%
              </h3>
              <p className="text-gray-600">
                Customer Satisfaction
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">
                Fast
              </h3>
              <p className="text-gray-600">
                Response Time
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>

          <p className="text-slate-300 text-lg mb-8">
            Whether you need logistics support, warehousing solutions,
            or genuine vehicle spare parts, our team is ready to help.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Get a Free Quote
          </Link>

        </div>
      </section>

    </div>
  );
}