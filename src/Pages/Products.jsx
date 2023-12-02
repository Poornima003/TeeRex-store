import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Products() {
    const data =useFetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
    const dispatch = useDispatch()

    // console.log(data);
  return (
    <Row className='ms-5' style={{marginTop:'100px'}}>

        { data?.length>0?data.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
             <Card style={{ width: '18rem' }}>
          <Card.Img height={'200px'} variant="top" src={product?.imageURL} />
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Text>
              Amount ₹ {product?.price}
            </Card.Text>
            <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'> <i className='fa-solid fa-heart text-danger'></i></Button>
                <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'> <i className='fa-solid fa-cart-plus text-success'></i></Button>
            </div>

          </Card.Body>
        </Card>
        </Col>
        )): <p className='text-danger fs-4'>Cart is empty!!</p>
        }
    </Row>
  );
}

export default Products