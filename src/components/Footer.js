import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">E-Commerce</h5>
            <p>
              Your one-stop shop for all your needs. Quality products at unbeatable prices.
            </p>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-dark">
                  Cart
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>Email: support@ecommerce.com</li>
              <li>Phone: +1 234 567 890</li>
              {/* Add more contact info as needed */}
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary text-white">
        © {new Date().getFullYear()} E-Commerce
      </div>
    </footer>
  );
};

export default Footer;
