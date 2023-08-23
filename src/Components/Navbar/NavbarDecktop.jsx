import React from 'react'
import { useState, useEffect, useContext } from 'react'
import logo from './img/Logo.svg'
import LogoDark from './img/LogoDark.svg'
import './Navbar.scss'
import Data from '../../Utils/Data'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import LanguageContext from '../useContext/LanguageContext'
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
export default function NavbarDecktop() {
    const [navbar] = useState([
        {
            id: 1,
            title_ru: 'О компании',
            title: 'Kompaniya haqida',
            status: true,
            active: 'item',
            to: '/about'
        },
        {
            id: 2,
            title_ru: 'Карьера',
            title: 'Karyera',
            status: true,
            active: 'item',
            to: '/carrier'
        },
        {
            id: 3,
            title_ru: 'Закупки',
            title: 'Xarid qilish',
            status: true,
            active: 'item',
            to: '/purchase'
        },
        {
            id: 4,
            title_ru: 'Сотрудничество',
            title: 'Hamkorlik',
            status: true,
            active: 'item',
            to: '/cooperation'
        },
        {
            id: 5,
            title_ru: 'Контакты',
            title: 'Kontaktlar',
            status: true,
            active: 'item',
            to: '/contact'
        },
    ])
    const [navbarLinks, setNavbarLinks] = useState([])
    const { language, changeLanguage } = useContext(LanguageContext);
    const [activeIteam, setActiveIteam] = useState('')
    const [visible, setvisible] = useState(true)
    const [reloadTriggeredUz, setReloadTriggeredUz] = useState(false);
    const [reloadTriggeredRu, setReloadTriggeredRu] = useState(0);
    const [active, setActive] = useState(localStorage.getItem('active'))
    const [activee, setActivee] = useState('')
    const navigate = useNavigate()
    const history = useLocation();
    function run() {
        Data.getNavbar_Uz()
            .then(res => {
                setNavbarLinks(res)
            })
    }

    useEffect(() => {
        function NavbarScroll() {
            const isTop = window.scrollY === 0;
            setvisible(isTop)
        }
        function NavabarPage() {
            setvisible(true);
        }
        window.addEventListener('scroll', NavbarScroll)
        window.addEventListener('popstate', NavabarPage);

        return () => {
            window.removeEventListener('scroll', NavbarScroll);
            window.removeEventListener('popstate', NavabarPage);
        }
    }, [])
    useEffect(() => {
        if (history.pathname !== '/') {
            setvisible(false);
        }
    })

    useEffect(() => {
        run()
    }, [])


    function languagee(i) {
        changeLanguage(i)
        if (i === 'ru') {
            localStorage.setItem('lang', ('ru'))
            if (reloadTriggeredRu === 0) {
                window.location.reload()
                // window.location.href = `/${language}/${history.pathname}`
            }
        }
        else if (i === 'uz') {
            localStorage.setItem('lang', ('uz'))

            if (reloadTriggeredUz === false) {

                window.location.reload()
                // window.location.href = `/${language}/${history.pathname}`   
            }
        }

    }
    function langIteam(i) {
        let cur = i
        localStorage.setItem('active', (cur))
        setActive(i)
    }


    function click(i) {
        changeLanguage(i)
        setActiveIteam(i)
    }
    function activeNav(i) {
        setActivee(i)
    }


    const Language = (
        <div className='language'>
            <button style={{ color: visible ? 'white' : 'black' }} disabled={language === 'ru'} className={`${(active === 'iteam1' ? 'active' : 'activeNo')}`} onClick={() => { languagee('ru'); click('ru'); langIteam('iteam1') }}>Ру</button>
            <p style={{ color: visible ? 'white' : 'black' }}>|</p>
            <button style={{ color: visible ? 'white' : 'black' }} disabled={language === 'uz'} className={`${(active === 'iteam2' ? 'active' : 'activeNo')}`} onClick={() => { languagee('uz'); click('uz'); langIteam('iteam2') }}>Uz</button>
        </div>
    )


    const NavbarDecktop = (
        <div className='navbarDesctop'>
            <div className='border_header ' style={{ borderBottom: visible ? '1px solid white' : '1px solid grey' }}>
                <div className='container navbar__row__1'>
                    <div className='navbar__row__1_col '>
                        {visible ? <Link className='link' to='/'><img src={logo} alt="Logo" /></Link> : <Link to={`/`}> <img src={LogoDark} alt="Logo" /> </Link>}
                        <h4 style={{ color: visible ? 'white' : 'black' }}>Alfa Best</h4>
                    </div>
                    <div className='navbar__row__1_col'>
                        <ul>
                            {
                                (navbar) && navbar?.map((iteam, index) => {
                                    return (
                                        <Link className='link' to={`${iteam.to}`} ><li onClick={() => { activeNav(iteam.id) }} className={`${(activee === iteam.id) ? 'fw-bold' : ''}`} style={{ color: visible ? 'white' : 'black' }} key={index}>{language === 'uz' ? <>{iteam.title}</> : <>{iteam.title_ru}</>}</li></Link>
                                    )
                                })
                            }
                        </ul>
                        {Language}

                    </div>

                </div>

            </div>
            <div className='border_bottom' style={{ borderBottom: visible ? '1px solid white' : 'none' }}>
                <div className='navbar__row__2 container'>
                    <ul>
                        {
                            (navbarLinks) && navbarLinks?.map((iteam, index) => {
                                return (
                                    <>
                                        {language === 'uz' && <li onClick={() => { activeNav(iteam.id) }} style={{ color: visible ? 'white' : 'black' }} className={`${(activee === iteam.id) ? 'fw-bold' : ''}`} key={index}>{iteam.text_uz}</li>}
                                        {language === 'ru' && <li onClick={() => { activeNav(iteam.id) }} style={{ color: visible ? 'white' : 'black' }} key={index}>{iteam.text_ru}</li>}
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
    return (
        <>
            {NavbarDecktop}
        </>
    )
}
