import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import AOS from 'aos'

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })

  return (
    <>
      <footer className='py-5 bg-dark text-light'>
        <Container className='py-md-5'>
          <Row data-aos='fade-up'>
            <Col md={4}>
              <div>
                <div className='fs-4'><span className='fw-bold'>ORDI</span> 301</div>
                <p className='lead'>Qualité, Performance, et Prix Imbattables!</p>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h4>Coordonnées</h4>
                <ul className='list-unstyled'>
                  <li><Icon.Envelope /> <Link to='mailto:ericfahendrena29@gmail.com'>ericfahendrena29@gmail.com</Link></li>
                  <li><Icon.Telephone /> <Link to='tel:+261322406077'>+261 32 24 060 77</Link></li>
                  <li><Icon.GeoAlt /> 301 Fianarantsoa, Madagascar</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className='d-flex align-items-center justify-content-center bg-secondary' style={{ height: 200 }}>
                  <p>Map</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
