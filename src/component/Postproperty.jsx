import React from 'react';
import postPropery from '../Images/Desktop_Animation_compress.gif'

export const Postproperty = () => {
    const lokingButton = [
        {title:'Sell', name:'sell'},
        {title:'Rent / Lease', name:'rent'},
        {title:'PG',name:'pg'}
    ]

    const pg = [
        {title:'Flat/Apartment',name:'flatApartment'},
        {title:'Independent/Builder Floor',name:'independentBuilder'},
        {title:'Independent House / Villa',name:'independentHouse'},
        {title:'1 RK/Studio Apartment',name:'rkStudio'},
        {title:'Serviced Aparment',name:'servicedAparment'}
    ]

    const rentLease = [
        {title:'Flat/Apartment',name:'flatApartment'},
        {title:'Independent/Builder Floor',name:'independentBuilder'},
        {title:'Independent House / Villa',name:'independentHouse'},
        {title:'1 RK/Studio Apartment',name:'rkStudio'},
        {title:'Serviced Aparment',name:'servicedAparment'},
        {title:'farmhouse',name:'farmhouse'},
        {title:'other',name:'other'}
    ]

    const sell = [
        {title:'Flat/Apartment',name:'flatApartment'},
        {title:'Independent/Builder Floor',name:'independentBuilder'},
        {title:'Independent House / Villa',name:'independentHouse'},
        {title:'1 RK/Studio Apartment',name:'rkStudio'},
        {title:'Plot/Land',name:'plotLand'},
        {title:'Serviced Aparment',name:'servicedAparment'},
        {title:'farmhouse',name:'farmhouse'},
        {title:'other',name:'other'}
    ]


    function lookButton(e){
        console.log(e.currentTarget.name);
    }
  return (
   <>
    <section className='m-10'>
        <div className='flex'>
            <div className='w-[50vw]'>
                <h3 className='text-4xl font-bold'>Sell or Rent Property<br /> online faster with DSI.com</h3>
                <img src={postPropery}  alt='...' />
            </div>
            <div>
                <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <h3 className='text-2xl font-semibold py-2'>Start posting your property,it's free</h3>
                    <h3 className='text-xs font-semibold py-2 px-1'>Add Basic details</h3>
                    <h4 className='font-semibold'>You're looking to...</h4>
                    <div className='flex my-3'>
                        {lokingButton.map((item,index) =>{return(
                    <button key={index} name={item.name} className='bg-gray-700 border border-gray-300 font-normal text-gray-500  cursor-pointer px-3 rounded-full text-sm mx-1' onClick={lookButton}>{item.title}</button>
                        )})}
                    </div>
                    <h4 className='font-semibold'>And it's a....</h4>

                </div>
            </div>
        </div>
    </section>
   </>
  )
}
