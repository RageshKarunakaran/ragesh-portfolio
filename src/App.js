import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import './style/global.css';
import { Col, Container, Row, Nav, Tab, Tabs } from 'react-bootstrap';
import CountUp, { useCountUp } from 'react-countup';
import CircularProgress from "./CircularProgress";


function App() {
  return (

    <>
      <div className="App">
        <div className="portfolio_main">
          <section>
            <Container fluid>
              <Row>
                <Col md={12} lg={12}>
                  <div className="react-tab">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                      <div className="header">

                        <Nav variant="pills" className="flex-column">
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
                                <Col lg={4} className="bg position-fixed d-none d-lg-block">

                                </Col>
                                <Col lg={{ span: 7, offset: 5 }} text-center text-lg-start>
                                  <div className="profile-img">

                                  </div>
                                  <div className="about-content text-center text-lg-start">
                                    <h1>I'M RAGESH.<br />

                                      <span className="text-white">UI / UX Developer</span></h1>
                                    <p className="text-white">I'm a Indian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                                    <div className="portfolio_main-btn">
                                      <button>
                                        <span className="button-txt">More About Me</span>
                                        <span className="button-icon">
                                          <img src="./arrow-right.svg" width={40} />
                                        </span>
                                      </button>
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
                                    <h2 className="text-light">About <span className="txt-clr">Me</span></h2>
                                    <span className="title-bg">resume</span>
                                  </div>
                                </Col>
                                <Col xl={6} lg={5}>
                                  <Row>
                                    <Col xl={12}>
                                      <h3 className="text-uppercase mt-3 mb-3 text-light text-left fw-bolder">personal infos</h3>
                                    </Col>
                                    <Col xl={12}>
                                      <ul className="about-list list-unstyled">
                                        <li>
                                          <span className="titile">First Name: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> Ragesh</span>
                                        </li>
                                        <li>
                                          <span className="titile">Last Name: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> Karunakaran</span>
                                        </li>
                                        <li>
                                          <span className="titile">Age: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> 27 Years</span>
                                        </li>
                                        <li>
                                          <span className="titile">Nationality: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> Indian</span>
                                        </li>
                                        <li>
                                          <span className="titile">Freelance: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> Available</span>
                                        </li>
                                        <li>
                                          <span className="titile">Address: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> Chennai</span>
                                        </li>
                                        <li>
                                          <span className="titile">Phone: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> +91 7200932145</span>
                                        </li>
                                        <li>
                                          <span className="titile">Email: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> rageshkarunakaran@gmail.com</span>
                                        </li>
                                        <li>
                                          <span className="titile">LinkedIn: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> rageshkarunakaran</span>
                                        </li>
                                        <li>
                                          <span className="titile">Langages: </span>
                                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> Tamil,English,Malyaylam</span>
                                        </li>
                                      </ul>
                                      <div className="portfolio_main-btn text-left">
                                        <button><span class="button-txt">Download CV</span><span class="button-icon"><img src="./import.svg" width="30" /></span></button>
                                      </div>
                                    </Col>
                                  </Row>


                                </Col>
                                <Col xl={6} lg={5}>
                                  <Row>
                                    <Col xl={6} lg={6}>
                                      <div className="counter_box text-left px-5 py-4 mb-4">
                                        <CountUp delay={2} end={5} /> <span className="text-theme">+</span>
                                        <h5 className="text-white text-uppercase position-relative ps-5">Years of<span className="d-block"> experiences</span></h5>
                                      </div>
                                    </Col>
                                    <Col xl={6} lg={6}>
                                      <div className="counter_box text-left px-5 py-4 mb-4">
                                        <CountUp delay={2} end={67} /> <span className="text-theme">+</span>
                                        <h5 className="text-white text-uppercase position-relative ps-5">Completed<span className="d-block"> Projects</span></h5>
                                      </div>
                                    </Col>
                                    <Col xl={6} lg={6}>
                                      <div className="counter_box text-left px-5 py-4 mb-4">
                                        <CountUp delay={2} end={20} /> <span className="text-theme">+</span>
                                        <h5 className="text-white text-uppercase position-relative ps-5">Happy<span className="d-block"> Customers</span></h5>
                                      </div>
                                    </Col>
                                    <Col xl={6} lg={6}>
                                      <div className="counter_box text-left px-5 py-4 mb-4">
                                        <CountUp delay={2} end={4} /> <span className="text-theme">+</span>
                                        <h5 className="text-white text-uppercase position-relative ps-5">Award<span className="d-block"> Won</span></h5>
                                      </div>
                                    </Col>


                                  </Row>
                                </Col>
                              </Row>
                              {/* Myskills */}
                              <Row className="mt-5">
                                <Col xl={12}>
                                  <h3 className="text-uppercase mt-5 mb-5 text-light text-center fw-bolder">MY Skills</h3>

                                </Col>
                                <Col xl={3} lg={3}>
                                  <CircularProgress
                                    size={180}
                                    strokeWidth={20}
                                    percentage={75}
                                    color="#ffb400"

                                  />
                                  <h5 className="fw-bold mt-3 mb-5 text-white">HTML</h5>
                                </Col>
                                <Col xl={3} lg={3}>
                                  <CircularProgress
                                    size={180}
                                    strokeWidth={20}
                                    percentage={65}
                                    color="#ffb400"

                                  />
                                  <h5 className="fw-bold mt-3 mb-5 text-white">CSS</h5>
                                </Col>
                                <Col xl={3} lg={3}>
                                  <CircularProgress
                                    size={180}
                                    strokeWidth={20}
                                    percentage={80}
                                    color="#ffb400"

                                  />
                                  <h5 className="fw-bold mt-3 mb-5 text-white">BOOTSTRAP</h5>
                                </Col>
                                <Col xl={3} lg={3}>
                                  <CircularProgress
                                    size={180}
                                    strokeWidth={20}
                                    percentage={55}
                                    color="#ffb400"

                                  />
                                  <h5 className="fw-bold mt-3 mb-5 text-white">JAVASCRIPT</h5>
                                </Col>
                                <Col xl={3} lg={3}>
                                  <CircularProgress
                                    size={180}
                                    strokeWidth={20}
                                    percentage={55}
                                    color="#ffb400"

                                  />
                                  <h5 className="fw-bold mt-3 mb-5 text-white">ADOBE XD</h5>
                                </Col>
                                <Col xl={3} lg={3}>
                                  <CircularProgress
                                    size={180}
                                    strokeWidth={20}
                                    percentage={50}
                                    color="#ffb400"

                                  />
                                  <h5 className="fw-bold mt-3 mb-5 text-white">ADOBE PHOTOSHOP</h5>
                                </Col>
                                <Col xl={3} lg={3}>
                                  <CircularProgress
                                    size={180}
                                    strokeWidth={20}
                                    percentage={40}
                                    color="#ffb400"

                                  />
                                  <h5 className="fw-bold mt-3 mb-5 text-white">REACT</h5>
                                </Col>
                                <Col xl={3} lg={3}>
                                  <CircularProgress
                                    size={180}
                                    strokeWidth={20}
                                    percentage={30}
                                    color="#ffb400"

                                  />
                                  <h5 className="fw-bold mt-3 mb-5 text-white">REACTNATIVE</h5>
                                </Col>

                              </Row>
                              {/* Myskills */}
                              <Row className="mt-5">
                                <Col xl={12}>
                                  <h3 className="text-uppercase mt-5 mb-5 text-light text-center fw-bolder">Experience  & Education</h3>

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
                                          <h4 className="text-white text-uppercase mt-3">UI / UX Developer <span className="text-white opacity-75 f-20">- GUARDIANLINK</span></h4>
                                          <p className="text-white">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                            adipisicing elit</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="resume_icon">
                                          <img src="./briefcase.png" width={25} />
                                        </div>

                                        <div className="text-left">
                                          <span className="text-white text-left">2018-2020</span>
                                          <h4 className="text-white text-uppercase mt-3">Web designer <span className="text-white opacity-75 f-20">- CUBE45</span></h4>
                                          <p className="text-white">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                            adipisicing elit</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="resume_icon">
                                          <img src="./briefcase.png" width={25} />
                                        </div>

                                        <div className="text-left">
                                          <span className="text-white text-left">2014-2015</span>
                                          <h4 className="text-white text-uppercase mt-3">Graphics Designer <span className="text-white opacity-75 f-20">- TNQ</span></h4>
                                          <p className="text-white">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                            adipisicing elit</p>
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
                                          <h4 className="text-white text-uppercase mt-3">UG Degree <span className="text-white opacity-75 f-20">- Cape Institute</span></h4>
                                          <p className="text-white">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                            adipisicing elit</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="resume_icon">
                                          <img src="./book-open.svg" width={26} />
                                        </div>

                                        <div className="text-left">
                                          <span className="text-white text-left">2012-2014</span>
                                          <h4 className="text-white text-uppercase mt-3">Diplamo Degree <span className="text-white opacity-75 f-20">- Cape Polytechnic</span></h4>
                                          <p className="text-white">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                            adipisicing elit</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="resume_icon">
                                          <img src="./book-open.svg" width={26} />
                                        </div>

                                        <div className="text-left">
                                          <span className="text-white text-left">2001-2012</span>
                                          <h4 className="text-white text-uppercase mt-3">School <span className="text-white opacity-75 f-20">- S.M.Hr.Sec School</span></h4>
                                          <p className="text-white">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                            adipisicing elit</p>
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
                                  <Col xl={12}>
                                    <h2 className="f-28 text-uppercase">My <span class="text-theme">Portfolio</span></h2>
                                  </Col>
                                  <Col xl={12} className="mt-5">
                                    <Tabs
                                      defaultActiveKey="profile"
                                      id="fill-tab-example"
                                      className="mb-3"
                                      fill
                                    >
                                      <Tab eventKey="home" title="All">
<div className="">

</div>
                                      </Tab>
                                      <Tab eventKey="longer-tab" title="HTML">

                                      </Tab>
                                      <Tab eventKey="profile" title="React">

                                      </Tab>
                                      <Tab eventKey="contact" title="Marvel Design">

                                      </Tab>
                                    </Tabs>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fourth">
                            <p>Contact</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fifth">
                            <p>Blog</p>
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

    </>
  );
}

export default App;
