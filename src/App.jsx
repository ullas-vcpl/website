import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
     <Router>
      {!videoLoaded && <Loader />}
      <div className={`${!videoLoaded ? "hidden" : "block"}`}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home onVideoLoaded={() => setVideoLoaded(true)} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;