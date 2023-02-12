import React from 'react';
import { Link } from "react-router-dom";
// import "../css/Portfolio.css";

function Contact() {
    return (      
    <div>
        <div class="header">
                <Link to={`/`}>
                    <button className="editButton">Oscar's website</button>
                </Link>
                <div class="header-right">
                    <Link to={`/Portfolio/`}>
                        <button className="editButton">Portfolio</button>
                    </Link>
                    <Link to={`/Contact/`}>
                        <button className="editButton">Contact</button>
                    </Link>
                    <Link to={`/About/`}>
                        <button className="editButton">About</button>
                    </Link>
                </div>
            </div>
        <div class="intro">
            <p>
                Hello World.
            </p>
        </div>
    </div>
    )
}

export default Contact;