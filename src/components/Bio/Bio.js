import React from "react";
import Headshot from "./Headshot.JPG";
import "./index.css";

export default function Bio() {
    return (
        <div className="bio media row">
            <div className="col-md-3 col-sm-12">
            <img id="headshot" src={Headshot} className="mr-3" alt="Nick Mardon Headshot"></img>
            </div>
            <div className="col-md-9 col-sm-12 media-body">
                <h5 className="bioHeader mt-0">About Me</h5>
                I am a full stack web developer with a passion for creating websites that elevate my clients online presence. As an entrepreneur with experience growing a personal brand I understand the importance of digital content in the success of any business. I aim to provide my clients with the best solutions for their website needs. I am proficient in the modern technologies that power the internet today.
            </div>
        </div>
    )
}