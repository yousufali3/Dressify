import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Example from "./components/Example";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Developers from "./pages/Devalopers";
// import Footer from "./components/Footer";
import ContactUs from "./pages/Contact";
import Service from "./pages/Service";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/developers" element={<Developers/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/services" element={<Service/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
