import React from "react";
import { Form, List, Filter, Counter } from "./components";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Container style={{ padding: "50px 0px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form />
          </Col>
        </Row>
        <Row style={{ padding: "25px 0px 15px" }}>
          <Col md={{ span: 3, offset: 3 }}>
            <Filter />
          </Col>
          <Col md={"auto"}>
            <Counter type={"in_progress"} />
          </Col>
          <Col md={"auto"}>
            <Counter type={"complete"} />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <List />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
