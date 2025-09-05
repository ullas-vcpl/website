import {
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);
   function onCloseModal() {
    setOpenModal(false);
  }
 
  return (
    <>
    <Modal show={openModal} onClose={onCloseModal} popup>
              <ModalHeader />
              <ModalBody>
                <div className="w-auto mx-auto my-12 px-4  h-[600px] md:hidden">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf0lT4LS0q6tsWyVVcUma4359KhDfOaxcytI3eDTHbFeAYKjQ/viewform?embedded=true"
                    height="700"
                  >
                    Loading…
                  </iframe>
                </div>
      
                <div className="w-auto mx-auto my-12 px-4  h-auto hidden md:block">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf0lT4LS0q6tsWyVVcUma4359KhDfOaxcytI3eDTHbFeAYKjQ/viewform?embedded=true"
                    width="640"
                    height="827"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    Loading…
                  </iframe>
                </div>
              </ModalBody>
            </Modal>
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[100vh] w-full bg-gray-100 px-6 md:px-16 py-12">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex items-center justify-center mb-10 md:mb-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1661371767935-aeeb44523816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Contact Us"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>

      {/* Right Side - Contact Details */}
      <div className="md:w-1/2 w-full flex flex-col items-start text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We’d love to hear from you! Whether you have a question, need support,
          or want to explore how VCPL can help your business, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="space-y-3">
          <p className="text-gray-700">
            📍 <span className="font-semibold">Address:</span> E-122,West Vinod Nagar, Delhi
          </p>
          <p className="text-gray-700">
            📧 <span className="font-semibold">Email:</span> info@veeharcorporates.org
          </p>
          <p className="text-gray-700">
            📞 <span className="font-semibold">Phone:</span> +91-9773654682
          </p>
        </div>

        {/* Call-to-Action Button */}
        <button className="cursor-pointer px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        onClick={() => setOpenModal(true)}>
          Send a Message
        </button>
      </div>
    </section>
    </>
  );
}
