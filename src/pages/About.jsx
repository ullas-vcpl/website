import { Link } from "react-router-dom";
export default function About() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[100vh] w-full bg-gray-50 px-6 md:px-16 py-12">
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
        <Link to="/"><button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
          Learn More
        </button></Link>
      </div>

      {/* Right Side - Image / Video */}
      <div className="md:w-1/2 w-full mt-10 md:mt-0 flex flex-col items-center">
        {/* Dummy Image */}
        <img
          src="https://via.placeholder.com/500x300"
          alt="About us"
          className="rounded-lg shadow-lg w-full max-w-md mb-6"
        />

        {/* Embedded Video */}
        <div className="w-full max-w-md aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="About Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
