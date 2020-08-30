import React from "react";
import { Document, Page } from "react-pdf";
import "./index.css"
import Resume from "./Resume.pdf";

export default function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello, I am Nick Mardon!</h1>
            <p className="lead">Full Stack Web Developer</p>
            <hr className="my-4"></hr>
                <p>I utilize modern web technologies to create user facing web applications</p>
                <a className="btn btn-primary btn-lg" href={Resume} target="_blank" role="button">Resume</a>
        </div>
    )
}