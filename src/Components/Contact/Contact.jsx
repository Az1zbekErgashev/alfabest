import React, { useState, useContext, useEffect } from 'react'
import './Contact.scss'
import { BaseUrl_Uz } from '../../Utils/FetchData/Fetch';
import Data from '../../Utils/Data';
import LanguageContext from '../useContext/LanguageContext'
import AlertDialog from '../Alert';
import AOS from 'aos';
export default function Contact() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [contact, setConatct] = useState([])
  const [ phone ,setPhone] = useState([])
  const [inputValueNumber, setInputValueNumber] = useState('');
  const [inputValueName, setInputValueName] = useState('');
  const [showErrorNam, setShowErrorNam] = useState(false);
  const [showErrorNum, setShowErrorNum] = useState(false);
  const [useEfectShow, setUseEfectShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const patternName = /[^A-Za-zА-Яа-я\s]/g
  const patternNumber = /[^0-9+]/g
  const regex = /^[a-zA-Z\s]+$/;
  const regex2 = /^[0-9+]+$/;

  function run() {
    Data.getContact()
      .then(res => {
        setConatct(res)
      })
  }
  function CobtactPhone(){
    Data.getContactPhone()
      .then(res => {
        setPhone(res)
      })
  }
  function handleValName(event) {
    setInputValueName(event.target.value)
  }
  function handleValNum(event) {
    setInputValueNumber(event.target.value)
  }
  function PostCoopertion() {
    if (inputValueName.length === 0) {
      setShowErrorNam(true)
      setUseEfectShow(true)
    }
    else {
      setShowErrorNam(false)
    }
    if (inputValueNumber.length === 0) {
      setShowErrorNum(true)
      setUseEfectShow(true)
    }
    else {
      setShowErrorNum(false)
    }



  }
  function submitInput() {
    if (inputValueName.length !== 0 && regex.test(inputValueName) && inputClassNum.length > 7 && regex2.test(inputValueNumber)) {
      setOpen(true)
      let data = {
        service_id: 1,
        full_name: inputValueName,
        phone: inputValueNumber
      }
      // let arr =  JSON.stringify(data)

      
    }
  }
  const inputClassName = showErrorNam ? 'DisableInput' : 'ActiveInput';
  const inputClassNum = showErrorNum ? 'DisableInput' : 'ActiveInput';
  useEffect(() => {
    if (useEfectShow) {
      if (inputValueName.length === 0) {
        setShowErrorNam(true)
      }
      else {
        setShowErrorNam(false)
      }

    }
  })
  useEffect(() => {
    if (useEfectShow) {
      if (inputValueNumber.length === 0) {
        setShowErrorNum(true)
      }
      else {
        setShowErrorNum(false)
      }
    }
  })

  useEffect(() => {
    CobtactPhone()
    run()
  }, [])
  useEffect(()=>{
    AOS.init()
  })
  return (
    <div className='container'>
      <div className="row  Contact">
        {contact && contact?.map((iteam) => {
          return (
            <>
              <div className="col-12 col-sm-6 ContactInput">
                <div className='ContactInput_text'>
                <h2>{language === 'uz' ? <>{iteam.title_uz}</> : <>{iteam.title_ru}</>}</h2>
                {language === 'uz' ? <p dangerouslySetInnerHTML={{ __html: iteam.text_uz }}></p> : <p dangerouslySetInnerHTML={{ __html: iteam.text_ru }}></p>}
                </div>
                <div>
                  <div className='col-12 col-sm-6 inputPost'>
                    <label htmlFor="">{language === 'uz' ? 'Toʻliq ismingizni kiriting' : 'Введите свое полное имя'}</label>
                    <input className={inputClassName} pattern="[A-Za-zА-Яа-я\s]+" type="text" placeholder={`${showErrorNum ? 'Поле объязательно для ввода !' : 'Фамилия , Имя'}  `} value={inputValueName} onChange={handleValName} />
                    {patternName.test(inputValueName) && <p>{language === 'uz' ? <>Faqat hariflar kiriting !</> : <> Введите только буквы</>}</p>}
                  </div>

                  <div className='col-12 col-sm-6 inputPost'>
                    <label className='label' htmlFor="">{language === 'uz' ? 'Telefon raqamingizni kiriting' : 'Введите свой номер телефона'}</label>
                    <input className={inputClassNum} pattern="[0-9+]+" placeholder={`${showErrorNum ? 'Поле объязательно для ввода !' : '+998'}  `} type="number" value={inputValueNumber} onChange={handleValNum} />
                     {showErrorNum ? <p>{language === 'uz' ? '' : ''}</p> : <p>{language === 'uz' ? '' : ''}</p>}
                  </div>

                  <div className='col-12 col-sm-6 inputPost inputPostBtn'>
                    <button onClick={() => { PostCoopertion(); submitInput() }}>{language === 'uz' ? 'Yuborish' : 'Отправить'}</button>
                    <AlertDialog data={open}/>
                  </div>
                  <div className=' row col-12 col-sm-6  AdresContact'>
                        {phone && phone?.map((iteam)=>{
                          return(
                            <>
                            <div className='col-6'>
                               <h5>{language === 'uz' ? 'Telefon' : 'Телефон'}</h5>
                              <p>{iteam.phone}</p>
                            </div>
                            <div className='col-6'>
                               <h5>{language === 'uz' ? 'Address' : 'Адрес'}</h5>
                              <p>{language === 'uz' ? <>{iteam.address_uz}</> : <>{iteam.address_ru}</>}</p>
                            </div>
                            </>
                          )
                        })}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 ContactImg" data-aos="zoom-out-up">
                <img src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="foto" />
              </div>
            </>
          )
        })}
      </div>

    </div>
  )
}
