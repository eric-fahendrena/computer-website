import { createContext } from 'react'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const productsList = [
    {
      id: 'a534h',
      category: 'computer',
      name: 'MacBook Pro 4578s',
      brand: 'MacBook Pro 1456s',
      photo: '/images/MacBook.png',
      price: '1 568 678 Ar',
      specs: {
        processor: 'Intel i7',
        ram: '16GB',
        storage: '258GB SSD'
      }
    },
    {
      id: 'a1267g',
      category: 'computer',
      name: 'HP ProBook 2478s',
      brand: 'HP ProBook 1456s',
      photo: '/images/HP.png',
      price: '256 678 Ar',
      specs: {
        processor: 'Intel Core i5',
        ram: '4GB',
        storage: '256GB SSD'
      }
    },
    {
      id: 'a126767',
      category: 'computer',
      name: 'Acer Pro 2478s',
      brand: 'Acer',
      photo: '/images/DeskTop.png',
      price: '1 956 678 Ar',
      specs: {
        processor: 'Intel Core i7',
        ram: '16GB',
        storage: '359GB SSD'
      }
    },
  ]

  return (
    <ProductContext.Provider value={{ productsList }}>
      { children }
    </ProductContext.Provider>
  )
}
