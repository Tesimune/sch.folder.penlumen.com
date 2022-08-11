import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layouts(props) {
  return (
    <div>
        <div className='bg-slate-300 pt-20'>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    </div>
  )
}
