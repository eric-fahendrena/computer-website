import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import CategoryCard from './CategoryCard'
import AOS from 'aos'

const CategoriesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })

  return (
    <>
      <section 
        className='py-5'
        style={{
          backgroundColor: '#12345622'
        }}
      >
        <Container className='py-5'>
          <Row className='align-items-stretch'>
            <Col md={4} className='mb-4'>
              <div data-aos='fade-up' className='h-100'>
                <CategoryCard>
                  <div className='h1 mb-3'><Icon.Laptop /></div>
                  <h4>Ordinateurs</h4>
                  <p>Découvrez notre sélection d'ordinateurs de bureau et portables pour tous les besoins.</p>
                </CategoryCard>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div data-aos='fade-up' className='h-100'>
                <CategoryCard>
                  <div className='h1 mb-3'><Icon.Keyboard /></div>
                  <h4>Périphériques</h4>
                  <p>Claviers, souris, écrans et plus pour compléter votre installation.</p>
                </CategoryCard>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div data-aos='fade-up' className='h-100'>
                <CategoryCard>
                  <div className='h1 mb-3'><Icon.UsbSymbol /></div>
                  <h4>Accessoires</h4>
                  <p>Câbles, housses et adaptateurs pour améliorer votre expérience informatique.</p>
                </CategoryCard>
              </div>
            </Col>

            <Col md={4} className='mb-4'>
              <div data-aos='fade-up' className='h-100'>
                <CategoryCard>
                  <div className='h1 mb-3'><Icon.Gear /></div>
                  <h4>Logiciels</h4>
                  <p>Trouvez les meilleurs logiciels pour votre productivité et sécurité.</p>
                </CategoryCard>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div data-aos='fade-up' className='h-100'>
                <CategoryCard>
                  <div className='h1 mb-3'><Icon.Cpu /></div>
                  <h4>Composants Internes</h4>
                  <p>Processeurs, cartes mères et plus pour optimiser vos performances.</p>
                </CategoryCard>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div data-aos='fade-up' className='h-100'>
                <CategoryCard>
                  <div className='h1 mb-3'><Icon.Router /></div>
                  <h4>Réseaux</h4>
                  <p>Équipez votre réseau avec des routeurs, modems et câbles de qualité.</p>
                </CategoryCard>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CategoriesSection
