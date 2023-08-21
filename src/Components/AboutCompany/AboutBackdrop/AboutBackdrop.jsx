import React from 'react'
import { useState, useEffect, useContext } from 'react'
import LanguageContext from '../../useContext/LanguageContext';
import Logo from './img/Logo.svg'
import AOS from 'aos';
import '../../Home/BackdropImg/Backdrop.scss'
export default function AboutBackdrop() {
    const { language, changeLanguage } = useContext(LanguageContext);



    useEffect(() => {
        AOS.init()
    })

    const BAckdrop = (
        <div className='container backdropText ' data-aos="zoom-in-right" >
            <div className='backdropLogo'><img src={Logo} alt="logo" /> <h4>AlfaBest</h4></div>
            {language === 'uz' ? <h2>Biz 2014 yildan beri<br /> hamkorlarimiz bilan <br /> birgamiz.</h2> : <h2>Мы с нашими партнерами <br /> с 2014 года.</h2>}    
        </div>
    )

    return (
        <div className='backdrop container-fluid'>
         <section></section>
            {BAckdrop}
        </div>
    )
}
