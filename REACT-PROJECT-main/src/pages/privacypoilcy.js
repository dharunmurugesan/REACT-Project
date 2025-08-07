import React from "react";
import './privacypolicy.css'; 
const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <h1>Privacy Policy</h1>
      
      <section>
        <h2>1. Introduction</h2>
        <p>We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
      </section>
      
      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and contact details when you interact with our services.</p>
      </section>
      
      <section>
        <h2>3. How We Use Your Information</h2>
        <p>Your information is used to provide and improve our services, communicate with you, and ensure the security of our platform.</p>
      </section>
      
      <section>
        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
      </section>
      
      <section>
        <h2>5. Changes to This Policy</h2>
        <p>We may update this policy periodically. We will notify you of any significant changes through our website or email.</p>
      </section>
      
      <div className="contact-info">
        <p>If you have questions about our privacy practices, please <a href="/contact">contact us</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;