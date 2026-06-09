export default function SpareParts() {
  const parts = [
    "Brake Pads",
    "Engine Oil",
    "Filters",
    "Spark Plugs",
    "Car Batteries",
    "Tyres",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Vehicle Spare Parts
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {parts.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-orange-500">
                {item}
              </h3>
              <p className="text-gray-600 mt-2">
                High quality {item.toLowerCase()} available at affordable prices.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}