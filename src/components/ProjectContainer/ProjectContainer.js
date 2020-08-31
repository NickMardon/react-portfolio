import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectContainer() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <ProjectCard />
            </div>
            <div className="col-md-6 col-sm-12">
                <ProjectCard />
            </div>
        </div>
               <div className="row">
               <div className="col-md-6 col-sm-12">
                   <ProjectCard />
               </div>
               <div className="col-md-6 col-sm-12">
                   <ProjectCard />
               </div>
           </div>
           </div>
    )
}