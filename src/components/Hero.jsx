import { Link } from "react-router-dom";
import { FaTruck, FaTools, FaGlobeAfrica } from "react-icons/fa";
import heroTruck from "../assets/hero-truck.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

            <span className="inline-block bg-orange-500/20 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Trusted Logistics & Automotive Solutions
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">

              Reliable Logistics

              <span className="block text-orange-500">
                & Genuine Vehicle Parts
              </span>

            </h1>

            <p className="mt-8 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Sejudam provides dependable logistics services and premium
              automotive spare parts for businesses and individuals.
              Delivering speed, trust, and quality across Nigeria and beyond.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/services"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="border border-slate-600 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-xl font-semibold transition"
              >
                Get a Quote
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  100+
                </h3>
                <p className="text-slate-400 text-sm">
                  Deliveries
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  24/7
                </h3>
                <p className="text-slate-400 text-sm">
                  Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  2
                </h3>
                <p className="text-slate-400 text-sm">
                  Countries
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

        <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >

  <img
    src={heroTruck}
    alt="Sejudam Logistics"
    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
  />
  

  <div className="absolute bottom-6 left-6 bg-slate-950/90 backdrop-blur-md px-6 py-4 rounded-xl border border-orange-500/20 shadow-xl">
    <p className="text-orange-500 font-semibold">
      Trusted Logistics Partner
    </p>

    <p className="text-white text-sm">
      Nigeria • Canada
    </p>
  </div>

        </motion.div>


        </div>

      </div>

    </section>
  );
}