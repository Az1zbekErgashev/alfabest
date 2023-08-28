import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Data from "../../Utils/Data";
import LanguageContext from "../useContext/LanguageContext";
import "./Navbar.scss";
import logo from "./img/Logo.svg";
import LogoDark from "./img/LogoDark.svg";
// import Logo from './img/LogoDark.svg'
export default function NavbarDecktop() {
    const [navbar] = useState([
        {
            id: 1,
            title_ru: "О компании",
            title: "Kompaniya haqida",
            status: true,
            active: "item1",
            to: "/about",
        },
        {
            id: 2,
            title_ru: "Карьера",
            title: "Karyera",
            status: true,
            active: "item2",
            to: "/carrier",
        },
        {
            id: 3,
            title_ru: "Закупки",
            title: "Xarid qilish",
            status: true,
            active: "item3",
            to: "/purchase",
        },
        {
            id: 4,
            title_ru: "Сотрудничество",
            title: "Hamkorlik",
            status: true,
            active: "item4",
            to: "/cooperation",
        },
        {
            id: 5,
            title_ru: "Контакты",
            title: "Kontaktlar",
            status: true,
            active: "item5",
            to: "/contact",
        },
    ]);
    const [navbarLinks, setNavbarLinks] = useState([]);
    const [active1, setActive1] = useState(navbar);
    const [active2, setActive2] = useState(NavLink);
    const [active1Not, setActive1Not] = useState();
    const [activeN2ot, setActive2Not] = useState(NavLink);
    const { language, changeLanguage } = useContext(LanguageContext);
    const [activeIteam, setActiveIteam] = useState("");
    const [visible, setvisible] = useState(true);
    const [reloadTriggeredUz, setReloadTriggeredUz] = useState(false);
    const [reloadTriggeredRu, setReloadTriggeredRu] = useState(0);
    const [active3, setActive3] = useState(localStorage.getItem("active"));
    const [buttonDisabled1, setButtonDisabled1] = useState(false);
    const [buttonDisabled2, setButtonDisabled2] = useState(false);
    const [activee, setActivee] = useState("");
    const [showPhoto, setShowPhoto] = useState(false);
    const [pages, setPages] = useState("");
    const location = useNavigate();
    const history = useLocation();
    function run() {
        Data.getNavbar_Uz().then((res) => {
            setNavbarLinks(res);
        });
    }

    useEffect(() => {
        function NavbarScroll() {
            const isTop = window.scrollY === 0;
            setvisible(isTop);
        }
        function NavabarPage() {
            setvisible(true);
        }
        window.addEventListener("scroll", NavbarScroll);
        window.addEventListener("popstate", NavabarPage);

        return () => {
            window.removeEventListener("scroll", NavbarScroll);
            window.removeEventListener("popstate", NavabarPage);
        };
    }, []);
    useEffect(() => {
        if (history.pathname !== "/") {
            setvisible(false);
        }
    });

    useEffect(() => {
        run();
    }, []);

    function languagee(i) {
        changeLanguage(i);
        if (i === "ru") {
            localStorage.setItem("lang", "ru");
            if (reloadTriggeredRu === 0) {
                window.location.reload();
            }
        } else if (i === "uz") {
            localStorage.setItem("lang", "uz");

            if (reloadTriggeredUz === false) {
                window.location.reload();
            }
        }
    }
    function langIteam(i) {
        let cur = i;
        localStorage.setItem("active", cur);
        setActive3(i);
    }

    function click(i) {
        changeLanguage(i);
        setActiveIteam(i);
    }
    function handleActive1(i) {
        setButtonDisabled1(false);
        setButtonDisabled2(true);
        if (buttonDisabled1 === false) {
            setActive1(i);
            localStorage.setItem("nav", i);
        }
    }
    // function activeNavFooter(i) {
    //     setActive2(i);
    //     localStorage.setItem("active", i);
    //     setButtonDisabled2(false);
    //     setButtonDisabled1(true);
    // }
    // function setUrlPage(i) {
    //     localStorage.setItem("pageDes", i);
    //     setPages(i);
    // }

    useEffect(() => {
        let cur = localStorage.getItem("nav");
        setActive1(cur);
    });

    useEffect(() => {
        let cur = localStorage.getItem("pageDes");
        const timer = setTimeout(() => {
            location(cur);
        }, 1000);

        return () => clearTimeout(timer);
    }, [pages]);

    useEffect(() => {
        setTimeout(() => {
            setShowPhoto(true);
        }, 0);
    }, [pages]);

    useEffect(() => {
        setTimeout(() => {
            setShowPhoto(false);
        }, 3000);
    }, [showPhoto]);

    const ShowPages = (
        <>
            {showPhoto && (
                <div className="showPages">
                    <div>
                        <img src={LogoDark} alt="logo" />
                        <h1>AlfaBest</h1>
                    </div>
                </div>
            )}
        </>
    );

    const Language = (
        <div className="language">
            <button
                style={{ color: visible ? "white" : "black" }}
                disabled={language === "ru"}
                className={`${active3 === "iteam1" ? "active" : "activeNo"}`}
                onClick={() => {
                    languagee("ru");
                    click("ru");
                    langIteam("iteam1");
                }}
            >
                Ру
            </button>
            <p style={{ color: visible ? "white" : "black" }}>|</p>
            <button
                style={{ color: visible ? "white" : "black" }}
                disabled={language === "uz"}
                className={`${active3 === "iteam2" ? "active" : "activeNo"}`}
                onClick={() => {
                    languagee("uz");
                    click("uz");
                    langIteam("iteam2");
                }}
            >
                Uz
            </button>
        </div>
    );

    const NavbarDecktop = (
        <div className="navbarDesctop">
            <div
                className="border_header "
                style={{ borderBottom: visible ? "1px solid white" : "1px solid grey" }}
            >
                <div className="container navbar__row__1">
                    <div className="navbar__row__1_col ">
                        {visible ? (
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active fw-bold" : "link"
                                }
                                
                                to="/"
                            >
                                <img src={logo} alt="Logo" />
                            </NavLink>
                        ) : (
                            <NavLink to={`/`}>
                                {" "}
                                <img src={LogoDark} alt="Logo" />{" "}
                            </NavLink>
                        )}
                        <h4 style={{ color: visible ? "white" : "black" }}>Alfa Best</h4>
                    </div>
                    <div className="navbar__row__1_col">
                        <ul>
                            {navbar &&
                                navbar?.map((iteam, index) => {
                                    return (
                                        <NavLink
                                            key={index}
                                            to={`${iteam.to}`}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : " text-white link"
                                            }
                                        >
                                            <li
                                                
                                                style={{ color: visible ? "white" : "black" }}
                                            >
                                                {language === "uz" ? (
                                                    <>{iteam.title}</>
                                                ) : (
                                                    <>{iteam.title_ru}</>
                                                )}
                                            </li>
                                        </NavLink>
                                    );
                                })}
                        </ul>
                        {Language}
                    </div>
                </div>
            </div>
            <div
                className="border_bottom"
                style={{ borderBottom: visible ? "1px solid white" : "none" }}
            >
                <div className="navbar__row__2 container">
                    <ul>
                        {navbarLinks &&
                            navbarLinks?.map((iteam1, index) => {
                                return (
                                    <>
                                        <NavLink
                                            key={index}
                                            onClick={() => {
                                            }}
                                            to={`/${iteam1.home_service_link}`}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active fw-bolder link" : " link"
                                            }
                                        >
                                            {language === "uz" ? (
                                                <li
                                                    className={`${active2 === iteam1.home_service_link
                                                            ? "fw-bolder"
                                                            : ""
                                                        } `}
                                                    style={{ color: visible ? "white" : "black" }}
                                                >
                                                    {iteam1.text_uz}
                                                </li>
                                            ) : (
                                                <li style={{ color: visible ? "white" : "black" }}>
                                                    {iteam1.text_ru}
                                                </li>
                                            )}
                                        </NavLink>
                                    </>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
    return (
        <>
            {NavbarDecktop}
            {ShowPages}
        </>
    );
}
//
//
