import React from 'react'

export const Anenimies = () => {
    const OtherRoom = [
        {
            name:'Pooja Room',
            label:'Pooja Room'
        },
        {
            name:'Study Room',
            label:'Study Room'
        },
        {
            name:'Servent Room',
            label:'Servent Room'
        },
        {
            name:'Store Room',
            label:'Store Room'
        }
    ]

    const Furnishing = [
        {
            name:'Furnished',
            label:'Furnished'
        },
        {
            name:'Semi-furnished',
            label:'Semi-furnished'
        },
        {
            name:'Un-furnished',
            label:'Un-furnished'
        }
    ]
  return (
    <>
        <h3 className='text-xl font-medium my-2'>Add amenities/unique features</h3>
        <p className='text-sm text-gray-400 font-normal'>These fields are used to populate USP & captions<br />All fields on this page are optional</p>
        <h3 className='text-xl font-medium my-5'>Other rooms <span className="font-light text-sm text-gray-400">(Optional)</span></h3>
        <div className='flex flex-wrap '>
            {OtherRoom.map((item,index) => {
                return(
                    <button className='border mx-2 p-2 rounded-full cursor-pointer border-1 border-gray-400 text-sm text-gray-400 font-normal'>{item.label}</button>
                )
            })}
        </div>
        <h3 className='text-xl font-medium my-5'>Furnishing <span className="font-light text-sm text-gray-400">(Optional)</span></h3>
        <div className='flex flex-wrap '>
            {Furnishing.map((item,index) => {
                return(
                    <button key={index} className='border mx-2 p-2 rounded-full cursor-pointer border-1 border-gray-400 text-sm text-gray-400 font-normal'>{item.label}</button>
                )
            })}
        </div>
        <h3 className='text-xl font-medium my-5'>Reserved Parking <span className="font-light text-sm text-gray-400">(Optional)</span></h3>
        <div className='flex flex-wrap '>
            <p className='font-light text-gray-400'>Covered Parking 
                <div className="flex">
                <span className="flex items-center justify-center w-10 h-10 text-2xl font-light text-gray-500 border border-gray-400 rounded-full">-</span>
                <p>0</p>
                <span className="flex items-center justify-center w-10 h-10 text-2xl font-light text-gray-500 border border-gray-400 rounded-full">+</span>
                </div>
                </p>
        </div>
    </>
  )
}
