import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import laboratory from "../../Assets/Projects/laboratory.png";
import ecommerceapp from "../../Assets/Projects/ecommerceapp.png";
import guziktiger from "../../Assets/Projects/Guziktiger.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">프로젝트 </strong> 참여 현황
        </h1>
        <p style={{ color: "white" }}>
          최근에 작업한 프로젝트는 다음과 같습니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceapp}
              isBlog={false}
              title="쇼핑몰 앱 및 AWS 연동(REST API)"
              description="Flutter를 활용하여 이전에 제작한 쇼핑몰 웹사이트와 데이터 연동이 가능한 모바일 앱 제작한 프로젝트입니다. "
              ghLink="https://github.com/southwinds97/shopping_app"
              demoLink="https://southwinds97.github.io/guziktigerapp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guziktiger}
              isBlog={false}
              title="쇼핑몰 웹 구현 및 AWS 배포"
              description="Spring을 활용하여 쇼핑몰 웹사이트 구현 및 AWS에 배포힌 프로젝트입니다. 로그인, 회원가입, 상품 목록, 장바구니, 결제, 마이페이지, 챗 시스템 관리자페이지 등이 있습니다."
              ghLink="https://github.com/southwinds97/GuzikTiger"
              demoLink="http://ec2-54-206-169-132.ap-southeast-2.compute.amazonaws.com:8586/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laboratory}
              isBlog={false}
              title="첫 웹사이트 구현"
              description="HTML & CSS, JavaScript, Java, JSP, OracleDB를 활용하여 구현한 웹사이트입니다. 메인페이지, 로그인, 게시판, 댓글 등이 있습니다."
              ghLink="https://github.com/southwinds97/WebProject_LHS"
              demoLink="https://southwinds97.github.io/webproject/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
