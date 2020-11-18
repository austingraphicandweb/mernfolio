import React from "react";
import "../home/home.css";
import Logo from '../home/screenshot.png';

const home = () => {
  return (
      //content div
    <main className="homeContainer">
      <img src={Logo} alt="headshot" className="headShot" />
      <article className="intro">
          <p>Hello, My name is Austin Keener. I specialisze in Web Development as well as Graphic and Web Design. I really enjoy what technology has to offer, and look forward to contributing to the ever expanding world wide web.</p>
          <a href="#" className="hpButton">Contact me</a>
      </article>
    </main>
  );
};

export default home;
