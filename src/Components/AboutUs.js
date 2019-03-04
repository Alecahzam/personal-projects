import React, { Component } from "react";
import NavBar from "./SubComponents/NavBar";
import "./AboutUs.css";

export default class AboutUs extends Component {
  componentDidMount() {}

  render() {
    console.log(this.props);
    return (
      <div>
        <NavBar />
        <div className="AboutUs">
          <p>About this Project</p>
          <p>
            Hello! I'm Alec Townsend, a 20 year old junior developer living in
            Dallas, Texas. This website was my first attempt at creating a full
            stack application from start to finish completely on my own. Music
            is one of my greatest passions, so I was very excited to begin
            working on this, and being able to listen to my very own website
            while I code it is quite the uplifting experience. I drew great
            inspiration from SoundCloud and other music streaming sites without
            trying to make a clone of them.
          </p>

          <p>
            Using the framework React, this project utilizes certain
            technologies such as Chart.js, Socket.io, Sass, Audio packages and
            Redux, while demonstrating critical skills regarding the
            fundamentals of website development, such as styling, full CRUD,
            routing, API calls, sessions/authorization and user-specific
            database manipulation. I hope to continually build and improve upon
            this website in order to learn new skills, while also improving on
            one of the most powerful assets in my portfolio and resume. I am
            always open to making new connections and seizing oppurtunities, so
            if you'd like to reach out to me, my email is
            townsend.alec@gmail.com.
          </p>
        </div>
      </div>
    );
  }
}
