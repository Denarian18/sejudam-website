import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

import { companyInfo } from "../data/companyInfo";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-orange-500">Sejudam</span>
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Need logistics services, vehicle spare parts, or a delivery quote?
            Our team is ready to assist you.
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-orange-500 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Nigeria</h3>
                    <p className="text-gray-600">
                      {companyInfo.nigeriaPhone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-4">
                  <FaGlobe className="text-orange-500 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Canada</h3>
                    <p className="text-gray-600">
                      {companyInfo.canadaPhone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-orange-500 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      {companyInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={companyInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
              >
                WhatsApp Us
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
              >
                Send Email
              </a>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold mb-8">
              Request A Quote
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-4"
              />

              <select
                className="w-full border rounded-lg p-4"
              >
                <option>Choose Service</option>
                <option>Logistics Delivery</option>
                <option>Warehousing</option>
                <option>Vehicle Spare Parts</option>
                <option>Fleet Support</option>
              </select>

              <textarea
                rows="5"
                placeholder="Tell us about your request..."
                className="w-full border rounded-lg p-4"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600"
              >
                Submit Request
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Trust Section */}
      <section className="bg-slate-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-orange-500">
              24/7
            </h3>
            <p>Customer Support</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">
              Nationwide
            </h3>
            <p>Delivery Coverage</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-orange-500">
              Fast
            </h3>
            <p>Response Time</p>
          </div>

        </div>

      </section>

    </div>
  );
}