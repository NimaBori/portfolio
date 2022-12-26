import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaEnvelope, FaMobileAlt, FaMapMarker } from "react-icons/fa";

const Contact = () => {
  return (
    <main>
      <section className="contact">
        <h2>Contact Me..</h2>
        <div className="contact__list">
          <div className="contact__container">
            <div className="contact__container-header">
              <FaEnvelope />
              <h4 className="contact__container-header--title">Email</h4>
            </div>
            <div className="text-details">nimaborghei@gmail.com</div>
          </div>
          <div className="contact__container">
            <div className="contact__container-header">
              <FaMobileAlt />
              <h4 className="contact__container-header--title">Phone</h4>
            </div>
            <div className="text-details">+63 (998) 3978789</div>
          </div>
          <div className="contact__container">
            <div className="contact__container-header">
              <FaMapMarker />
              <h4 className="contact__container-header--title">Address</h4>
            </div>
            <div className="text-details">
              Brgy San Roque, Antipolo City, Rizal, Philippines
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
