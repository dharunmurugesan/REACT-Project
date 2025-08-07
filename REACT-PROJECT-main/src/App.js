import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ContactUs from './pages/contactus';
import AboutUs from './pages/aboutus';
import PrivacyPolicy from './pages/privacypoilcy';
import TermsConditions from './pages/termsandcondition';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;