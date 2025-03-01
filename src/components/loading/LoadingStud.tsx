import React from "react";
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";

const LoadingStud = () => {
  return (
    <>
      <Container fluid className="bg-secondary px-0">
        <Placeholder as="div" animation="glow">
          <Placeholder
            as="div"
            style={{ height: 74, width: "100%" }}
            className="d-flex align-items-center justify-content-center "
          />
        </Placeholder>
      </Container>
      <Container
        fluid
        className="px-0 text-center vh-100 bg-secondary"
        style={{ height: 150 }}
      >
        <div className=" pt-5">
          <div className="pt-5 mt-3">
            <Placeholder as="div" animation="glow">
              <Placeholder as="h1" xs={5} />
            </Placeholder>
          </div>
        </div>
      </Container>
      <Container fluid className="bg-secondar px-0">
        <Container fluid className="px-0">
          <Row className="d-flex ">
            <Col md={8} className=" bg-light p-0 ">
              <Card
                className="border-0"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder.Button variant="primary" xs={6} />
                  </Placeholder>
                </Card.Body>
              </Card>
            </Col>
            <Col className=""></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default LoadingStud;
