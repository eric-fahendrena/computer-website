import { Navbar, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
      <header className='fixed-top'>
        <Navbar expand='lg' variant='dark' className='bg-dark'>
          <Container>
            <Navbar.Brand href='/'><span className='fw-bold'>ORDI</span> 301</Navbar.Brand>
            <Navbar.Toggle aria-controls='nav-links' />
            <Navbar.Collapse id='nav-links'>
              <Nav className='ms-auto text-uppercase'>
                <LinkContainer to='/'>
                  <Nav.Link>Accueil</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/products'>
                  <Nav.Link>Produits</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link disabled>À propos</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact'>
                  <Nav.Link disabled>Contact</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
