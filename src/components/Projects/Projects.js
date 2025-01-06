import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/flight.png";
import ecom from "../../Assets/Projects/360_F_241390620_hihddCG15N7I8HyPWUiv1eUH85D2SN9z.png";

import editor from "../../Assets/Projects/poxdex.png";
import chatify from "../../Assets/Projects/rent.png";

import bitsOfCode from "../../Assets/Projects/hostel.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Rent A Car"
              description="Rent a car system"
              ghLink="https://github.com/muhammadali015/Rent-a-car"
              demoLink="https://github.com/muhammadali015/"
            />
          </Col>

       <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Bazzar Shoping Store "
              description="A Ecommerce website to buy products of daily life.Shoping website to buy anything "
              ghLink="https://github.com/muhammadali015/"
              demoLink="https://bazaar-application-final-deployment.vercel.app/"
            />
          </Col>


                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hostel Hub"
              description="Hostel bookking app for newcommers student that are new in the city of university"
              ghLink="https://github.com/muhammadali015/"
              demoLink="https://www.figma.com/proto/2IhLFldUIlN8R0uI4YecGy?node-id=0-1&t=6LHvRpSt2zJUQ009-6"
            />
          </Col>


                

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Poxdex"
              description="THis a game"
              ghLink="https://github.com/muhammadali015/Pokedex."
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
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
