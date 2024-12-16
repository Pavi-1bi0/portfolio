import React from "react";
import Sidebar from "../sidebar/sidebar";
import About from "../about/about";
import ContactForm from "../contact/contact";
import Resume from "../resume/resume";
// import "./styles/dashboard.scss";
import Home from "../home/home";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content" style={{background:'white'}}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
       
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
