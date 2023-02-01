import React, { useState } from 'react'
import './border2.css'

import Header from './nav'
import Menu from './menu'
import Box3 from './box3'


export default function BoxBorder2() {


  return (
    <div>
    <div className='back2'></div>
 
 <Header/>
 <Menu/>
 
        <div className='line3'>
        <Box3 />
           </div>
           
    </div>
    
  )
}
