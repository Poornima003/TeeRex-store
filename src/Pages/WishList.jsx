import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function WishList() {
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
     <Row>
        {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
         <Card.Img height={'200px'} variant="top" src={product?.imageURL} />
         <Card.Body>
           <Card.Title>{product?.name}</Card.Title>
           <Card.Text>
             Amount ₹ {product?.price}
           </Card.Text>
           <div className='d-flex justify-content-between'>
               <Button onClick={()=>dispatch(removeFromWishlist(product.id))}  className='btn btn-light'> <i className='fa-solid fa-trash text-danger'></i></Button>
               <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'> <i className='fa-solid fa-cart-plus text-success'></i></Button>
           </div>
  
         </Card.Body>
       </Card>
       </Col>
          )): <p>Your wishlist is empty!!</p>
        }
     </Row>
    </div>
  )
}

export default WishList