import React from 'react';
import '../../../styles/about/about.scss';
import Sidebar from '../sidebar/sidebar';
// import Statistics from '../satiticts/satiticts';
import Skills from '../skils/skils';
import pic from '../../../assets/certificate/pic.jpeg';

const About: React.FC = () => {
    const calculateAge = (birthDate: string) => {
        const birth = new Date(birthDate);
        const diff = Date.now() - birth.getTime();
        const age = new Date(diff).getUTCFullYear() - 1970;
        return age;
    };

    const birthDate = '2003-04-15';
    const age = calculateAge(birthDate);

    const detailsLeft = [
        { label: 'Birthday', value: '15/04/2003' },
        { label: 'Phone', value: '6381289244' },
        { label: 'City', value: 'Chennai' }
    ];

    const detailsRight = [
        { label: 'Age', value: age },
        { label: 'Degree', value: 'Master' },
        { label: 'Email', value: 'parameshwaripavithra22@gmail.com' },
        { label: 'Freelance', value: 'Available' }
    ];

    return (
        <div className='about-section'>
            <Sidebar />
            <div className="about-container">
                <h2 className="about-title">About</h2>
                <p className="about-description">
                I am a passionate Front-End Developer with 6 months of hands-on experience creating dynamic, responsive, and user-friendly web pages. I specialize in using React and TypeScript to build scalable, maintainable, and robust user interfaces.                </p>
                <div className="about-content">
                    <div className="about-image">
                        <img src={pic} alt="Profile picture of [Your Name]" />
                    </div>
                    <div className="about-details">
                        <h3>Front-End Developer</h3>
                        <p>I enjoy solving complex problems and crafting user-friendly designs. My goal is to contribute to impactful projects that make a difference.</p>
                        <div className="details-list">
                            <ul>
                                {detailsLeft.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.label}:</strong> {item.value}
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {detailsRight.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.label}:</strong> {item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p>
                        I am committed to continuous learning and growth in web development, aiming to create impactful applications that deliver value to users. My goal is to collaborate with teams that share my passion for innovation and design.                        </p>
                    </div>
                </div>
            </div>
            {/* <Statistics /> */}
            <Skills />
        </div>
    );
};

export default About;
