import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { companyInfo } from "../data/companyInfo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            {companyInfo.name}
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Reliable logistics solutions and genuine vehicle spare parts
            serving businesses and individuals with professionalism,
            speed, and trust.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Logistics & Delivery</li>
            <li>Vehicle Spare Parts</li>
            <li>Fleet Support</li>
            <li>Warehousing</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-400">

            <p className="flex items-center gap-2">
              <FaPhone className="text-orange-500" />
              Nigeria: {companyInfo.nigeriaPhone}
            </p>

            <p className="flex items-center gap-2">
              <FaPhone className="text-orange-500" />
              Canada: {companyInfo.canadaPhone}
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              {companyInfo.email}
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              {companyInfo.address}
            </p>

          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-6 text-xl">

            <a
              href={companyInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href={companyInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href={companyInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href={companyInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
      </div>

    </footer>
  );
}