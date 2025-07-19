import React, { useEffect } from 'react'
import {
    Col,
    Container,
    Row,
    Tabs,
    Tab,
} from "react-bootstrap";
function Portfolio() {
  useEffect(()=>{
    window.scrollBy(0, -10000)
    },[])
    return (
        <>
  
                      <div className="my-5 portfolio mb-down">
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
                            <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill>
                              <Tab eventKey="home" title="All">
                                <div className="portfolio_inline">
                                  <Container>
                                    <Row>
                                    <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://cashkaro.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./cashkaro.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                              Affiliate Marketing
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://pro.jump.trade/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Jump-Trade-Pro.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Decentralized Marketplace
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.jump.trade/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Asia-s-Largest-NFT-Marketplace-Jump-trade.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Jump.trade
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.guardianlink.io/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./No-Code-NFT-Marketplace-Secure-Web3-Wallet-GuardianLink.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Guardianlink
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://gns.guardiannft.org/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./gns-guardiannft-org.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                GNS
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://walletqa.guardiannft.org/signin">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./GuardianWallet-Alpha-Release.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                GuardianWallet Web
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a
                                        href="https://play.google.com/store/apps/details?id=com.guardianwalletnative&hl=en-IN&pli=1">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Guardian-Wallet-–-Apps-on-Google-Play.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                GuardianWallet Mobile App
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.beyondlife.club/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img
                                                  src="./NFT-Marketplace-Premium-NFT-Platform-Celebrity-NFT-Marketplace-BeyondLife-club.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Beyondlife
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.appdupe.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./appdupe.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Appdupe
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.polycruz.io/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Polycruz.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Polycruz
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.cryptocurrencyexchangescript.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./ces.png" alt="" />
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
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.turnkeytown.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./baf.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Turnkeytown
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.blockchainappfactory.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./baf1.png" alt="" />
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
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://thecentaurus.io/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Centaurus.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Centaurus
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://sale.venturedemos.com/mahideen_ui/demo2/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Gangster-Queens.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Gangster Queens
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.inoru.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./in.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Inoru
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://fullyfaltoonft.com/home.php">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Fully-Faltoo-NFTs-NFT-drops-Premium-NFT-launchpad.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Fully Faltoo
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.sanacademy.edu.in/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img
                                                  src="./Best-CBSE-School-In-Chennai-With-10-Years-Of-Education-Excellency.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                SAN Academy
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.cube45.org/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Cube45-2021s-Best-Digital-Marketing-Company-in-Chennai.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Cube45
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
                              <Tab eventKey="longer-tab" title="HTML">
                                <div className="portfolio_inline">
                                  <Container>
                                    <Row>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.beyondlife.club/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img
                                                  src="./NFT-Marketplace-Premium-NFT-Platform-Celebrity-NFT-Marketplace-BeyondLife-club.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Beyondlife
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.appdupe.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./appdupe.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Appdupe
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.polycruz.io/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Polycruz.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Polycruz
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.cryptocurrencyexchangescript.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./ces.png" alt="" />
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
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.turnkeytown.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./baf.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Turnkeytown
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.blockchainappfactory.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./baf1.png" alt="" />
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
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://thecentaurus.io/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Centaurus.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Centaurus
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://sale.venturedemos.com/mahideen_ui/demo2/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Gangster-Queens.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Gangster Queens
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.inoru.com/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./in.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Inoru
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://fullyfaltoonft.com/home.php">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Fully-Faltoo-NFTs-NFT-drops-Premium-NFT-launchpad.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Fully Faltoo
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.sanacademy.edu.in/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img
                                                  src="./Best-CBSE-School-In-Chennai-With-10-Years-Of-Education-Excellency.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                SAN Academy
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.cube45.org/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Cube45-2021s-Best-Digital-Marketing-Company-in-Chennai.png"
                                                  alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Cube45
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
                              <Tab eventKey="profile" title="React">
                                <div className="portfolio_inline">
                                  <Container>
                                    <Row>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://pro.jump.trade/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Jump-Trade-Pro.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Decentralized Marketplace
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://www.jump.trade/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Asia-s-Largest-NFT-Marketplace-Jump-trade.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                Jump.trade
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>

                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://gns.guardiannft.org/">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./gns-guardiannft-org.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                GNS
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a href="https://walletqa.guardiannft.org/signin">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./GuardianWallet-Alpha-Release.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                GuardianWallet Web
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                      </Col>
                                      <Col xxl={4} xl={4} lg={4} md={6}>
                                      <a
                                        href="https://play.google.com/store/apps/details?id=com.guardianwalletnative&hl=en-IN&pli=1">
                                        <div className="portfolio_box mb-4">
                                          <div class="cards">
                                            <div class="card">
                                              <div class="card__image">
                                                <img src="./Guardian-Wallet-–-Apps-on-Google-Play.png" alt="" />
                                              </div>
                                              <h2 class="card__title">
                                                GuardianWallet Mobile App
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
                              {/* <Tab eventKey="contact" title="Marvel Design"></Tab> */}
                            </Tabs>
                            </Col>
                          </Row>
                        </Container>
                      </div>
        </>
    )
}

export default Portfolio
