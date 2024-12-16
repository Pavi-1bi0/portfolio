import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon
import '../../../styles/sidebar/sidebar.scss';

const Sidebar: React.FC = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null); // Ref for sidebar

    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        sidebar.classList.toggle('active');
        hamburgerIcon.classList.toggle('active'); // Toggle active state for hamburger icon
    }
    
    // Close the sidebar when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsSidebarVisible(false); // Close sidebar if click is outside
            }
        };

        if (isSidebarVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarVisible]);

    return (
        <div className={`sidebar ${isSidebarVisible ? 'active' : ''}`} ref={sidebarRef}>
            <button className="hamburger-icon" onClick={toggleSidebar}>
                <MenuIcon />
            </button>
            <ul>
                <li className="active">
                    <Link to="/portfolio" className="nav-link">
                        <i className="icon-home">
                            <CottageOutlinedIcon />
                        </i>
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/portfolio/about" className="nav-link">
                        <i className="icon-user">
                            <PersonOutlinedIcon />
                        </i>
                        <span>About</span>
                    </Link>
                </li>

                <li>
                    <Link to="/portfolio/resume" className="nav-link">
                        <i className="icon-clipboard">
                            <EventNoteOutlinedIcon />
                        </i>
                        <span>Resume</span>
                    </Link>
                </li>

                <li>
                    <Link to="/portfolio/contact" className="nav-link">
                        <i className="icon-envelope">
                            <AttachEmailOutlinedIcon />
                        </i>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
