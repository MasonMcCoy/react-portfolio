import React from 'react';
import { Nav } from 'react-bootstrap';
import './style.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <Nav className="justify-content-end">
            <Nav.Item>
                <p
                    onClick={() => handlePageChange('About Me')}
                    className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </p>
            </Nav.Item>
            <Nav.Item>
                <p
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </p>
            </Nav.Item>
            <Nav.Item>
                <p
                    onClick={() => handlePageChange('Contact Me')}
                    className={currentPage === 'Contact Me' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </p>
            </Nav.Item>
            <Nav.Item>
                <p
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </p>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation;