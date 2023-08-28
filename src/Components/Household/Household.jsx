import React from 'react'
import { useState, useEffect, useContext } from 'react'
import LanguageContext from '../useContext/LanguageContext';
import { BaseUrl_Uz } from '../../Utils/FetchData/Fetch';
import Data from '../../Utils/Data';
import LogoDark from '../Home/BackdropImg/img/LogoDark.svg'
import Logo from '../Home/BackdropImg/img/Logo.svg'
import { useLocation } from 'react-router-dom';
import PhotoGalery from '../AboutCompany/PhotoGalrey/PhotoIteam'
import AOS from 'aos';


export default function Household() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const [houshold, setHouseHold] = useState([])


    function run() {
        Data.getServisCategoriy()
            .then(res => {
                setHouseHold(res)
            })
    }

    useEffect(() => {
        run()
    }, [])

    useEffect(() => {
        AOS.init()
    })
    const HouseHead = (
        <div className="row ">
            <div className="col-12 AboutPage">
                {
                    houshold && houshold?.map((iteam, index) => {
                        return (
                            <div key={index}>
                                {
                                    iteam.home_service_id === 2 && <>
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

    const HouseBody = (
        <div className='container'>
            <div className='row container g-0 cateringInfo' >
                <div data-aos="zoom-in" className=" textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/Ki13tWsYprSPfN2JL0o5.png" alt="" /> <p>{language === 'uz' ? <>Buyurtmachining binolari, binolari va hududini dezinseksiya, dezinfeksiya va deratizatsiya qilish.</> : <>Дезинсекция, дезинфекция и дератизация зданий, помещений и территории Заказчика</>}</p> </div>

                <div data-aos="zoom-in" className="textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/jx1CxRt5cIGiz0QFZCLi.png" alt="" /> <p>{language === 'uz' ? <>Maishiy va qurilish chiqindilarini alohida yig'ish, olib chiqish va yo'q qilish. Maishiy chiqindi suvlarni va suyuq maishiy chiqindilarni yig'ish va olib tashlash, shu jumladan ularni ixtisoslashtirilgan ob'ektlarga joylashtirish</> : <>Раздельный сбор, вывоз и утилизация бытовых и строительных отходов. Сбор и вывоз хозяйственно-бытовых сточных вод и жидких бытовых отходов, включая их размещение на специализированных площадках</>} </p></div>

                <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/TVKj7voz45uPMvEfB2iY.png" alt="" />   <p>{language === 'uz' ? <>Buyurtmachining binolar va binolar ichidagi yopiq o'simliklariga g'amxo'rlik qilish, shu jumladan tekshirish, tozalash, o'g'itlash, sug'orish, transplantatsiya qilish, o'simliklarni shakllantirish va davolash</> : <>Уход за комнатными растениями Заказчика внутри зданий и помещений, включая осмотр, очистку, удобрение, полив, пересадку, формирование и лечение растений</>}</p> </div>

                <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/bvxxCqv2G6bGwKg2oZVe.png" alt="" /> <p>{language === 'uz' ? <>Kir yuvish, dazmollash va ta'mirlash xizmatlari, shu jumladan choyshablar, sochiqlar, maxsus kiyimlar, matolarni bezash elementlari (bayroqlar, pardalar, pardalar va boshqalar) yuvish va dazmollash.</> : <>Услуги по стирке, глажке и ремонту, включая стирку и глажку постельного белья, полотенец, специальной одежды, тканевых декоративных элементов (флаги, шторы, занавесы и т.д)</>}</p> </div>


                <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/jgDaBpo4iIXSvHgal9DW.png" alt="" /> <p>{language === 'uz' ? <>Yashil maydonlarni qo'shimcha obodonlashtirish va parvarish qilish, shu jumladan muntazam sug'orish, o'g'itlar bilan ishlov berish, begona o'tlarga qarshi kurashish, daraxtlar va butalarni dekorativ shakllantirish va kesish, maysazorlarni parvarish qilish, daraxtlar, butalar va yashil maydonlarni oldini olish va davolash.</> : <>Дополнительное озеленение и уход за зелеными насаждениями, включая регулярный полив, обработку почвы с внесением удобрений, борьбу с сорняками, декоративную формовку и обрезку деревьев и кустарников, уход за газонами, профилактику и лечение деревьев, кустов и зеленых насаждений</>}</p> </div>

                <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/9FDxnJYeAyPJKxovYPnz.png" alt="" /> <p>{language === 'uz' ? <>Buyurtmachining binolari va hududini har tomonlama tozalash, shu jumladan muntazam, umumiy va davriy tozalash, binolar va inshootlarning jabhalarini yuvish.</> : <>Комплексная уборка помещений и территории Заказчика, включая регулярную, генеральную и периодическую уборку, мойка фасадов зданий и сооружений</>}</p> </div>

            </div>
        </div>
    )
    const BAckdrop = (
        <div className='container backdropText ' data-aos="zoom-in-right" >
            <div className='backdropLogo'><img src={Logo} alt="logo" /> <h4>AlfaBest</h4></div>
            {language === 'uz' ? <h2>Agar siz bizning xizmatlarimizga<br /> qiziqsangiz, biz sizni hamkorimiz <br /> sifatida ko'rishdan xursand bo'lamiz.</h2> : <h2>Удовлетворенность наших <br />Заказчиков – наша главная цель.</h2>}
        </div>
    )
    const houseInfo = (
        <div className='container'>
            <div className='col-12 my-4 text-start' >
                <img src={LogoDark} alt="logo" />
                <h2 className='fw-bold'>{language === 'uz' ? 'Bizning afzaliklarimiz' : 'Наши преимущества'}</h2>
            </div>
            <div data-aos="zoom-in" className='row container g-0 cateringCategoriy' >
                <div className=" d-flex justify-content-beetwen align-items-center  textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3  '></i> <p>{language === 'uz' ? <>Kompleks yondashuv: Biz mijozlarimizga o'z mulki va hududiga g'amxo'rlik qilishni to'liq bizga topshirishga imkon beruvchi keng ko'lamli xizmatlarni taklif qilamiz.</> : <>Комплексный подход: Мы предлагаем широкий спектр услуг, позволяющих нашим клиентам полностью делегировать нам уход за своей недвижимостью и территорией
                </>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i> <p>{language === 'uz' ? <>
                    Moslashuvchanlik: Biz har bir mijozimizning ehtiyojlarini qondiradigan moslashtirilgan echimlarni taklif qilishga tayyormiz</> : <>Гибкость: Мы готовы предложить индивидуальные решения, которые отвечают потребностям каждого нашего клиента</>} </p></div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Moslash: Biz har bir kishini qo'llab-quvvatlagan narsalarni taklif qilamiz</> : <>Гибкость: Мы готовы предложить индивидуальные решения, которые отвечают потребностям каждого нашего клиента</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Xizmat sifati: Biz mijozlarimizga eng yuqori sifatli xizmat ko'rsatish uchun zamonaviy uskunalar va sifatli materiallardan foydalanamiz.</> : <>Качество обслуживания: Мы используем современное оборудование и качественные материалы, чтобы обеспечить максимально высокое качество обслуживания для наших клиентов
                </>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Ishonchlilik: Biz ish jadvaliga qat'iy rioya qilamiz va xizmatlarning o'z vaqtida bajarilishini kafolatlaymiz</> : <>Надежность: Мы строго соблюдаем график работы и гарантируем своевременное выполнение услуг</>}</p> </div>

                <div  data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Qulaylik: Kompaniyamiz xizmatlarni yuqori darajada va hamyonbop narxlarda taqdim etadi, bu bizning xizmatimizni mijozlarning keng doirasiga taqdim etadi.</> : <>Удобство: Наша компания предоставляет услуги на высоком уровне и по приемлемым ценам, что делает наш сервис доступным для широкого круга клиентов</>}</p> </div>
            </div>
        </div>
    )


    return (
        <div>
            {HouseHead}
            {HouseBody}
            <div className='backdrop container-fluid'>
                <section></section>
                {BAckdrop}
            </div>
            {houseInfo}
            <PhotoGalery/>
        </div>
    )
}
