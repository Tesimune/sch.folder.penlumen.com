import React, { Component } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
      <div>
       
        <footer className="p-4 bg-slate-200 sm:p-6 dark:bg-gray-900">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="#/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Optimum Achievers Academy"/>
                        <span className="self-center text-md md:text-2xl font-semibold whitespace-nowrap dark:text-white">Optimum Achievers Academy</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="grid gap-4 text-gray-600 dark:text-gray-400">
                            <li>
                                <a href="#/" className="hover:underline ">Facebook</a>
                            </li>
                            <li>
                                <a href="#/" className="hover:underline">Instagram</a>
                            </li>
                            <li>
                                <a href="#/" className="hover:underline">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#home" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#home" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#/" className="hover:underline">Optimum Achievers Academy™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href="#home" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FaFacebook className="w-5 h-5"/>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#home" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FaInstagram className="w-5 h-5"/>
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="#home" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FaTwitter className="w-5 h-5"/>
                        <span className="sr-only">Twitter page</span>
                    </a>
                </div>
            </div>
        </footer>

      </div>
    )
  }
}
