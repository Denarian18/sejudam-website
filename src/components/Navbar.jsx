import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive ? "text-orange-500" : "hover:text-orange-500";

  return (
    <nav className="bg-slate-950 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-orange-500">
          Sejudam
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkStyle}>About</NavLink></li>
          <li><NavLink to="/services" className={linkStyle}>Services</NavLink></li>
          <li><NavLink to="/contact" className={linkStyle}>Contact</NavLink></li>
        </ul>

        <NavLink
          to="/services"
          className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600"
        >
          Get Quote
        </NavLink>

      </div>
    </nav>
  );
}