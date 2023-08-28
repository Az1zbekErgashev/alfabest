import React from 'react'
import { BaseUrl_Uz } from '../../Utils/FetchData/Fetch'
import { useState, useContext, useEffect } from 'react'
import AOS from 'aos'
import LanguageContext from '../useContext/LanguageContext'
import Data from '../../Utils/Data'
import LogoDark from '../Home/AboutCompany/img/LogoDark.svg'
import Logo from '../Home/AboutCompany/img/Logo.svg'
import PhotoIteam from '../AboutCompany/PhotoGalrey/PhotoIteam'
export default function Transportation() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const [transport, setTransport] = useState([])
    function run() {
        Data.getServisCategoriy()
            .then(res => {
                setTransport(res)
            })
    }
    useEffect(() => {
        run()
    }, [])
    const transportHeader = (
        <div className="row ">
            <div className="col-12 AboutPage">
                {
                    transport && transport?.map((iteam, index) => {
                        return (
                            <div key={index}>
                                {
                                    iteam.home_service_id === 4 && <>
                                        <div style={{ position: 'relative' }}>
                                            <img src={`${BaseUrl_Uz}/storage/${iteam.image}`} alt="foto" />
                                            <div className='aboutPageLogo cateringLogo'>
                                                <img src={LogoDark} alt="logo" />
                                                <p>{language === 'uz' ? <>{iteam.title_uz}</> : <>{iteam.title_ru}</>}</p>
                                            </div>
                                        </div>
                                        <div className='AboutPageText cateringText container'>
                                            <h2 className='fw-bold '>{language === 'uz' ? <>{iteam.title_uz}</> : <>{iteam.title_ru}</>}</h2>
                                            {language === 'uz' ? <p><p dangerouslySetInnerHTML={{ __html: iteam.text_uz }}></p></p> : <p style={{ fontWeight: '400' }} ><p style={{ fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: iteam.text_ru }}></p></p>}
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
    const TransportBody = (
        <div className='container'>

            <div className='row container g-0 cateringCategoriy' >
                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center  textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3  '></i> <p>{language === 'uz' ? <>Shahar atrofida va shaharlararo yo'lovchi tashish xizmatlari</> : <>Услуги городских пригородных и междугородних пассажирских перевозок</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i> <p>{language === 'uz' ? <>
                    Yo'lovchilarning uyushgan guruhlarini tashish uchun buyurtma bo'yicha yo'lovchi avtobuslarini taqdim etish bo'yicha xizmatlar</> : <>Услуги по предоставлению пассажирских автобусов на заказ для перевозки организованных групп пассажиров</>} </p></div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Buyurtmachi ob'ektlari hududi bo'ylab xodimlarni tashish bo'yicha xizmatlar</> : <>Услуги по перевозке персонала по территории объектов Заказчика</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Buyurtmachining ob'ektlariga xodimlarni etkazib berish xizmatlari, shu jumladan aylanma transport</> : <>Услуги по доставке персонала на объекты Заказчика включая вахтовые перевозки</>}</p> </div>
            </div>
        </div>
    )
    const TransportInfo = (
        <div className='container'>
           <div className='col-12 my-4 text-start'>
            <img src={LogoDark} alt="logo" />
            <h2 className='fw-bold'>{language === 'uz' ? 'Bizning afzaliklarimiz' : 'Наши преимущества'}</h2>
        </div>

            <div className='row container g-0 cateringCategoriy' >
                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center  textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3  '></i> <p>{language === 'uz' ? <>Uskunaning ishlamay qolishini minimallashtirish va mijoz uchun mumkin bo'lgan xavf va yo'qotishlarni kamaytirish uchun biz barcha ishlarning samaradorligi va samaradorligini kafolatlaymiz.</> : <>Гарантируем эффективность и оперативность выполнения всех работ, чтобы минимизировать время простоя оборудования и снизить возможные риски и убытки для Заказчика</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i> <p>{language === 'uz' ? <>
                Oldindan o'rnatilgan javob parametrlari va fikr-mulohazalarga ega 24 soatlik dispetcherlik markazi</> : <>Круглосуточный диспетчерский центр с заданными параметрами реагирования и обратной связью</>} </p></div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Ko'chmas mulkni saqlash va ekspluatatsiya qilishni tashkil etish uchun barcha zarur sertifikatlar va litsenziyalarning mavjudligi</> : <>Наличие всех необходимых сертификатов и лицензий для организации технического обслуживания и эксплуатации объектов недвижимости</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>O'zimizning yuqori malakali mutaxassislarimiz va kompaniya bo'linmalari tomonidan xizmatlar ko'rsatish</> : <>Оказание услуг силами собственных высококвалифицированных специалистов и подразделений компании</>}</p> </div>


                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Etakchi ishlab chiqaruvchilarning muhandislik va texnologik jihozlarining o'ziga xos xususiyatlarini bilish</> : <>Знание специфики инженерного и технологического оборудования ведущих производителей</>}</p> </div>


                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Barcha turdagi ko'chmas mulk sohasida ko'p yillik tajriba</> : <>Многолетний опыт работы на объектах недвижимости всех типов</>}</p> </div>
            </div>
        </div>
    )
    const BAckdrop = (
        <div className='container backdropText ' data-aos="zoom-in-right" >
            <div className='backdropLogo'><img src={Logo} alt="logo" /> <h4>AlfaBest</h4></div>
            {language === 'uz' ? <h2>Agar siz bizning xizmatlarimizga<br /> qiziqsangiz, biz sizni hamkorimiz <br /> sifatida ko'rishdan xursand bo'lamiz.</h2> : <h2>Удовлетворенность наших <br />Заказчиков – наша главная цель.</h2>}
        </div>
    )
    return (
        <div className='overflow-hidden'>
            {transportHeader}
            {TransportBody}
            <div className='backdrop container-fluid'>
                <section></section>
                {BAckdrop}
            </div>
            {TransportInfo}
            <PhotoIteam/>
        </div>
    )
}
