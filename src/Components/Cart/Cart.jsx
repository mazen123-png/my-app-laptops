import React, { useEffect } from 'react'
import LoggedHeader from '../LoggedHeader/LoggedHeader'
import './Cart.css'
import { Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, deleteFromCart } from '../../rtk/slices/cartSlice'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const navg = useNavigate()
    const cart = useSelector(state => state.cart)
    const ProductsPrice = cart.reduce((acc,product)=>{
        acc += product.price * product.quantity;
        return acc
    },0)
    const shippingPrice = 40
    const TotalPrice = ProductsPrice + shippingPrice
    const dispatch = useDispatch()
    const HandleBuyNowClicked = () =>{
        
        alert("payment completed successfully")
        dispatch(clearCart(cart))
        navg("../")
    }
  return (
    <>
        <LoggedHeader />
        {cart.length > 0 ?         
        <section className='cartSection py-5'>
            <h1 className='text-capitalize text-center'>welcome to your cart</h1>
            <div className="container">
                <Button variant='danger' className='text-capitalize' onClick={()=> dispatch(clearCart(cart))} >empty your cart</Button>
            </div>
            <div className='cartProducts mt-5  mx-auto'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Img</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product)=>{
                            return(
                                <tr key={product.id}>
                                        <th scope="row">{product.id}</th>
                                        <td>{product.title}</td>
                                        <td><Image src={product.imageSrc} alt={product.title} height={70} width={100}/></td>
                                        <td>{product.price}$</td>
                                        <td>{product.quantity}</td>
                                        <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(product))}>delete</Button></td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
            <div className="cartDetails">
                <div>
                    <h5>Products price: {ProductsPrice.toFixed(2)}$</h5>
                    <h5>shipping: {shippingPrice}$</h5>
                    <h5>total price: {TotalPrice}$</h5>
                </div>
                <div className="d-flex justify-content-right">
                <Button variant='success'  onClick={HandleBuyNowClicked}>Make order</Button>
                </div>
            </div>
        </section>:
            <div className='CartEmpty py-5'>
                    <h1 className='text-capitalize text-center'>your cart is empty</h1>
            </div>}
    </>
  )
}

export default Cart
