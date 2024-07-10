import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/Food_App.png"),
        },
        link: "https://swigato-kappa.vercel.app/"
    },
    {
        id: 2,
        name: "Movix App",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/Movix.png"),
        },
        link: "https://amanmovixapp.netlify.app/"
    },
    {
        id: 3,
        name: "Portfolio",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/Portfolio.png"),
        },
        link: "https://amanmovixapp.netlify.app/"
    },
  
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Projects"
            background="light"
        >
            <div className="portfolio-content-wrapper" style={{marginTop:"20px"}}>
                
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
