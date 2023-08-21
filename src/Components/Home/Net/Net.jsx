import React, {useContext} from 'react'
import './Net.scss'
import Gif from './img/noNet.gif'
import LanguageContext from '../../useContext/LanguageContext'
import { Link } from 'react-router-dom'
export default function Net() {
  const { language, changeLanguage } = useContext(LanguageContext);
  function selectLang(uz){
    changeLanguage(uz)
      window.location.reload()
  }
  return (
    <div className='container-fluid net'>
    <img src={Gif} alt="gif" />
        <div>
        <h1>Bunday sahifa topilmadi</h1>
        <p>siz izlayotgan sahifa mavjud emas!</p> 
        <Link to="/" className='link'><button onClick={()=>selectLang('uz')} >Bosh sahifaa</button></Link>
        </div>
    </div>
  )
}
