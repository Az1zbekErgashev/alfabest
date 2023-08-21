import React from 'react'
import './PhotoWork.scss'
export default function PhotoWork() {
    const Imgline = (
        <div className="row container g-0 imgLine">
            <div className="col-3">
                <img src="http://alfabestfront.napaautomotive.uz/img/svg/hyundai.svg" alt="work" data-aos="fade-up"
     data-aos-duration="3000" />
            </div>
            <div className="col-3">
                <img src="http://alfabestfront.napaautomotive.uz/img/svg/waterson.svg" alt="work" data-aos="fade-up"
     data-aos-duration="3000" />
            </div>
            <div className="col-3">
                <img src="http://alfabestfront.napaautomotive.uz/img/svg/lukoil.svg" alt="work" data-aos="fade-up"
     data-aos-duration="3000" />
            </div>
            <div className="col-3">
                <img src="http://alfabestfront.napaautomotive.uz/img/svg/uzbekneft.svg" alt="work" data-aos="fade-up"
     data-aos-duration="3000"/>
            </div>
        </div>
    )
  return (
    <div className='container-fluid'>
        {Imgline}
    </div>
  )
}
