import Banner from './Banner'
import CategoriesSection from './CategoriesSection'
import AboutSection from './AboutSection'
import ProductsListSection from './ProductsListSection'
import TestimonialsSection from './TestimonialsSection'
import ScrollToTop from './ScrollToTop'

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <CategoriesSection />
      <AboutSection />
      <ProductsListSection />
      <TestimonialsSection />
    </>
  )
}

export default HomePage
