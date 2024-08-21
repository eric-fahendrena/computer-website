import { useState, useEffect } from 'react'

const CategoryCard = ({ children }) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <>
      <div
        className='h-100 p-3 mb-4 bg-dark text-light rounded'
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
      </div>
    </>
  )
}

export default CategoryCard
