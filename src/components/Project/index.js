import React from 'react';
import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './style.css';

function Project(props) {
    return (
        // <Card className="projects">
        //     <Card.Title className="project-title">{props.title}</Card.Title>
        //     <a href={props.deployLink} target="blank" className="project-img">
        //         <Card.Img src={props.projectImg} alt={props.imgAlt} className="project-img"/>
        //     </a>
        //     <a href={props.gitRepo} target="blank" className="project-socials">
        //         <FontAwesomeIcon icon={faGithubSquare} />
        //     </a>
        // </Card>

        <Card className="projects">
        <a href={props.deployLink} target="blank" className="project-img">
            <Card.Img src={props.projectImg} alt={props.imgAlt} className="project-img"/>
            <Card.ImgOverlay>
                {/* <Card.Title className="project-title">{props.title}</Card.Title> */}
            </Card.ImgOverlay>
        </a>
        <a href={props.gitRepo} target="blank" className="project-socials">
            <FontAwesomeIcon icon={faGithubSquare} />
        </a>
    </Card>
    )
}

export default Project;