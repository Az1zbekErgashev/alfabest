import React, { useState, useEffect} from 'react'
import './Navbar.scss'
import NavbarDecktop from './NavbarDecktop'
import NavbarMobile from './NavbarMobile'

export default function Navbar() {
    const [visible, setvisible] = useState(true)


    useEffect(()=>{
        function NavbarScroll() {   
            const isTop = window.scrollY === 0;
            setvisible(isTop)
        }
        window.addEventListener('scroll', NavbarScroll)
        return () =>{
        window.removeEventListener('scroll', NavbarScroll);
        }
    })

    return (
        <div className='Navbar sdsds'  style={{background: visible ? 'none' : 'white', boxShadow: visible ? 'none' : '0px 0px 10px black'}}>
            <NavbarDecktop/>
            <NavbarMobile/>
        </div>
    )
}
