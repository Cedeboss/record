import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container fluid className='text-center notfound-bg'>
      <Row className='h-100 m-auto'>
        <Col md={6} className='m-auto text-light'>
          <h2>404 Error</h2>
          <Button size="lg" variant='outline-light' className='button-404 '>
            <Link to='/' className='text-decoration-none  '>
              🌏 Go back home
            </Link>
          </Button>
        </Col>
        <Col>f</Col>
      </Row>
    </Container>
  )
}

export default NotFound
