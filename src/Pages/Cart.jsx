import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'

function Cart() {
  const cartArray = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()

  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2)
      )
    }else{
      setTotal(0)
    }
  }

const handleCart = ()=>{
  dispatch(emptyCart())
  alert("Order Successfully placed!!")
  navigate('/')
}

  useEffect(()=>{
      getCartTotal()
  },[cartArray])
  return (
    <div className='container' style={{marginTop:'100px'}}>
        {
          cartArray.length>0?
          
          <div className="row mt-5">
            <div className="col-lg-7">
              <table className='table shadow border'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((Product,index)=>(
                        <tr key={index}>
                          <td> {index+1} </td>
                          <td> {Product.name} </td>
                          <td> <img width={'100px'} height={'100px'} src={Product.imageURL} alt="" /> </td>
                          <td>₹ {Product.price} </td>
                          <td> <button onClick={()=>dispatch(removeFromCart(Product.id))} className='btn'> <i className='fa-solid fa-trash text-danger fa-2x'></i> </button> </td>
                        </tr>
                      ))
                    }
                  </tbody>
              </table>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">

            <div className="border mt-5 p-3 rounded shadow">
              <h1 className='text-primary'>Cart Summary</h1>
                <h4 className='mt-3'>Total Products: <span> {cartArray.length} </span></h4>
                <h4>Total: <span className='text-danger fw-bolder fs-2'>  ₹ {total} </span> </h4>
                <div className='d-grid mt-5'>
                  <button onClick={handleCart} className='btn btn-success mt-5 rounded'>Check Out</button>
                </div>
              </div>
            </div>
          </div>
          :
          <div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'250px'} src="https://media3.giphy.com/media/fscIxPfKjPyShbwUS5/200w.gif" alt="" />
            <h3 className='fw-bolder text-primary'>Your cart is empty!!</h3>
            <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to='/'>Back to Home</Link>
          </div>
        }
    </div>
  )
}

export default Cart