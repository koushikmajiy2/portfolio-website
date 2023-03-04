import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Web Devlopment",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Node.js",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "React.js",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "Mongo DB",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "Express.js",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>18</h3>
            <p>Projects with Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>400+ Hour</h4>
              <p>Full Stack Course</p>
            </div>
            <div className="portfolio">
              <h4>02</h4>
              <p>Mern Projects</p>
            </div>
            <div className="portfolio">
              <h4>18</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>Unikaksha Catification</h4>
              <p>Full Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;