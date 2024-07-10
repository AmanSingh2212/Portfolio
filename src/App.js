import React from "react";

import "./app.scss";

import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
            <Footer />
        </div>
        </BrowserRouter>
    );
};

export default App;
