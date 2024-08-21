import { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import { Card } from 'react-bootstrap'
import { Tabs, Tab } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { ProductContext } from '../contexts/ProductContext'
import ScrollToTop from './ScrollToTop'

const ProductsPage = () => {
  const { productsList } = useContext(ProductContext)
  const [selectedProduct, setSelectedProduct] = useState(productsList[0])
  const productsIds = new Set()

  useEffect(() => {
    if (window.location.hash == '') {
      setSelectedProduct(productsList[0])
    } else {
      setSelectedProduct(productsList.find(product => `#${product.id}` === window.location.hash))
    }
  }, [])

  window.addEventListener('hashchange', () => {
    setSelectedProduct(productsList.find(product => `#${product.id}` === window.location.hash))
  })

  return (
    <>
      <ScrollToTop />
      <section className='py-5 mt-5'>
        <Container className=''>
          <Row className=''>
          <Col lg={4} md={6}>
              <Card 
                id={selectedProduct.id}
                className='shadow bg-dark text-light py-3 mb-5' 
              >
                <Card.Img 
                  src={ selectedProduct.photo }
                  alt='...' 
                  className='mb-3 object-fit-contain'
                  style={{
                    height: 240,
                  }} 
                />
                <Card.Body>
                  <Card.Title className='mb-3'>
                    { selectedProduct.name }
                  </Card.Title>
                  <Card.Subtitle className='text-success mb-2'>
                    { selectedProduct.price }
                  </Card.Subtitle>
                  <Card.Text className='fs-5'>
                    {Object.keys(selectedProduct.specs).map((key, index) => {
                      return (
                        <span key={index}>
                          <span className='fw-bold'>{ key } :</span> { selectedProduct.specs[key] }<br />
                        </span>
                      )
                    })}
                  </Card.Text>
                  {/* <Link className='btn btn-primary' to='/products/#'>Voir les Détails</Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={8} md={6}>
              <Tabs
                defaultActiveKey='all'
                className='mb-3'
                fill
              >
                <Tab eventKey={'all'} title='Tous' className='position-sticky overflow-scroll' style={{ top: 56, height: window.innerHeight }}>
                  <Row>
                    {productsList.map((product, index) => {
                      if (productsIds.has(product.id)) {
                        console.error('A product has already the same id')
                      }

                      productsIds.add(product.id)

                      return (
                        <Col lg={4} className='mb-3' key={index}>
                          <a 
                            className='h-100 pe-3 text-decoration-none' 
                            href={`/products/#${product.id}`}
                            onClick={e => {
                              e.preventDefault()
                              window.location.hash = `#${product.id}`
                            }}
                          >
                            <ProductCard>
                              <Card.Img 
                                src={product.photo} 
                                alt={product.name} 
                                className='mb-3 object-fit-contain'
                                style={{
                                  height: 160
                                }} 
                              />
                              <Card.Body>
                                <Card.Title className='mb-3'>{product.name}</Card.Title>
                                <Card.Subtitle className='text-muted mb-2'>{product.specs.processor}</Card.Subtitle>
                                <Card.Text className='fs-5 text-success'>{ product.price }</Card.Text>
                                {/* <button className='btn btn-primary'>Voir les Détails</button> */}
                              </Card.Body>
                            </ProductCard>
                          </a>
                        </Col>
                      )
                    })}
                  </Row>
                </Tab>
                <Tab eventKey={'computers'} title={
                  <>
                    <Icon.Laptop className='' /> <span className='d-none d-lg-inline'>Ordinateurs</span>
                  </>
                }>
                  <Row>
                    {productsList.filter(product => product.category === 'computer').map((product, index) => {
                      return (
                        <Col lg={4} className='mb-3' key={index}>
                          <a 
                            className='h-100 pe-3 text-decoration-none' 
                            href={`/products/#${product.id}`}
                            onClick={e => {
                              e.preventDefault()
                              window.location.hash = `#${product.id}`
                            }}
                          >
                            <ProductCard>
                              <Card.Img 
                                src={product.photo} 
                                alt={product.name} 
                                className='mb-3 object-fit-contain'
                                style={{
                                  height: 160
                                }} 
                              />
                              <Card.Body>
                                <Card.Title className='mb-3'>{product.name}</Card.Title>
                                <Card.Subtitle className='text-muted mb-2'>{product.specs.processor}</Card.Subtitle>
                                <Card.Text className='fs-5 text-success'>{ product.price }</Card.Text>
                                {/* <button className='btn btn-primary'>Voir les Détails</button> */}
                              </Card.Body>
                            </ProductCard>
                          </a>
                        </Col>
                      )
                    })}
                  </Row>
                </Tab>
                <Tab eventKey={'peripherals'} title={
                  <>
                    <Icon.Keyboard className='' /> <span className='d-none d-lg-inline'>Périphérique</span>
                  </>
                }>
                  Contenu pour Périphérique
                </Tab>
                <Tab eventKey={'accessories'} title={
                  <>
                    <Icon.UsbSymbol className='' /> <span className='d-none d-lg-inline'>Accessoires</span>
                  </>
                }>
                  Contenu pour Accessoires
                </Tab>
                <Tab eventKey={'softwares'} title={
                  <>
                    <Icon.Gear className='' /> <span className='d-none d-lg-inline'>Logiciels</span>
                  </>
                }>
                  Contenu pour Logiciels
                </Tab>
                <Tab eventKey={'internal-components'} title={
                  <>
                    <Icon.Cpu className='' /> <span className='d-none d-lg-inline'>Composants Internes</span>
                  </>
                }>
                  Contenu pour Composants internes
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductsPage
