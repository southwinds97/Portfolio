import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiOracle,
} from "react-icons/si";
import { FaWindows, FaRedhat } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRedhat />
      </Col>
    </Row>
  );
}

export default Toolstack;
