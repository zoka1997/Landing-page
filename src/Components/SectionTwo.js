import React, { Component } from 'react';
import { BsFillHouseDoorFill, BsDropletFill, BsHammer } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class SectionTwo extends Component {
  render() {
    return (
      <div className="container-fluid Section-two">
      <h3 className="basic-text">Our Service</h3>
    <Row className="text-center">
    <Col className="colm" lg={3} md={6}>
    <BsFillHouseDoorFill size="45px" color="gold" />
    <h6 className="text">HOME CLEANING</h6>
    </Col>

    <Col className="colm" lg={3} md={6}>
    <BsDropletFill size="45px" color="gold" />
    <h6 className="text">PAITING</h6>
    </Col>

    <Col className="colm" lg={3} md={6}>
    <BsHammer size="45px" color="gold" />
    <h6 className="text">HOME REPAIRING</h6>
    </Col>

    <Col className="colm" lg={3} md={6}>
    <ImOffice size="45px" color="gold" />
    <h6 className="text">HOME REPAIRING</h6>
    </Col>
    </Row>
      </div>
    )
  }
}
