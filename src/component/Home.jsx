import React from 'react';
import banner from '../Images/1366-banner-1.jpg';
import Banner from './customcomponent/Banner';
import Searchbox from './customcomponent/Searchbox';
 const Home = () => {
  return (
    <>
    <div className='relative'>
      <Banner image={banner} />
      <div className='block lg:absolute  top-50 object-cover w-[-webkit-fill-available]'>
      <Searchbox />
      </div>
    </div>
    </>
  )
}


export default Home;