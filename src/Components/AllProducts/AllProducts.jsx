import React, { useEffect, useState } from 'react'
import Data from '../../Data/Data'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
const AllProducts = () => {
  const [data,setData] = useState(Data)
  const [countProducts, setCountProducts] = useState(2);
  const handleResize = () => {
    const width = window.innerWidth;
    setCountProducts(width < 640 ? 1 : 2);
  };

  useEffect(()=>{
    handleResize();
  },[])

  window.addEventListener('resize', handleResize);
  return (
    <>
        <Header />
        <div className='ProductsSection mt-5 py-5'  style={{backgroundColor:"#8182c5b4"}}>
            <div >
                <div>
                    <h2 className='text-white text-capitalize text-center my-5'>our all products</h2>
                </div>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={countProducts}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        > 
                        {data.map((product)=>{
                            return(
                                <SwiperSlide className='d-flex align-items-center justify-content-evenly'>
                                        <div className="card p-3 d-flex flx-column align-items-center justify-content-center" style={{width: "18rem",height:"600px"}} key={product.id}>
                                            <img className="card-img-top my-3" width={200} height={200} src={product.imageSrc} alt={product.title} />
                                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                            <h5 className="card-title text-center my-3">{product.title.slice(0,30)}</h5>
                                            <p className="card-text my-2">{product.details.slice(0,111)}...</p>
                                            <h5 className='my-3'>price: {product.price}$</h5>
                                            <NavLink to={`/product/${product.id}`} className="btn btn-success"><i class="fa-solid fa-eye"></i></NavLink>
                                            </div>
                                        </div>
                                </SwiperSlide>
                                    
                                )
                        })}
                        </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}

export default AllProducts

