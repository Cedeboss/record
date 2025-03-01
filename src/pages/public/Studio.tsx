import React from 'react'
import ad1 from '../../styles/images/poudre.jpg'
import bgStud from '../../styles/images/backgroundStudio.jpg'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import Footer from '../../components/layouts/public/Footer'
import { Link } from 'react-router-dom'

const Studio = () => {
const caroussTitle = "Polynejah Record.ink"
console.log('')
  return (
    <>
      <Container fluid className="px-0">
        <div className="ze-title pt-5 mt-5">
          <h1 className="text-light-secondary">{caroussTitle}</h1>
          <p className="text-light">Color your music</p>
        </div>
        <Image
          src={bgStud}
          height={350}
          className="d-block vh-100 w-100"
          alt="image de fond"
        />
      </Container>
      <Container fluid className="py-5">
        <Container fluid className="px-0">
          <Row className="g-2">
            <Col md={8} className="">
              <Card
                className="border-2 "
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Card.Title>
                  <i className="ri-contrast-drop-line fs-2"></i> Une oasis sonore
                  </Card.Title>
                  <Card.Text>
                  Imaginez un espace clos, baigné d'une douce lumière tamisée, où règne une atmosphère calme et studieuse. C'est ici que les idées musicales prennent vie, que les mélodies se sculptent et que les voix s'envolent. Le studio d'enregistrement est un sanctuaire dédié à la création sonore, où chaque détail est pensé pour capturer l'essence même de la musique.
                  </Card.Text>
                  <Link to="/">Go somewhere</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-0">
              <Image
                fluid
                src={ad1}
                alt="poudre"
                width="auto"
                height="100%"
                className="rounded"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="py-5">
        <Container fluid className="px-0">
          <Row className="d-flex  flex-row-reverse g-2">
            <Col md={8} className="">
              {/* <Card className='border-0' style={{ width: '100%', height: '100%' }}> */}
              <Card
                className="border-0 backg-light-500-secondar"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Card.Title>
                  <i className="ri-folder-chart-fill fs-2"></i> Un orchestre d'outils technologiques
                  </Card.Title>
                  <Card.Text className="mb-0 text-justify pe-5">
                  Au cœur de ce sanctuaire sonore se trouve une console imposante, véritable chef d'orchestre des instruments numériques. Des écrans lumineux affichent une multitude de courbes et de boutons, tandis que des câbles serpentent entre les différents appareils. Ici, chaque élément joue un rôle crucial dans la capture, le traitement et l'embellissement du son.
                  </Card.Text>
                  <Card.Text className="text-end pe-5">
                    <Link to="/">Go somewhere</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-0">
              <Image
                src={ad1}
                alt="poudre"
                width="100%"
                height="auto"
                className="rounded"
              />
            </Col>
          </Row>
        </Container>
        {/* <Slider sliderProps={sliderProps} /> */}
      </Container>
      <Container fluid className="py-5">
        <Container fluid className="px-0">
          <Row className="g-2">
            <Col md={8} className="">
              <Card
                className="border-2 "
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Card.Title>
                  <i className="ri-bard-line fs-2"></i> La magie de la prise
                  </Card.Title>
                  <Card.Text>
                  Un musicien s'installe devant son instrument, prêt à insuffler son âme dans la mélodie. Le silence se fait, puis les premières notes résonnent dans la pièce. Les microphones captent chaque nuance, chaque vibration, chaque émotion transmise par l'artiste. Le technicien, oreille attentive et main experte, ajuste les paramètres en temps réel pour immortaliser chaque instant de la performance.
                  </Card.Text>
                  <Link to="/">Go somewhere</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-0">
              <Image
                fluid
                src={ad1}
                alt="poudre"
                width="auto"
                height="100%"
                className="rounded"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="py-5">
        <Container fluid className="px-0">
          <Row className="d-flex  flex-row-reverse g-2">
            <Col md={8} className="">
              {/* <Card className='border-0' style={{ width: '100%', height: '100%' }}> */}
              <Card
                className="border-0 rounded-0 backg-light-500-secondar"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Card.Title>
                    <i className="ri-send-plane-fill fs-2 "></i> Un voyage vers l'infini sonore
                  </Card.Title>
                  <Card.Text className="mb-0">
                  Derrière la vitre de la salle de contrôle, le producteur orchestre la magie de la création. Il écoute attentivement chaque prise, peaufine les arrangements, ajoute des effets et façonne l'œuvre jusqu'à ce qu'elle atteigne sa perfection. Le studio d'enregistrement est un lieu de transformation, où les idées musicales se concrétisent et où naissent les chefs-d'œuvre de demain.
                  </Card.Text>
                  <Card.Text className="text-center">
                    <Link to="/">Go somewhere</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-0">
              <Image
                src={ad1}
                alt="poudre"
                width="100%"
                height="auto"
                className="rounded"
              />
            </Col>
          </Row>
        </Container>
        {/* <Slider sliderProps={sliderProps} /> */}
      </Container>

      <Footer />
    </>
  );
}

export default Studio
