import { FaLinkedin, FaFlickr, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <main>
      <footer className="footer-container">
        <div className="social-icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nima-borghei-0490b841"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a href="#!">
            <FaFlickr className="social-icon" />
          </a>
          <a target="_blank" href="https://github.com/NimaBori">
            <FaGithub className="social-icon" />
          </a>
        </div>
        <div className="copyright-container">&copy; Copyright 2023</div>
      </footer>
    </main>
  );
};

export default Footer;
