import React from 'react'
import './History.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import { useState, useEffect } from 'react';
import Data from '../../../Utils/Data';
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch';
import AOS from 'aos';
export default function History() {
    const [histry, setHistory] = useState([])


    function run(){
        Data.getHistory_Uz()
        .then(res=>{
            setHistory(res)
        })
    }

    useEffect(()=>{
        run()
    },[])
    useEffect(()=>{
        AOS.init()
    },[])

    const HistoryComponents = (
        <div className='container'>
                        <Swiper
                slidesPerView={1}
                navigation
                spaceBetween={150}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                className='History_slider'
                data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
            >
                {histry
                    ? histry.map((slide, index) => {
                        return (
                            <SwiperSlide>
                                <div  className='slide_img_history'>
                               <div> <img src={ `${BaseUrl_Uz}/storage/${slide.image}`} alt="logo" /></div>
                               <div className='historyText'>
                               <p dangerouslySetInnerHTML={{__html: slide.text_uz}}></p>
                               </div>
                                </div>
                            </SwiperSlide>

                        );
                    })
                    : ''}

            </Swiper>
        </div>
    )
  return (
    <div className='container-fluid bg-white history'>
        {HistoryComponents}
    </div>
  )
}
