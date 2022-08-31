import React, { Component } from 'react'
import Alert from '../Components/Alert'
import Login from './Login'

export default class Enrol extends Component {

  componentDidMount(){

    const defaultModal = document.querySelector('#defaultModal')
    const loader = document.querySelector('#loader')
    const resultComp = document.querySelector('#resultComp')
    const result = document.querySelector('#result')
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxt_qdlnaFSV2IwrMAHpOiAkz74Pz5Q4EdnEYs8G2vVYef0qJsJ1Bvva9hgX0qECH4/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault();

      defaultModal.classList.remove('hidden')
      
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // console.log('Submitted Successfully', response.message)
        loader.classList.add('hidden')
        result.innerHTML = "Submitted successfully"
        result.classList = "grid justify-center text-center text-green-500 font-bold"
        resultComp.classList.remove('hidden')
      })
          
      .catch(error => {
        // console.error('Error!', error.message)
        loader.classList.add('hidden')
        result.innerHTML = "An error occurred while submitting please check your internet connection and try again"
        result.classList = "grid justify-center text-center text-red-500 font-bold"
        resultComp.classList.remove('hidden')
      })
    })

  }

  render() {
    return (
      <div className='bg-white py-5 px-3 md:px-9 md:py-16'>
        <Login/>
        <Alert/>
        <form className='grid gap-5' method='post' name="google-sheet">
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
                 <input type="text" name="First_Name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="Middle_Name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Middle name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="Last_Name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
                 <input type="tel" name="Parent_Number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parent Number (+23486784686)</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input type="tel" name="Guardian_Number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Guardian Number (+23486784686)</label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="House_Address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">House Address (No:12 Adam Street)</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input type="email" name="Email_Address" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address (Ex. optimum@gmail.com)</label>
            </div>
          </div>
          <div className="grid justify-between md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Gender</label>
              <select name="Gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Class</label>
              <select name="Class" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="DayCare">DayCare</option>
                <option value="Nursery One">Nursery One</option>
                <option value="Nursery Two">Nursery Two</option>
                <option value="Primary One">Primary One</option>
                <option value="Primary Two">Primary Two</option>
                <option value="Primary Three">Primary Three</option>
                <option value="Islamic School">Islamic School</option>
                <option value="Married Women Islamic School">Married Women Islamic School</option>
              </select>
            </div>

          </div>
          <div className="flex gap-3 justify-end">
            <button type="submit" name="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            <button type="reset" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Reset</button>
          </div>
        </form>


      </div>
    )
  }
}
