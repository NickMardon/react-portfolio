import React from "react";
import "./index.css";

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <a id="logo" class="navbar-brand" href="/">Nick Mardon</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav"></div>
            <ul className="nav ">
                <li className="nav-item">
                    <a className="nav-link active" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
            </ul>
        </nav>
    )
}