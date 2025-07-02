import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import avatar from "../../Assets/avatar.png";
import Shoping from "../../Assets/Projects/shopping.png";
import rent from "../../Assets/Projects/rent.png";
import hostal from "../../Assets/Projects/hostal.png";
import flight from "../../Assets/Projects/flight.webp";
import poxdex from "../../Assets/Projects/poxdex.png";
import ludo from "../../Assets/Projects/ludo.jpeg";
import weather from "../../Assets/Projects/weather.jpeg";
import pdf from "../../Assets/Muhammad_ALI_CV.pdf";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rent}
              isBlog={false}
              title="Rent A Car"
              description="Rent a car system, this is a website where you can rent a car and you can also see the cars that are available for rent."
              ghLink="https://github.com/muhammadali015/Rent-a-car"
            />
          </Col>

       <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shoping}
              isBlog={false}
              title="Bazzar Shoping Store "
              description="A Ecommerce website to buy products of daily life.Shoping website to buy anything "
              ghLink="https://github.com/muhammadali015/"
              demoLink="https://bazaar-application-final-deployment.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostal}
              isBlog={false}
              title="Hostel Hub"
              description="Hostel bookking app for newcommers student that are new in the city of university"
              ghLink="https://github.com/muhammadali015/"
              demoLink="https://www.figma.com/proto/2IhLFldUIlN8R0uI4YecGy?node-id=0-1&t=6LHvRpSt2zJUQ009-6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poxdex}
              isBlog={false}
              title="Poxdex"
              description="THis a game"
              ghLink="https://github.com/muhammadali015/Pokedex."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ludo}
              isBlog={false}
              title="Ludo& Checker game"
              description="THis a game"
              ghLink="https://github.com/muhammadali015/Pokedex."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                  imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="THis a game"
              ghLink="https://github.com/muhammadali015/Pokedex."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Mangement System"
              description="Flight booking system to save you from stading in long queues too buy the tickets"
              ghLink="https://github.com/muhammadali015/Pokedex."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
