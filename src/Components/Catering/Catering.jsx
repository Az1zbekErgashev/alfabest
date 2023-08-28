import React from 'react'
import './Catering.scss'
import { useState, useEffect, useContext } from 'react'
import LanguageContext from '../useContext/LanguageContext';
import { BaseUrl_Uz } from '../../Utils/FetchData/Fetch';
import Data from '../../Utils/Data';
import LogoDark from '../Home/BackdropImg/img/LogoDark.svg'
import Logo from '../Home/BackdropImg/img/Logo.svg'
import { useLocation } from 'react-router-dom';
import PhotoGalery from '../AboutCompany/PhotoGalrey/PhotoIteam'
import AOS from 'aos';
export default function Catering() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const [catering, setcatering] = useState([])
    const loation = useLocation()
    function run() {
        Data.getServisCategoriy()
            .then(res => {
                res?.map(a => {
                    if (a.home_service_id === 1) {

                        setcatering(res)
                        console.log(a);
                    }

                })
            })
    }

    useEffect(() => {
        run()
    }, [])
    useEffect(() => {
        AOS.init()
    })

    const BAckdrop = (
        <div className='container backdropText ' data-aos="zoom-in-right" >
            <div className='backdropLogo'><img src={Logo} alt="logo" /> <h4>AlfaBest</h4></div>
            {language === 'uz' ? <h2>Agar siz bizning xizmatlarimizga<br /> qiziqsangiz, biz sizni hamkorimiz <br /> sifatida ko'rishdan xursand bo'lamiz.</h2> : <h2>Удовлетворенность наших<br /> Заказчиков – наша главная цель.</h2>}
        </div>
    )
    const CateringHeader = (
        <div className="row " data-aos="zoom-in">
            <div className="col-12 AboutPage " >
                {
                    catering && catering?.map((iteam, index) => {
                        return (
                            <div key={index}>
                                {
                                    iteam.home_service_id === 1 && <>
                                        <div style={{ position: 'relative' }}>
                                            <img src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="foto" />
                                            <div className='aboutPageLogo cateringLogo'>
                                                <img src={LogoDark} alt="logo" />
                                                <p>{language === 'uz' ? <>Bino va inshootlarga texnik xizmat ko'rsatish</> : <>Эксплуатация зданий и сооружений</>}</p>
                                            </div>
                                        </div>
                                        <div className='AboutPageText cateringText container'>
                                            <h2 className='fw-bold '>{language === 'uz' ? <>Bino va inshootlarga texnik xizmat ko'rsatish</> : <>Эксплуатация зданий и сооружений</>}</h2>
                                            {language === 'uz' ? <p>Biz Buyurtmachining turar-joy va ma'muriy binolarida foydalaniladigan binolar, inshootlar, muhandislik tizimlari, maishiy texnika, oshxona, kir yuvish va boshqa jihozlarga texnik xizmat ko'rsatish va ta'mirlash bo'yicha ishlarni bajaramiz va xizmatlar ko'rsatamiz.</p> : <p>Выполняем и предоставляем услуги по техническому обслуживанию и ремонту зданий, сооружений, инженерных систем, бытовой техники, кухонного, прачечного и другого оборудования, используемого в жилых и административных зданиях Заказчика.</p>}
                                        </div>
                                    </>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    const CateringBody = (
        <div className='container' >
        <div className='col-12 my-4 text-start'>
            <img src={LogoDark} alt="logo" />
            <h2 className='fw-bold'>{language === 'uz' ? 'Bizning afzaliklarimiz' : 'Наши преимущества'}</h2>
        </div>
            <div className='row container g-0 cateringCategoriy' >
                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center  textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3  '></i> <p>{language === 'uz' ? <>Operatsion nazoratni tashkil etish: tizimlar, uskunalar va inshootlarni tekshirish, nazorat qilish, monitoring qilish</> : <>Организация эксплуатационного контроля: осмотр, контрольная проверка, мониторинг систем, оборудования и конструкций</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i> <p>{language === 'uz' ? <>Binolar va qurilish inshootlarini kuz-qish va bahor-yoz davrlariga mavsumiy tayyorlash</> : <>Сезонная подготовка зданий и строительных сооружений к осенне-зимнему и весенне-летнему периодам</>} </p></div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Binolar, inshootlar, muhandislik tizimlari va jihozlarini joriy, o'rta va kapital ta'mirlash</> : <>Текущий, средний и капитальный ремонт зданий, сооружений, инженерных систем и оборудования</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Binolar va qurilish inshootlari va ularning muhandislik tizimlarini ekspluatatsiya qilish</> : <>Эксплуатация зданий и строительных сооружений и их инженерных систем</>}</p> </div>
                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Muhandislik tizimlari, uskunalari va qurilish inshootlariga texnik xizmat ko'rsatish va joriy ta'mirlash</> : <>Техническое обслуживание и текущий ремонт инженерных систем, оборудования и строительных конструкций</>}</p> </div>
                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen   align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>
                    Favqulodda dispetcherlik xizmatini tashkil etish</> : <>Организация аварийного-диспетчерского обслуживания</>}</p> </div>
            </div>
        </div>
    )
    const CateringInfo = (
            <div className='container' >
                <div className='row container g-0 cateringInfo' >
                    <div data-aos="zoom-in" className=" textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/HS0v5MOhZrwCntdIqCCJ.png" alt="" /> <p>{language === 'uz' ? <>Biz muhandislik uskunalari va Buyurtmachining bino va inshootlari tizimlarini to'liq tashkiliy va texnik chora-tadbirlar, shu jumladan ishlarni rejalashtirish va bajarish, asbob-uskunalar holatini kuzatish, tegishli hisobot bilan ichki muhandislik tarmoqlari bilan ishlash bo'yicha xizmatlarni taqdim etamiz.</> : <>Обеспечиваем полное организационно-техническое обеспечение инженерного оборудования и систем зданий и сооружений Заказчика, включая планирование и выполнение работ, контроль состояния оборудования, работу с внутренними инженерными сетями с соответствующей отчетностью.</>}</p> </div>

                    <div data-aos="zoom-in" className="textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/nyNseS5a7nBWsUS9yHX1.png" alt="" /> <p>{language === 'uz' ? <>Biz binolar va inshootlarning konstruktiv elementlariga texnik xizmat ko'rsatish va ta'mirlash, shu jumladan ularni kuz-qish va bahor-yoz mavsumiga mavsumiy tayyorlash bo'yicha xizmatlarni taqdim etamiz.</> : <>Оказываем услуги по техническому обслуживанию и ремонту конструктивных элементов зданий и сооружений, включая их сезонную подготовку к осенне-зимнему и весенне-летнему сезонам.</>} </p></div>

                    <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/67a2648OyBg1vBPZgwHn.png" alt="" />   <p>{language === 'uz' ? <>Biz Buyurtmachi ob'ektlarida qo'shni hududni obodonlashtirish bo'yicha qurilish va ta'mirlash ishlarini olib boramiz</> : <>Выполняем строительно-ремонтные работы по благоустройству прилегающей территории на объектах Заказчика.</>}</p> </div>

                    <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/mZp4pHXjhfd1wxBiiIS8.png" alt="" /> <p>{language === 'uz' ? <>Biz ehtiyot qismlar, agregatlar va mexanizmlarning muddatidan oldin eskirishini oldini olish va ularni ish holatida saqlashga qaratilgan rejali profilaktika va profilaktik xizmat ko'rsatamiz.</> : <>Осуществляем плановое профилактическое и профилактическое обслуживание, направленное на предотвращение преждевременного износа запасных частей, агрегатов и механизмов и поддержание их в рабочем состоянии.</>}</p> </div>


                    <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/jo46WCPpZACixEyERhxi.png" alt="" /> <p>{language === 'uz' ? <>Biz Buyurtmachi ob'ektlarining favqulodda dispetcherlik xizmatini tashkil qilishni ta'minlaymiz</> : <>Обеспечиваем организацию аварийно-диспетчерского обслуживания объектов Заказчика.</>}</p> </div>



                    <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/dNEmjR71o15k4MdwVZcD.png" alt="" /> <p>{language === 'uz' ? <>
                    Biz Buyurtmachining ob'ektlarida maishiy, oshxona va ofis mebellariga texnik xizmat ko'rsatish va ta'mirlashni tashkil qilamiz</> : <>Организуем обслуживание и ремонт бытовой, кухонной и офисной мебели на территории Заказчика.</>}</p> </div>
                </div>
            </div>
    )
    return (
        <div className='overflow-hidden'>
            {CateringHeader}
                {CateringInfo}
            <div className='backdrop container-fluid'>
                <section></section>
                {BAckdrop}
            </div>
                {CateringBody}
                <PhotoGalery/>
        </div>
    )
}
