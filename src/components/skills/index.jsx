import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <div className="skills" style={{marginBottom: "20px"}}>
                    <div className="language">
                    <h3>Languages</h3>
                    <ul>
                       <li>Html</li>
                       <li>CSS</li>
                       <li>JavaScript</li>
                       <li>Java</li>
                    </ul>
                    </div>
                    <div className="frameworks">
                    <h3>Frameworks and Library</h3>
                    <ul>
                        <li>React JS</li>
                        <li>Spring Boot</li>
                        <li>Tailwind Css</li>
                    </ul>
                    </div>
                    <div className="database" >
                    <h3>Database</h3>
                    <ul>
                        <li>My Sql</li>
                        <li>Mongo Db</li>
                    </ul>
                    </div>
                    </div>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
