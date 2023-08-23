import React, { useEffect, useState, useContext } from 'react'
import Data from '../../Utils/Data';
import LanguageContext from '../useContext/LanguageContext';
import './PhotoTeam.scss'
import { BaseUrl_Uz } from '../../Utils/FetchData/Fetch';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from './PhotoGalrey/img/LogoDark.svg'
import 'swiper/css';
import AOS from 'aos';
export default function PhotoTeam() {
    const [team, setTeam] = useState([])
    const { language, changeLanguage } = useContext(LanguageContext);



    function run() {
        Data.getTeam_uz()
            .then(res => {
                setTeam(res)
            })
    }
    useEffect(() => {
        run()
    }, [])
    useEffect(()=>{
        AOS.init()
        
    })
    const SwiperDeck = (
        <Swiper className='SwiperAboutCard d-none d-sm-block'
        spaceBetween={0}
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
    >
        <div>
            {
                team && team?.map((image, index) => {
                    return (
                        <SwiperSlide key={index} className='SliderPurchase' >
                            <div className='c'>
                                <div><img src={`${BaseUrl_Uz}/storage/${image.photo}`} alt="img" /></div>
                                <div className='my-2 fw-bold'>{language === 'uz' ? <>{image.full_name}</> : <>{image.full_name}</>}</div>
                                <div className='fw-bold'>{language === 'uz' ? <>{image.position_uz}</> : <>{image.position_ru}</>}</div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </div>

    </Swiper>
    )
    const SwiperMob = (
        <Swiper className='SwiperAboutCard d-block d-sm-none '
            spaceBetween={250}
            slidesPerView={2}
            modules={[Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
        >
            <div>
                {
                    team && team?.map((image, index) => {
                        return (
                            <SwiperSlide key={index} className='SliderPurchase' >
                                <div className='c'>
                                    <div><img src={`${BaseUrl_Uz}/storage/${image.photo}`} alt="img" /></div>
                                    <div className='my-2 fw-bold'>{language === 'uz' ? <>{image.full_name}</> : <>{image.full_name}</>}</div>
                                    <div className='fw-bold'>{language === 'uz' ? <>{image.position_uz}</> : <>{image.position_ru}</>}</div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </div>

        </Swiper>
    )
    return (
        <div className='container-fluid overflow-hidden'>
            <div className='container ' data-aos="fade-up"
     data-aos-duration="3000">
            <div className='text-start mt-4'><img src={Logo} alt="logo" />
            <h2 className='fw-bolder mt-3'>{language === 'uz' ? 'Bizning jamoa' : 'Наша команда'}</h2></div>
            {SwiperDeck}
            {SwiperMob}
            </div>
        </div>
    )
}
