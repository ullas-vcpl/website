import Cards from "../components/Cards";
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

const Home = ({ onVideoLoaded }) => {
  const description = [
    "We leverage the latest technologies to create tailored IT solutions for your business challenges.",
    "Our solutions integrate smoothly with your existing systems, minimizing disruption and maximizing efficiency.",
    "24/7 support and maintenance ensure your systems run smoothly without downtime.",
  ];
    const stats = [
    { number: "50+", label: "Successful Projects Delivered" },
    { number: "30+", label: "Satisfied Clients Worldwide" },
    { number: "1+", label: "Years of Industry Experience" },
    { number: "24/7", label: "Customer Support Availability" },
    { number: "5+", label: "Innovative Awards & Recognitions" },
  ];
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
      <div className="relative min-h-screen h-auto w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute h-[100%] w-full object-cover"
          autoPlay
          loop
          muted
          src="https://www.pexels.com/download/video/7534239/"
          onCanPlayThrough={onVideoLoaded} // triggers when video is ready to play
        />

        {/* Overlay */}
        <div className="absolute w-full h-full bg-black opacity-30"></div>

        {/* Content */}
        <div className=" mt-20 relative z-10 flex flex-col items-center justify-center min-h-screen h-auto text-white text-center py-4">
          <img
            className="h-[70px] w-[70px] animate-[spin_10s_linear_infinite]"
            src="/images/logo4.png"
          ></img>
          <h1 className="text-5xl font-bold mb-3">
            Veehar Corporates Pvt. Ltd.
          </h1>
          <p className="text-xl font-bold text-white">
            • Innovate • Integrate • Elevate •
          </p>
          <p className="text-xl w-[40vw] mt-4">
            Empowering your business with cutting-edge IT solutions that drive
            efficiency, innovation, and sustainable growth.
          </p>
          <button className="mt-6 cursor-pointer text-xl bg-blue-700 rounded-lg px-3 py-2"
          onClick={() => setOpenModal(true)}>
            Get Quotation Now!
          </button>
        </div>
      </div>
      
      <section className="px-5 min-h-screen h-auto min-w-screem w-auto
      bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 py-10">
        <h2 className="w-full text-center text-white font-bold text-2xl">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20" id="cards-container">
        <Cards title="Innovative Solution" description={description[0]} imageUrl="https://images.pexels.com/photos/16129703/pexels-photo-16129703.jpeg"/>
        <Cards title="Seamless Integration" description={description[1]} imageUrl="https://images.pexels.com/photos/12903300/pexels-photo-12903300.jpeg"/>
        <Cards title="Reliable Support" description={description[2]} imageUrl="https://images.pexels.com/photos/7681302/pexels-photo-7681302.jpeg"/>
        </div>

        <div className="text-center mb-12 mt-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Achievements at a Glance</h2>
        <p className="mt-4 text-white max-w-2xl mx-auto">
          These numbers reflect our commitment to delivering innovative, reliable, and client-focused IT solutions.
        </p>
      </div>
       
      

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform duration-500 hover:scale-110"
          >
            <span className="text-4xl font-extrabold text-blue-600">{stat.number}</span>
            <span className="mt-2 text-gray-700">{stat.label}</span>
          </div>
        ))}
      </div>


    </section>
    </>
  );
};

export default Home;
