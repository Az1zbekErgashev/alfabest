import React from 'react'
import Data from '../../Utils/Data'
import './Footer.scss'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Home/Aim/img/Logo.svg'
import LanguageContext from '../useContext/LanguageContext'
export default function Footer() {
  const [footer, setFooter] = useState([])
  const [drop, setDrop] = useState(false)
  const { language, changeLanguage } = useContext(LanguageContext);


  function dropdown() {
    if (drop === true) setDrop(false)
    else setDrop(true)
  }

      const Footer = (
        <div className='container footer_row'>
        <div className=' d-none d-sm-flex  col-12 col-sm-2 FooterLogo'><img src={Logo} alt="logo" />
        <h2>AlfaBest</h2></div>
        <div className=' d-flex d-sm-none  col-12 col-sm-2 FooterLogo'><img src='https://i.ibb.co/s3LQhgb/Vector-1.png' alt="logo" />
        <h2>AlfaBest</h2></div>



        <div className="dropdown_ul mt-3 d-sm-none">
          <ul >
            <li className='text-light d-sm-none  d-flex w-100 dropdown_iteam_active_footer' onClick={() => dropdown()}>{language === 'uz' ? <p>Xizmatlar</p> : <p>Услуги</p> } <h3>{drop ? '-' : '+'}</h3></li>
            {drop && <ul>
              <li className='text-start text-secondary my-2'>       <Link className='link'>{language === 'uz' ? <li>Xizmat ko'rsatish va maishiy xizmat ko'rsatish</li> : <li>Сервисное и бытовое обслуживание</li>}</Link></li>
              <li className='text-start text-secondary my-2'> <Link className='link'>{language === 'uz' ? <li>Korporativ ovqatlanish</li> : <li>Корпоративное питание</li>}</Link></li>
              <li className='text-start text-secondary my-2'> <Link className='link'>{language === 'uz' ? <li>Transport va yo'lovchi tashish</li> : <li>Транспортные и пассажирские перевозки</li>}</Link></li>
              <li className='text-start text-secondary my-2'><Link className='link'>{language === 'uz' ? <li>Muhandislik va texnik ekspluatatsiya</li> : <li>Инженерно-техническая эксплуатация</li>}</Link></li>
            </ul>}
            <li className='dropdown_iteam_footer text-light text-start my-1 fs-5 fw-bold'>{language === 'uz' ? <>Hamkorlik</> : <>Сотрудничество</>}</li>
            <Link className='link' to='/about'><li className=' text-light text-start my-1 fs-5 fw-bold '>{language === 'uz' ? <>Kompaniya haqida</> : <> О компании</>}</li></Link>
            <li className='text-light text-start my-1 fs-5 fw-bold'>{language === 'uz' ? <>Xarid qilish</> : <>Закупки</>}</li>
            <li className='text-light text-start my-1 fs-5 fw-bold'>{language === 'uz' ? <>Karyera</> : <>Карьера</>}</li>
          </ul>
        </div>
        <div className=' d-block d-sm-none container offcanvasFooter_icon' >
        <div><p  className='text-start my-2 fs-5 fw-bold'>{language === 'uz' ?  <>Bizni telegramda kuzating</> : <>Следите в телеграмме</>}</p></div>
        <div className='offcanvasFooterIcon'>
          <a href=""><i className='bi bi-telegram'></i></a>
          <a href=""><i className='bi bi-instagram'></i></a>
          <a href=""><i className='bi bi-telephone-fill'> +998335917636</i></a>
        </div>
      </div>
      <div className='footer_end container d-sm-none'>
                <div className='footer_end_dlex'><Link className='link'>{language === 'uz' ? <>Yordam</> : <>Помощь</>}</Link>   <Link className='link'>{language === 'uz' ? <>Jamoaning bir qismi bo'ling</> : <>Стань частью команды</>}</Link></div>
                <div><img src="https://i.ibb.co/3W2SWzW/Group.png" alt="logo" /></div>
      </div>


        <div className='d-none d-sm-block'>
   
          <ul>
            <Link className='link'>{language === 'uz' ? <li>Kompaniya haqida</li> : <li>О компании</li>}</Link>
            <Link className='link'>{language === 'uz' ? <li>Karyera</li> : <li>Карьера</li>}</Link>
            <Link className='link'>{language === 'uz' ? <li>Xarid qilish</li> : <li>Закупки</li>}</Link>
            <Link className='link'>{language === 'uz' ? <li>Hamkorlik</li> : <li>Сотрудничество</li>}</Link>
            <Link className='link'>{language === 'uz' ? <li>Kontaktlar</li> : <li>Контакты</li>}</Link>
          </ul>
        </div>
        <div className='d-none d-sm-block'>
          <ul>
           <Link className='link'>{language === 'uz' ? <li>Muhandislik va texnik ekspluatatsiya</li> : <li>Инженерно-техническая эксплуатация</li>}</Link>
            <Link className='link'>{language === 'uz' ? <li>Xizmat ko'rsatish va maishiy xizmat ko'rsatish</li> : <li>Сервисное и бытовое обслуживание</li>}</Link>
            <Link className='link'>{language === 'uz' ? <li>Korporativ ovqatlanish</li> : <li>Корпоративное питание</li>}</Link>
            <Link className='link'>{language === 'uz' ? <li>Transport va yo'lovchi tashish</li> : <li>Транспортные и пассажирские перевозки</li>}</Link>
          </ul>
        </div>
        <div className='d-none d-sm-flex footer_logo_decktop container'>
                <div><img src="https://i.ibb.co/3W2SWzW/Group.png" alt="logo" /></div>
                <div>
                  <Link className='link'>{language === 'uz' ? <>Yordam</> : <>Помощь</>}</Link>
                  <Link className='link'>{language === 'uz' ? <>Jamoaning bir qismi bo'ling</> : <>Стань частью команды</>}</Link>
                </div>
        </div>
        </div>
      )
  return (
    <div className='footer'>
          {Footer}
    </div>
  )
}
