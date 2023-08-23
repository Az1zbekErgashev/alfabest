import React from 'react'
import { useState, useEffect, useContext } from 'react'
import LanguageContext from '../../useContext/LanguageContext'
import Data from '../../../Utils/Data'
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch'
import LogoDark from './img/LogoDark.svg'
import Logo from './img/Logo.svg'
import './Career.scss'
export default function Career() {
    const [career, setCareer] = useState([])
    const { language, changeLanguage } = useContext(LanguageContext);

    function run() {
        Data.getCareer_UZ()
            .then(res => {
                setCareer(res)
            })
    }
    useEffect(() => {
        run()
    }, [])

    const CareerHeader = (
        <div className='container'>
            <div className="row ">
                <div className="col-12 AboutPage CarrerPage">
                    {
                        career && career?.map((iteam, index) => {
                            return (
                                <div key={index}>
                                    <div style={{ position: 'relative'}} className='CareerImg'>
                                        <img className='CarerImgBack' src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="foto" />
                                        <div className='aboutPageLogo'>
                                            <img className='CareerLogo' src={Logo} alt="logo" />
                                            <p>{language === 'uz' ? <>{iteam.image_title_uz}</> : <>{iteam.image_title_ru}</>}</p>
                                        </div>
                                    </div>
                                    <div className='AboutPageText CareerText row '>
                                    
                                            <div className='col-6 col-sm-4 CareerTextLogo '><img className='CareerLogo' src={LogoDark} alt="logo" /><h2>{language === 'uz' ? <>{iteam.title_uz}</> : <>{iteam.title_ru}</>}</h2></div>
                                            <div className='col-6 col-sm-8 CareerTextUrl'>{language === 'uz' ? <p dangerouslySetInnerHTML={{ __html: iteam.content_uz }} ></p> : <p dangerouslySetInnerHTML={{ __html: iteam.content_ru }}></p>}
                                                 <h1>{language === 'uz' ? 'Bizning bosh ish orinlarimiz (HH sahifasiga havola)' : 'Наши вакансии (ссылка на страницу в HH)'}</h1>
                                                <a href="https://tashkent.hh.uz/employer/9252213">https://tashkent.hh.uz/employer/9252213</a>
                                            </div>
                                      
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    return (
        <div>
            {CareerHeader}
        </div>
    )
}
