import React from 'react'
import { useState, useEffect } from 'react'
import Data from '../../../Utils/Data'
import './Aim.scss'
import Logo from './img/LogoDark.svg'
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch'
import AOS from 'aos';





export default function Aim() {
    const [aim, setAim] = useState([])
    const [aimCategoriym, setAimCategoriy] = useState([])



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
                aim?.length >0 && aim.map((iteam, index)=>{
                    return(
                        <div  data-aos="fade-right"  data-aos-duration="2000">
                            <img src={Logo} alt="logo" />
                            <h2>{iteam.title_uz}</h2>
                            <p>{iteam.text_uz}</p>
                        </div>
                    )   
                }) 
            }
        </div>
            <div className="col-sm-7 aimCategoriym">
          <ul>
          {
                aimCategoriym?.length > 0 && aimCategoriym.map((iteam, index)=>{
                    return(
                        <li data-aos="fade-left"  data-aos-duration="2000">
                            <h1>0{iteam.id}</h1>
                            <p>{iteam.text_uz}</p>
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
    <div className='container-fluid aim'><div className='container'> {AimComponent} </div> </div>
  )
}
