import React, { useEffect, useState } from 'react'
import './AboutCompany.scss'
import Data from '../../../Utils/Data'
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch'
import Logo from './img/LogoDark.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AboutCompany() {
  const [about, setAbout] = useState([])
  const [info, setInfo] = useState([
    {
      icon: 'bi bi-pin-map-fill',
      num: '+320.000kv.m',
      text: 'Obektlarni obodonlashtirish sohalari'
    },
    {
      icon: 'bi bi-map-fill',
      num: '+70.000kv.m',
      text: 'Tozalash inshootlari joylari'
    },
    {
      icon: 'bi bi-bag-check-fill',
      num: '+1500',
      text: 'Ovqatlanish'
    },
    {
      icon: 'bi bi-person-fill',
      num: '+600',
      text: 'Hodimlar'
    },
  ])



  function run() {
    Data.getCompany_Uz()
      .then(res => {
        setAbout(res)
      })

  }
  useEffect(() => {
    AOS.init();
  })
  useEffect(() => {
    run()

  }, [])

  const About_Row = (
    <div className='row AboutCompany'>
      <div className="col-12 col-sm-5 AboutCompanyImg "  data-aos="zoom-out-right"  data-aos-duration="5000" >
        {(about) && about.map((about, index) => {
          return (
            <div key={index}>
              <img src={`${BaseUrl_Uz}/storage/${about.home_image}`} alt="" />
            </div>
          )
        })}
      </div>
      <div className="col-12 col-sm-7 AboutCompanyText "  data-aos="zoom-out-left" data-aos-duration="5000">
        {about && about.map((about, index) => {
          return (
            <div key={index}>
              <img src={Logo} alt="logo" />
              <h2>{about.home_title_uz}</h2>
              <div
                dangerouslySetInnerHTML={
                  { __html: about.text_uz }
                }
              >
              </div>
              <button>Batafsil</button>
            </div>
          )
        })}
      </div>
    </div>
  )

  const AboutInfo = (
    <div className='AboutInfo'>
      <div className='AboutInfoRow' data-aos="fade-up"
        data-aos-duration="2000">

        {info.length > 0 && info.map((iteam, index) => {
          return (
            <div key={index}>
              <div className='aboutInfo_Icon'><i className={iteam.icon}></i> {iteam.num}</div>
              <div className='aboutInfo_Text'>{iteam.text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )


  return (
    <div className='container-fluid  bg-white'>
      <div className='container'>
        {About_Row}
        <div className='container'>
        {AboutInfo}
        </div>
      </div>
    </div>
  )
}