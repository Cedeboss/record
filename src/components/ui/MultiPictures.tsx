import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const MultiPictures= ({multiPictureProps}: any) => {

  return (
    <React.Fragment>
      <Container className="text-center">
        <p>Nos outils</p>
      </Container>
      <Container fluid className="">
        <Row style={{ height: "180px" }}>
          {/* {Array.from({ length: 4 }).map((_, indx: number) => ( */}
          {multiPictureProps?.map((img: any, indx: number) => (
            <Col
            key={indx}
              style={{ height: "150px" }}
              className="d-flex align-items-center justify-content-center border text-center prest m-auto align-itmes-center"
            >
              <div>
                <Link to='/' className='text-decoration-none text-dark'>
                  <i className={`ri-${img.icon} fs-2`}></i>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default MultiPictures
