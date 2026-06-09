export default function Hero() {
  return (
    <section className="bg-slate-900 text-white min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Reliable Logistics

          <span className="block text-orange-500">
            & Vehicle Spare Parts
          </span>

        </h1>

        <p className="mt-6 text-lg max-w-2xl text-slate-300">
          Sejudam delivers efficient logistics solutions and
          quality vehicle spare parts to businesses and
          individuals across Nigeria.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600">
            Explore Services
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}