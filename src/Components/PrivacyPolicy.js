// src/components/PrivacyPolicy.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/PrivacyPolicy.css'; // Custom CSS for Privacy Policy page

const PrivacyPolicy = () => {
  return (
    <Container fluid className="privacy-policy">
      <Row className="justify-content-center py-5">
        <Col md={8}>
          <h1 className="text-center mb-4">Privacy Policy</h1>
          <p>
            This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website and use our services.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, and other contact details.
          </p>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
          </p>
          <h2>3. Information Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and services.
          </p>
          <h2>4. Security</h2>
          <p>
            We implement security measures to protect your information from unauthorized access, use, or disclosure.
          </p>
          <h2>5. Your Choices</h2>
          <p>
            You may update or correct your personal information by contacting us. You may also opt-out of receiving promotional communications from us.
          </p>
          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
          </p>
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@ameavents.rw">info@ameavents.rw</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
