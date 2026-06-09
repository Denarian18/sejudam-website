export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-orange-500">
          Sejudam
        </h1>

        <ul className="hidden md:flex gap-8">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">About</li>
          <li className="cursor-pointer hover:text-orange-500">Services</li>
          <li className="cursor-pointer hover:text-orange-500">Spare Parts</li>
          <li className="cursor-pointer hover:text-orange-500">Contact</li>
        </ul>

        <button className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600">
          Get Quote
        </button>

      </div>
    </nav>
  );
}