import React from 'react';
// import logo from '../src/logo'

export default function header() {
    return (
        <header className="header">
            <div className="logo"></div>

            <nav>
                <a href="home">Home</a>
                <a href="About">About Us</a>
                <a href="aws"> AWS</a>
                <a href="contact">Contact Us</a>
            </nav>

            <h1>TechMinds</h1>
            <p className="kicker">Allows you to focus on your core business </p>

        </header>
    )
}