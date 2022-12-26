import workExpriences from "../dist/data/expriences";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <main>
      <section className="about">
        <div className="about__bio-image">
          <div className="about__bio">
            <h2 className="title">BIO</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              nostrum esse, harum atque assumenda dolorum ratione nobis
              excepturi, rem cumque ad veniam repellat iste maiores omnis
              molestiae alias laborum ipsum.
            </p>
          </div>
        </div>
        {workExpriences.map((exprience, index) => (
          <div key={index} className="jobs">
            <div className="jobs__job">
              <h2>{exprience.period}</h2>
              <h3>{exprience.company}</h3>
              <desc>{exprience.location}</desc>
              <h6>{exprience.title}</h6>
              <p>{exprience.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default About;
