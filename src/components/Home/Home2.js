import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineExport,
  AiTwotoneCalculator,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              저를 <span className="purple"> 소개 </span> 합니다!
            </h1>
            <p className="home-about-body">
              저는 프로그래밍을 공부하면서 빠져버렸고
              그것이 제 삶의 한층 더 나아가게 해주었습니다.
              <br />
              <br />저는 {" "}
              <i>
                <b className="purple"> Java, Spring Boot, Flutter, Html&CSS, React, OracleDB </b>
              </i>
              와 같은 기술을 사용하여 프로젝트를 개발하고 있습니다.
              <br />
              <br />
              저의 관심분야는 &nbsp;
              <i>
                <b className="purple">새로운 웹&앱 기술 및 제품개발 </b> 그리고{" "}
                <b className="purple">
                  클린 코드와 안정적인 서비스
                </b>
                입니다.
              </i>
              <br />
              <br />
              가능할 때마다 새로운 기술을 배우고 적용하는 것을 좋아하며,
              <b className="purple">Spring, React</b> 등의 언어와
              <i>
                <b className="purple">
                  {" "}
                  Ajax, Rest API
                </b>
                등의 기술을 사용하여
              </i>
              &nbsp; 웹 서비스를 개발하는 것을 좋아합니다. 또한
              <i>
                <b className="purple"> Flutter</b>
              </i>
              로 모바일 앱을 개발하는 것도 좋아합니다.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>여기서 저를 만나보세요</h1>
            <p>
              자유롭게 저와 <span className="purple">소통 </span>해주세요.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/southwinds97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://x.com/southwinds97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://velog.io/@southwinds97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lhs_975/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
