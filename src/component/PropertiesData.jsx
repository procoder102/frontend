import React from 'react'
import img1 from '../Images/noImageBg.svg';
import { IoIosAdd } from 'react-icons/io';
import { MdCurrencyRupee } from "react-icons/md";

export const PropertiesData = () => {
  return (
    <div className=''>
        <div className="flex w-full  bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className=''>
                <img src={img1} alt='' />
            </div>
            <div className=''>
                <h5 className='' >he</h5>
                <h6 className=''>st</h6>
                <div className=''>
                    <div>
                        <div className='flex'>
                            <span><MdCurrencyRupee className="mt-1 text-lg" /></span>
                            <p>75000/month</p>
                        </div>
                        <div className='flex'>
                            <span><IoIosAdd className="mt-1 me-2 text-lg" /></span>
                            <p>Depo </p>
                            <span><MdCurrencyRupee className='mt-1 text-lg' /></span>
                            <p>7500</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex'>
                            <span><MdCurrencyRupee className="mt-1 text-lg" /></span>
                            <p>75000/month</p>
                        </div>
                        <div className='flex'>
                            <span><IoIosAdd className="mt-1 me-2 text-lg" /></span>
                            <p>Depo </p>
                            <span><MdCurrencyRupee className='mt-1 text-lg' /></span>
                            <p>7500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
