import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Data from '../../../Utils/Data'
import './Aim.scss'
import Logo from './img/LogoDark.svg'
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch'
import AOS from 'aos';
import LanguageContext from '../../useContext/LanguageContext'




export default function Aim() {
    const [aim, setAim] = useState([])
    const [aimCategoriym, setAimCategoriy] = useState([])
    const { language, changeLanguage } = useContext(LanguageContext);


    function run(){
        Data.getAim_Uz()
        .then(res =>{
            setAim(res)
        })
    }

    function aim_category(){
        Data.getAimCategoriy_Uz()
        .then(res =>{
            setAimCategoriy(res)
        })
    }


    useEffect(()=>{
        aim_category()
    },[])

    useEffect(()=>{
        AOS.init()
    },[])

    useEffect(()=>{
        run()
    },[])
    const AimComponent =(
        <div className='row'>
        <div className="col-sm-5 col-12 aimAbout">
            {
                aim && aim?.map((iteam, index)=>{
                    return(
                        <div key={index}  data-aos="fade-right"  data-aos-duration="2000">
                            <img src={Logo} alt="logo" />
                            {language === 'uz' && <h2>{iteam.title_uz}</h2>}
                            {language === 'ru' && <h2>{iteam.title_ru}</h2>}
                            {language === 'uz' && <p>{iteam.text_uz}</p>}
                            {language === 'ru' && <p>{iteam.text_ru}</p>}
                        </div>
                    )   
                }) 
         }
        </div>
            <div className="col-sm-7 aimCategoriym">
          <ul>
          {
                aimCategoriym && aimCategoriym?.map((iteam, index)=>{
                    return(
                        <li key={index} data-aos="fade-left"  data-aos-duration="2000">
                            <h1>0{iteam.id}</h1>
                            {language === 'uz' && <p>{iteam.text_uz}</p>}
                            {language === 'ru' && <p>{iteam.text_ru}</p>}
                            <img src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="" />
                        </li>
                    )
                })
            }
          </ul>
            </div>
           
        </div>
    )

  return (
    <div className='container-fluid aim overflow-hidden'><div className='container'> {AimComponent} </div> </div>
  )
}
