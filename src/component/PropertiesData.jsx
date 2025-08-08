import React from 'react'
import img1 from '../Images/noImageBg.svg';
import { IoIosAdd } from 'react-icons/io';
import { MdCurrencyRupee } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
export const PropertiesData = () => {

    let timeStamp = Date.now();

    console.log(timeStamp);


    const propertyData = [
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43  ', time: '08/08/2025', owner: 'Rohit' },
        { images: [{ src: img1, alt: '...' }], title: 'Supertech Eco Village',heilights:[{helight:'1 BHK'},{helight:'North-East Facing'},{helight:'Full Power Backup'}], bedroom: '2 BHK',bathroom:'1 Baths', location: 'Grater Noida', price: 20000,deposit:'11000', size: 117,area:'Build up', description: 'Find this 2 bhk apartment for rent in sector 43 ', time: '08/08/2025', owner: 'Rohit' }
    ]
    return (
        <div className=''>
            {propertyData.map((item, index) => {
                return (
                    <div key={index} className="flex w-full  bg-white border border-gray-200 rounded-lg shadow-sm sm:p-2 dark:bg-gray-800 dark:border-gray-700 mt-5">
                        <div className=''>
                            {item.images.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img className='h-[18vw]' src={item.src} alt='' />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='w-[37vw] '>
                            <div className="px-6">
                                <h5 className='text-sm font-bold' >{item.title}</h5>
                                <h6 className='text-base'>{item.bedroom} Flat for rent {item.location}</h6>
                            </div>
                            <div className='flex m-2'>

                                <div className='px-5 border-e border-gray-300'>
                                    <div className='flex '>
                                        <span className='text-sm'><MdCurrencyRupee className="mt-1 text-lg" /></span>
                                        <p className='text-sm'>{item.price}/month</p>
                                    </div>
                                    <div className='flex'>
                                        <span className='text-sm'><IoIosAdd className="mt-1  text-lg" /></span>
                                        <p className='text-sm'>Deposit</p>
                                        <span className='text-base'><MdCurrencyRupee className='mt-1 text-lg' /></span>
                                        <p>{item.deposit}</p>
                                    </div>
                                </div>

                                <div className='px-5 border-e border-gray-300'>
                                    <div className='flex'>
                                        <p className='text-sm'>{Math.round(item.size * 10.76391041671)} Sqft ({item.size}sqm)</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-sm'>{item.area} Area</p>
                                    </div>

                                </div>
                                <div className='px-5'>
                                    <div className='flex'>
                                        <p className='text-sm'>{item.bedroom}</p>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-sm'>{item.bathroom}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                <p className='text-sm font-bold ps-5'>Highlights:</p>
                                    </div>
                                    {item.heilights.map((item,index) => {
                                        if(index <= 1){
                                        return(
                                    <div className='' key={index}>
                                        <p className='text-gray-500 text-sm mx-1 px-2 py-0.5 bg-gray-100 rounded-full'>{item.helight}</p>
                                    </div>
                                )
}})} 
                                {item.heilights.length >= 3 ? 
                                   <p className='text-gray-500 text-sm mx-1 px-2 py-0.5 bg-gray-100 rounded-full'>+{item.heilights.length}</p>: ''
                            }
                                <p className=''></p>
                            </div>
                            <div className="flex flex-wrap w-[32vw] ps-8 pt-3 ">
                                <p className='text-sm wrap-normal md:wrap-break-word ...'>{item.description}</p>
                            </div>
                            <div className='flex px-5 pt-2 justify-between'>
                                <div>
                                    <p className='text-base text-gray-500'>Dealer . 1w ago</p>
                                    <p className='text-sm font-bold text-gray-500'>{item.owner}</p>
                                </div>
                                <div className=''>
                                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">View Number</button>
                                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 px-6 cursor-pointer relative"><span className='p-2'><FaPhoneAlt className='absolute left-2 top-4' /> Contact</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
