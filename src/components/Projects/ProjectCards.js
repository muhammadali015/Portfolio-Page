import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view modern-project-card">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="modern-card-img fixed-card-img" />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '220px' }}>
        <Card.Title className="modern-card-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className="modern-card-text fixed-card-desc">
          {props.description}
        </Card.Text>
        <div className="modern-card-buttons">
          <Button variant="primary" href={props.ghLink} target="_blank" className="modern-card-btn">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="modern-card-btn"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
