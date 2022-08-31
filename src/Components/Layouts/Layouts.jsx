import React from 'react'
import {Outlet} from "react-router-dom";
import Footer from './Footer'
import Header from './Header'

export default function Layouts(props) {
  return (
    <div>
        <div className='pt-20'>
            <Header/>
            <Outlet />
                {props.children}
            <Footer/>
        </div>
    </div>
  )
}
