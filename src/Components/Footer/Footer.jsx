import React from 'react'
import Data from '../../Utils/Data'
import './Footer.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Home/Aim/img/Logo.svg'

export default function Footer() {
  const [footer, setFooter] = useState([])
  const [drop, setDrop] = useState(false)

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



        <div className="dropdown_ul mt-3">
          <ul>
            <li className='text-light  d-flex w-100 dropdown_iteam_active_footer' onClick={() => dropdown()}><p>услуги</p>  <h3>{drop ? '-' : '+'}</h3></li>
            {drop && <ul>
              <li className='text-start text-secondary my-2'>Сервисное и бытовое обслуживание</li>
              <li className='text-start text-secondary my-2'>Корпоративное питание</li>
              <li className='text-start text-secondary my-2'>Транспортные перевозки</li>
              <li className='text-start text-secondary my-2'>Инженерно-техническая эксплуатация</li>
            </ul>}
            <li className='dropdown_iteam_footer text-light text-start my-1 fs-5 fw-bold'>Карьера</li>
            <li className='text-light text-start my-1 fs-5 fw-bold'>Закупки</li>
            <li className='text-light text-start my-1 fs-5 fw-bold'>Карьера</li>
          </ul>
        </div>
        <div className=' d-block d-sm-none container offcanvasFooter_icon' >
        <div><p  className='text-start my-2 fs-5 fw-bold'>Следите в телеграмме</p></div>
        <div className='offcanvasFooterIcon'>
          <a href=""><i className='bi bi-telegram'></i></a>
          <a href=""><i className='bi bi-instagram'></i></a>
          <a href=""><i className='bi bi-telephone-fill'> +998335917636</i></a>
        </div>
      </div>
      <div className='footer_end container'>
                <div className='footer_end_dlex'><p>Помощь</p> <p>Стань частью команды</p></div>
                <div><img src="https://i.ibb.co/3W2SWzW/Group.png" alt="logo" /></div>
      </div>


        <div className='d-none d-sm-block'>
   
          <ul>
            <Link className='link'><li>Kompaniya haqida</li></Link>
            <Link className='link'><li>Karyera</li></Link>
            <Link className='link'><li>Xarid qilish</li></Link>
            <Link className='link'><li>Hamkorlik</li></Link>
            <Link className='link'><li>Kontaktlar</li></Link>
          </ul>
        </div>
        <div className='d-none d-sm-block'>
          <ul>
           <Link className='link'><li>Muhandislik va texnik ekspluatatsiya</li></Link>
            <Link className='link'><li>Xizmat ko'rsatish va maishiy xizmat ko'rsatish</li></Link>
            <Link className='link'><li>Korporativ ovqatlanish</li></Link>
            <Link className='link'><li>Transport va yo'lovchi tashish</li></Link>
          </ul>
        </div>
        </div>
      )
  return (
    <div className='footer'>
          {Footer}
    </div>
  )
}
