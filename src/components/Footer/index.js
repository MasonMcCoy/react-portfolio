import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './style.css';

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/mason-mccoy/" className='socials'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/MasonMcCoy/" className='socials'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://stackoverflow.com/users/14188987/masonmccoy" className='socials'>
                <FontAwesomeIcon icon={faStackOverflow} />
            </a>
        </div>
    )
}

export default Footer;