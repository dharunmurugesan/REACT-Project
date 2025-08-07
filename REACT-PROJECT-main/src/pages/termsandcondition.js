import React from "react";
import './termsandcondition.css';
const TermsConditions = () => {
  return (
    <div className="terms-page">
      <h1>Terms and Conditions</h1>
      
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using our website, you agree to be bound by these terms and conditions.</p>
      </section>
      
      <section>
        <h2>2. Use of the Website</h2>
        <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.</p>
      </section>
      
      <section>
        <h2>3. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, and logos, is our property and protected by copyright laws.</p>
      </section>
      
      <section>
        <h2>4. Limitation of Liability</h2>
        <p>We are not liable for any damages arising from your use of this website or any information it contains.</p>
      </section>
      
      <section>
        <h2>5. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction where our company is registered.</p>
      </section>
      
      <section>
        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of the website constitutes acceptance of the modified terms.</p>
      </section>
      
      <div className="contact-info">
        <p>For any questions regarding these terms, please <a href="/contact">contact us</a>.</p>
      </div>
    </div>
  );
};

export default TermsConditions;