import React from 'react'
import Data from '../../Utils/Data'
import './Footer.scss'
import { useState, useEffect, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../Home/Aim/img/Logo.svg'
import LanguageContext from '../useContext/LanguageContext'
export default function Footer() {
  const [footer, setFooter] = useState([])
  const [drop, setDrop] = useState(false)
  const { language, changeLanguage } = useContext(LanguageContext);
  const [showPhoto, setShowPhoto] = useState(false);
  const [pages, setPages] = useState('')
  const location = useNavigate()

  function dropdown() {
    if (drop === true) setDrop(false)
    else setDrop(true)
  }
  useEffect(() => {
    let cur = [...pages]
    const timer = setTimeout(() => {
      location(cur);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pages]);
  useEffect(() => {
    setTimeout(() => {
      setShowPhoto(true);

    }, 0)
  }, [pages])

  useEffect(() => {
    setTimeout(() => {
      setShowPhoto(false);

    }, 3000)
  }, [showPhoto])
  const ShowPages = (
    <>
      {
        showPhoto && <div className='showPages'>
          <div>
            <img src={Logo} alt="logo" />
            <h1>AlfaBest</h1>
          </div>
        </div>
      }
    </>
  )
  function setUrlPage(i){

  }


  const Footer = (
    <div className='container footer_row'>
      <div className=' d-none d-sm-flex  col-12 col-sm-2 FooterLogo'><img src={Logo} alt="logo" />
        <h2>AlfaBest</h2></div>
      <div className=' d-flex d-sm-none  col-12 col-sm-2 FooterLogo'><img src='https://i.ibb.co/s3LQhgb/Vector-1.png' alt="logo" />
        <h2>AlfaBest</h2></div>



      <div className="dropdown_ul mt-3 d-sm-none">
        <ul >
          <li className='text-light d-sm-none  d-flex w-100 dropdown_iteam_active_footer' onClick={() => dropdown()}>{language === 'uz' ? <p>Xizmatlar</p> : <p>Услуги</p>} <h3>{drop ? '-' : '+'}</h3></li>
          {drop && <ul>
            <li className='text-start text-secondary my-2'>       <NavLink onClick={()=>setUrlPage('/household')} to='/household'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link" : " text-white link"
              }   >{language === 'uz' ? <li>Xizmat ko'rsatish va maishiy xizmat ko'rsatish</li> : <li>Сервисное и бытовое обслуживание</li>}</NavLink></li>
            <li className='text-start text-secondary my-2'> <NavLink onClick={()=>setUrlPage('/catering')} to='/catering'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link active" : " text-white link"
              }  >{language === 'uz' ? <li>Korporativ ovqatlanish</li> : <li>Корпоративное питание</li>}</NavLink></li>
            <li className='text-start text-secondary my-2'> <NavLink onClick={()=>setUrlPage('/transportation')} to='/transportation'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link" : " text-white link"
              }  >{language === 'uz' ? <li>Transport va yo'lovchi tashish</li> : <li>Транспортные и пассажирские перевозки</li>}</NavLink></li>
            <li className='text-start text-secondary my-2'><NavLink onClick={()=>setUrlPage('/engineering')} to='/engineering'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "link" : " text-white link"
              }  >{language === 'uz' ? <li>Muhandislik va texnik ekspluatatsiya</li> : <li>Инженерно-техническая эксплуатация</li>}</NavLink></li>
          </ul>}

          <NavLink onClick={()=>setUrlPage('/about')} to='/about'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : " text-white link"
            } ><li className=' text-light text-start my-1 fs-5 fw-bold '>{language === 'uz' ? <>Kompaniya haqida</> : <> О компании</>}</li></NavLink>

          <NavLink onClick={()=>setUrlPage('/carrier')} to='/carrier'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : " text-white link"
            }><li className='text-light text-start my-1 fs-5 fw-bold'>{language === 'uz' ? <>Karyera</> : <>Карьера</>}</li></NavLink>
          <NavLink onClick={()=>setUrlPage('/cooperation')} to='/cooperation'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link "
            }>

            <li className='dropdown_iteam_footer text-light text-start my-1 fs-5 fw-bold'>{language === 'uz' ? <>Hamkorlik</> : <>Сотрудничество</>}</li>
          </NavLink>
          <NavLink onClick={()=>setUrlPage('/purchase')} to='/purchase'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : " text-white link"
            }><li className='text-light text-start my-1 fs-5 fw-bold'>{language === 'uz' ? <>Xarid qilish</> : <>Закупки</>}</li></NavLink>
          <NavLink onClick={()=>setUrlPage('/contact')} to='/contact'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : " text-white link"
            }><li className='text-light text-start my-1 fs-5 fw-bold'>{language === 'uz' ? <>Karyera</> : <>Карьера</>}</li></NavLink>
        </ul>
      </div>
      <div className=' d-block d-sm-none container offcanvasFooter_icon' >
        <div><p className='text-start my-2 fs-5 fw-bold'>{language === 'uz' ? <>Bizni telegramda kuzating</> : <>Следите в телеграмме</>}</p></div>
        <div className='offcanvasFooterIcon'>
          <a href=""><i className='bi bi-telegram'></i></a>
          <a href=""><i className='bi bi-instagram'></i></a>
          <a href=""><i className='bi bi-telephone-fill'> +998335917636</i></a>
        </div>
      </div>
      <div className='footer_end container d-sm-none'>
        <div className='footer_end_dlex'><NavLink onClick={()=>setUrlPage('/contact')} to='/contact' className='link'>{language === 'uz' ? <>Yordam</> : <>Помощь</>}</NavLink>   <NavLink to='/cooperation' className='link'>{language === 'uz' ? <>Jamoaning bir qismi bo'ling</> : <>Стань частью команды</>}</NavLink></div>
        <div><img src="https://i.ibb.co/3W2SWzW/Group.png" alt="logo" /></div>
      </div>





      <div className='d-none d-sm-block'>

        <ul>
          <NavLink onClick={()=>setUrlPage('/about')} to='/about'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Kompaniya haqida</li> : <li>О компании</li>}</NavLink>
          <NavLink onClick={()=>setUrlPage('/carrier')} to='/carrier'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Karyera</li> : <li>Карьера</li>}</NavLink>
          <NavLink onClick={()=>setUrlPage('/purchase')} to='/purchase'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Xarid qilish</li> : <li>Закупки</li>}</NavLink>
          <NavLink onClick={()=>setUrlPage('/cooperation')} to='/cooperation'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Hamkorlik</li> : <li>Сотрудничество</li>}</NavLink>
          <NavLink onClick={()=>setUrlPage('/contact')} to='/contact'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Kontaktlar</li> : <li>Контакты</li>}</NavLink>
        </ul>
      </div>
      <div className='d-none d-sm-block'>
        <ul>
          <NavLink onClick={()=>setUrlPage('/engineering')} to='/engineering'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Muhandislik va texnik ekspluatatsiya</li> : <li>Инженерно-техническая эксплуатация</li>}</NavLink>
          <NavLink onClick={()=>setUrlPage('/household')} to='/household'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Xizmat ko'rsatish va maishiy xizmat ko'rsatish</li> : <li>Сервисное и бытовое обслуживание</li>}</NavLink>
          <NavLink onClick={()=>setUrlPage('/catering')} to='/catering'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Korporativ ovqatlanish</li> : <li>Корпоративное питание</li>}</NavLink>
          <NavLink onClick={()=>setUrlPage('/transportation')} to='/transportation'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <li>Transport va yo'lovchi tashish</li> : <li>Транспортные и пассажирские перевозки</li>}</NavLink>
        </ul>
      </div>
      <div className='d-none d-sm-flex footer_logo_decktop container'>
        <div><img src="https://i.ibb.co/3W2SWzW/Group.png" alt="logo" /></div>
        <div>
          <NavLink onClick={()=>setUrlPage('/contact')} to='/contact'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <>Yordam</> : <>Помощь</>}</NavLink>
          <NavLink onClick={()=>setUrlPage('/cooperation')} to='/cooperation'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "link" : " text-white link"
            }>{language === 'uz' ? <>Jamoaning bir qismi bo'ling</> : <>Стань частью команды</>}</NavLink>
        </div>
      </div>
    </div>
  )
  return (
    <div className='footer'>
      {Footer}
      {ShowPages}
    </div>
  )
}
