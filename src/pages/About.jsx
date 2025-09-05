import { Link } from "react-router-dom";

export default function About() {

  return (
    <section className="mt-[30px] md:mt-0 relative flex flex-col md:flex-row items-center justify-between min-h-[100vh] w-full bg-gray-50 px-6 md:px-16 py-12">
      {/* Left Side - Text */}
      <div className="md:w-1/2 w-full flex flex-col items-start text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          About <span className="text-blue-600">VCPL</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At VCPL, we specialize in delivering innovative IT solutions tailored 
          to your business needs. From software development to cloud integration, 
          we help organizations embrace digital transformation and achieve long-term growth.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          With a team of experienced developers, designers, and strategists, 
          we ensure every project is driven by creativity, innovation, and 
          client success.
        </p>
        <Link to="/services"><button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
          Learn More
        </button></Link>
      </div>

      {/* Right Side - Image / Video */}
      <div className="md:w-1/2 w-full mt-10 md:mt-0 flex flex-col items-center">
        {/* Dummy Image */}
        <img
          src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
          alt="About us"
          className="rounded-lg shadow-lg w-full max-w-md mb-6"
        />

        {/* Embedded Video */}
        <div className="w-full max-w-md aspect-video">
        <video
          className="rounded-lg shadow-lg w-full max-w-md mb-6"
          autoPlay
          loop
          muted
          src="https://www.pexels.com/download/video/3129977/"
        />
        </div>
      </div>
    </section>
  );
}
