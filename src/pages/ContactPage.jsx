import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Contact Sejudam
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Get in touch for logistics services or spare parts orders.
        </p>

        {/* Simple form UI */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg h-32"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>

        {/* Quick contact */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="tel:+2340000000000"
            className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg"
          >
            <FaPhone /> Call Us
          </a>

          <a
            href="https://wa.me/2340000000000"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg"
          >
            <FaWhatsapp /> WhatsApp
          </a>

        </div>

      </div>
    </div>
  );
}