import React from "react";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Footer from "../components/Footer/Footer";
import Bio from "../components/Bio/Bio";
import Contact from "../components/Contact/Contact";
export default function Home(){
    return (
        <div>
        <Nav />
        <Jumbotron />
        <Bio />
        <Contact />
        <Footer />
        </div>
    )
}