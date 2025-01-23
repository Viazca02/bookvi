import './Slide.css'
import 'swiper/css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Branding from './Imagenes/Branding.png'
import creacioncontent from './Imagenes/creacioncontent.png'
import uxui from './Imagenes/uxui.png'
import paginaweb from './Imagenes/paginaweb.png'
import 'swiper/css/pagination';




function Slide() {
	return (
	<div style={{margin:"3rem auto"}}>

		<Swiper
	        slidesPerView={3}
	        spaceBetween={90}
	        pagination={{
	          clickable: true,
	        }}
	        modules={[Pagination]}
	        className="mySwiper">
	     
	        <SwiperSlide><img src={Branding} alt="" /></SwiperSlide>
	        <SwiperSlide><img src={creacioncontent} alt="" /></SwiperSlide>
	        <SwiperSlide><img src={uxui} alt="" /></SwiperSlide>
	        <SwiperSlide><img src={paginaweb} alt="" /></SwiperSlide>
	       
	      </Swiper>




	</div>
	)

}




export default Slide