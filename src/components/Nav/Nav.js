import React from "react";

export default function Nav() {
    return (
        <ul className="nav bg-dark">
            <li className="nav-item">
                <a className="nav-link active" href="/">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
        </ul>
    )
}