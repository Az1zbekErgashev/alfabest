import React from 'react'
import AboutHeader from './About/AboutHeader'
import AimAbout from './AimAbout/AimAbout'
import Backdrop from './AboutBackdrop/AboutBackdrop'
import PhotoWork from './PhotoWork/PhotoWork'
import Photo from './PhotoGalrey/PhotoIteam'
import History from '../Home/History/History'
import PhotoTeam from './PhotoTeam'
export default function About() {
  return (
    <div className='overflow-hidden'>
        <AboutHeader/>
        <AimAbout/>
        <Backdrop/>
        <PhotoTeam/>
        <PhotoWork/>
        <Photo/>
        <History/>
    </div>
  )
}
