import React from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

const Slider = ({sliderProps}: any) => {
    const {ad1, bamb, stud, caroussTitle } = sliderProps

  return (
    <Container fluid className='px-0'>
      <Container fluid className='carouss text-light  px-0'>
        <div className='ze-title pt-5 mt-5'>
          <h1 className='text-light'>{caroussTitle}</h1>
        </div>
        <Carousel fade className='  zIndex-1 d-flex'>
          <Carousel.Item interval={8000} className=' px-0 vh-10 vh-md-100 vh-lg-100 wh-100'>
            <Container fluid className=' px-0  vh-100  wh-100'>
              <Image src={ad1} alt='cover' width='100%' />
            </Container>
            <Carousel.Caption>
              <div className='mb-3 text-start'>
                <h2>Open Up Your Mind</h2>
              </div>
              <div className=' text-start opacity-75  p-3'>
                Come visit us Lorem ipsum dolor sit amet quas nobis consequuntur fugiat culpa,
                recusandae voluptate nostrum ducimus? Sunt, necessitatibus dignissimos.
                Commodi, nostrum dent.
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={8000} className=' px-0 vh-10 vh-md-100 vh-lg-100 wh-100'>
            <Container fluid className=' px-0  vh-100  wh-100'>
              <Image src={bamb} alt='cover' width='100%' />
            </Container>

            <Carousel.Caption className=' justify-content-end'>
              <div className='mb-3 text-end'>
                <h2>Greating</h2>
                <div className='bg-light text-dark opacity-75  p-3 ms-5'>
                  <div>
                    Come tis quas nobis consequuntur fugiat culpa, recusandae voluptate nostrum
                    ducimus? <br /> Sunt, necessitatibus dignissimos. Commodi, nostrum
                    deserunt.
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={8000} className=' px-0 vh-10 vh-md-100 vh-lg-100 wh-100'>
            <Container fluid className=' px-0  vh-100  wh-100'>
              <img src={stud} alt='cover' width='100%' />

              <Carousel.Caption className=' justify-content-end'>
                <div className='mb-3 text-end'>
                  <h2>Un studio chaleureux</h2>
                  <div className='bg-light text-dark opacity-75  p-3 ms-5'>
                    <div>
                      Come tis quas nobis consequuntur fugiat culpa, recusandae voluptate
                      nostrum ducimus? <br /> Sunt, necessitatibus dignissimos. Commodi,
                      nostrum deserunt.
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
          <Carousel.Item interval={8000} className=' px-0 vh-10 vh-md-100 vh-lg-100 wh-100'>
            <Container fluid className=' px-0  vh-100  wh-100'>
              <Image src={stud} alt='cover' width='100%' />
            </Container>

            <Carousel.Caption className=' justify-content-end '>
              <div className='mb-3 text-dark text-end'>
                <h2>Greatingssss</h2>
                <div className='bg-light text-dark opacity-75  p-3 ms-5'>
                  <div>
                    Come tis quas nobis consequuntur fugiat culpa, recusandae voluptate nostrum
                    ducimus? <br /> Sunt, necessitatibus dignissimos. Commodi, nostrum
                    deserunt.
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  )
}

export default Slider
