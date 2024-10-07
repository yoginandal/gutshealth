import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./app/header/Navbar";
import Footer from "./app/footer/Footer";
import HomePage from "./pages/HomePage";
import "@/App.css";
import Contact from "./app/contact/Contact";
import GutCare from "./pages/GutCare";
// import AboutPage from "./pages/AboutPage"; // Example additional page
// import ContactPage from "./pages/ContactPage"; // Example additional page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gut-care-program" element={<GutCare />} />
        <Route path="/contact-us" element={<Contact />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
