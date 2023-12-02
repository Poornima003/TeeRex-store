import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
   const wishlist = useSelector((state)=>state.wishlistReducer)
   const cart = useSelector((state)=>state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-dark position-fixed top-0 w-100 mb-5" style={{zIndex:'1'}}>
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none', color:'white', fontWeight:'bold'}}> <i className="fa-solid fa-shirt fa-flip"></i>  TeeRex TShirt store</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border' ><Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>Cart<Badge className='ms-2' bg="secondary">{cart.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border ms-2'><Link to={'/wishlist'} className='d-flex align-items-center'  style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>Wishlist<Badge className='ms-2' bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header