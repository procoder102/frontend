import React from 'react'
import { FilterButton } from './FilterButton'
import { GoChevronDown } from "react-icons/go";
import { Rangeslider } from './Rangeslider';
import { Addfilterbutton } from './Addfilterbutton';
import { Checkfilter } from './Checkfilter';
import { Propertyfilterbutton } from './Propertyfilterbutton';
import { PropertiesData } from './PropertiesData';
import { useRef } from 'react';
export const Property = () => {

  const budgetRef = useRef(null);
  const bedroom = useRef(null);
  const  propertytype = useRef(null);
  const avalablefor= useRef(null);
  const postedby= useRef(null);
  const furnishingstatus= useRef(null);
  const localiti= useRef(null);
  const newproject= useRef(null);
  const bathroom= useRef(null);
  const anemate= useRef(null);
  const area= useRef(null);
  const availblefrom= useRef(null);
  const ageofproperty= useRef(null);

  const handleToggle = (ref) => {
    if (ref.current) {
      ref.current.classList.toggle('hidden');
    }
  };
  const noBedroom = [
    {name:'1RK'},
    {name:'2 BHK'},
    {name:'2 BHK'},
    {name:'2 BHK'},
    {name:'2 BHK'},
    {name:'2 BHK'},
  ]
  const propertyType = [
    {name:'Residential Apartment'},
    {name:'Independent/Bulder Floor'},
    {name:'Resident Land'},
    {name:'Independent House/Villa'},
    {name:'Farm House'},
    {name:'1 RK/ Studio Apartment'},
  ]
  const availableFor = [
    {name:'Family'},
    {name:'Single Women'},
    {name:'Single Men'},
    {name:'Tenants With Company Lease'}
  ]

  const postedBy = [
    {name:'Owner'},
    {name:'Builder'},
    {name:'Dealer'},
    {name:'Feature Dealer'}
  ]

  const furnishingStatus = [
    {name:'Semifurnished'},
    {name:'Furnished'},
    {name:'Unfurnished'}
  ]

  const noBathroom = [
    {name:'1'},
    {name:'2'},
    {name:'3'},
    {name:'4'},
    {name:'5'},
  ]

  const amenitiesFilter = [
    {name:'Parking'},
    {name:'Park'},
    {name:'Power Backup'},
    {name:'Vaastu Compliant'},
    {name:'Lift'},
    {name:'Gymnasium'},
    {name:'Club house'},
    {name:'Swimming Pool'},
    {name:'Gas Pipeline'},
    {name:'Security Personal'},
    {name:'Pet Friendly'},
    {name:'Wheelchair Friendly'},
    {name:'AC Room'},
    {name:'Food Service'},
    {name:'Wifi'},
    {name:'Laundry Available'}
  ]

  const localtiesCheck = [
    {name:'Dwarka'},
    {name:'Sector 19 Dwarka'},
    {name:'Sector 23 Dwarka'},
    {name:'Saket'}
  ]
  const projectSocities = [
    {name:'Golf Link DDA Apartment'},
    {name:'DDA Flats Sector 14'},
    {name:'DDA Shaheed Bhagat Singh Apartment'},
    {name:'DDA Sun View Apartment'},
    {name:'DDA Akshardham Apartment'}
  ]

  const availableFrom = [
    {name:'Any Time'},
    {name:'Immediately'},
    {name:'Within 1 Month'},
    {name:'After 1 Month'},
    {name:'Within 3 Months'},
    {name:'After 3 Months'}
  ]

  const propertyAge = [
    {name:'0-1 years old'},
    {name:'1-5 years old'},
    {name:'5-10 years old'},
    {name:'10+ years old'},
    {name:'20+ years old'}
  ]
  const propertyFilterButton = [
    {name:'Owner'},
    {name:'Verified'},
    {name:'Furnished'},
    {name:'With Photos'},
    {name:'With Videoes'}
  ]

  const MobilepropertyFileterButton = [
    {name:'Budget'},
    {name:'No of Bedrooms'},
    {name:'Property Types'},
    {name:'Availabe for'},
    {name:'Posted by'},
    {name:'furnishing status'},
    {name:'Owner'},
    {name:'Verified'},
    {name:'Furnished'},
    {name:'With Photos'},
    {name:'With Videoes'}
  ]

  return (
    <section>
      <div className='flex justify-around flex-col-reverse lg:flex-row'>
        <div className='w-[25vw] size-fit lg:flex'>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className=" font-samibold leading-none text-gray-900 dark:text-white">Apply Filters</h5>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                Clear all
              </a>
            </div>
              <FilterButton btname="1bhk" />
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className='flex justify-between'>
                    <h3 className='font-samibold'>Hide already seen</h3>
                   <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </li>
                <li className="py-3 sm:py-4" >
                  <div className='flex  justify-between cursor-pointer' onClick={() => handleToggle(budgetRef)}>
                    <h3 className=''>Budget</h3>
                      <GoChevronDown className={`mt-2 transition-transform duration-300`}/>
                  </div>
                  <div ref={budgetRef}>
                    <Rangeslider />
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className='flex  justify-between cursor-pointer' onClick={() => handleToggle(bedroom)}>
                    <h3 className=''>No. of Bedrooms</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={bedroom}>
                      <Addfilterbutton filterButtonname={noBedroom} />
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(propertytype)}>
                    <h3 className=''>Type of property</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={propertytype}>
                      <Addfilterbutton filterButtonname={propertyType} />
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'  onClick={() => handleToggle(avalablefor)}>
                    <h3 className=''>Available for</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={avalablefor}>
                      <Addfilterbutton filterButtonname={availableFor} />
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={()=> handleToggle(postedby)}>
                    <h3 className=''>Posted by</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={postedby}>
                      <Addfilterbutton filterButtonname={postedBy} />
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(furnishingstatus)}>
                    <h3 className=''>Furnishing status</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={furnishingstatus}>
                      <Addfilterbutton filterButtonname={furnishingStatus} />
                      </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(localiti)}>
                    <h3 className=''>Localities</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={localiti}>
                  <Checkfilter  checkItem={localtiesCheck} />
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(newproject)}>
                    <h3 className=''>New Projects / Societies</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={newproject}>
                  <Checkfilter  checkItem={projectSocities} />
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(bathroom)}>
                    <h3 className=''>No. of bathrooms</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={bathroom}>
                      <Addfilterbutton filterButtonname={noBathroom} />
                      </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(anemate)}>
                    <h3 className=''>Amenities</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={anemate}>
                      <Addfilterbutton filterButtonname={amenitiesFilter} />
                      </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Properties with photos</h3>
                      <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(area)}>
                    <h3 className=''>Area</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={area}>
                    <Rangeslider />
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(availblefrom)}>
                    <h3 className=''>Available from</h3>
                      <GoChevronDown className='mt-2'/>
                      
                  </div>
                  <div ref={availblefrom}>
                      <Addfilterbutton filterButtonname={availableFrom} />
                      </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className='flex justify-between'>
                    <h3 className='font-samibold'>Verified properties</h3>
                   <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between' onClick={() => handleToggle(ageofproperty)}>
                    <h3 className=''>Age of Property</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div ref={ageofproperty}>
                      <Addfilterbutton filterButtonname={propertyAge} />
                      </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className='w-full lg:w-[70vw]'>
          <div className='flex justify-between my-5'>
            <div className='overscroll-none overflow-auto'>
              <div className="hidden lg:block  lg:relative">
              <Propertyfilterbutton   propertyFilterButtonname={propertyFilterButton} />
              </div>
              <div className='static lg:hidden'>
              <Propertyfilterbutton   propertyFilterButtonname={MobilepropertyFileterButton} />
              </div>
            </div>
            <div>
              <div className='flex w-[10vw] justify-around'>
                <h5>Short By</h5>
                <GoChevronDown className='mt-2'/>
              </div>
            </div>
          </div>
          <div className='overflow-auto'>
            <PropertiesData />
          </div>
        </div>
      </div>
    </section>
  )
}
