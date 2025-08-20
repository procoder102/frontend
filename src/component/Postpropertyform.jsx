import React, { useEffect, useState } from 'react'
import { Postbasicdetailsform } from './Postbasicdetailsform'
import { Locationbutton } from './Locationbutton'

export const Postpropertyform = () => {
   
   
    const steps = [
        { id: 1, label: "Basic Details", status: true },
        { id: 2, label: "Location Details", status: false },
        { id: 3, label: "Property Profile", status: false },
        { id: 4, label: "Photos,Videos&Voice-Over", status: false },
        { id: 5, label: "Pricing & Others", status: false }
    ]

    

    return (
        <div className='bg-[#d1dede]'>
            <div className='max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex justify-around'>
                    <div className='w-[max-content] p-6 bg-[#d1dede] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                        <div className='flex flex-col space-y-10'>
                            {steps.map((step, index) =>
                                <div key={step.id} className='relative flex items-start'>
                                    {index !== steps.length - 1 && (
                                        <div className={`${step.status === true ? 'absolute left-2.5 top-5 w-0.5 h-[5vw] bg-gray-500' : 'absolute left-2.5 top-5   w-0.5 h-[5vw] bg-white'}`}></div>
                                    )}
                                    <div className='relative z-20'>
                                        <input type="radio"
                                            name={step.label}
                                            checked={step.status}
                                            readOnly
                                            className='w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500' />
                                    </div>
                                    {/* step Label */}
                                    <div className='ml-6'>
                                        <p className='font-medium'>{step.label}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                     <div className='max-w-md'>
                    {/* <Postbasicdetailsform /> */}
                        
                        {/* <Locationbutton /> */}
                                <button type="button" className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue</button>

                     </div>
                </div>
            </div>
        </div>
    )
}
