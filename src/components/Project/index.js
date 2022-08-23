import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
// import './style.css';

function Project(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <a href={props.deployLink}>
                <img src={props.projectImg} alt={props.imgAlt}></img>
            </a>
            <a href={props.gitRepo}>
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
        </div>
    )
}

export default Project;