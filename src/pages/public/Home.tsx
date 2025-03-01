import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import stud from '../../styles/images/microphone.jpg'
// import stud from '../../styles/images/backgroundStudio.jpg'
import ad1 from '../../styles/images/poudre.jpg'
import musicaly from '../../styles/images/musicaly.jpg'
import separator1 from '../../styles/images/separator1.svg'
import separator3 from '../../styles/images/separator3.svg'
import proT from '../../styles/images/logo-protools-icon-512x512-gkj45qq2.png'
import mars from '../../styles/images/marshall.gif'
import consoles from '../../styles/images/console.jpg'
import '../../index.css';
// import LazyLoad from 'react-lazy-load'
import Footer from '../../components/layouts/public/Footer'
import { Link, useOutletContext } from 'react-router-dom'

const ThreeCols = React.lazy(() => import("../../components/ui/ThreeCols"))

export type cardDataType = {
  iconTitle: string | undefined;
  title: string | undefined;
  textCard: string | undefined;
  textButton: string | undefined;
  imageCard: boolean | undefined;
}



const HomePage = () => {

  const {
    isDarkTheme
  } = useOutletContext<{isDarkTheme: boolean}>()

  return (
    <>
      {/* <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"> */}

      <Container
        fluid
        className="py-5 mb-5 mt-4 
      ze-titls
      cover-container d-flex w-100 h-100 p-3 mx-auto flex-column
      "
      >
        <div className="ze-title p-5 mt-5">
          <h1
            className="text-light"
            data-theme={isDarkTheme ? "dark" : "light"}
          >
            POLYNEJAH RECORD
          </h1>
          <p className="text-light text-center">
            Productions Musicales | Mixage | Mastering
          </p>
          <p className="text-light">
           Studio d'enregistrement professionnel
            musicale situé en Polynésie
          </p>
        </div>
        <Image
          src={stud}
          width="100%"
          height="auto"
          className=""
          fluid
          alt="image de fond"
        />
      </Container>

      <Container fluid className="px-0  separator1 ">
        <Image
          src={separator1}
          height={142}
          className="d-block w-100"
          alt="layer"
        />
      </Container>
      <Container fluid className="bg-secondar my-3">
        <Container fluid>
          <Row>
            <Col md={7} className=" bg-light p-0 ">
              <Card
                className="border-0"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Card.Title>
                    <i className="ri-volume-up-fill fs-2 me-3 "></i>
                    {""}
                    Le studio
                  </Card.Title>
                  <Card.Text className="magra">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. make up the bulk of the
                    card's content.make up the bulk of the card's content.
                    <br />
                    <br />
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. make up the bulk of the
                    card's content.make up the bulk of the card's content. Some
                    quick example text to build on the card title and make up
                    the bulk of the card's content. make up the bulk of the
                    card's content.make up the bulk of the card's content.
                    <br />
                    <br />
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. make up the bulk of the
                    card's content.make up the bulk of the card's content.
                    <p className="text-end">
                      <Link to="/">En savoir plus</Link>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-auto">
              {/* <LazyLoad width="100%" threshold={1}> */}
                <Image
                  src={musicaly}
                  alt="poudre"
                  width="100%"
                  height="auto"
                  className="rounded"
                />
              {/* </LazyLoad> */}
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid
                style={{ height: 'auto' }}
      
      className="px- py-5 backg-light-500-secondary">
        <Container className="text-center py-3">  
          <h4>Nos Prestations</h4>
        </Container>

        <ThreeCols />

      </Container>
      {/* <Container fluid className='px-0 separator31 d-none d-md-block'>
        <Image src={separator3} height={95} className='d-block w-100' alt='image de fond' />
      </Container> */}

      <Container fluid className="px-0 py-5">
        <Container fluid className="px-0">
          {/* <LazyLoad width="100%" threshold={0.95}> */}
            <img src={consoles} alt="banner" style={{ width: "100%" }} />
          {/* </LazyLoad> */}
        </Container>
      </Container>
      <Container fluid className="bg-light py-3"></Container>
      <Container fluid className="">
        <Container fluid>
          <Row>
            <Col sm={12} md={8} className=" bg-light p-0 ">
              <Card
                className="border-0 rounded-0  backg-light-500-secondary"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Card.Title>
                    <i className="ri-tools-fill fs-2 "></i> Situé en polynésie
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    make up the bulk of the card's content.make up the bulk of
                    the card's content. Some quick example text to build on the
                    card title and make up the bulk of the card's content.
                    <br />
                    make up the bulk of the card's content.make up the bulk of
                    the card's content.
                  </Card.Text>
                  {/* <button
                    className='backg-light-primary text-light-secondary rounded-pill py-2 px-3'
                    onClick={() => {
                      import('../../utils/functions').then((module) => {
                        module._counter(count, setCount)
                      })
                    }}
                  >
                    {count}
                  </button>
                  <button
                    className='backg-light-primary text-light-secondary rounded-pill py-2 px-3'
                    onClick={() => {
                      startTransition(() => {
                        _counter(count2, setCount2)
                      })
                    }}
                  >
                    {isPending ? '...' : count2}
                    {count2} 
                  </button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              className="px-0  backg-light-500-secondary d-flex align-items-center justify-content-center"
            >
              <Container fluid className="px-0 h-100 ">
                <Image
                  src={ad1}
                  alt="poudre"
                  width="100%"
                  height="100%"
                  className=""
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="px-0 py-5">
        <Container className="text-center">
          <h4>Réalisations</h4>
        </Container>
        <Container fluid>
          <Row xs={1} sm={3} md={3}>
            {/* <Col>
              <Carousel fade className='zIndex-'>
                <Carousel.Item interval={5000}>
                  <Image src={ad1} height={350} className='d-block w-100' alt='First slide' />
                  <Carousel.Caption className='bg-light text-dark opacity-75'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img src={bamb} height={350} className='d-block w-100' alt='First slide' />
                  <Carousel.Caption className='bg-light text-dark opacity-75'>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    src={consoles}
                    height={350}
                    className='d-block w-100'
                    alt='Third slide'
                  />
                  <Carousel.Caption className='bg-secondary opacity-75'>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col> */}
            <Col className="">
              {" "}
              <img
                src="https://via.placeholder.com/640x360"
                height={350}
                className="d-block w-100"
                alt="Third slide"
              />
            </Col>
            <Col className="">
              {" "}
              <img
                src="http://via.placeholder.com/640x360"
                height={350}
                className="d-block w-100"
                alt="Third slide"
              />
            </Col>
            <Col className="">
              {" "}
              <img
                src="http://via.placeholder.com/640x360"
                height={350}
                className="d-block w-100"
                alt="Third slide"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="px-0 mb-2">
        <Container className="text-center">
          <h4>Technos et matos</h4>
        </Container>
        <Container fluid className="">
          <Row style={{ height: "180px" }}>
            <Col className="text-center prest m-auto">
              <div>
                <i className="ri-tools-fill fs-2 "></i>
              </div>
            </Col>
            <Col className="text-center prest m-auto">
              <div>
                <img src={proT} alt="logo protools" width={36} />
              </div>
            </Col>
            <Col className="text-center prest m-auto">
              <div>
                <img src={mars} alt="logo protools" width={86} />
              </div>
            </Col>
            <Col className="text-center prest m-auto">
              <div>
                <i className="ri-tools-fill fs-2 "></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="px-0  separator bg-secondary">
        <Image
          src={separator3}
          height={42}
          className="d-block w-100 "
          alt="layer"
        />
      </Container>

      <Footer />
    </>
  );
}

export default HomePage
