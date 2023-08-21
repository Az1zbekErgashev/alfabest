import React from 'react'
import AboutHeader from './About/AboutHeader'
import AimAbout from './AimAbout/AimAbout'
import Backdrop from './AboutBackdrop/AboutBackdrop'
import PhotoWork from './PhotoWork/PhotoWork'
import Photo from './PhotoGalrey/PhotoIteam'
import History from '../Home/History/History'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function About() {
  const history = useLocation()
  useEffect(()=>{
    localStorage.setItem('savedPage' , (history.pathname))
  },[])
  return (
    <div className='overflow-hidden'>
        <AboutHeader/>
        <AimAbout/>
        <Backdrop/>
        <PhotoWork/>
        <Photo/>
        <History/>
    </div>
  )
}
