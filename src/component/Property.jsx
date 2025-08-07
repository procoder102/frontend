import React from 'react'
import { FilterButton } from './FilterButton'
import { GoChevronDown } from "react-icons/go";
import { Rangeslider } from './Rangeslider';
import { Addfilterbutton } from './Addfilterbutton';
import { Checkfilter } from './Checkfilter';
import { Propertyfilterbutton } from './Propertyfilterbutton';
import { PropertiesData } from './PropertiesData';
export const Property = () => {

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
  return (
    <section>
      <div className='flex justify-around'>
        <div className='w-[30vw]'>
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
                <li className="py-3 sm:py-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Budget</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div>
                    <Rangeslider />
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>No. of Bedrooms</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                      <Addfilterbutton filterButtonname={noBedroom} />
                </li>
                <li className="py-3 sm:py-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Type of property</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                      <Addfilterbutton filterButtonname={propertyType} />
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Available for</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                      <Addfilterbutton filterButtonname={availableFor} />
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Posted by</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                      <Addfilterbutton filterButtonname={postedBy} />
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Furnishing status</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                      <Addfilterbutton filterButtonname={furnishingStatus} />
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Localities</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <Checkfilter  checkItem={localtiesCheck} />
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>New Projects / Societies</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <Checkfilter  checkItem={projectSocities} />
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>No. of bathrooms</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                      <Addfilterbutton filterButtonname={noBathroom} />
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Amenities</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                      <Addfilterbutton filterButtonname={amenitiesFilter} />
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
                  <div className='flex  justify-between'>
                    <h3 className=''>Area</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                  <div>
                    <Rangeslider />
                  </div>
                </li>
                <li className="py-3  sm:pt-4">
                  <div className='flex  justify-between'>
                    <h3 className=''>Available from</h3>
                      <GoChevronDown className='mt-2'/>
                      
                  </div>
                      <Addfilterbutton filterButtonname={availableFrom} />
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
                  <div className='flex  justify-between'>
                    <h3 className=''>Age of Property</h3>
                      <GoChevronDown className='mt-2'/>
                  </div>
                      <Addfilterbutton filterButtonname={propertyAge} />
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className='w-[60vw]'>
          <div className='flex justify-between my-5'>
            <div>
              <Propertyfilterbutton propertyFilterButtonname={propertyFilterButton} />
            </div>
            <div>
              <div className='flex w-[10vw] justify-around'>
                <h5>Short By</h5>
                <GoChevronDown className='mt-2'/>
              </div>
            </div>
          </div>
          <div className=''>
            <PropertiesData />
          </div>
        </div>
      </div>
    </section>
  )
}
