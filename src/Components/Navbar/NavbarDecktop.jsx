import React from 'react'
import { useState, useEffect, useContext } from 'react'
import logo from './img/Logo.svg'
import LogoDark from './img/LogoDark.svg'
import './Navbar.scss'
import Data from '../../Utils/Data'
import { Link, Outlet } from 'react-router-dom'
import LanguageContext from '../useContext/LanguageContext'
import { useLocation } from 'react-router-dom';
export default function NavbarDecktop() {
    const [navbar] = useState([
        {
            title_ru: 'О компании',
            title: 'Kompaniya haqida',
            status: true,
            active: 'item',
            to: '/about'
        },
        {
            title_ru: 'Карьера',
            title: 'Karyera',
            status: true,
            active: 'item',
            to: '/carrier'
        },
        {
            title_ru: 'Закупки',
            title: 'Xarid qilish',
            status: true,
            active: 'item',
            to: '/purchase'
        },
        {
            title_ru: 'Сотрудничество',
            title: 'Hamkorlik',
            status: true,
            active: 'item',
            to: '/cooperation'
        },
        {
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
    const [, forceUpdate] = useState();
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
        function NavabarPage(){
            setvisible(true);
        }
        window.addEventListener('scroll', NavbarScroll)
        window.addEventListener('popstate', NavabarPage);

        return () => {
            window.removeEventListener('scroll', NavbarScroll);
            window.removeEventListener('popstate', NavabarPage);
        }
    }, [])
    useEffect(()=>{
        if(history.pathname !== '/'){
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
            console.log(reloadTriggeredRu);
            if (reloadTriggeredRu === 0) {
                setReloadTriggeredRu(1)
                window.location.reload()

            }
        }
        else if (i === 'uz') {
            localStorage.setItem('lang', ('uz'))

            if (reloadTriggeredUz === false) {
                console.log(reloadTriggeredUz);
                setReloadTriggeredUz(true)
                window.location.reload()
                setReloadTriggeredRu(false)
                forceUpdate((prev) => !prev)
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

    const Language = (
        <div className='language'>
            <p style={{ color: visible ? 'white' : 'black' }} className={`${(active === 'iteam1' ? 'active' : 'activeNo')}`} onClick={() => { languagee('ru'); click('ru'); langIteam('iteam1') }}>Ру</p>
            <p style={{ color: visible ? 'white' : 'black' }}>|</p>
            <p style={{ color: visible ? 'white' : 'black' }} className={`${(active === 'iteam2' ? 'active' : 'activeNo')}`} onClick={() => { languagee('uz'); click('uz'); langIteam('iteam2') }}>Uz</p>
        </div>
    )


    const NavbarDecktop = (
        <div className='navbarDesctop'>
            <div className='border_header ' style={{ borderBottom: visible ? '1px solid white' : '1px solid grey' }}>
                <div className='container navbar__row__1'>
                    <div className='navbar__row__1_col '>
                        {visible ? <Link className='link' to='/'><img src={logo} alt="Logo" /></Link> : <Link to='/'> <img src={LogoDark} alt="Logo" /> </Link>}
                        <h4 style={{ color: visible ? 'white' : 'black' }}>Alfa Best</h4>
                    </div>
                    <div className='navbar__row__1_col'>
                        <ul>
                            {
                                (navbar) && navbar?.map((iteam, index) => {
                                    return (
                                        <Link className='link' to={iteam.to}><li style={{ color: visible ? 'white' : 'black' }} key={index}>{language === 'uz' ? <>{iteam.title}</> : <>{iteam.title_ru}</>}</li></Link>
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
                                        {language === 'uz' && <li style={{ color: visible ? 'white' : 'black' }} key={index}>{iteam.text_uz}</li>}
                                        {language === 'ru' && <li style={{ color: visible ? 'white' : 'black' }} key={index}>{iteam.text_ru}</li>}
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
