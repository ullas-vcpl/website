import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">VCPL IT Solutions</h3>
          <p className="text-gray-400">
            Innovate. Integrate. Elevate. Delivering IT solutions that empower businesses and drive growth.
          </p>
        </div>

        {/* Contact & Social Media */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@vcpl.com</p>
          <p className="text-gray-400">Phone: +91 123 456 7890</p>
          <p className="text-gray-400">Address: 123, Tech Street, City, India</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} VCPL IT Solutions. All rights reserved.
      </div>
    </footer>
  );
}
