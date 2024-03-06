import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import LoggedHeader from '../../LoggedHeader/LoggedHeader'
import Header from '../../Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../rtk/slices/cartSlice'
import { selectAllProducts } from '../../../rtk/slices/productSlice'
import { addToFavourite } from '../../../rtk/slices/favouriteSlice'

const ProductDetails = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts);
    const params = useParams()
    const existId = Number(params.productId)
    const filteredData = products.filter((pro)=>pro.id === existId)
    const currentUser = JSON.parse(localStorage.getItem('currentuserLogged')) || null;
    const userFound = ()=>{
      if(currentUser == null){
        alert("you must log in to your account first")
      }
    }
    const HandleAddToCart = (product)=>{
          dispatch(addToCart(product))
    }
    const HandleAddToFavourite = (product)=>{
      dispatch(addToFavourite(product))
    } 
    const containBothFunctionsAddToCart = (product)=>{
      userFound()
      HandleAddToCart(product)
    }
    const containBothFunctionsAddToFavourite = (product)=>{
      userFound()
      HandleAddToFavourite(product)
    }
  return (
      <div>
        <div>
            {currentUser ? <LoggedHeader />:<Header />}
        </div>
        <div>
            <section className='productDetails'>
                <div>
                        {filteredData.map((product)=>{
                            return(
                                <div className='d-flex w-100 justify-content-evenly mx-auto align-items-center containDetailsItem'>
                                    <img src={product.imageSrc} height={200} width={200} alt={product.title} />
                                    <div className="card d-flex w-50">
                                        <h5 className="card-header">Featured</h5>
                                        <div className="card-body">
                                          <h5 className="card-title">{product.title}</h5>
                                          <p className="card-text">{product.details}</p>
                                          <div className='d-flex justify-content-between'>
                                            <button className="btn btn-primary" onClick={()=> containBothFunctionsAddToCart(product)}>Add To Cart</button>
                                            <button className='btn btn-danger' onClick={()=> containBothFunctionsAddToFavourite(product)}><i class="fa-solid fa-heart"></i></button>
                                          </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })}
                </div>
            </section>
        </div>
      </div>
  )
}

export default ProductDetails
