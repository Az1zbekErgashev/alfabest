import React from 'react'
import './History.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import { useState, useEffect, useContext } from 'react';
import Data from '../../../Utils/Data';
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch';
import LanguageContext from '../../useContext/LanguageContext';
import AOS from 'aos'; 



export default function History() {
    const [histry, setHistory] = useState([])
    const { language, changeLanguage } = useContext(LanguageContext);


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
                    ? histry?.map((slide, index) => {
                        return (
                            <SwiperSlide>
                                <div  className='slide_img_history'>
                               <div> <img src={ `${BaseUrl_Uz}/storage/${slide.image}`} alt="logo" /></div>
                               <div className='historyText'>
                               {language === 'uz' && <p dangerouslySetInnerHTML={{__html: slide.text_uz}}></p>}
                               {language === 'ru' && <p dangerouslySetInnerHTML={{__html: slide.text_ru}}></p>}
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
