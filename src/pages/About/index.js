import React from 'react';
import { Image } from 'react-bootstrap';
import photo from '../../assets/mason.jpg';


const aboutMe = require('../../content/about-me.js');
// import './style.css';

function AboutMe() {
    return (
        <div>
            {/* fluid="true" roundedCircle="true" thumbnail="true" */}
            <Image src={photo} width="25%" alt="Mason McCoy"></Image>
            <p>{aboutMe}</p>
        </div>
    )
}

export default AboutMe;