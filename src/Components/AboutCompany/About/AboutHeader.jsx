import React from 'react'
import { useEffect, useState , useContext} from 'react'
import Data from '../../../Utils/Data'
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch'
import './AboutHeader.scss'
import LanguageContext from '../../useContext/LanguageContext'
import LogoDark from './img/LogoDark.svg'
export default function AboutHeader(props) {


  const [about, setAbout] = useState([])
  const { language, changeLanguage } = useContext(LanguageContext);
  function run(){
    Data.getCompany_Uz()
    .then(res =>{
      setAbout(res)
    })
  }
  useEffect(()=>{
    run()
  },[])
   console.log(props);
  const About = (
    <div className='container'>
      <div className="row ">
        <div className="col-12 AboutPage">
          {
            about && about.map((iteam, index)=>{
              return(
                <div key={index}>
                    <div style={{position: 'relative'}}>
                      <img src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="foto" />
                      <div className='aboutPageLogo'>
                        <img src={LogoDark} alt="logo" />
                        <p>{language === 'uz' ? <>Kompaniya Profili</> : <>Профиль компании</>}</p>
                      </div>
                    </div>
                    <div className='AboutPageText'>
                    {language === 'uz' ? <p  dangerouslySetInnerHTML={{__html: iteam.text_uz}} ></p> : <p dangerouslySetInnerHTML={{__html: iteam.text_ru}}></p> }
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
    <div className='container-fluid'>
        {About}
    </div>
  )
}
