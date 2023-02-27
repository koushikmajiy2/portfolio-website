import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Foodie World",
      img: "/projects/1.png",
      gLink: "https://github.com/koushikmajiy2/Sass-Resturant.git",
      lLink: "https://github.com/koushikmajiy2/Sass-Resturant.git",
      text: <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
      ea nobis aut deserunt. Reprehenderit numquam harum facilis
      beatae praesentium pariatur eligendi non. Explicabo, cupiditate
      odit vero quo iste numquam obcaecati.
    </p>,
    },
    {
      title: "Book My Ticket",
      img: "/projects/2.jpg",
      gLink: "https://github.com/koushikmajiy2/music-consert-booking.git",
      lLink: "https://github.com/koushikmajiy2/music-consert-booking.git",
    },
    {
      title: "Unikaksha-WIkipedia",
      img: "/projects/3.jpg",
      gLink: "https://github.com/koushikmajiy2/Unikaksha-WIkipedia.git",
      lLink: "https://github.com/koushikmajiy2/Unikaksha-WIkipedia.git",
    },
    {
      title: "Quiz-App",
      img: "/projects/4.png",
      gLink: "https://github.com/koushikmajiy2/Quiz-App.git",
      lLink: "https://github.com/koushikmajiy2/Quiz-App.git",
    },
    {
      title: "To-do-list",
      img: "/projects/5.png",
      gLink: "https://github.com/koushikmajiy2/Quiz-App.git",
      lLink: "https://github.com/koushikmajiy2/Quiz-App.git",
    },
    {
      title: "Technical-Documentation",
      img: "/projects/6.png",
      gLink: "https://github.com/koushikmajiy2/Technical-Documentation.git",
      lLink: "https://github.com/koushikmajiy2/Technical-Documentation.git",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/koushikmajiy2?tab=repositories"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
