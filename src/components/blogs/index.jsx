import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/Business.png";
import Blog2 from "../../images/blogs/AccioJob.png";


import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Internship and Experience"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Business Web Soltions"
                    date="Jan 2023"
                    image={Blog1}
                    title="Frontend Developer"
                    description="I am  working here on a active project and learn how to connect api's with backend. How Api's work"
                />
                <BlogCard
                    user="AccioJob"
                    date="August 2023"
                    image={Blog2}
                    title="Full Stack Development Course (SpringBoot & React)"
                    description="I am doing here 12 month fullstack development course in which i am learning dsa , springboot and react in detail"
                />
            </div>
        </Section>
    );
};

export default Blogs;
