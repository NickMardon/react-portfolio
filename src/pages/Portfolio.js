import React from "react";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Footer from "../components/Footer/Footer";
import Bio from "../components/Bio/Bio";
export default function Home(){
    return (
        <div>
        <Nav />
        <Jumbotron />
        <Bio />
        <Footer />
        </div>
    )
}