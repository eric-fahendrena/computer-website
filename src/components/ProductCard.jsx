import { useState } from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ children }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <Card 
        className='shadow h-100'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
        style={{
          transition: 'all .5s ease',
          transform: `translateY(${hovered ? '-8px' : '0px'})`
        }}
      >
        { children }
      </Card>
    </>
  )
}

export default ProductCard
