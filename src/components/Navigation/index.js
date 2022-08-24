import React from 'react';
import './style.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul>
            <li>
                <p
                    onClick={() => handlePageChange('About Me')}
                    // className={currentPage === 'About Me' ? '' : ''}
                >
                    About Me
                </p>
            </li>
            <li>
                <p
                    onClick={() => handlePageChange('Portfolio')}
                    // className={currentPage === 'Portfolio' ? '' : ''}
                >
                    Portfolio
                </p>
            </li>
            <li>
                <p
                    onClick={() => handlePageChange('Contact Me')}
                    // className={currentPage === 'Contact Me' ? '' : ''}
                >
                    Contact Me
                </p>
            </li>
            <li>
                <p
                    onClick={() => handlePageChange('Resume')}
                    // className={currentPage === 'Resume' ? '' : ''}
                >
                    Resume
                </p>
            </li>
        </ul>
    )
}

export default Navigation;