import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bannerPng from '../assets/pngegg.png'
import bannerBg from '../assets/nice-computer-keyboard-white.jpg'
import AOS from 'aos'

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })

  return (
    <>
      <section
        style={{
          height: window.innerHeight
        }}
      >
        <img src={bannerBg} alt="..." className='w-100 h-100 object-fit-cover' />
        <div 
          className='position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'
          style={{
            backgroundColor: '#FFF8'
          }}
        >
          <Container>
            <Row className='align-items-center'>
              <Col lg={6}>
                <div data-aos='fade-up'>
                  <div>
                    <h1 
                      className='display-5 fw-bold mb-4'
                      style={{
                        background: 'linear-gradient(90deg, rgba(3,12,29,1) 0%, rgba(0,30,83,1) 59%)',
                        backgroundClip: 'text',
                        color: 'transparent'
                      }}
                    >Découvrez les Meilleures Offres Informatique</h1>
                  </div>
                  <p className='lead mb-4'>Qualité, Performance, et Prix Imbattables!</p>
                  <Link className='btn btn-primary me-2 mb-2' to='/contact'>Contactez-nous Maintenant</Link>
                  <Link className='btn btn-outline-primary mb-2' to='/products'>Explorez Nos Produits</Link>
                </div>
              </Col>
              <Col lg={6} className='d-none d-lg-block'>
                <div className='p-5'>
                  <img src={bannerPng} alt="..." className='img-fluid' />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Banner
