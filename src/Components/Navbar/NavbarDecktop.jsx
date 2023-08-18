import React from 'react'
import { useState, useEffect } from 'react'
import logo from './img/Logo.svg'
import LogoDark from './img/LogoDark.svg'
import './Navbar.scss'
import Data from '../../Utils/Data'




export default function NavbarDecktop() {
    const [navbar] = useState([
        {
            title: 'О компании',
            status: true,
            active: 'item',
            to: '/about'
        },
        {
            title: 'Карьера',
            status: true,
            active: 'item',
            to: '/carrier'
        },
        {
            title: 'Закупки',
            status: true,
            active: 'item',
            to: '/purchase'
        },
        {
            title: 'Сотрудничество',
            status: true,
            active: 'item',
            to: '/cooperation'
        },
        {
            title: 'Контакты',
            status: true,
            active: 'item',
            to: '/contact'
        },
    ])
    const [navbarLinks ,setNavbarLinks] = useState([])
   
    const [activeIteam, setActiveIteam] = useState('')
    const lang = localStorage.getItem('lang')
    const [visible, setvisible] = useState(true)
    // const [scrollPosition, setScrollPosition] = useState(0);

    function run(){
        Data.getNavbar_Uz()
        .then(res =>{
            setNavbarLinks(res)
        })
    }


    useEffect(()=>{
        function NavbarScroll() {   
            const isTop = window.scrollY === 0;
            setvisible(isTop)
        }
        window.addEventListener('scroll', NavbarScroll)
        return () =>{
        window.removeEventListener('scroll', NavbarScroll);
        }
    },[])
    
    useEffect(()=>{
        run()
    },[])



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


    const Language = (
        <div  className='language'>
            <p  style={{ color: visible ? 'white' : 'black'}}  className='' onClick={() => { language('ru'); click('ru') }}>Ру</p>
            <p  style={{ color: visible ? 'white' : 'black'}}>|</p>
            <p  style={{ color: visible ? 'white' : 'black'}} onClick={() => { language('uz'); click('uz') }}>Uz</p>
        </div>
    )


    const NavbarDecktop = (
        <div className='navbarDesctop'>
            <div className='border_header '  style={{borderBottom: visible ? '1px solid white' : '1px solid grey'}}> 
                <div className='container navbar__row__1'>
                    <div className='navbar__row__1_col '>
                        {visible ? <img src={logo} alt="Logo" /> : <img src={LogoDark} alt="Logo" />}
                        <h4 style={{ color: visible ? 'white' : 'black'}}>Alfa Best</h4>
                    </div>
                    <div className='navbar__row__1_col'>
                        <ul>
                            {
                                (navbar) && navbar.map((iteam, index) => {
                                    return (
                                        <li  style={{ color: visible ? 'white' : 'black'}} key={index}>{iteam.title}</li>
                                    )
                                })
                            }
                        </ul>
                        {Language}

                    </div>

                </div>

            </div>
            <div className='border_bottom' style={{borderBottom: visible ? '1px solid white' : 'none'}}>
                <div className='navbar__row__2 container'>
                    <ul>
                        {
                            (navbarLinks?.length > 0) && navbarLinks.map((iteam, index) => {
                                return (
                                    <li  style={{ color: visible ? 'white' : 'black'}} key={index}>{iteam.text_uz}</li>
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
