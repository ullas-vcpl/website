import React from "react";
import { Link } from "react-router-dom";
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

export default function Navbar() {
  const handleClick = (e) => {
    console.log("Navbar item clicked");
    document.getElementById("mobile-menu").classList.toggle("hidden");
    document.getElementById("menu").innerText =
      document.getElementById("menu").innerText === "X" ? "☰" : "X";
  };

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
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
      <div className="fixed top-0 z-50 w-full bg-black h-[70px] border-b-white border-2 border-t-white">
        <div className=" text-white flex justify-between items-center h-full px-4">
          <div className="flex justify-between items-center gap-3">
            <img
              className="h-[45px] w-[45px] animate-[spin_10s_linear_infinite]"
              src="/images/logo4.png"
            ></img>
            <p className="font-bold text-2xl tracking-wider">
              <Link to="/">VCPL</Link>
            </p>
          </div>
          <nav>
            <ul className="md:flex hidden gap-4 ">
              <li
                className="cursor-pointer hover:text-blue-600 hover:font-bold"
                onClick={() => window.location.reload()}
              >
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600 hover:font-bold">
                <Link to="/about">About</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600 hover:font-bold">
                <Link to="/services">Services</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600 hover:font-bold">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div
            className="hidden md:block bg-blue-600 rounded-md px-2 py-1 cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            Get Quotation
          </div>
          <div
            className="md:hidden cursor-pointer"
            id="menu"
            onClick={handleClick}
          >
            ☰
          </div>
        </div>
      </div>
      <div
        className="hidden fixed top-[70px] z-100 right-0 w-full"
        id="mobile-menu"
      >
        <ul className="flex-col bg-black text-white px-4 py-2 space-y-2">
          <li className="cursor-pointer" onClick={() => {handleClick();}}><Link to="/">Home</Link></li>
          <li className="cursor-pointer" onClick={() => {handleClick();}}><Link to="/about">About</Link></li>
          <li className="cursor-pointer" onClick={() => {handleClick();}}><Link to="/services">Services</Link></li>
          <li className="cursor-pointer" onClick={() => {handleClick();}}><Link to="/contact">Contact Us</Link></li>
          <div className="px-4 flex items-center justify-between" >
            <li
            className="cursor-pointer bg-blue-600 rounded-lg px-4 py-2 text-center text-md"
            onClick={() => {
              setOpenModal(true);
              handleClick();
            }}
          >
            Get Quotation
          </li>
          
            <li
            className="cursor-pointer bg-blue-600 rounded-lg px-4 py-2 text-center text-md">
            <Link to="/services">Learn More</Link>
          </li>
          </div>
        </ul>
      </div>
    </>
  );
}
