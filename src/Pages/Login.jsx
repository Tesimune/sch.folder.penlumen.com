import React, { Component } from 'react'

export default class Login extends Component {
    componentDidMount(){
        const loginModal = document.querySelector('#loginModal')
        const email = document.querySelector('#email')
        const password = document.querySelector('#password')
        const sub = document.querySelector('#sub')

        sub.addEventListener('click', (e)=>{
            e.preventDefault();
            if (email.value === 'optimumachieversacademy@gmail.com' && (password.value ==='optimumAA321') ){
                loginModal.classList.add('hidden')
            }else{
                console.log('invalid')
            }
        })

    }
  render() {
    return (
      <div>
        <div id="loginModal" className="grid justify-center items-center bg-white fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="py-6 px-6 ">

                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="optimum@gmail.com" required/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>

                        <button id='sub' className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    
                        <a href='/home' className="grid justify-end mt-4 font-medium text-sm text-gray-900">Go Home</a>
                        
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
