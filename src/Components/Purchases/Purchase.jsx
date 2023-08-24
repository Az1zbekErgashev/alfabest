import React, { useState, useContext, useEffect } from 'react'
import './Purchase.scss'
import LanguageContext from '../useContext/LanguageContext'
import Data from '../../Utils/Data';
import { BaseUrl_Uz } from '../../Utils/FetchData/Fetch';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
export default function Purchase() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const [purchase, setPurchase] = useState([])
    const [img, setImg] = useState()
    function run() {
        Data.getPurchse_UZ()
            .then(res => {
                setPurchase(res)
            })
    }
   
 
    useEffect(() => {
        run()
        purchase?.map(item => {
            const array = JSON.parse(item.images)
            let arr = array
            setImg(arr)
        })
    }, [img])
    useEffect(()=>{
        AOS.init()
    })

    const PurchaseDeck =(
        <div className='container purchase ' data-aos="fade-up"
        data-aos-duration="3000">
                   {purchase && purchase?.map((iteam) => {
                       return (
                           <>
                               <div><h2 className=''>{language === 'uz' ? <>{iteam.title_uz}</> : <>{iteam.title_ru}</>}</h2> <br /> <p>{language === 'uz' ? <>{iteam.text_uz}</> : <>{iteam.text_ru}</>}</p></div>
                               <div>
                                   <Swiper  className='SwiperPurchase'
                                       spaceBetween={50}
                                       slidesPerView={3}
                                       modules={[Autoplay]}
                                       autoplay={{
                                           delay: 2000,
                                           disableOnInteraction: false
                                       }}
                                   >
                                       <div>
                                       {
                                           JSON.parse(iteam.images) && JSON.parse(iteam.images)?.map((image, index) => {
                                               return (
                                                   <SwiperSlide key={index} className='SliderPurchase' >
                                                       <img src={`${BaseUrl_Uz}/storage/${image}`} alt="img" />
                                                   </SwiperSlide>
                                               )
                                           })
                                       }
                                       </div>
   
                                   </Swiper>
                               </div>
                           </>
                       )
                   })}
               </div>
    )
                   const purchaseMob = (
                    <div className='container purchase ' data-aos="fade-up"
                    data-aos-duration="3000">
                               {purchase && purchase?.map((iteam) => {
                                   return (
                                       <>
                                           <div><h2 className=''>{language === 'uz' ? <>{iteam.title_uz}</> : <>{iteam.title_ru}</>}</h2> <br /> <p>{language === 'uz' ? <>{iteam.text_uz}</> : <>{iteam.text_ru}</>}</p></div>
                                           <div>
                                               <Swiper  className='SwiperPurchase'
                                                   spaceBetween={150}
                                                   slidesPerView={1}
                                                   modules={[Autoplay]}
                                                   autoplay={{
                                                       delay: 2000,
                                                       disableOnInteraction: false
                                                   }}
                                               >
                                                   <div>
                                                   {
                                                       JSON.parse(iteam.images) && JSON.parse(iteam.images)?.map((image, index) => {
                                                           return (
                                                               <SwiperSlide key={index} className='SliderPurchase' >
                                                                   <img src={`${BaseUrl_Uz}/storage/${image}`} alt="img" />
                                                               </SwiperSlide>
                                                           )
                                                       })
                                                   }
                                                   </div>
               
                                               </Swiper>
                                           </div>
                                       </>
                                   )
                               })}
                           </div>
                   )
    return (
        <div className='container-fluid overflow-hidden'>
          <div className='d-none d-sm-block'> {PurchaseDeck}</div>
           <div className='d-block d-sm-none'>{purchaseMob}</div>
        </div>
    )
}
