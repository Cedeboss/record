import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBarMenu = () => {
  return (
    <Col xs={2} className="bg-secondary vh-100 border-0 border-top">
      <Container fluid className="pt-3 ps-0">
        <Row>
          <Col className="py-2" xs={12}>
            <Link
              to="/utilisateurs"
              className="text-decoration-none text-light"
            >
              <Row>
                <Col xs={1}>
                  <i className="ri-user-line"></i>
                </Col>
                <Col>Users</Col>
              </Row>
            </Link>
          </Col>
          <Col className="py-2" xs={12}>
            <Link to="/messages" className="text-decoration-none text-light">
              <Row>
                <Col xs={1}>
                  <i className="ri-mail-line"></i>
                </Col>
                <Col>Messages</Col>
              </Row>
            </Link>
          </Col>
          <Col className="py-2" xs={12}>
            <Link to="/articles" className="text-decoration-none text-light">
              <Row>
                <Col xs={1}>
                  <i className="ri-file-line"></i>
                </Col>
                <Col>Articles</Col>
              </Row>
            </Link>
          </Col>
          <Col className="py-2" xs={12}>
            <Row>
              <Col xs={1}>
                <i className="ri-bill-line"></i>
              </Col>
              <Col>Rubriques</Col>
            </Row>
          </Col>
          <Col className="py-2" xs={12}>
            <Row>
              <Col xs={1}>
                <i className="ri-image-line"></i>
              </Col>
              <Col>Images</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

export default SideBarMenu
