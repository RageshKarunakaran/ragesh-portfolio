import React from 'react'
import {
    Col,
    Container,
    Row,
} from "react-bootstrap";
import Lottie from "react-lottie";
import loction from "../../lotties/loction";
import mail from "../../lotties/mail";
import phone from "../../lotties/phone";
import send from "../../lotties/send-message";
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
function Contact() {
    return (
        <>
        <div className='contact mb-down'>
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
                          <Col xxl={5} xl={5} lg={5} className="text-left">
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
                                  <Lottie options={loctionImage} height={40} width={40} />
                                </div>
                              </div>
                              <div className="address_line">
                                <p className="m-0 f-17 opacity-75 fw-regular text-uppercase">
                                  Address
                                </p>
                                <p className="fw-bold">
                                  Chennai City , <br />
                                  Tamilnadu, India.
                                </p>
                              </div>
                            </div>
                            <div className="d-flex align-items-start gap-3 mb-3">
                              <div className="ad_icon">
                                <div>
                                  <Lottie options={mailImage} height={40} width={40} />
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
                                  <Lottie options={phoneImage} height={40} width={40} />
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
                          <Col xxl={7} xl={7} lg={7} className="text-left">
                          <form id="myForm" className="contactform">
                            <Row>
                              <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                              <div className="formgroup mb-4">
                                <input type={"text"} name={"name"} placeholder={"YOUR NAME"} required />
                              </div>
                              </Col>
                              <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                              <div className="formgroup mb-4">
                                <input type={"email"} name={"user_email"} placeholder={"YOUR EMAIL"} required />
                              </div>
                              </Col>
                              <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                              <div className="formgroup mb-4">
                                <input type={"text"} name={"user_subject"} placeholder={"YOUR SUBJECT"} required />
                              </div>
                              </Col>
                              <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                              <div className="formgroup mb-4">
                                <textarea placeholder="YOUR MESSAGE" rows={3} required/>
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
                                      <Lottie options={sendImage} height={30} width={30} />
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
        </div>
                      
        </>
    )
}

export default Contact
