import { Row, Col, Card, Image } from 'react-bootstrap'

import ad1 from '../../styles/images/poudre.jpg'
import { Link } from 'react-router-dom';
import { cardDataType } from '../../pages/public/Home';



const ThreeCols = ( ) => {
  const cardData: cardDataType[] = [
    {
      iconTitle: 'ri-mic-fill',
      title: 'Enregitrement',
      textCard:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      textButton: 'Go somewhere',
      imageCard: false,
    },
    {
      iconTitle: 'ri-volume-up-fill',
      title: 'Mixage & Mastering',
      textCard:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.",
      textButton: 'Go somewhere',
      imageCard: false,
    },
    {
      iconTitle: 'ri-folder-music-fill',
      title: 'Compression',
      textCard: 'Some quick example text content.to build on the card title and make up the bulk of the cards content. Some quick example text to build',
      textButton: 'Go somewhere',
      imageCard: false,
    },
  ]


  const long = parseInt((12 / cardData?.length).toFixed(0))

  return (
    <Row className='w-100 g-2 g-sm-1 g-md-4 px-2 px-md-4'>
      {cardData.map((card: cardDataType, indx: number) => (
        <Col key={indx} xs={12} sm={6} md={long} className='font-85 '>
          <Link to={`/${indx}`} className='text-decoration-none'>
            {card.imageCard ? (
              <Image src={ad1} alt='poudre' width='100%' height='auto' className='' />
            ) : (
              <Card
                style={{ width: '100%'
                  , height: '100%'
                 }}
                className='backg-light-primar  border-0  magra'
              >
                <Card.Body>
                  <Card.Title className='text-light-primary'>
                    <Row>
                      <Col xs={1} className='m-auto'>
                        <i className={`${card.iconTitle} fs-2`}></i>
                      </Col>
                      <Col className='m-auto ps-4'>
                        {''} {card.title}
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text className='text-light-primary'>{card.textCard}</Card.Text>
                  <p className='text-end'>
                      <Link to='/'>En savoir plus</Link>
                    </p>
                </Card.Body>
              </Card>
            )}
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default ThreeCols
