import React from 'react';
import { Row } from 'react-bootstrap';

import Project from '../../components/Project';

import homebuddyImg from '../../assets/homebuddy.PNG';
import getMoveImg from '../../assets/get-a-move-on.PNG';
import textEditorImg from '../../assets/text-editor.PNG';
import codeAssessImg from '../../assets/code-assessment.PNG';
import weatherDashImg from '../../assets/weather-dash.PNG';
import schedulerImg from '../../assets/scheduler.PNG';

function Portfolio() {
    return (
        <div>
            <Row>
                <Project 
                    title="Homebuddy"
                    deployLink="https://masonmccoy.github.io/meal-prepper/"
                    projectImg={homebuddyImg}
                    imgAlt="Splash page with set table background image"
                    gitRepo="https://github.com/MasonMcCoy/meal-prepper"
                    />
                <Project 
                    title="Get-A-Move-On"
                    deployLink="https://intense-earth-27091.herokuapp.com/"
                    projectImg={getMoveImg}
                    imgAlt="Styled splash page with modeled image"
                    gitRepo="https://github.com/Mason-Maia-Givens/Get-A-Move-On"
                />
                <Project 
                    title="PWA Text Editor"
                    deployLink="https://damp-stream-95175.herokuapp.com/"
                    projectImg={textEditorImg}
                    imgAlt="Deployed text editor and locally installed PWA version of same app"
                    gitRepo="https://github.com/MasonMcCoy/text-editor"
                />
            </Row>
            <Row>
                <Project 
                    title="Code Assessment"
                    deployLink="https://masonmccoy.github.io/code-assessment/"
                    projectImg={codeAssessImg}
                    imgAlt="The start screen for a timed coding assessment"
                    gitRepo="https://github.com/MasonMcCoy/code-assessment"
                />
                <Project 
                    title="Weather Dashboard"
                    deployLink="https://masonmccoy.github.io/weather-dashboard/"
                    projectImg={weatherDashImg}
                    imgAlt="Weather dashboard with current weather and 5-day forecast"
                    gitRepo="https://github.com/MasonMcCoy/weather-dashboard"
                />
                <Project 
                    title="Daily Scheduler"
                    deployLink="https://masonmccoy.github.io/daily-scheduler/"
                    projectImg={schedulerImg}
                    imgAlt="Schedule with color-coated time blocks"
                    gitRepo="https://github.com/MasonMcCoy/daily-scheduler"
                />
            </Row>
        </div>
    )
}

export default Portfolio;