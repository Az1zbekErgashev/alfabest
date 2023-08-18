import React from 'react'
import { useState, useEffect } from 'react'
import Logo from './img/LogoDark.svg'
import './Navbar.scss'
import LogoMob from './img/LogoMob.svg'
export default function NavbarMobile() {
  const [activeIteam, setActiveIteam] = useState('')
  const [drop, setDrop] = useState(false)
  function language(i) {
    if (i === 'ru') {
      localStorage.setItem('lang', ('ru'))
    }
    else if (i === 'uz') {
      localStorage.setItem('lang', ('uz'))
    }
  }


  function click(i) {
    setActiveIteam(i)
  }
  function dropdown() {
    if (drop === true) setDrop(false)
    else setDrop(true)
  }
  const Language = (
    <div className='language'>
      <p className='' onClick={() => { language('ru'); click('ru') }}>Ру</p>
      <p  >|</p>
      <p onClick={() => { language('uz'); click('uz') }}>Uz</p>
    </div>
  )

  const Offcanvas = (
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <div style={{ display: 'flex', alignItems: 'center' }}><img style={{ marginRight: '10px' }} className="offcanvas-title" id="offcanvasExampleLabel" src={LogoMob} alt="log" /> <h5>AlfaBest</h5></div>
        <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i className='bi bi-list-nested'></i></button>
      </div>
      <div className="offcanvas-bodyy  container">
        <div className="dropdown_ul mt-3">
          <ul>
            <li className='dropdown_iteam_active' onClick={() => dropdown()}> <p>услуги</p> <h3>{drop ? '-' : '+'}</h3></li>
            {drop && <ul>
              <li className='text-start text-secondary my-2'>Сервисное и бытовое обслуживание</li>
              <li className='text-start text-secondary my-2'>Корпоративное питание</li>
              <li className='text-start text-secondary my-2'>Транспортные перевозки</li>
              <li className='text-start text-secondary my-2'>Инженерно-техническая эксплуатация</li>
            </ul>}
            <li className=' text-start my-2 fs-5 fw-bold'>Карьера</li>
            <li className='text-start my-2 fs-5 fw-bold'>Закупки</li>
            <li className='text-start my-2 fs-5 fw-bold'>Карьера</li>
          </ul>
        </div>
      </div>
      <div className='offcanvaBack'></div>
      <div className='container offcanvasFooter' >
        <div><p  className='text-start my-2 fs-5 fw-bold'>Следите в телеграмме</p></div>
        <div className='offcanvasFooterIcon'>
          <a href=""><i className='bi bi-telegram'></i></a>
          <a href=""><i className='bi bi-instagram'></i></a>
          <a href=""><i className='bi bi-telephone-fill'> +998335917636</i></a>
        </div>
      </div>
    </div>
  )
  return (
    <div className='navbarMobile'>
      <div>
        <img src={Logo} alt="foto" />
        <h3>AlfaBest</h3>
      </div>
      <div className='buttonGroupMobile'>
        {Language}
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className='bi bi-list-nested'></i></button>
        {Offcanvas}
      </div>
    </div>
  )
}
