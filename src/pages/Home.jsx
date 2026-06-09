import Hero from "../components/Hero";
import Services from "../components/Services";
import SpareParts from "../components/SpareParts";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SpareParts />
      {/* About Preview */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">About Sejudam</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sejudam is a trusted logistics and vehicle spare parts company
            providing fast delivery services and genuine automotive components
            across Nigeria.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Need Fast Delivery or Spare Parts?
        </h2>
        <p className="text-gray-300 mb-6">
          Contact Sejudam today for reliable service.
        </p>

       <Link to="/contact" className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600" >
          Get in Touch
        </Link>
      </section>
    </>
  );
}