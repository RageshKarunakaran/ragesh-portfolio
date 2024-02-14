import React from 'react'
import {
    Col,
    Container,
    Row,
    Button,
} from "react-bootstrap";
import { MyVerticallyCenteredModal } from '../AboutModal';
function Home() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="home mb-down">
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
                                <span className="text-clr">
                                    Front-end Developer
                                </span>
                            </h1>
                            <p className="text-white w-75">
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
                                <MyVerticallyCenteredModal show={modalShow}
                                    onHide={() => setModalShow(false)} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
