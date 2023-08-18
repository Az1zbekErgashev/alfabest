import React, { useEffect } from 'react'
import { Slide } from './Slide/Slide'
import AboutCompany from './AboutCompany/AboutCompany'
import Aim from './Aim/Aim'
import Data from '../../Utils/Data'
import Drop from './BackdropImg/Backdrop'
import Net from './Net/Net'
import History from './History/History'
export default function Home() {
  const [data, setData] = React.useState([])
  const [bool, setBool] = React.useState('')
  function run() {
    Data.getSlider_Uz()
      .then(res => {
        setData(res)
      })
      if(data.length > 0) {
        setBool(true)
      }
      else{
        setBool(false)
      }
  }

  useEffect(() => {
    run()
  }, [])
  return (
    <div>
      {
        data === undefined ? <Net /> :
          <div>  <Slide />
            <AboutCompany />
            <Aim />
            <Drop />
            <History/>
            </div>
      }
    </div>
  )
}
