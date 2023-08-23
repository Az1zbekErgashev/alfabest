import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Logo from './img/LogoDark.svg'
import './Navbar.scss'
import LanguageContext from '../useContext/LanguageContext'
import LogoMob from './img/LogoMob.svg'
import { Link } from 'react-router-dom'
export default function NavbarMobile() {
  const [activeIteam, setActiveIteam] = useState('')
  const [drop, setDrop] = useState(false)
  const [reloadTriggeredUz, setReloadTriggeredUz] = useState(false);
  const [reloadTriggeredRu, setReloadTriggeredRu] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  function languagee(i) {
    changeLanguage(i)
    if (i === 'ru') {
      if(!reloadTriggeredRu){
          window.location.reload()
          setReloadTriggeredRu(true)
          setReloadTriggeredUz(false)
      }
  }
  else if (i === 'uz') {
      if(!reloadTriggeredUz){
          window.location.reload()
          setReloadTriggeredUz(true)
          setReloadTriggeredRu(false)
      }
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
      <p className='' onClick={() => { languagee('ru'); click('ru') }}>Ру</p>
      <p  >|</p>
      <p onClick={() => { languagee('uz'); click('uz') }}>Uz</p>
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
            <li className='dropdown_iteam_active' onClick={() => dropdown()}> <p>{language === 'uz' ? <>Xizmatlar</> : <>Услуги</>}</p> <h3>{drop ? '-' : '+'}</h3></li>
            {drop && <ul>
              <li className='text-start text-secondary my-2'>{language === 'uz' ? <>Xizmat ko'rsatish va maishiy xizmat ko'rsatish</> : <>Сервисное и бытовое обслуживание</>}</li>
              <li className='text-start text-secondary my-2'>{language === 'uz' ? <>Korporativ ovqatlanish</> : <>Корпоративное питание</>}</li>
              <li className='text-start text-secondary my-2'>{language === 'uz' ? <>Transport va yo'lovchi tashish</> : <>Транспортные и пассажирские перевозки</>}</li>
              <li className='text-start text-secondary my-2'>{language === 'uz' ? <>Muhandislik va texnik ekspluatatsiya</> :<>Инженерно-техническая эксплуатация</>}</li>
            </ul>}
            <Link to='/package'><li className=' text-start my-2 fs-5 fw-bold'>{language === 'uz' ? <>Hamkorlik</> : <>Сотрудничество</>}</li></Link>
            <Link className='link' to='/about'><li className=' text-dark text-start my-2 fs-5 fw-bold'>{language === 'uz' ? <>Kompaniya haqida</> : <> О компании</>}</li></Link>
            <Link to='/purchase'><li className='text-start my-2 fs-5 fw-bold'>{language === 'uz' ? <>Xarid qilish</> : <>Закупки</>}</li></Link>
            <Link to='/carrier' className='link text-dark'><li className='text-start my-2 fs-5 fw-bold'>{language === 'uz' ? <>Karyera</> : <>Карьера</>}</li></Link>
          </ul>
        </div>
      </div>
      <div className='offcanvaBack'></div>
      <div className='container offcanvasFooter' >
        <div><p  className='text-start my-2 fs-5 fw-bold'>{language === 'uz' ?<>Bizni telegramda kuzating</> : <>Следите в телеграмме</>}</p></div>
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
        <Link className='link' to='/'>
        <img src={Logo} alt="foto" />
        <h3 style={{color: 'black'}}>AlfaBest</h3>
        </Link>
      </div>
      <div className='buttonGroupMobile'>
        {Language}
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className='bi bi-list-nested'></i></button>
        {Offcanvas}
      </div>
    </div>
  )
}
