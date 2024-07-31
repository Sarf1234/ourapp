import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProductCards from '@/ui/ProductCards'
import { RentalHPtDealsApi } from '@/utility/userApiCall'

const HotRentalsDeals = async() => {
    const productData = await RentalHPtDealsApi()

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold  text-lg md:text-2xl border-b-[3px] py-4 text-[#003459] border-[#144169]">
          Hot Rental Deals
        </h1>
        <div className="flex justify-center items-center">
          <p className="mx-2 text-black hidden md:block">View All</p>
          <MdOutlineKeyboardArrowRight className="text-base rounded-full text-white md:text-black text-center md:bg-white bg-[#144169]" />
        </div>
      </div>
      <hr></hr>
      <div className="flex md:justify-between justify-around items-center flex-wrap gap-8 my-12">
        {productData.map((item) => (
          <ProductCards data={item} key={item.product_id} />
        ))}
      </div>
    </div>
  )
}

export default HotRentalsDeals
