import Hero from "../components/Hero";
import Services from "../components/Services";
import SpareParts from "../components/SpareParts";
import { Link } from "react-router-dom";
import { FaTruck, FaShieldAlt, FaTools, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="text-orange-500">Sejudam</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              We combine professional logistics solutions with genuine vehicle
              spare parts supply, helping businesses and individuals move
              faster with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
              <FaTruck className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-400">
                Reliable and timely logistics solutions tailored to your needs.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
              <FaShieldAlt className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Trusted Service
              </h3>
              <p className="text-gray-400">
                Professional handling of every shipment and customer request.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
              <FaTools className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Genuine Parts
              </h3>
              <p className="text-gray-400">
                Quality automotive spare parts sourced from trusted suppliers.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
              <FaGlobe className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Global Reach
              </h3>
              <p className="text-gray-400">
                Supporting customers in Nigeria and Canada with dependable service.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Spare Parts */}
      <SpareParts />

      {/* About Preview */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Sejudam
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Sejudam is a trusted logistics and vehicle spare parts company
            dedicated to delivering efficient transportation services and
            premium automotive components. Our commitment to reliability,
            professionalism, and customer satisfaction makes us a preferred
            partner for businesses and individuals alike.
          </p>

          <Link
            to="/about"
            className="inline-block mt-8 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Learn More
          </Link>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-50 p-8 rounded-2xl shadow">
              <p className="text-gray-600 italic">
                "Excellent logistics service. Deliveries always arrive on time."
              </p>

              <h4 className="font-semibold mt-4">
                — Business Owner
              </h4>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow">
              <p className="text-gray-600 italic">
                "The spare parts quality exceeded my expectations."
              </p>

              <h4 className="font-semibold mt-4">
                — Auto Dealer
              </h4>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow">
              <p className="text-gray-600 italic">
                "Professional, responsive and trustworthy company."
              </p>

              <h4 className="font-semibold mt-4">
                — Fleet Manager
              </h4>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-orange-500 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Logistics Support or Vehicle Parts?
          </h2>

          <p className="text-lg mb-8">
            Contact Sejudam today and experience dependable service,
            fast delivery, and premium automotive solutions.
          </p>

          <Link
            to="/contact"
            className="bg-white text-orange-500 font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transition"
          >
            Request a Quote
          </Link>

        </div>
      </section>
    </>
  );
}