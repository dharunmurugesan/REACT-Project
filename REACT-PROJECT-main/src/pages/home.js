import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Website</h1>
      <p>This is the home page of our amazing website. Explore our content and services.</p>
      
      <section className="intro-section">
        <h2>What We Offer</h2>
        <p>Discover our range of services designed to meet your needs.</p>
      </section>
      
      <section className="legal-section">
        <h3>Legal Information</h3>
        <div className="legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms and Conditions</Link>
        </div>
      </section>
      
      <section className="learn-more">
        <h3>Want to know more?</h3>
        <Link to="/about">Learn More About Us</Link>
      </section>
    </div>
  );
};

export default Home;