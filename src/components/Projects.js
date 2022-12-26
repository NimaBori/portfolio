import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import myProjects from "../dist/data/myprojects";
import { FaEye, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <main>
      <section className="projects">
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>
        <div className="projects__items">
          {myProjects.map((project, index) => {
            const { title, techs, desc, image, linkToGithub } = project;
            return (
              <div className="projects__item">
                <img src={image} alt="My project" />
                <div className="projects__btns">
                  <a href="#!" className="projects__btn">
                    <FaEye /> Preview
                  </a>
                  <a href="#!" className="projects__btn">
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Projects;
