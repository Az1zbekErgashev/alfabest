import React from 'react'
import { useEffect, useState } from 'react'
import Data from '../../../Utils/Data'
import { BaseUrl_Uz } from '../../../Utils/FetchData/Fetch'
export default function AboutHeader() {
  const [about, setAbout] = useState([])

  function run(){
    Data.getCompany_Uz()
    .then(res =>{
      setAbout(res)
    })
  }
  useEffect(()=>{
    run()
  },[])

  const About = (
    <div>
      <div className="row">
        <div className="col-12">
          {
            about && about.map((iteam, index)=>{
              return(
                <div key={index}>
                    <div>
                      <img src={`${BaseUrl_Uz}/storage/${iteam.home_image}`} alt="foto" />
                    </div>
                    <div>
                    <p  dangerouslySetInnerHTML={{__html: iteam.home_text_uz}}></p>
                    </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
  return (
    <div>
        
    </div>
  )
}
