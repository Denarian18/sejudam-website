export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow">

        <h1 className="text-4xl font-bold mb-6 text-center">
          About Sejudam
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Sejudam is a trusted logistics and vehicle spare parts company
          operating across Nigeria. We specialize in fast, reliable delivery
          services and the supply of genuine automotive components.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Our mission is to make transportation and vehicle maintenance
          easier by providing affordable and efficient solutions to individuals
          and businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">

          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold text-orange-500">10K+</h3>
            <p className="text-gray-600">Deliveries Completed</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold text-orange-500">5K+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold text-orange-500">24/7</h3>
            <p className="text-gray-600">Customer Support</p>
          </div>

        </div>

      </div>
    </div>
  );
}