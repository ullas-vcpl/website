import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-30">

        {/* Logo & Company Info */}
        <div className="md:w-[30vw] flex flex-col items-center text-center">
          <img
            src="/images/logo4.png" 
            alt="VCPL Logo"
            className="h-12 mb-3"
          />
          <h2 className="text-xl font-bold text-white">Veehar Corporates Pvt. Ltd.</h2>
          <p className="mt-2 text-sm text-gray-400">
            Empowering businesses with innovative IT solutions that drive growth,
            efficiency, and sustainability.
          </p>
        </div>

        {/* Contact Info */}
        <div className=" md:w-[30vw] flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-3 text-sm">📍 West Vinod Nagar, New Delhi, India</p>
          <p className="text-sm">📧 info@veeharcorporates.org</p>
          <p className="text-sm">📞 +91 97736 54682</p>
        </div>

        {/* Social Media */}
        <div className=" md:w-[30vw] flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-5 mt-3">
            <a href="#" className="hover:text-blue-500 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Veehar Corporates Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
