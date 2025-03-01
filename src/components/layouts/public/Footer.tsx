import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import separator3 from "./../../../styles/images/separator3.svg";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <Container fluid className="footer bg-secondary px-0">
        <Container fluid className="top-footer text-light border-to px-0">
          <Container fluid className="bg-ligh text-light text-center py-3">
            <h4>Contact & Informations</h4>
          </Container>
          <Row className="text-center w-100">
            <Col>
              <Link to="/contact" className="text-decoration-none text-light">
                <p className="py-2">Nous contacter</p>
              </Link>
            </Col>
            <Col>
              <Link to="/mentions-legales" className="text-decoration-none text-light">
                <p className="py-2">Mentions légales</p>
              </Link>
            </Col>
            <Col>
              <p className="py-2">Le studio | Les prestations</p>
            </Col>
            <Col>
              <p className="py-2">Réseaux socaiux</p>
              <p>
                <Link to="/" className="text-decoration-none text-light me-3">
                  <i className="ri-facebook-line fs-3"></i>
                </Link>
                <Link
                  to="/studio"
                  className="text-decoration-none text-light me-3"
                >
                  <i className="ri-messenger-line fs-3"></i>
                </Link>
                <Link
                  to="/studio"
                  className="text-decoration-none text-light me-3"
                >
                  <i className="ri-instagram-line fs-3"></i>
                </Link>
                <Link
                  to="/studio"
                  className="text-decoration-none text-light me-3"
                >
                  <i className="ri-tiktok-line fs-3"></i>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="down-footer bg-dark text-center text-light py-3">
          Polynejah record - <Link to="#" className="text-decoration-none text-success">Powered with 💚 by HempireProduction</Link>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
