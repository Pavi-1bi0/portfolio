import React from "react";
import "../../../styles/contact/contact.scss";
import Sidebar from "../sidebar/sidebar";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';

const ContactForm: React.FC = () => {
  return (
    <div className="cont-section">
      <Sidebar />
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-description">
        I am always open to new opportunities and collaborations. Whether you have a project to discuss, questions about my work, or simply wish to connect, I would be delighted to hear from you. Effective communication and collaboration are at the heart of delivering exceptional results, and I am committed to helping bring your ideas to fruition.
        </p>
        <div className="contact-content">
          {/* Contact Details Section */}
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-container">
                <LocationOnOutlinedIcon />
              </div>
              <div className="heading">
                <h4>Address</h4>
                <p>velachery,chennai</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-container">
                <CallOutlinedIcon />
              </div>
              <div className="heading">
                <h4>Call Us</h4>
                <p>6381289244</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-container">
                < MarkEmailUnreadOutlinedIcon />
              </div>
              <div className="heading">
                <h4>Email Us</h4>
                <p>parameshwaripavithra22@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows={5}></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
