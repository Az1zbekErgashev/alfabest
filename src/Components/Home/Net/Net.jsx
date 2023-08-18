import React from 'react'
import './Net.scss'
import Gif from './img/noNet.gif'
export default function Net() {
  return (
    <div className='container-fluid net'>
    <img src={Gif} alt="gif" />
        <div>
        <h1>Bunday sahifa topilmadi</h1>
        <p>siz izlayotgan sahifa mavjud emas!</p>
        </div>
    </div>
  )
}
