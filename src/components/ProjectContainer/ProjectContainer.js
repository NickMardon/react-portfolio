import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Videezy from "./videezy.png";
import BrewFinder from "./brewfinder.png";
import PocketPubQuiz from "./pocketpubquiz.png";
import PortfolioV2 from "./portfoliov2.png";
import "./index.css";

const projects = {
    Videezy: {
        name: 'Videezy',
        gitHub: 'https://github.com/NickMardon/DragChat',
        deployed:'https://dropinsamine.herokuapp.com/',
        description:'Videezy is a SERN stack  video chat application built with the Jitsy API. The applications drag and drop interface allows users to put themselves into different breakout rooms within a parent hall.'
    },
    BrewFinder: {
        name: 'BrewFinder',
        gitHub: 'https://github.com/domjparker/brewfinder',
        deployed:'https://domjparker.github.io/brewfinder/',
        description:'BrewFinder is a front-end application that helps you find breweries near you! Built with HTML, CSS, Materialize, JavaScript, Jquery, Open Brewery DB api, Geoapify api, MapBoxGL, and Algolia Places api'
    },
    PocketPubQuiz: {
        name:"Pocket Pub Quiz",
        gitHub: 'https://github.com/papabear2009/PopQuiz',
        deployed:'https://pocketpubquiz.herokuapp.com/',
        description:'Pocket Pub Quiz is a fun mobile first application for users to compete in trivia with their friends. Pocket Pub Quiz creates unique quiz links with a random combination of questions and its own unique scoreboard. Users can share their unique quiz links with their friends to compete for the highest score.  Built with Express.js, Node.js, MYSQL'
    },
    PortfolioV2: {
        name:"Portfolio V2",
        gitHub: 'https://github.com/NickMardon/Portfolio-V2',
        deployed:'https://nmdigital.herokuapp.com/',
        description:'Portfolio V2 is a personal portfolio site built with a free bootstrap template from colorlib and an express.js server.  This site is meant to showcase the skills and services that I can offer as a developer and demonstrate the ability to take existing code and modify and build upon it to create a finished product.'
    },
}
export default function ProjectContainer() {
    return (
        <div className="projectContainer container">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <ProjectCard
                      name={projects.Videezy.name}
                      github={projects.Videezy.github}
                      deployed={projects.Videezy.deployed}
                      description={projects.Videezy.description}
                      src={Videezy}
                />
            </div>
            <div className="col-md-6 col-sm-12">
            <ProjectCard
                      name={projects.BrewFinder.name}
                      github={projects.BrewFinder.github}
                      deployed={projects.BrewFinder.deployed}
                      description={projects.BrewFinder.description}
                      src={BrewFinder}
                />
            </div>
        </div>
               <div className="row">
               <div className="col-md-6 col-sm-12">
               <ProjectCard
                      name={projects.PocketPubQuiz.name}
                      github={projects.PocketPubQuiz.github}
                      deployed={projects.PocketPubQuiz.deployed}
                      description={projects.PocketPubQuiz.description}
                      src={PocketPubQuiz}
                      />
               </div>
               <div className="col-md-6 col-sm-12">
               <ProjectCard
                      name={projects.PortfolioV2.name}
                      github={projects.PortfolioV2.github}
                      deployed={projects.PortfolioV2.deployed}
                      description={projects.PortfolioV2.description}
                      src={PortfolioV2}
                />
               </div>
           </div>
           </div>
    )
}