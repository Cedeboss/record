import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

const InfoColImage = ({ad1}: any) => {
  return (
    <Container fluid>
    <Row>
      <Col md={8} className=' bg-light p-0 '>
        <Card className='border-0 backg-light-500-secondary' style={{ width: '100%', height: '100%' }}>
          <Card.Body>
            <Card.Title>
              <i className='ri-tools-fill fs-2 '></i> Situé en polynésie
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              <br />
              make up the bulk of the card's content.make up the bulk of the card's
              content.
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              <br />
              make up the bulk of the card's content.make up the bulk of the card's
              content.
            </Card.Text>
            <button className='backg-light-primary text-light-secondary rounded-pill py-2 px-3'>
              Go somewhere
              </button>
          </Card.Body>
        </Card>
      </Col>
      <Col className=''>
        <Image src={ad1} alt='poudre' width='100%' height='100%' className='' />
      </Col>
    </Row>
  </Container>
  )
}

export default InfoColImage
