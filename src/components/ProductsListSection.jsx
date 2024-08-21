import { useEffect, useContext } from 'react'
import { Container , Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import AOS from 'aos'
import { ProductContext } from '../contexts/ProductContext'

const ProductsListSection = () => {
  const { productsList } = useContext(ProductContext)

  useEffect(() => {
    AOS.init({
      duration: 2000
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
        <Container className=''>
          <div data-aos='fade-up' className='text-start mb-4'>
            <h2 className=''>Nos produits</h2>
            <p className='lead'>Decouvrez notre séléction de produits</p>
          </div>
          <Row>
            {productsList.slice(0, 4).map((product, index) => {
              return (
                <Col lg={3} md={6} className='mb-4' key={index}>
                  <div data-aos='fade-up' className='h-100 pe-3'>
                    <ProductCard>
                      <Card.Img 
                        src={ product.photo } 
                        alt={ product.name } 
                        className='mb-3 object-fit-contain'
                        style={{
                          height: 160
                        }} 
                      />
                      <Card.Body>
                        <Card.Title className='mb-3'>{ product.name }</Card.Title>
                        <Card.Subtitle className='text-muted mb-2'>{ product.specs.processor} - { product.specs.ram }</Card.Subtitle>
                        <Card.Text className='fs-5 text-success'>{product.price}</Card.Text>
                        <Link className='btn btn-primary' to={`/products/#${product.id}`}>Voir les Détails</Link>
                      </Card.Body>
                    </ProductCard>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductsListSection
