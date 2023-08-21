import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useContext } from 'react';
import 'swiper/css';
import AOS from 'aos';
import Data from '../../../Utils/Data';
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch';
import './PhotoIteam.scss'
import LanguageContext from '../../useContext/LanguageContext';
import Logo from './img/LogoDark.svg'
import {Autoplay} from 'swiper/modules';
export default function PhotoIteam() {
    const [Photo, setPhoto] = useState([])
    const { language, changeLanguage } = useContext(LanguageContext);

    function run() {
        Data.getPhotoGalerey()
            .then(res => {
                setPhoto(res)
            })
    }
    useEffect(() => {
        run()
    },[])
    useEffect(() => {
        AOS.init()
    },)

    const SwiperMobile =(
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        modules={[Autoplay]}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
    >
        {
            Photo && Photo?.map((iteam, index)=>{
                return(
                    <SwiperSlide key={index} className='SlidephotoGalerey' >
                    <img  src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="img" />
                    </SwiperSlide>
                )
            })
        }
        
    </Swiper>
    )
    const PhotoGalerey = (
        <div className='container PhotoGalerey'>
        <div className='PhotoGalereyLogo'>
            <img src={Logo} alt="logo" />
            <h2>{language === 'uz' ? 'Fotogalereya' : 'Фотогалерея'}</h2>
        </div>
           <div className='d-none d-sm-block' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
           <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
            >
                {
                    Photo && Photo?.map((iteam, index)=>{
                        return(
                            <SwiperSlide key={index} className='SlidephotoGalerey' >
                            <img  src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="img" />
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
           </div>
           <div className='d-block d-sm-none' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"> 
                {SwiperMobile}
           </div>
        </div>
    )

    return (
        <div>
            {PhotoGalerey}
        </div>
    )
}
