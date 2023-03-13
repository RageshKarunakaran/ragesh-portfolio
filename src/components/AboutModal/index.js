import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp, { useCountUp } from "react-countup";
import CircularProgress from "../../CircularProgress";
import styles from "../AboutModal/style.css";
export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="heading position-relative pt-5 pb-5 text-center">
                <h2 className="text-light">
                  About <span className="txt-clr">Me</span>
                </h2>
                <span className="title-bg">resume</span>
              </div>
            </Col>
            <Col xl={6} lg={5}>
              <Row>
                <Col xl={12}>
                  <h3 className="text-uppercase mt-3 mb-3 text-light text-left fw-bolder">
                    personal infos
                  </h3>
                </Col>
                <Col xl={12}>
                  <div className="d-inline-block">
                    <img
                      src="./new.jpg"
                      width={200}
                      height={200}
                      className="rounded-circle profile-img d-sm-block d-lg-none"
                    />
                  </div>
                </Col>
                <Col xl={12}>
                  <ul className="about-list list-unstyled">
                    <li>
                      <span className="titile">First Name:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Ragesh
                      </span>
                    </li>
                    <li>
                      <span className="titile">Last Name:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Karunakaran
                      </span>
                    </li>
                    <li>
                      <span className="titile">Age: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        27 Years
                      </span>
                    </li>
                    <li>
                      <span className="titile">Nationality:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Indian
                      </span>
                    </li>
                    <li>
                      <span className="titile">Freelance:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Available
                      </span>
                    </li>
                    <li>
                      <span className="titile">Address:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Chennai
                      </span>
                    </li>
                    <li>
                      <span className="titile">Phone:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        +91 7200932145
                      </span>
                    </li>
                    <li>
                      <span className="titile">Email:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block text-break">
                        rageshkarunakaran@gmail.com
                      </span>
                    </li>
                    <li>
                      <span className="titile">LinkedIn:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block text-break">
                        rageshkarunakaran
                      </span>
                    </li>
                    <li>
                      <span className="titile">Langages:</span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block text-break">
                        Tamil,English,Malyaylam
                      </span>
                    </li>
                  </ul>
                  <div className="portfolio_main-btn text-left mb-3">
                    <Button>
                      <span class="button-txt">Download CV</span>
                      <span class="button-icon">
                        <img src="./import.svg" width="30" />
                      </span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={6} lg={5}>
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="counter_box text-left px-md-5 py-md-4 px-2 py-2 mb-4">
                    <CountUp delay={2} end={5} />
                    <span className="text-theme">+</span>
                    <h5 className="text-white text-uppercase position-relative ps-5">
                      Years of
                      <span className="d-block">experiences</span>
                    </h5>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="counter_box text-left px-md-5 py-md-4 px-2 py-2 mb-4">
                    <CountUp delay={2} end={67} />
                    <span className="text-theme">+</span>
                    <h5 className="text-white text-uppercase position-relative ps-5">
                      Completed
                      <span className="d-block">Projects</span>
                    </h5>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="counter_box text-left px-md-5 py-md-4 px-2 py-2 mb-4">
                    <CountUp delay={2} end={20} />
                    <span className="text-theme">+</span>
                    <h5 className="text-white text-uppercase position-relative ps-5">
                      Happy
                      <span className="d-block">Customers</span>
                    </h5>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                  <div className="counter_box text-left px-md-5 py-md-4 px-2 py-2 mb-4">
                    <CountUp delay={2} end={4} />
                    <span className="text-theme">+</span>
                    <h5 className="text-white text-uppercase position-relative ps-5">
                      Award
                      <span className="d-block"> Won</span>
                    </h5>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* Myskills */}
          <Row className="mt-5 chart text-center">
            <Col xl={12}>
              <h3 className="text-uppercase mt-5 mb-5 text-light text-center fw-bolder">
                MY Skills
              </h3>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <CircularProgress
                size={180}
                strokeWidth={20}
                percentage={85}
                color="#ffb400"
              />
              <h5 className="fw-bold mt-3 mb-5 text-white">HTML</h5>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <CircularProgress
                size={180}
                strokeWidth={20}
                percentage={80}
                color="#ffb400"
              />
              <h5 className="fw-bold mt-3 mb-5 text-white">CSS</h5>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <CircularProgress
                size={180}
                strokeWidth={20}
                percentage={85}
                color="#ffb400"
              />
              <h5 className="fw-bold mt-3 mb-5 text-white">BOOTSTRAP</h5>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <CircularProgress
                size={180}
                strokeWidth={20}
                percentage={55}
                color="#ffb400"
              />
              <h5 className="fw-bold mt-3 mb-5 text-white">JAVASCRIPT</h5>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <CircularProgress
                size={180}
                strokeWidth={20}
                percentage={55}
                color="#ffb400"
              />
              <h5 className="fw-bold mt-3 mb-5 text-white">ADOBE XD</h5>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <CircularProgress
                size={180}
                strokeWidth={20}
                percentage={50}
                color="#ffb400"
              />
              <h5 className="fw-bold mt-3 mb-5 text-white">ADOBE PHOTOSHOP</h5>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <CircularProgress
                size={180}
                strokeWidth={20}
                percentage={40}
                color="#ffb400"
              />
              <h5 className="fw-bold mt-3 mb-5 text-white">REACT</h5>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <CircularProgress
                size={180}
                strokeWidth={20}
                percentage={50}
                color="#ffb400"
              />
              <h5 className="fw-bold mt-3 mb-5 text-white">REACTNATIVE</h5>
            </Col>
          </Row>
          {/* Myskills */}
          <Row className="mt-5">
            <Col xl={12}>
              <h3 className="text-uppercase mt-5 mb-5 text-light text-center fw-bolder">
                Experience & Education
              </h3>
            </Col>
            <Col xl={6} lg={6}>
              <div className="resume_box">
                <ul className="list-unstyled m-0 p-0">
                  <li>
                    <div className="resume_icon">
                      <img src="./briefcase.png" width={25} />
                    </div>

                    <div className="text-left">
                      <span className="text-white text-left">2020-PRESENT</span>
                      <h4 className="text-white text-uppercase mt-3">
                        UI / UX Developer
                        <span className="text-white opacity-75 f-20">
                          - GUARDIANLINK
                        </span>
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur tempor
                        incididunt ut labore adipisicing elit
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="resume_icon">
                      <img src="./briefcase.png" width={25} />
                    </div>

                    <div className="text-left">
                      <span className="text-white text-left">2018-2020</span>
                      <h4 className="text-white text-uppercase mt-3">
                        Web designer
                        <span className="text-white opacity-75 f-20">
                          - CUBE45
                        </span>
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur tempor
                        incididunt ut labore adipisicing elit
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="resume_icon">
                      <img src="./briefcase.png" width={25} />
                    </div>

                    <div className="text-left">
                      <span className="text-white text-left">2014-2015</span>
                      <h4 className="text-white text-uppercase mt-3">
                        Graphics Designer
                        <span className="text-white opacity-75 f-20">
                          - TNQ
                        </span>
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur tempor
                        incididunt ut labore adipisicing elit
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <div className="resume_box">
                <ul className="list-unstyled m-0 p-0">
                  <li>
                    <div className="resume_icon">
                      <img src="./book-open.svg" width={26} />
                    </div>

                    <div className="text-left">
                      <span className="text-white text-left">2015-2018</span>
                      <h4 className="text-white text-uppercase mt-3">
                        UG Degree
                        <span className="text-white opacity-75 f-20">
                          - Cape Institute
                        </span>
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur tempor
                        incididunt ut labore adipisicing elit
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="resume_icon">
                      <img src="./book-open.svg" width={26} />
                    </div>

                    <div className="text-left">
                      <span className="text-white text-left">2012-2014</span>
                      <h4 className="text-white text-uppercase mt-3">
                        Diplamo Degree
                        <span className="text-white opacity-75 f-20">
                          - Cape Polytechnic
                        </span>
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur tempor
                        incididunt ut labore adipisicing elit
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="resume_icon">
                      <img src="./book-open.svg" width={26} />
                    </div>

                    <div className="text-left">
                      <span className="text-white text-left">2001-2012</span>
                      <h4 className="text-white text-uppercase mt-3">
                        School
                        <span className="text-white opacity-75 f-20">
                          - S.M.Hr.Sec School
                        </span>
                      </h4>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur tempor
                        incididunt ut labore adipisicing elit
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
