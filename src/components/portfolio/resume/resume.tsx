import React from "react";
import "../../../styles/resume/resume.scss";
import Sidebar from "../sidebar/sidebar";

const Resume: React.FC = () => {
  return (
    <div className="resume-section">
      <Sidebar />
      <div className="resume-container">

        <h1 className="resume-title">Resume</h1>
        <p className="resume-intro">
          Explore my professional journey, showcasing the skills, experiences, and qualifications that define my career as a front-end developer. With a strong foundation in React and TypeScript, I have honed my expertise in creating responsive and dynamic web applications. My resume highlights key projects, technical proficiencies, and accomplishments, reflecting my dedication to delivering high-quality user interfaces and seamless user experiences.
        </p>
        <div className="resume-content">
          {/* Left Column */}
          <div className="resume-column">
            <section className="resume-section">
              <h2>Summary</h2>
              <div className="timeline-item">
                <div className="timeline-icon" />
                <div>
                  {/* <h3>BRANDON JOHNSON</h3> */}
                  <p>
                    I have 6 months of hands-on experience in front-end development, specializing in creating responsive and dynamic web solutions using React. My expertise lies in developing user-friendly interfaces and scalable applications that align with modern web development standards.


                  </p>
                  {/* <ul>
                  <li>Portland par 127, Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul> */}
                </div>
              </div>
            </section>

            <section className="resume-section">
              <h2>Education</h2>
              <div className="timeline-item">
                <div className="timeline-icon" />
                <div>
                  <h3>Bachelor of Science in Computer Science (BSc)</h3>
                  <p>2020-2023</p>
                  <p>Periyar University</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon" />
                <div>
                  <h3>Master of Computer Applications (MCA)</h3>
                  <p>2024 - 2026</p>
                  <p>Bharathidhasan University</p>
                </div>
              </div>

            </section>
          </div>

          {/* Right Column */}
          <div className="resume-column">
            <section className="resume-section">
              <h2>Project</h2>
              <div className="timeline-item">
                <div className="timeline-icon" />
                <div>
                  <h3 className="header">Front-end Developer</h3>
                  {/* <p>2019 - Present</p>
                <p>Experion, New York, NY</p> */}
                  <ul>

                    <h3 className="sub-header">Illampirai Hearing Solutions, Chennai</h3>
                    <ul className="list">
                      <li className="list-item">
                        Developed and deployed a fully responsive website to enhance user engagement and improve accessibility for hearing solution services.
                      </li>
                      {/* <li className="list-item">
                        Utilized React, TypeScript, SCSS, and Bootstrap to build dynamic, user-friendly interfaces tailored to client requirements.
                      </li> */}
                      <li className="list-item">
                        Ensured seamless cross-device compatibility through efficient responsive design techniques.
                      </li>
                      <li className="list-item">
                        Collaborated with the team to implement new features and optimize website performance.
                      </li>
                    </ul>
                    <h3 className="sub-header">1Bi0.ai Project</h3>
                    <ul className="list">
                      <li className="list-item">
                        Designed and implemented an interactive and dynamic web application for AI-driven solutions using React and TypeScript.
                      </li>
                      {/* <li className="list-item">
                        Utilized React, TypeScript, SCSS, and Bootstrap to build dynamic, user-friendly interfaces tailored to client requirements.
                      </li> */}
                      <li className="list-item">
                        Leveraged Material-UI for consistent and visually appealing UI components.
                      </li>
                      <li className="list-item">
                        Ensured robust and scalable architecture by integrating reusable components and maintaining clean code practices.
                      </li>
                    </ul>
                    <h3 className="sub-header">1Bi0 Company Website
                    </h3>
                    <ul className="list">
                      <li className="list-item">
                        Created a fully responsive and dynamic company website to showcase the organization’s services and solutions.
                      </li>
                      {/* <li className="list-item">
                        Utilized React, TypeScript, SCSS, and Bootstrap to build dynamic, user-friendly interfaces tailored to client requirements.
                      </li> */}
                      <li className="list-item">
                        Employed SCSS, React Context API, and hooks to manage state efficiently and ensure optimal performance.
                      </li>
                      <li className="list-item">
                        Implemented modern design principles to deliver a seamless user experience across devices.
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              {/* <div className="timeline-item">
                <div className="timeline-icon" />
                {/* <div>
                  <h3>GRAPHIC DESIGN SPECIALIST</h3>
                  <p>2017 - 2019</p>
                  <p>Experion, New York, NY</p>
                  {/* Additional details if needed */}
              {/* </div>  */}
              {/* </div>  */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
