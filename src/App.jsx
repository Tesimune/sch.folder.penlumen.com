import React, { Component } from 'react'
import Layouts from './Components/Layouts'
import Slider from './Components/Utils/Slider'

export default class App extends Component {
  render() {
    return (
      <Layouts>
        <div className='grid h-screen'>
          <div>
            <Slider/>
            <span className='flex justify-center items-center text-black'>Optimum Achievers Academy</span>
          </div>
        </div>
      </Layouts>
    )
  }
}
