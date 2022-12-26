import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <main className="home">
      <section className="home__info">
        <h2>Hi! My name is</h2>
        <h1 className="home__name">
          Nima <span className="home__name--last">Borghei</span>
        </h1>
        <h2>Front-End Web Developer</h2>
        <Link className="page-links" to="/about">
          More about me
        </Link>
      </section>
    </main>
  );
};

export default Home;
