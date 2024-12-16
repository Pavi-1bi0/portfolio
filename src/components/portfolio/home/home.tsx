import React, { useState, useEffect } from "react";
import "../../../styles/home/home.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import Sidebar from "../sidebar/sidebar";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import intern from '../../../assets/certificate/Internship_Certificate-Parameshwari.pdf';
// import resume from '../../assets/certificate/'

const Home: React.FC = () => {
    const [, setShowScrollButton] = useState(false);

    // Function to handle scrolling
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    // Function to scroll to the top

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to handle the resume download action
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "../../..\assets\certificate\PARAMESHWARI_FRONTEND-DEVELOPER.docx"; // Replace with the actual path to your .doc file
        link.download = "Parameshwari_Resume.doc"; // Ensure the filename has the .doc extension
        link.click();
    };
    
    // Function to handle the internship certificate download action
    const downloadInternshipCertificate = () => {
        const link = document.createElement("a");
        link.href = intern; // Replace with the actual path to your internship certificate file
        link.download = "Parameshwari_Internship_Certificate.pdf"; // You can change the filename
        link.click();
    };

    return (
        <div className="home-container">
            {/* Sidebar Component */}
            <Sidebar />

            <div className="main-content">
                <div className="header">
                    <h1>Parameshwari P</h1>
                    <p className="subtitle">I'm a Developer</p>
                </div>
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/parameshwari-p-76a28424b/?trk=opento_sprofile_details"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://github.com/PParameshwari"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                    </a>
                </div>

                {/* Download Section */}
                <div className="download-section">
                    {/* <button className="resume-download-button" onClick={downloadResume}>
                        Resume <FileDownloadOutlinedIcon className="icon" />
                    </button> */}


                   
                    <button className="intern-download-button" onClick={downloadInternshipCertificate}>
                        Internship Certificate <FileDownloadOutlinedIcon className="icon" />
                    </button>
                </div>

            </div>
{/* 
            Scroll to Top Button
            {showScrollButton && (
                <button className="scroll-top-button" onClick={scrollToTop}>
                    <ArrowUpwardOutlinedIcon />
                </button>
            )} */}
        </div>
    );
};

export default Home;
