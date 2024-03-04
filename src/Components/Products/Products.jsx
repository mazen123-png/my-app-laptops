import React, { useEffect, useState } from 'react'
import './Products.css'
import Data from '../../Data/Data'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Products = () => {
  const [data,setData] = useState(Data)
  const [countProducts, setCountProducts] = useState(2);
  const handleResize = () => {
    const width = window.innerWidth;
    setCountProducts(width < 640 ? 1 : 2);
  };

  // Initial screen size check
  useEffect(()=>{
    handleResize();
  },[])

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);
  return (
    <div className='ProductsSection'>
      <div>
        <div>
            <h2 className='text-capitalize text-center my-5'>our products</h2>
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
                  {data.map((ele)=>{
                      return(
                        <SwiperSlide className='d-flex align-items-center justify-content-evenly'>
                                <div className="card p-3 d-flex flx-column align-items-center justify-content-center" style={{width: "18rem",height:"600px"}} key={ele.id}>
                                    <img className="card-img-top my-3" width={200} height={200} src={ele.imageSrc} alt="Card image cap" />
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                      <h5 className="card-title text-center my-3">{ele.title.slice(0,30)}</h5>
                                      <p className="card-text my-2">{ele.details.slice(0,111)}...</p>
                                      <h5 className='my-3'>price: {ele.price}$</h5>
                                      <a href="#" className="btn btn-success"><i class="fa-solid fa-eye"></i></a>
                                    </div>
                                </div>
                        </SwiperSlide>
                              
                        )
                  })}
                </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Products
