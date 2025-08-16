import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


export const Loginform = () => {


    const loginData = [
        {email:'1998keshavyadav@gmail.com',password:'kapil98yadaV@',userName:'Keshav Yadav',city:'Gajraula',dirstict:'Amroha'}
    ]

    // const [log]
    function login(){
        console.log(loginData[0]);
        
    }

    function RegisterPage(){
        console.log('hello');
        
    }
    return (
        <section id='loginForm' className=''>

            <form class="max-w-sm mx-auto my-5">

                <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="email" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                </div>
                {/* <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
                        <FaRegUserCircle />
                    </div>
                    <input type="text" id="name-address-icon" class="bg-gray-50 my-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" />
                </div> */}
                <div class="my-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    <span><a className='text-xs'>Forgot Password?</a></span>
                        <div class="flex w-auto items-center h-5 float-right">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
                </div>
                <div className='flex flex-col justify-center w-auto'>
                    <button type='button'  className='bg-blue-500 rounded-sm px-25 cursor-pointer my-2 py-2' onClick={login}>Login</button>
                    {/* <span className='text-center'>or</span> */}
                    <span className='text-center cursor-pointer' onClick={RegisterPage}><a>Register</a></span>
                    
                </div>
            </form>

        </section>
    )
}
