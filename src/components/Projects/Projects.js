import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import  Gym from "../../Assets/gym.jpg";
import car from "../../Assets/car.png";
import map from "../../Assets/Projects/map.png";
import eBrowser from "../../Assets/Projects/e-browser.png";
import eMobile from "../../Assets/Projects/e-mobile.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gym}
              isBlog={false}
              title="Gym Management "
              description="A responsive Gym Management site. It has multiple feature like  Pakeage, apply trainer, use stripe payment getway."
              ghLink="https://github.com/AAashik519"
              demoLink="https://fitness-tracker-dd04d.web.app/"
            />
          </Col>
  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Js-Car Game"
              description="It is one of my big budget project. It's realy comes handy when you wanna visit a country. It will guide you to fiend hotel, restora, and interective places."
              ghLink="https://github.com/AAashik519"
              demoLink="https://aaashik519.github.io/jsCar-game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eMobile}
              isBlog={false}
              title="Ecommerce "
              description="Build with  Next js , sanityjs , stripe payment getway. It is realy looks awesome and very interactive. "
              ghLink="https://github.com/AAashik519"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
