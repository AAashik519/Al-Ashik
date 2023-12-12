import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAws } from "react-icons/di";
import { FaAmazon, FaAws, FaDigitalOcean, FaGitSquare, FaGithub } from "react-icons/fa";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiPycharm,
  SiDocker,
  SiMicrosoftazure,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGitSquare />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      </Col>
     
    </Row>
  );
}

export default Toolstack;
