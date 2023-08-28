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


export default function Foods() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const [foods, setFoods] = useState([])


    function run() {
        Data.getServisCategoriy()
            .then(res => {
                setFoods(res)
            })
    }

    useEffect(() => {
        run()
    }, [])

    const FoodsHead = (
        <div className="row ">
            <div className="col-12 AboutPage">
                {
                    foods && foods?.map((iteam, index) => {
                        return (
                            <div key={index}>
                                {
                                    iteam.home_service_id === 3 && <>
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

    const FoodsBody = (
        <div className='container'>
            <div className='row container g-0 cateringInfo' >
                <div data-aos="zoom-in" className=" textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/cS6djbAs6ZOxqw0sCUp5.png" alt="" /> <p>{language === 'uz' ? <>Buyurtmachining dalada yo‘lda ishlayotgan xodimlariga issiq ovqat yetkazib berish va tarqatishni tashkil qilamiz.</> : <>Организуем доставку и раздачу горячего питания для персонала Заказчика, работающего на выезде в полевых условиях..</>}</p> </div>

                <div data-aos="zoom-in" className="textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/pg8sWVWLaChj1zF9IAD7.png" alt="" /> <p>{language === 'uz' ? <>Biz bayram tadbirlariga, jumladan mehmonlarni qabul qilish, uchrashuvlar o'tkazish kabi Mijozning maxsus tadbirlariga xizmat ko'rsatishni tashkil qilamiz..</> : <>Организуем обслуживание праздничных в том числе специальных мероприятий Заказчика, таких как приём гостей, проведение собраний.</>} </p></div>

                <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/zlILw3oE3ytNFYBhkm54.png" alt="" />   <p>{language === 'uz' ? <>Biz korporativ ovqatlanish xizmatlarini taqdim etamiz.</> : <>Предоставляем услуги по организации выездного корпоративного питания.</>}</p> </div>

                <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/EfX5qQX23aZSog5dveGq.png" alt="" /> <p>{language === 'uz' ? <>Biz Buyurtmachining muassasalarida to'liq va oldindan tayyorlangan korporativ ovqatlanishni tashkil qilish bo'yicha xizmatlarni taqdim etamiz.</> : <>Предоставляем услуги по организации корпоративного питания полного и доготовочного типа на объектах Заказчика.</>}</p> </div>


                <div data-aos="zoom-in" className="col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><img src="http://alfabest.napaautomotive.uz/storage/services-subcategories/May2023/M8ZqVyEYhMTYWExkalQR.png" alt="" /> <p>{language === 'uz' ? <>Biz dam olish va bayram kunlarini o'z ichiga olgan kunlik (kecha-kunduz) ovqatlanishni tashkil qilamiz.</> : <>Обеспечиваем организацию ежедневного (круглосуточного) питания включая выходные и праздничные дни.</>}</p> </div>
            </div>
        </div>
    )
    const BAckdrop = (
        <div className='container backdropText ' data-aos="zoom-in-right" >
            <div className='backdropLogo'><img src={Logo} alt="logo" /> <h4>AlfaBest</h4></div>
            {language === 'uz' ? <h2>Agar siz bizning xizmatlarimizga<br /> qiziqsangiz, biz sizni hamkorimiz <br /> sifatida ko'rishdan xursand bo'lamiz.</h2> : <h2>Удовлетворенность наших <br />Заказчиков – наша главная цель.</h2>}
        </div>
    )
    const FoodsInfo = (
        <div className='container'>
            <div className='col-12 my-4 text-start'>
                <img src={LogoDark} alt="logo" />
                <h2 className='fw-bold'>{language === 'uz' ? 'Bizning afzaliklarimiz' : 'Наши преимущества'}</h2>
            </div>
            <div className='row container g-0 cateringCategoriy' >
                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center  textCopertion fw-bolder   col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3  '></i> <p>{language === 'uz' ? <>Mahsulotlar sifati - biz pishirish uchun faqat yangi va yuqori sifatli ingredientlardan foydalanamiz</> : <>Качество продуктов – мы используем только свежие и высококачественные ингредиенты для приготовления блюд</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center textCopertion fw-bolder  col-12 col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i> <p>{language === 'uz' ? <>
                    Moslashuvchanlik - biz individual echimlarni taklif qilishga va Buyurtmachining o'ziga xos talablariga moslashishga tayyormiz</> : <>Гибкость – мы готовы предложить индивидуальные решения и адаптироваться к особым требованиям Заказчика</>} </p></div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Menyularning xilma-xilligi - biz har qanday lazzat va parhez ehtiyojlariga mos keladigan keng turdagi taomlarni taklif qilamiz</> : <>Разнообразие меню – мы предлагаем широкий выбор блюд, которые удовлетворят любой вкус и диетические потребности</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Professionallik - bizning oshpazlarimiz yuqori malakali va tajribali, jumladan, parhez (davolovchi, profilaktik) va mustahkamlangan taomlarni tayyorlashda.</> : <>Профессионализм – наши повара имеют высокую квалификацию и опыт в том числе и в приготовлении диетических (лечебных, профилактических) и витаминизированных блюд</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Biz bir joyda turmaymiz – ovqat tayyorlash sifatini oshirish, xizmat ko‘rsatish madaniyatini oshirish bo‘yicha doimiy chora-tadbirlar ko‘rmoqdamiz.</> : <>Не стоим на месте – постоянно осуществляем мероприятия по улучшению качества приготовления пищи и по совершенствованию культуры обслуживания</>}</p> </div>

                <div data-aos="zoom-in" className=" d-flex justify-content-beetwen align-items-center col-12 textCopertion fw-bolder  col-sm-6 text-start my-5"><i className='bi bi-shield-fill-exclamation text-success fs-3'></i>   <p>{language === 'uz' ? <>Ichki nazorat - biz ovqatlanish sifati va xavfsizligi bo'yicha doimiy uch bosqichli nazoratni amalga oshiramiz</> : <>Внутренний контроль – мы осуществляем постоянный трехступенчатый контроль качества и безопасности организации питания</>}</p> </div>
            </div>
        </div>
    )
    return (
        <div>
            {FoodsHead}
            {FoodsBody}
            <div className='backdrop container-fluid'>
                <section></section>
                {BAckdrop}
            </div>
            {FoodsInfo}
            <PhotoGalery />
        </div>
    )
}
