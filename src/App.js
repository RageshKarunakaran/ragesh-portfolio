import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import "./style/global.css";
import {
  Col,
  Container,
  Row,
  Nav,
  Tab,
  Tabs,
  FormGroup,
  Button,
} from "react-bootstrap";
import CountUp, { useCountUp } from "react-countup";
import CircularProgress from "./CircularProgress";
import Lottie from "react-lottie";
import loction from "./lotties/loction";
import mail from "./lotties/mail";
import phone from "./lotties/phone";
import send from "./lotties/send-message";
import download from "./lotties/download";
import commingsoon from "./lotties/commingsoon";
import { MyVerticallyCenteredModal } from "./components/AboutModal";

const loctionImage = {
  loop: true,
  autoplay: true,
  animationData: loction,
  // rendererSettings: {
  //   preserveAspectRatio: "xMidYMid slice",
  // },
};
const mailImage = {
  loop: true,
  autoplay: true,
  animationData: mail,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const phoneImage = {
  loop: true,
  autoplay: true,
  animationData: phone,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const sendImage = {
  loop: true,
  autoplay: true,
  animationData: send,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const downloadImage = {
  loop: true,
  autoplay: true,
  animationData: download,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const commingSoon = {
  loop: true,
  autoplay: true,
  animationData: commingsoon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [cls, setCls] = React.useState("dark");
  return (
    <>
      <div className="App">
        <div className={cls}>
          <div className="portfolio_main">
            <section>
              <Container fluid>
                <Row>
                  <Col md={12} lg={12}>
                    <div className="react-tab">
                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="first"
                      >
                        {/* <Button
                          onClick={() =>
                            cls === "light" ? setCls("dark") : setCls("light")
                          }
                        >
                          Click
                        </Button> */}
                        <div className="header">
                          <Nav variant="pills" className="flex-dir-column">
                            <Nav.Item>
                              <Nav.Link name="Home" eventKey="first">
                                <div className="menu">
                                  <img src="./estate.svg" />

                                  <h2 className="fw-bold">Home</h2>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link name="About" eventKey="second">
                                <div className="menu">
                                  <img src="./user.svg" />

                                  <h2 className="fw-bold">About</h2>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link name="Portfolio" eventKey="third">
                                <div className="menu">
                                  <img src="./bag-alt.svg" />

                                  <h2 className="fw-bold">Portfolio</h2>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link name="Contact" eventKey="fourth">
                                <div className="menu">
                                  <img src="./envelope.svg" />

                                  <h2 className="fw-bold">Contact</h2>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link name="Blog" eventKey="fifth">
                                <div className="menu">
                                  <img src="./hipchat.svg" />

                                  <h2 className="fw-bold">Blog</h2>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                        <div className="tab-panel_list">
                          <Tab.Content>
                            <Tab.Pane eventKey="first" className="home">
                              <div class="color-block d-none d-lg-block"></div>
                              <Container fluid>
                                <Row className="align-items-center home-details-container">
                                  <Col
                                    lg={4}
                                    className="bg position-fixed d-none d-lg-block"
                                  ></Col>
                                  <Col
                                    lg={{ span: 7, offset: 5 }}
                                    text-center
                                    text-lg-start
                                  >
                                    <div className="d-inline-block">
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
                                        <span className="text-clr">
                                          UI / UX Developer
                                        </span>
                                      </h1>
                                      <p className="text-white">
                                        I'm a web designer & front‑end developer
                                        focused on crafting clean &
                                        user‑friendly experiences,
                                        <br /> I am passionate about building
                                        excellent software that improves the
                                        lives of those around me.
                                      </p>
                                      <div className="portfolio_main-btn">
                                        <Button
                                          onClick={() => setModalShow(true)}
                                        >
                                          <span className="button-txt">
                                            More About Me
                                          </span>
                                          <span className="button-icon">
                                            <img
                                              src="./arrow-right.svg"
                                              width={40}
                                            />
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <Container>
                                <Row>
                                  <Col lg={12}>
                                    <div className="heading position-relative pt-5 pb-5">
                                      <h2 className="text-light">
                                        About{" "}
                                        <span className="txt-clr">Me</span>
                                      </h2>
                                      <span className="title-bg">ABOUT ME</span>
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
                                            <span className="titile">
                                              First Name :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                              Ragesh
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              Last Name :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                              Karunakaran
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              Age :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                              27 Years
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              Nationality :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                              Indian
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              Freelance :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                              <span className="text-success">
                                                Available
                                              </span>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              Address :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                              Chennai
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              Phone :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                                              +91 7200932145
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              Email :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block text-break">
                                              rageshkarunakaran@gmail.com
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              LinkedIn :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block text-break">
                                              <a href="https://www.linkedin.com/in/ragesh-karunakaran-0aa055241/">
                                                rageshkarunakaran
                                              </a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="titile">
                                              Langages :{" "}
                                            </span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block text-break">
                                              Tamil,English,Malyaylam
                                            </span>
                                          </li>
                                        </ul>
                                        <div className="portfolio_main-btn text-left mb-3">
                                          <a
                                            href="./updateresume.pdf"
                                            target="_blank"
                                          >
                                            <Button>
                                              <span class="button-txt">
                                                Download CV
                                              </span>
                                              <span class="button-icon">
                                                <Lottie
                                                  options={downloadImage}
                                                  height={40}
                                                  width={40}
                                                />
                                              </span>
                                            </Button>
                                          </a>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col xl={6} lg={5}>
                                    <Row>
                                      <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <div className="counter_box text-left px-md-5 py-md-4 px-2 py-2 mb-4">
                                          <CountUp delay={2} end={4} />
                                          <span className="text-theme">+</span>
                                          <h5 className="text-white text-uppercase position-relative ps-5">
                                            Years of
                                            <span className="d-block">
                                              experiences
                                            </span>
                                          </h5>
                                        </div>
                                      </Col>
                                      <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <div className="counter_box text-left px-md-5 py-md-4 px-2 py-2 mb-4">
                                          <CountUp delay={2} end={67} />
                                          <span className="text-theme">+</span>
                                          <h5 className="text-white text-uppercase position-relative ps-5">
                                            Completed
                                            <span className="d-block">
                                              Projects
                                            </span>
                                          </h5>
                                        </div>
                                      </Col>
                                      <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <div className="counter_box text-left px-md-5 py-md-4 px-2 py-2 mb-4">
                                          <CountUp delay={2} end={20} />
                                          <span className="text-theme">+</span>
                                          <h5 className="text-white text-uppercase position-relative ps-5">
                                            Happy
                                            <span className="d-block">
                                              Customers
                                            </span>
                                          </h5>
                                        </div>
                                      </Col>
                                      <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <div className="counter_box text-left px-md-5 py-md-4 px-2 py-2 mb-4">
                                          <CountUp delay={2} end={4} />
                                          <span className="text-theme">+</span>
                                          <h5 className="text-white text-uppercase position-relative ps-5">
                                            Award
                                            <span className="d-block">
                                              {" "}
                                              Won
                                            </span>
                                          </h5>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                {/* Myskills */}
                                <Row className="mt-5 chart">
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
                                    <h5 className="fw-bold mt-3 mb-5 text-white">
                                      HTML
                                    </h5>
                                  </Col>
                                  <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <CircularProgress
                                      size={180}
                                      strokeWidth={20}
                                      percentage={80}
                                      color="#ffb400"
                                    />
                                    <h5 className="fw-bold mt-3 mb-5 text-white">
                                      CSS
                                    </h5>
                                  </Col>
                                  <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <CircularProgress
                                      size={180}
                                      strokeWidth={20}
                                      percentage={85}
                                      color="#ffb400"
                                    />
                                    <h5 className="fw-bold mt-3 mb-5 text-white">
                                      BOOTSTRAP
                                    </h5>
                                  </Col>
                                  <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <CircularProgress
                                      size={180}
                                      strokeWidth={20}
                                      percentage={55}
                                      color="#ffb400"
                                    />
                                    <h5 className="fw-bold mt-3 mb-5 text-white">
                                      JAVASCRIPT
                                    </h5>
                                  </Col>
                                  <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <CircularProgress
                                      size={180}
                                      strokeWidth={20}
                                      percentage={55}
                                      color="#ffb400"
                                    />
                                    <h5 className="fw-bold mt-3 mb-5 text-white">
                                      ADOBE XD
                                    </h5>
                                  </Col>
                                  <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <CircularProgress
                                      size={180}
                                      strokeWidth={20}
                                      percentage={50}
                                      color="#ffb400"
                                    />
                                    <h5 className="fw-bold mt-3 mb-5 text-white">
                                      ADOBE PHOTOSHOP
                                    </h5>
                                  </Col>
                                  <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <CircularProgress
                                      size={180}
                                      strokeWidth={20}
                                      percentage={40}
                                      color="#ffb400"
                                    />
                                    <h5 className="fw-bold mt-3 mb-5 text-white">
                                      REACT
                                    </h5>
                                  </Col>
                                  <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                    <CircularProgress
                                      size={180}
                                      strokeWidth={20}
                                      percentage={50}
                                      color="#ffb400"
                                    />
                                    <h5 className="fw-bold mt-3 mb-5 text-white">
                                      REACTNATIVE
                                    </h5>
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
                                            <img
                                              src="./briefcase.png"
                                              width={25}
                                            />
                                          </div>

                                          <div className="text-left">
                                            <span className="text-white text-left">
                                              2020-PRESENT
                                            </span>
                                            <h4 className="text-white text-uppercase mt-3">
                                              UI / UX Developer
                                              <span className="text-white opacity-75 f-20">
                                                - GUARDIANLINK
                                              </span>
                                            </h4>
                                            <p className="text-white">
                                              Lorem ipsum dolor sit amet,
                                              consectetur tempor incididunt ut
                                              labore adipisicing elit
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="resume_icon">
                                            <img
                                              src="./briefcase.png"
                                              width={25}
                                            />
                                          </div>

                                          <div className="text-left">
                                            <span className="text-white text-left">
                                              2018-2020
                                            </span>
                                            <h4 className="text-white text-uppercase mt-3">
                                              Web designer
                                              <span className="text-white opacity-75 f-20">
                                                - CUBE45
                                              </span>
                                            </h4>
                                            <p className="text-white">
                                              Lorem ipsum dolor sit amet,
                                              consectetur tempor incididunt ut
                                              labore adipisicing elit
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="resume_icon">
                                            <img
                                              src="./briefcase.png"
                                              width={25}
                                            />
                                          </div>

                                          <div className="text-left">
                                            <span className="text-white text-left">
                                              2014-2015
                                            </span>
                                            <h4 className="text-white text-uppercase mt-3">
                                              Graphics Designer
                                              <span className="text-white opacity-75 f-20">
                                                - TNQ
                                              </span>
                                            </h4>
                                            <p className="text-white">
                                              Lorem ipsum dolor sit amet,
                                              consectetur tempor incididunt ut
                                              labore adipisicing elit
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
                                            <img
                                              src="./book-open.svg"
                                              width={26}
                                            />
                                          </div>

                                          <div className="text-left">
                                            <span className="text-white text-left">
                                              2015-2018
                                            </span>
                                            <h4 className="text-white text-uppercase mt-3">
                                              UG Degree
                                              <span className="text-white opacity-75 f-20">
                                                - Cape Institute
                                              </span>
                                            </h4>
                                            <p className="text-white">
                                              Lorem ipsum dolor sit amet,
                                              consectetur tempor incididunt ut
                                              labore adipisicing elit
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="resume_icon">
                                            <img
                                              src="./book-open.svg"
                                              width={26}
                                            />
                                          </div>

                                          <div className="text-left">
                                            <span className="text-white text-left">
                                              2012-2014
                                            </span>
                                            <h4 className="text-white text-uppercase mt-3">
                                              Diplamo Degree
                                              <span className="text-white opacity-75 f-20">
                                                - Cape Polytechnic
                                              </span>
                                            </h4>
                                            <p className="text-white">
                                              Lorem ipsum dolor sit amet,
                                              consectetur tempor incididunt ut
                                              labore adipisicing elit
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="resume_icon">
                                            <img
                                              src="./book-open.svg"
                                              width={26}
                                            />
                                          </div>

                                          <div className="text-left">
                                            <span className="text-white text-left">
                                              2001-2012
                                            </span>
                                            <h4 className="text-white text-uppercase mt-3">
                                              School
                                              <span className="text-white opacity-75 f-20">
                                                - S.M.Hr.Sec School
                                              </span>
                                            </h4>
                                            <p className="text-white">
                                              Lorem ipsum dolor sit amet,
                                              consectetur tempor incididunt ut
                                              labore adipisicing elit
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </Col>
                                </Row>
                              </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <div className="my-5 portfolio">
                                <Container>
                                  <Row>
                                    <Col lg={12}>
                                      <div className="heading position-relative pt-5 pb-5">
                                        <h2 className="text-light">
                                          MY{" "}
                                          <span className="txt-clr">
                                            Portfolio
                                          </span>
                                        </h2>
                                        <span className="title-bg">
                                          Portfolio
                                        </span>
                                      </div>
                                    </Col>
                                    <Col xl={12} className="mt-5">
                                      <Tabs
                                        defaultActiveKey="home"
                                        id="fill-tab-example"
                                        className="mb-3"
                                        fill
                                      >
                                        <Tab eventKey="home" title="All">
                                          <div className="portfolio_inline">
                                            <Container>
                                              <Row>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://www.jump.trade/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./asia.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Jump.trade
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://www.guardianlink.io/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./gl.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Guardianlink
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://www.beyondlife.club/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./asia.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Beyondlife
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://www.appdupe.com/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./appdupe.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Appdupe
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://sale.venturedemos.com/polycruz-wallet-ui/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./gl.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Polycruz
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://www.cryptocurrencyexchangescript.com/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./ces.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Cryptocurrency
                                                            Exchange
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://www.turnkeytown.com/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./baf.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Turnkeytown
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://www.blockchainappfactory.com/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./baf1.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Blockchain App
                                                            Factory
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://thecentaurus.io/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./Centaurus.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Centaurus
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://sale.venturedemos.com/mahideen_ui/demo2/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./ces.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Gangster Queens
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="https://www.inoru.com/">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./in.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Inoru
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                                <Col
                                                  xxl={4}
                                                  xl={4}
                                                  lg={4}
                                                  md={6}
                                                >
                                                  <a href="#">
                                                    <div className="portfolio_box mb-4">
                                                      <div class="cards">
                                                        <div class="card">
                                                          <div class="card__image">
                                                            <img
                                                              src="./pro.png"
                                                              alt=""
                                                            />
                                                          </div>
                                                          <h2 class="card__title">
                                                            Exchange
                                                          </h2>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Col>
                                              </Row>
                                            </Container>
                                          </div>
                                        </Tab>
                                        <Tab
                                          eventKey="longer-tab"
                                          title="HTML"
                                        ></Tab>
                                        <Tab
                                          eventKey="profile"
                                          title="React"
                                        ></Tab>
                                        <Tab
                                          eventKey="contact"
                                          title="Marvel Design"
                                        ></Tab>
                                      </Tabs>
                                    </Col>
                                  </Row>
                                </Container>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                              <Container>
                                <Row>
                                  <Col lg={12}>
                                    <div className="heading position-relative pt-5 pb-5">
                                      <h2 className="text-light">
                                        GET IN
                                        <span className="txt-clr"> TOUCH</span>
                                      </h2>
                                      <span className="title-bg">CONTACT</span>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col
                                    xxl={5}
                                    xl={5}
                                    lg={5}
                                    className="text-left"
                                  >
                                    <h3 className="fw-bold">DON'T BE SHY !</h3>
                                    <p>
                                      Feel free to get in touch with me. I am
                                      always open to discussing new projects,
                                      creative ideas or opportunities to be part
                                      of your visions.
                                    </p>
                                    <div className="address_details mt-5">
                                      <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="ad_icon">
                                          <div>
                                            <Lottie
                                              options={loctionImage}
                                              height={40}
                                              width={40}
                                            />
                                          </div>
                                        </div>
                                        <div className="address_line">
                                          <p className="m-0 f-17 opacity-75 fw-regular text-uppercase">
                                            Address
                                          </p>
                                          <p className="fw-bold">
                                            123 Stree New York City , <br />
                                            United States Of America 750065.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="ad_icon">
                                          <div>
                                            <Lottie
                                              options={mailImage}
                                              height={40}
                                              width={40}
                                            />
                                          </div>
                                        </div>
                                        <div className="address_line">
                                          <p className="m-0 f-17 opacity-75 fw-regular text-uppercase">
                                            Mail Me
                                          </p>
                                          <p className="fw-bold">
                                            rageshkarunakaran@gmail.com
                                          </p>
                                        </div>
                                      </div>
                                      <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="ad_icon">
                                          <div>
                                            <Lottie
                                              options={phoneImage}
                                              height={40}
                                              width={40}
                                            />
                                          </div>
                                        </div>
                                        <div className="address_line">
                                          <p className="m-0 f-17 opacity-75 fw-regular text-uppercase">
                                            Call Me
                                          </p>
                                          <p className="fw-bold">
                                            +91 7200932145
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col
                                    xxl={7}
                                    xl={7}
                                    lg={7}
                                    className="text-left"
                                  >
                                    <form id="myForm" className="contactform">
                                      <Row>
                                        <Col
                                          xxl={6}
                                          xl={6}
                                          lg={6}
                                          md={6}
                                          sm={12}
                                        >
                                          <div className="formgroup mb-4">
                                            <input
                                              type={"text"}
                                              name={"name"}
                                              placeholder={"YOUR NAME"}
                                              required
                                            />
                                          </div>
                                        </Col>
                                        <Col
                                          xxl={6}
                                          xl={6}
                                          lg={6}
                                          md={6}
                                          sm={12}
                                        >
                                          <div className="formgroup mb-4">
                                            <input
                                              type={"email"}
                                              name={"user_email"}
                                              placeholder={"YOUR EMAIL"}
                                              required
                                            />
                                          </div>
                                        </Col>
                                        <Col
                                          xxl={12}
                                          xl={12}
                                          lg={12}
                                          md={12}
                                          sm={12}
                                        >
                                          <div className="formgroup mb-4">
                                            <input
                                              type={"text"}
                                              name={"user_subject"}
                                              placeholder={"YOUR SUBJECT"}
                                              required
                                            />
                                          </div>
                                        </Col>
                                        <Col
                                          xxl={12}
                                          xl={12}
                                          lg={12}
                                          md={12}
                                          sm={12}
                                        >
                                          <div className="formgroup mb-4">
                                            <textarea
                                              placeholder="YOUR MESSAGE"
                                              rows={3}
                                            />
                                          </div>
                                        </Col>
                                        <Col lg={12}>
                                          <div className="formgroup mb-4">
                                            <div className="portfolio_main-btn text-left">
                                              <button>
                                                <span class="button-txt">
                                                  SEND MESSAGE
                                                </span>
                                                <span class="button-icon">
                                                  <Lottie
                                                    options={sendImage}
                                                    height={30}
                                                    width={30}
                                                  />
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </Col>
                                      </Row>
                                    </form>
                                  </Col>
                                </Row>
                              </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                              <div className="lottie">
                                <Lottie options={commingSoon} />
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Tab.Container>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
