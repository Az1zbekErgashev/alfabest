import React from 'react'
import { useEffect, useState, useContext } from 'react'
import Data from '../../../Utils/Data';
import AOS from 'aos';
import './AimAbout.scss'
import Logo from './img/LogoDark.svg'
import LanguageContext from '../../useContext/LanguageContext';
import { NavLink } from 'react-router-dom';
export default function AimAbout() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [aim, setAim] = useState([])

  function run() {
    Data.getAimAbout_Uz()
      .then(res => {
        setAim(res)
      })
  }




  useEffect(() => {
    AOS.init()
  },)

  useEffect(() => {
    run()
  }, [])




  const AboutAim = (
    <div className='container AimAbout row'>
      <div className='row'>
        <div className='AimAbout_row1 col-12 col-sm-6 ' data-aos="fade-up-right" data-aos-duration="4000">
          <div className='AboutAim_header  '>
            <img src={Logo} alt="logo" />
            <h2>{language === 'uz' ? 'Bizning vazifamiz' : 'Наша цель'}</h2>
          </div>
          <div className='AboutAim_body '>
            {aim && aim?.map((iteam,) => {
              return (
                <>
                  {language === 'uz' && <p  dangerouslySetInnerHTML={{ __html: iteam.text_uz }}></p>}
                  {language === 'ru' && <p  dangerouslySetInnerHTML={{ __html: iteam.text_ru }}></p>}
                </>
              )
            })}
          </div>
        </div>
        <div className='AimAbout_row2 col-12 col-sm-6' data-aos="fade-up-left" data-aos-duration="4000">
          <h1>{language === 'uz' ? 'ALFABEST ONE MILLIY MIQYOSDAGI XIZMAT' : 'АЛЬФАБЕСТ ЕДИНЫЙ СЕРВИС НАЦИОНАЛЬНОГО МАСШТАБА'}</h1>
          <img src="https://i.ibb.co/SKg66zv/Vector.png" alt="logo" />
        </div>
      </div>
    </div>
  )


  const AboitAimCategoriy = (
    <div className='container'>
      <div className="row AboutAimCategoriy" >
        <div className="col-12 col-sm-6 AboutAimCategoriy__Card" data-aos="zoom-out"  data-aos-duration="4000" >
          <h2>{language === 'uz' ? <>Muhandislik va texnik ekspluatatsiya</> : <>Инженерно-техническая эксплуатация</>}</h2>
          <img src="http://alfabest.napaautomotive.uz/storage/home-services/December2022/f71IshXZ61Lnm6d3EzY7.png" alt="logo" />
          <NavLink  to='/engineering'   >{language === 'uz' ? <>Batafsil</> : <>Подробнее</>} <i className='bi bi-arrow-right'></i></NavLink>
        </div>
        <div className="col-12 col-sm-6 AboutAimCategoriy__Card" data-aos="zoom-out"  data-aos-duration="4000">
          <h2>{language === 'uz' ? <>Xizmat ko'rsatish va maishiy xizmat ko'rsatish</> : <>Сервисное и бытовое обслуживание</>}</h2>
          <img src="http://alfabest.napaautomotive.uz/storage/home-services/December2022/r4RPpooRZClcio58JV1e.png" alt="" />
          <NavLink  to='/household'   >{language === 'uz' ? <>Batafsil</> : <>Подробнее</>} <i className='bi bi-arrow-right'></i></NavLink>

          
        </div>
        <div className="col-12 col-sm-6 AboutAimCategoriy__Card" data-aos="zoom-out"  data-aos-duration="4000">
          <h2>{language === 'uz' ? <>Korporativ ovqatlanish</> : <>Корпоративное питание</>}</h2>
          <img src="http://alfabest.napaautomotive.uz/storage/home-services/December2022/BVWU6Q07YnlwqAOFy2R8.png" alt="" />
          <NavLink  to='/catering'   >{language === 'uz' ? <>Batafsil</> : <>Подробнее</>} <i className='bi bi-arrow-right'></i></NavLink>

          
        </div>
        <div className="col-12 col-sm-6 AboutAimCategoriy__Card" data-aos="zoom-out"  data-aos-duration="4000">
          <h2>{language === 'uz' ? <>Transport va yo'lovchi tashish</> : <>Транспортные и пассажирские перевозки</>}</h2>
          <img src="http://alfabest.napaautomotive.uz/storage/home-services/May2023/tkopmFk4l6qK2CuCBDLm.png" alt="" />
          <NavLink  to='/transportation'   >{language === 'uz' ? <>Batafsil</> : <>Подробнее</>} <i className='bi bi-arrow-right'></i></NavLink>
        </div>
      </div>
    </div>
  )
  return (
    <div className='container-fluid'>
      {AboutAim}
      {AboitAimCategoriy}
    </div>
  )
}
