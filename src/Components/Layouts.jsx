import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layouts(props) {
  return (
    <div>
        <div>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    </div>
  )
}
