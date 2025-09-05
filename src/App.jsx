import { useState,useEffect, use } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);}, []);
  return (
     <Router>
      {!videoLoaded && <Loader />}
              {/* <video
          className="hidden absolute h-[100%] w-full object-cover"
          autoPlay
          loop
          muted
          src="https://www.pexels.com/download/video/7534239/"
          onCanPlayThrough={() => setVideoLoaded(true)} // triggers when video is ready to play
        /> */}
        {videoLoaded && <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home  />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;