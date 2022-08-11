import React, { Component } from 'react'
import Layouts from './Components/Layouts'
import Articles from './Components/Utils/Articles'
import Slider from './Components/Utils/Slider'

export default class App extends Component {
  render() {
    return (
      <Layouts>
        <div className='grid gap-3'>
          <div>
            <Slider/>
            <Articles/>
          </div>
        </div>
      </Layouts>
    )
  }
}
