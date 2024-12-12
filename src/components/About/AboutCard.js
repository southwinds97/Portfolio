import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요, 저는 <span className="purple">이 형석 </span>이라고 합니다.<br />
            <span className="purple"> 서울</span>에 거주하고 있습니다.
            <br />
            저는 현재 신입 개발자로 취업을 준비하고 있습니다.
            <br />
            저는 풀스택 과정을 수료하였고, 현재는 백엔드 개발자로 <br />성장하고자 노력하고 있습니다.
            <br />
            <br />
            코딩 외에도 좋아하는 활동들이 있습니다.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 독서
            </li>
            <li className="about-activity">
              <ImPointRight /> 정보 수집
            </li>
            <li className="about-activity">
              <ImPointRight /> 게임
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
