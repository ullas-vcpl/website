import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "We design and build tailor-made software applications to solve your business challenges efficiently and securely.",
      image: "https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg",
    },
    {
      title: "Cloud Solutions",
      description:
        "Seamless migration, deployment, and management of cloud platforms to help your business scale effortlessly.",
      image: "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Engaging and responsive web and mobile applications that deliver superior user experiences across all devices.",
      image: "https://images.unsplash.com/photo-1565263965454-a44e2ede252a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlYiUyMGFuZCUyMG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "IT Consulting",
      description:
        "Strategic guidance and expert advice to align IT solutions with your business objectives for sustainable growth.",
      image: "https://images.unsplash.com/photo-1573167582108-000d05b2faad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fElUJTIwY29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Robust security frameworks and monitoring systems to safeguard your business against digital threats.",
      image: "https://plus.unsplash.com/premium_photo-1700830452741-3640bed87eef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "24/7 IT Support",
      description:
        "Round-the-clock technical support ensuring your systems run smoothly without downtime.",
      image: "https://images.pexels.com/photos/6804086/pexels-photo-6804086.jpeg",
    },
  ];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
