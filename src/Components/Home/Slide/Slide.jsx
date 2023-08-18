import React, { useEffect } from 'react'
import { useState } from 'react'
import Data from '../../../Utils/Data';
import './Slide.scss'
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch';
import Logo from './img/Logo.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import {Autoplay} from 'swiper/modules';

export const Slide = () => {
    const [SliderData, setSliderData] = useState([])

    function run() {
        Data.getSlider_Uz()
            .then(res => {
                setSliderData(res)
            })
    }
    useEffect(() => {
        run()
    }, [])
    return (
        <div>
            <Swiper
                slidesPerView={1}
                navigation
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                {SliderData
                    ? SliderData.map((slide, index) => {
                        return (
                            <SwiperSlide>
                                <div  className='slide_img'>
                                <img src={ `${BaseUrl_Uz}/storage/${slide.img}`} alt="logo" />
                                    <div className='Button_group'>
                                        <img src={Logo} alt="logo" />
                                        <h4>{slide.text_uz}</h4>
                                        <button>Batafsil</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        );
                    })
                    : ''}

            </Swiper>
        </div>
    )
}
//

