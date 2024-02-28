import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import "../styles/homepage.css";
import uws from "/images/uws.gif";


const Home = () => {
  return (
    <MainLayout>
       <section>
        <Container>
          <Row>
            <center>
            <div className="hero__content">
                <h5 className="mb-3">ยินดีต้อนรับ</h5>
                <h1 className="mb-4 hero__title">
                  <span>Welcome to website</span>
                </h1>
              </div>
            <Col lg="8" md="8">
              <div className="hero__img">
                <img src={uws} alt="uwu" className="w-100" />
              </div>
              <button className="order__btn d-flex align-items-center justify-content-center">
                  <Link to="/workorder">
                    Click to website <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </Col>
            </center>
          </Row>
        </Container>
      </section>
    </MainLayout>
  )
}

export default Home