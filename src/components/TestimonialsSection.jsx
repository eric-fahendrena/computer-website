import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const TestimonialsSection = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
    // centerMode: true
  }

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })

  return (
    <>
      <section className='py-5 overflow-x-hidden'>
        <Container className='py-5'>
          <header data-aos='fade-up' className='mb-5 text-start'>
            <h2 className='mb-3'>Ce Que Nos Clients Disent</h2>
            <p className='lead'>Votre satisfaction est notre priorité. Découvrez ce que nos clients pensent de nos produits et services.</p>
          </header>
          <Row data-aos='fade-up' className='justify-content-center'>
            <Col lg={7} className=''>
                <Slider {...settings}>
                  <div>
                    <div className='p-2'>
                      <div className='rounded p-3'>
                        <figure>
                          <header className='mb-3'>
                            <div className='fs-5 fw-bold'>Elon Musk</div>
                            <div className='text-warning'>
                              <Icon.StarFill /> <Icon.StarFill /> <Icon.StarFill /> <Icon.StarFill /> <Icon.Star />
                            </div>
                          </header>
                          <blockquote className='blockquote mb-4'>
                            <p>J'ai acheté un ordinateur portable ici, et je suis très satisfait. Le personnel m'a bien conseillé, et le produit est de qualité. Je recommande ce magasin à 100% !</p>
                          </blockquote>
                        </figure>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className='p-2'>
                      <div className='rounded p-3'>
                        <figure>
                          <header className='mb-3'>
                            <div className='fs-5 fw-bold'>Mark Zuckerberg</div>
                            <div className='text-warning'>
                              <Icon.StarFill /> <Icon.StarFill /> <Icon.StarFill /> <Icon.StarFill /> <Icon.Star />
                            </div>
                          </header>
                          <blockquote className='blockquote mb-4'>
                            <p>J'avais besoin d'un ordinateur en urgence, et ce magasin a su répondre à mes attentes. En moins d'une heure, je suis reparti avec un appareil prêt à l'emploi. Je suis très impressionné par leur rapidité et leur efficacité.</p>
                          </blockquote>
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='p-2'>
                      <div className='rounded p-3'>
                        <figure>
                          <header className='mb-3'>
                            <div className='fs-5 fw-bold'>Steve Jobs</div>
                            <div className='text-warning'>
                              <Icon.StarFill /> <Icon.StarFill /> <Icon.StarFill /> <Icon.StarFill /> <Icon.Star />
                            </div>
                          </header>
                          <blockquote className='blockquote mb-4'>
                            <p>Le personnel a pris le temps de comprendre mes besoins avant de me recommander le produit idéal. Grâce à eux, j'ai trouvé l'ordinateur parfait pour mon travail. Merci pour ces conseils avisés !</p>
                          </blockquote>
                        </figure>
                      </div>
                    </div>
                  </div>
                </Slider>
            </Col>
            <Col lg={5}>
              <div className='p'>
                <div className='shadow px-3 py-4 border rounded'>
                  <h4 className='fs-2 mb-3'>Envie de vivre la même expérience ?</h4>
                  <p className='lead mb-4'>Découvrez notre catalogue complet et trouvez les produits qui répondront à vos besoins !</p>
                  <Link className='btn btn-primary me-2 mb-2'>Explorer Nos Produits</Link>
                  <Link className='btn btn-outline-primary mb-2'>Contactez-nous Maintenant</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TestimonialsSection
