import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { MyVerticallyCenteredModal } from "../AboutModal";
function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="home mb-down">
      <div class="color-block d-none d-lg-block"></div>
      <Container fluid>
        <Row className="align-items-center home-details-container">
          <Col lg={4} className="bg position-fixed d-none d-lg-block"></Col>
          <Col lg={{ span: 7, offset: 5 }} text-center text-lg-start>
            <div className="d-md-inline-block d-flex justify-content-center">
              <img
                src="./new.jpg"
                width={200}
                height={200}
                className="rounded-circle profile-img d-sm-block d-lg-none"
              />
            </div>
            <div className="about-content text-center text-lg-start">
              <h1>
                I'M RAGESH.
                <br />
                <span className="text-clr">Front-end Developer</span>
              </h1>
              <div className="w-md-90">
              <p className="text-white">
                I'm a Front-End Developer who builds clean, responsive websites
                and web apps. I work with HTML, CSS, Tailwind CSS, JavaScript, and popular
                frameworks like React and Next JS to create user-friendly
                designs that look great on any device.
              </p>
              <p>
                I’m passionate about turning ideas into smooth, functional
                websites that people love to use. Check out my work, and let's
                create something amazing together!
              </p>
              </div>
              <div className="portfolio_main-btn">
                <Button onClick={() => setModalShow(true)}>
                  <span className="button-txt">More About Me</span>
                  <span className="button-icon">
                    <img src="./arrow-right.svg" width={40} />
                  </span>
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
