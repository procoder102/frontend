import React, { useEffect, useState } from 'react'

export const Postpropertyform = () => {
  const lokingButton = [
        { title: 'Sell', name: 'sell' },
        { title: 'Rent / Lease', name: 'rent' },
        { title: 'PG', name: 'pg' }
    ]
        const pg = [
        { title: 'Flat/Apartment', name: 'flatApartment' },
        { title: 'Independent/Builder Floor', name: 'independentBuilder' },
        { title: 'Independent House / Villa', name: 'independentHouse' },
        { title: '1 RK/Studio Apartment', name: 'rkStudio' },
        { title: 'Serviced Aparment', name: 'servicedAparment' }
    ]

    const rentLease = [
        { title: 'Flat/Apartment', name: 'flatApartment' },
        { title: 'Independent/Builder Floor', name: 'independentBuilder' },
        { title: 'Independent House / Villa', name: 'independentHouse' },
        { title: '1 RK/Studio Apartment', name: 'rkStudio' },
        { title: 'Serviced Aparment', name: 'servicedAparment' },
        { title: 'farmhouse', name: 'farmhouse' },
        { title: 'other', name: 'other' }
    ]

    const sell = [
        { title: 'Flat/Apartment', name: 'flatApartment' },
        { title: 'Independent/Builder Floor', name: 'independentBuilder' },
        { title: 'Independent House / Villa', name: 'independentHouse' },
        { title: '1 RK/Studio Apartment', name: 'rkStudio' },
        { title: 'Plot/Land', name: 'plotLand' },
        { title: 'Serviced Aparment', name: 'servicedAparment' },
        { title: 'farmhouse', name: 'farmhouse' },
        { title: 'other', name: 'other' }
    ]

    const commercialButton = [
        { title: 'Office', name: 'office' },
        { title: 'Plot/Land', name: 'plotLand' },
        { title: 'Retail', name: 'retail' },
        { title: 'Storage', name: 'storage' },
        { title: 'Industry ', name: 'industry' },
        { title: 'Hospitality', name: 'hospitality' },
        { title: 'other', name: 'other' }
    ]
    const [lookSelection, setLookSelection] = useState("sell");
    const [selection, setSelection] = useState("");
    const [propertyTypes,setPropertyTypes] = useState(sell);
    const [itsType,setItsType] = useState('');

    function lookButton(e) {
        // console.log(e.currentTarget.name);
        setLookSelection(e.currentTarget.name)
       
    }

    const resCom = (event) => {
        setSelection(event.target.value);
        console.log("Selected:", event.target.value);
     
    };
    useEffect(() => {
            console.log(selection);
            
            if(selection === 'residential'){
                if(lookSelection === "sell"){
                setPropertyTypes(sell)
                }else if(lookSelection === "rent"){
                    setPropertyTypes(rentLease)
                }else if(lookSelection === "pg"){
                    setPropertyTypes(pg)
                }
            }
            else if(selection === 'commercial'){
                setPropertyTypes(commercialButton)
            }
        },[selection,lookSelection])

        const office = [
            {label:'Ready to move office space',name:'redyOfficeSpace'},
            {label:'Bare Shell office space',name:'bsOfficeSpace'},
            {label:'Co-working Office space',name:'coOffice'},
        ]

        const retail = [
            {label:'Commercial Shops',name:'comShops'},
            {label:'Commercial Showrooms',name:'comShowrooms'}
        ]

        const plotLand = [
            {label:'Commerical Land/Inst.Land',name:'comerLand'},
            {label:'Agricultural/Farm Land',name:'agriLand'},
            {label:'Industrial Lands/Plots',name:'induLands'}
        ]

        const storage = [
            {label:'Storage',name:'storeStorage'},
            {label:'Cold Storage',name:'coldStorage'}
        ]

        const industry = [
            {label:'Factory',name:'factory'},
            {label:'Manufacturing',name:'manufacturing'}
        ]

        const hospitality =[
            {label:'Hotel/Resorts',name:'hotelResorts'},
            {label:'Guest-House/Banquet-Halls',name:'guestHouseBanquet'}
        ]
        
        const other = [];

        const [commericalSpace,setCommericalSpace] =  useState([]);

        function redintalTypes  (event) {
            if(selection === 'commercial'){
                setCommericalSpace(event.target.name);
            }
        console.log('hello',event.target.name);
        setItsType(event.target.name);
        console.log(itsType);
        
    }

    const steps = [
      {id:1,label:"Basic Details",status:true},
      {id:2,label:"Location Details",status:false},
      {id:3,label:"Property Profile",status:false},
      {id:4,label:"Photos,Videos&Voice-Over",status:false},
      {id:5,label:"Pricing & Others",status:false}
    ]
    
  return (
    <div className='bg-[#d1dede]'>
        <div className='max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex justify-around'>
              <div className='w-[max-content] p-6 bg-[#d1dede] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
               <div className='flex flex-col space-y-10'>
                {steps.map((step, index) => 
                  <div key={step.id} className='relative flex items-start'>
                    {index !== steps.length -1 && (
                      <div className={`${step.status === true ? 'absolute left-2.5 top-5 w-0.5 h-[5vw] bg-gray-500': 'absolute left-2.5 top-5   w-0.5 h-[5vw] bg-white'}`}></div>
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
                <h3 className='text-2xl font-medium'>Welcome back kapil,<br />Fill out basic details</h3>
                <div className='my-5'><p className='font-medium '>I'm looking to</p>
                <div className='flex my-3'>
                                {lokingButton.map((item, index) => {
                                    return (
                                        <button key={index} name={item.name} className={`${lookSelection === item.name ? 'bg-gray-100 border border-blue-500    font-normal text-gray-900  cursor-pointer px-3 rounded-full text-sm mx-1' : 'bg-white border border-gray-300 font-normal text-gray-500  cursor-pointer px-3 rounded-full text-sm mx-1'} ${item.name === 'pg' && selection === 'commercial' ? 'hidden':'block'}`} onClick={lookButton}>{item.title}</button>
                                    )
                                })}
                            </div>
                            <div className='my-5'><p className='font-medium '>What kind of property do you have?</p>
                            <div className='flex my-3'>
                                <div className="flex items-center" onChange={resCom}>
                                    <input id="default-radio-1" checked={selection === "residential"} type="radio" value="residential" name="default-radio" className="w-4 h-4 text-blue-600 bg-blue-100 border-gray-300 " />
                                    <label for="default-radio-1" className="m-2 text-sm  text-gray-500 dark:text-gray-300">Residential </label>
                                </div>
                                <div className="flex items-center" onChange={resCom}>
                                    <input checked={selection === "commercial"} disabled={lookSelection === 'pg'} id="default-radio-2" type="radio" value="commercial" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                                    <label for="default-radio-2" className="m-2 text-sm  text-gray-500 dark:text-gray-300">Commerical</label>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                {propertyTypes.map((item,index) =>{return(
                                    <button key={index} name={item.name}  className={`${itsType === item.name ?'bg-gray-100 border border-blue-300 font-normal text-gray-500  cursor-pointer px-2 py-1 m-1  rounded-full text-sm mx-1':'bg-white border border-gray-300 font-normal text-gray-500  cursor-pointer px-2 py-1 m-1  rounded-full text-sm mx-1'}`} onClick={redintalTypes} >{item.title}</button>
                                )})}
                            </div>
                            <div className='my-5'>
                                <h3 className='font-medium'>What Kind of office is it</h3>
                            <div className="flex flex-wrap">
                                {commericalSpace.map((item,index) =>{return(
                                    <button key={index} name={item.name}  className={`${itsType === item.name ?'bg-gray-100 border border-blue-300 font-normal text-gray-500  cursor-pointer px-2 py-1 m-1  rounded-full text-sm mx-1':'bg-white border border-gray-300 font-normal text-gray-500  cursor-pointer px-2 py-1 m-1  rounded-full text-sm mx-1'}`} onClick={redintalTypes} >{item.title}</button>
                                )})}
                            </div>
                            </div>
                            <button type="button" className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue</button>
                            </div>
                </div>
                
              </div>
          </div>
        </div>
    </div>
  )
}
