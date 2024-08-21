import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
import AOS from 'aos'

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })
  return (
    <>
      <section className='py-5'>
        <Container className=''>
          <Row className='align-items-center'>
            <Col md={6}>
              <div data-aos='fade-up' className='p-2 mb-4 p-lg-5'>
                <img src="https://fix-phones.fr/wp-content/uploads/2018/12/img_20181027_1334419.jpg" alt="Magasin informatique" className='img-fluid rounded shadow' />
              </div>
            </Col>
            <Col md={6}>
              <div data-aos='fade-up'>
                <div className='fs-5'>À propos de nous</div>
                <h2 className='mb-4'>Magasin Informatique</h2>
                <p className='mb-4'>Depuis notre création, nous nous engageons à offrir des solutions informatiques de qualité pour répondre aux besoins de nos clients. Nous proposons une large gamme de produits, allant des ordinateurs et périphériques aux composants internes et logiciels, afin de garantir des performances optimales et une expérience utilisateur exceptionnelle. Notre objectif est de vous fournir les meilleurs outils pour vous aider à atteindre vos objectifs professionnels et personnels.</p>
                <Link to='/about' className='btn btn-primary'>En savoir plus <Icon.ArrowRight /></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutSection
