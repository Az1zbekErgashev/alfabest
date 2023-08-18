import React, { useEffect } from 'react'
import './Backdrop.scss'
import Logo from './img/Logo.svg'
import AOS from 'aos'
export default function Backdrop() {
  useEffect(()=>{
    AOS.init()
  },)
    const Backdrop = (
        <div className='container backdropText '  data-aos="zoom-in-right" >
                <div className='backdropLogo'><img src={Logo} alt="logo" /> <h4>AlfaBest</h4></div>
                <h2>Agar siz bizning xizmatlarimizga <br /> qiziqsangiz, biz sizni hamkorimiz <br /> sifatida ko'rishdan xursand <br /> bo'lamiz.</h2>
        </div>
    )
  return (
    <div className='container-fluid backdrop'>
    <section></section>
    {Backdrop}
    </div>
  )
}
