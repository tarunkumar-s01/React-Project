import React from 'react'
import NavComp from './NavComp'
import { Outlet } from 'react-router-dom'
import bg from '../assests/bg-img.jpg'
import FooterComp from './FooterComp'

const MaindashComp = () => {
    
  return (
    <div>
        
        <div className='container '>
            <div className='card border-black' style={{background:'white'}}>
            <div className='card-header border-black' style={{background:'white'}}>
                <NavComp></NavComp>
                </div>
                <div className='card-body border-black ' >
                    <Outlet></Outlet>
                
                </div>
                <div className='card-footer border-black'>
                    <FooterComp></FooterComp>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default MaindashComp