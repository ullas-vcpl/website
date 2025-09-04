export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "We design and build tailor-made software applications to solve your business challenges efficiently and securely.",
      image: "https://via.placeholder.com/400x250?text=Software+Development",
    },
    {
      title: "Cloud Solutions",
      description:
        "Seamless migration, deployment, and management of cloud platforms to help your business scale effortlessly.",
      image: "https://via.placeholder.com/400x250?text=Cloud+Solutions",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Engaging and responsive web and mobile applications that deliver superior user experiences across all devices.",
      image: "https://via.placeholder.com/400x250?text=App+Development",
    },
    {
      title: "IT Consulting",
      description:
        "Strategic guidance and expert advice to align IT solutions with your business objectives for sustainable growth.",
      image: "https://via.placeholder.com/400x250?text=IT+Consulting",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Robust security frameworks and monitoring systems to safeguard your business against digital threats.",
      image: "https://via.placeholder.com/400x250?text=Cybersecurity",
    },
    {
      title: "24/7 IT Support",
      description:
        "Round-the-clock technical support ensuring your systems run smoothly without downtime.",
      image: "https://via.placeholder.com/400x250?text=IT+Support",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gray-50 px-6 md:px-16 py-12 mt-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At VCPL, we offer a wide range of IT services designed to empower
          businesses, streamline operations, and drive innovation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-110 transition-tranform  duration-500"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
