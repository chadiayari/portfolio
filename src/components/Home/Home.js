import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
        <Particle />
        <Container className="home-content">
          <Container
            fluid
            className="home-about-section"
            id="about"
          ></Container>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading"></h1>

              <h1 className="heading-name">
                <strong className="main-name">I'M CHADI AYARI</strong>
                <br />
                Freshly graduated Software Engineer
              </h1>
              <p className="home-about-body">
                <br />I am fluent in classics like My field of Interest's are
                building new;
                <br />
                Whenever possible, I also apply my passion for developing
                products with
              </p>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          </Row>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
