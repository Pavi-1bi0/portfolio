import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import '../../styles/sidebar/sidebar.scss';


const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className="active">
                    <Link to="/" className="nav-link">
                        <i className="icon-home">
                            <CottageOutlinedIcon />
                        </i>
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/about" className="nav-link">
                        <i className="icon-user">
                            <PersonOutlinedIcon />
                        </i>
                        <span>About</span>
                    </Link>
                </li>

                <li>
                    <Link to="/resume" className="nav-link">
                        <i className="icon-clipboard">
                            <EventNoteOutlinedIcon />
                        </i>
                        <span>Resume</span>
                    </Link>
                </li>

                {/* <li>
                    <Link to="/services" className="nav-link">
                        <i className="icon-envelope">
                            <ChecklistOutlinedIcon />
                        </i>
                        <span>Services</span>
                    </Link>
                </li> */}

                <li>
                    <Link to="/contact" className="nav-link">
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
