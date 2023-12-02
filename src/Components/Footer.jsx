import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%', height:'300px'}} className='d-flex flex-column justify-content-center align-items-center bg-dark text-light mt-5'>
    <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website" style={{width:'400px'}}> 

        <h4>
        <i class="fa-solid fa-shirt fa-flip"></i> TeeRex TShirt
            </h4>
        <h6>Designed and built with all the love in the world by our team with the help of some contributors</h6>
        <h6>Code licensed Luminar, docs CC BY 3.0</h6>
        <p>Currently v1.0.0</p>
        
        </div>
        <div className="links d-flex flex-column">
            <h4>Links</h4>
            <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Products</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/cart'}>Cart</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/wishlist'}>Wish List</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4>Guides</h4>
            <Link style={{textDecoration:'none',color:'white'}} to={'https://getbootstrap.com/'}>React</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'https://getbootstrap.com/'}>React Bootstrap</Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'https://reactrouter.com/en/main'}>Routing</Link>
        </div>
        <div className="contact">
            <h4>Contact Us</h4>
            <div className="sub d-flex">
                <input type="text" className="form-control" placeholder='Enter your email id'/>
                <button className='btn btn-primary ms-3'>Subscribe</button>
            </div>
            <div className="icons fs-4 d-flex justify-content-evenly mt-3">
            <Link style={{textDecoration:'none',color:'white'}} to={'/'}><i className="fa-solid fa-envelope"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/home'}><i className="fa-brands fa-linkedin"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}><i className="fa-brands fa-twitter"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}><i className="fa-brands fa-instagram"></i></Link>
            </div>
        </div>
    </div>
    <p>Copyright &copy; 2023 TeeRex TShirt. Built with React. </p>


</div>
  )
}

export default Footer