import React, { useState, useEffect, useContext } from 'react'
import './Coopertion.scss'
import LanguageContext from '../useContext/LanguageContext'
import Data from '../../Utils/Data';
import { BaseUrl_Uz } from '../../Utils/FetchData/Fetch';
import Logo from '../AboutCompany/AimAbout/img/LogoDark.svg'
import AlertDialog from '../Alert';
import AOS from 'aos';


export default function Coopertion() {

    const { language, changeLanguage } = useContext(LanguageContext);
    const [Cooperation, setCooperation] = useState([])
    const [select, setselect] = useState(false)
    const [selectArr, setSelectArr] = useState([
        {
            name_uz: 'Muhandislik va texnik ekspluatatsiya',
            name_ru: 'Инженерно-техническая эксплуатация'
        },
        {
            name_uz: 'Xizmat va maishiy xizmat korsatish',
            name_ru: 'Сервис и бытовое обслуживание'
        },
        {
            name_uz: 'Korporativ ovqatlanish',
            name_ru: 'Корпоративное питание'
        },
        {
            name_uz: 'Transport',
            name_ru: 'транспорт'
        },
    ])
    const [inputValueNumber, setInputValueNumber] = useState('');
    const [inputValueName, setInputValueName] = useState('');
    const [selected, setSelected] = useState()
    const [showErrorNam, setShowErrorNam] = useState(false);
    const [showErrorNum, setShowErrorNum] = useState(false);
    const [useEfectShow, setUseEfectShow] = useState(false);
    const [open, setOpen] = React.useState(false);
    const patternName = /[^A-Za-zА-Яа-я\s]/g
    const patternNumber = /[^0-9+]/g
    const regex = /^[a-zA-Z\s]+$/;
    const regex2 = /^[0-9+]+$/;


    function postServis() {
      
    }


    function run() {
        Data.getCooperation_uz()
            .then(res => {
                setCooperation(res)
            })
    }
    function SelectActive() {
        if (select) setselect(false)
        else setselect(true)


    }
    function selectKey(i) {
        if (language === 'uz') {
            setSelected(selectArr[i].name_uz)
        }
        else {
            setSelected(selectArr[i].name_ru)
        }
        setselect(false)
    }
    function handleInputName(event) {
        setInputValueName(event.target.value)
    }
    function handleInputNumber(event) {
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
            let data = {
                service_id: 1,
                full_name: inputValueName,
                phone: inputValueNumber
            }
            // let arr =  JSON.stringify(data)

            Data.postServis(data)
            .then(res => {
                run()
            })
            setOpen(true)
        }
    }



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
    useEffect(()=>{
        AOS.init()
    })


    useEffect(() => {
        postServis()
        run()
    }, [])

    const inputClassName = showErrorNam ? 'DisableInput' : 'ActiveInput';
    const inputClassNum = showErrorNum ? 'DisableInput' : 'ActiveInput';

    const Categoriy = (
        <div className='row container g-0'>
            <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center  textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3  '></i> <p>{language === 'uz' ? <>Jarayonni optimallashtirish orqali xarajatlarni kamaytirish</> : <>Сокращение издержек за счет оптимизации процессов</>}</p> </div>
            <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i> <p>{language === 'uz' ? <>Malakali tajribali pudratchini jalb qilish orqali xizmatlar sifatini oshirish</> : <>Улучшение качества услуг за счет привлечения квалифицированного опытного подрядчика</>} </p></div>
            <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Sizning ehtiyojlaringizga moslashtirilgan menyu va xizmatlar</> : <>Адаптированные под ваши потребности меню и услуги</>}</p> </div>
            <div data-aos="zoom-in" className=" d-flex justify-content-beetwen   align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>
                Boshqaruv jamoasining sa'y-harakatlarini asosiy faoliyatga jamlash</> : <>Концентрация усилий управленческой команды на основной деятельности</>}</p> </div>
        </div>

    )
    const CoopertionHeader = (
        <div className="row container ">
            <div className="col-12 AboutPage">
                {
                    Cooperation && Cooperation.map((iteam, index) => {
                        return (
                            <div key={index}>
                                <div style={{ position: 'relative' }}>
                                    <img src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="foto" />
                                    <div className='aboutPageLogo'>
                                        <img src={Logo} alt="logo" />
                                        <p>{language === 'uz' ? <>{iteam.title_uz}</> : <>{iteam.title_ru}</>}</p>
                                    </div>
                                </div>
                                <div className='AboutPageText'>
                                    {language === 'uz' ? <p >Alfabest sanoat korxonalari, savdo markazlari, integratsiyalashgan xizmatlar sohasida yirik va o'rta kompaniyalar, shuningdek oziq-ovqat, yuvish vositalari va uy-ro'zg'or buyumlari yetkazib beruvchilari bilan hamkorlik qilishdan mamnun bo'ladi.</p> : <p>Компания Альфа-бест будет рада сотрудничеству с промышленными предприятиями, торговыми центрами, компаниями крупного и среднего бизнеса в области комплексного оказания услуг</p>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )



    return (
        <div className='container-fluid'>
            <div className='container'>
                {CoopertionHeader}


                <div className='text-start my-3 container'>
                    <div><img className='' src={Logo} alt="logo" />
                        <h2 className='my-3 fw-bold'>{language === 'uz' ? <>Autsorsingning asosiy afzalliklari</> : <>Основные преимущества перехода на аутсорсинг</>}</h2></div>
                </div>
                {Categoriy}


                <div>
                    <div className='container CoopertionInput row'>
                        <div className="col-12 col-sm-6 row"  >
                            <div className="col-12 text-start select" onClick={() => SelectActive()}>
                                <div > <p>{selected === undefined && <> {language === 'uz' ? <>Muhandislik va texnik ekspluatatsiya</> : <>Инженерно-техническая эксплуатация</>}</>} {language === 'uz' ? <>{selected} </> : <>{selected}</>}</p>
                                    {select ? <i className="bi bi-arrow-up-circle-fill"></i> : <i className="bi bi-arrow-down-circle-fill"></i>}  </div>
                            </div>
                            {select && <div>
                                <ul className='selectedUl'>
                                    {selectArr?.map((i, index) => {
                                        return (
                                            <li onClick={() => selectKey(index)} key={index}>{language === 'uz' ? <>{i.name_uz}</> : <>{i.name_ru}</>}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                            <div className="col-12 text-start inputPost">
                                <input className={inputClassName} pattern="[A-Za-zА-Яа-я\s]+" type="text" placeholder={`${showErrorNum ? 'Поле объязательно для ввода !' : 'Фамилия , Имя'}  `} value={inputValueName} onChange={handleInputName} />
                                {patternName.test(inputValueName) && <p>{language === 'uz' ? <>Faqat hariflar kiriting !</> : <> Введите только буквы</>}</p>}
                            </div>
                            <div className="col-12 text-start inputPost">
                                <input className={inputClassNum} pattern="[0-9+]+" placeholder={`${showErrorNum ? 'Поле объязательно для ввода !' : '+998'}  `} type="text" value={inputValueNumber} onChange={handleInputNumber} />
                                {patternNumber.test(inputValueNumber) && <p>{language === 'uz' ? <>Faqat sonlar kiriting ! </> : <> Введите только цифры</>}</p>} {showErrorNum ? <p>{language === 'uz' ? '' : ''}</p> : <p>{language === 'uz' ? '' : ''}</p>}

                            </div>
                            <div className="col-12  text-start inputPostBtn inputPost">
                                <button onClick={() => { PostCoopertion(); submitInput() }}>{language === 'uz' ? 'Yuborish' : 'Отправить'}</button>
                                <AlertDialog data={open} />
                            </div>
                        </div>



                        <div className="col-12 col-sm-6 text-end ContactImg " data-aos="zoom-out-up">
                            <img src="https://i.ibb.co/JH7Gkvw/Group-9.png" alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
