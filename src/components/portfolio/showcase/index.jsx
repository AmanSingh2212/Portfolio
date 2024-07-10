import React from "react";

import Arrow from "../../shared/arrow";

import "./style.scss";
import { Link } from "react-router-dom";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase" style={{marginLeft:"120px", marginTop: "40px", height:"300px"}}>
            {data.map((project) => (
                <div
                    className={`showcase-item ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                    key={project.id}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span className="text">Project Details</span>
                            <Arrow />
                        </div>
                    </div>
                    <Link to={project.link}>
                    <img src={project.media.thumbnail} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Showcase;
