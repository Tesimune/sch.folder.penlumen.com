import React, { Component } from 'react'

export default class NoPage extends Component {
  render() {
    return (
      <div className='h-screen'>
        <div className='grid justify-center items-center'>
            <span className='grid text-center font-semibold text-xl'>This Page Does Not Exist</span>
        </div>
      </div>
    )
  }
}
