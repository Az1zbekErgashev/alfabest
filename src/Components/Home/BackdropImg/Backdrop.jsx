import React, { useEffect, useContext } from 'react'
import LanguageContext from '../../useContext/LanguageContext'
import './Backdrop.scss'
import Logo from './img/Logo.svg'
import AOS from 'aos'
export default function Backdrop() {
  const { language, changeLanguage } = useContext(LanguageContext);
  
  useEffect(()=>{
    AOS.init()
  },)
    const Backdrop = (
        <div className='container backdropText '  data-aos="zoom-in-right" >
                <div className='backdropLogo'><img src={Logo} alt="logo" /> <h4>AlfaBest</h4></div>
                {language === 'uz' ? <h2>Agar siz bizning xizmatlarimizga <br /> qiziqsangiz, biz sizni hamkorimiz <br /> sifatida ko'rishdan xursand <br /> bo'lamiz.</h2> : <h2>Удовлетворенность наших <br /> Заказчиков – наша главная цель.</h2> }
        </div>
    )
  return (
    <div className='container-fluid backdrop'>
    <section></section>
    {Backdrop}
    </div>
  )
}
