/* eslint-disable import/no-anonymous-default-export */
import fetch, { BaseUrl_Uz, Navbar_Uz, Slider_Uz, About_Company_Uz, Aim_Uz, AimCategoriy_Uz, History_Uz, AimAbout, PhotoGalerey } from "./FetchData/Fetch";



class data {


    async getNavbar_Uz() {
        const cur = fetch.get(`${BaseUrl_Uz}${Navbar_Uz}`, {
            headers: {
                "Accept-Language": localStorage.getItem('lang')
            }
        })
            .then(res => {
                return res.data.datas
            })
            .catch(e => {
            })
        return cur
    }
    async getSlider_Uz() {
        const cur = fetch.get(`${BaseUrl_Uz}${Slider_Uz}`, {
            headers: {
                "Accept-Language": localStorage.getItem('lang')
            }
        })
            .then(res => {
                return res.data.datas
            })
            .catch(e => {
            })
        return cur
    }
    async getCompany_Uz() {
        const cur = fetch.get(`${BaseUrl_Uz}${About_Company_Uz}`, {
            headers: {
                "Accept-Language": localStorage.getItem('lang')
            }
        })
            .then(res => {
                return res.data.datas
            })
            .catch(e => {
            })
        return cur
    }
    async getAim_Uz() {
        const cur = fetch.get(`${BaseUrl_Uz}${Aim_Uz}`, {
            headers: {
                "Accept-Language": localStorage.getItem('lang')
            }
        })
            .then(res => {
                return res.data.datas
            })
            .catch(e => {
            })
        return cur
    }
    async getAimCategoriy_Uz() {
        const cur = fetch.get(`${BaseUrl_Uz}${AimCategoriy_Uz}`, {
            headers: {
                "Accept-Language": localStorage.getItem('lang')
            }
        })
            .then(res => {
                return res.data.datas
            })
            .catch(e => {
            })
        return cur
    }
    async getHistory_Uz() {
        const cur = fetch.get(`${BaseUrl_Uz}${History_Uz}`, {
            headers: {
                "Accept-Language": localStorage.getItem('lang')
            }
        })
            .then(res => {
                return res.data.datas
            })
            .catch(e => {
            })
        return cur
    }
    async getAimAbout_Uz() {
        const cur = fetch.get(`${BaseUrl_Uz}${AimAbout}`, {
            headers: {
                "Accept-Language": localStorage.getItem('lang')
            }
        })
            .then(res => {
                return res.data.datas
            })
            .catch(e => {
            })
        return cur
    }
    async getPhotoGalerey() {
        const cur = fetch.get(`${BaseUrl_Uz}${PhotoGalerey}`, {
            headers: {
                "Accept-Language": localStorage.getItem('lang')
            }
        })
            .then(res => {
                return res.data.datas
            })
            .catch(e => {
            })
        return cur
    }

}
export default new data()


