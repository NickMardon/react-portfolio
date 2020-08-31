import React from "react";
import "./index.css";
export default function ProjectCard(props) {
    return (
        <div className="card">
            <img src={props.src} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.github} className="btn btn-primary">Github</a>
                <br></br>
                <a href={props.deployed} className="btn btn-primary">Deployed</a>
            </div>
        </div>
    )
}