import React from 'react'
import BannerSlider from '../component/BannerSlider'
import Service from '../component/Service'
import HotRentalsDeals from '../component/HotRentalsDeals'

const UserHomePage = () => {
  return (
    <div>
      <BannerSlider />
      <Service />
      <div className='px-2'>
       <HotRentalsDeals />
      </div>
    </div>
  )
}

export default UserHomePage
