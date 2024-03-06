import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoggedHeader from '../LoggedHeader/LoggedHeader'
import { deleteFromFavourite } from '../../rtk/slices/favouriteSlice'
import { addToCart } from '../../rtk/slices/cartSlice'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
const Favourite = () => {
    const favourite = useSelector(state => state.favourite)
    const dispatch = useDispatch()
  return (
    <>
        <LoggedHeader />
        {favourite.length > 0? 
        <section className='py-5' style={{marginTop:"50px"}}>
            <h1 className='text-capitalize text-center mb-4'>welcome to your favourite products</h1>
            <Container>
                <Row>
                {favourite.map((product)=>{
                        return(
                            <Col>
                                <div className="card p-3 d-flex flx-column align-items-center justify-content-center" style={{width: "18rem",height:"600px"}} key={product.id}>
                                    <img className="card-img-top my-3" width={200} height={200} src={product.imageSrc} alt={product.title} />
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                        <h5 className="card-title text-center my-3">{product.title.slice(0,30)}</h5>
                                        <p className="card-text my-2">{product.details.slice(0,111)}...</p>
                                        <h5 className='my-3'>price: {product.price}$</h5>
                                        <div className="d-flex align-items-center justify-content-evenly w-100 mt-3">
                                            <NavLink to={`/product/${product.id}`} className="btn btn-success fs-5"><i class="fa-solid fa-eye"></i></NavLink>
                                            <button onClick={()=>dispatch(addToCart(product))} className="btn btn-primary fs-5"><i class="fa-solid fa-cart-plus"></i></button>
                                            <button onClick={()=>dispatch(deleteFromFavourite(product))} className="btn btn-danger fs-5" style={{position: "absolute",top: "0",
    right: "10px",
    zIndex: "100"}}><i class="fa-solid fa-xmark"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
                
        </section> : 
        <div className='mt-5 py-5'>
            <h1 className='text-capitalize text-center'>your cart is empty</h1>
        </div>}
    </>
  )
}

export default Favourite
