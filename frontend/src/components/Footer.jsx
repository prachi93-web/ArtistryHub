import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14my-10 mt-40 text-sm mb-5">
            <div>
                <img src={assets.logo} alt="" className="mb-5 w-25 h-10" />
                <p className="w-full md:w-2/3 text-gray-600">
                ArtistryHub is a marketplace dedicated to unique handmade creations. We connect talented artisans with customers who appreciate creativity, craftsmanship, and one-of-a-kind products.
                </p>
            </div>
            <div className='mt-8 sm:mt-0'>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='mt-8 sm:mt-0'>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1-212-987-6754</li>
                    <li>prachism@artistryhub.in</li>
                </ul>
            </div>
        </div>
        <div>
            <hr className='border-gray-500'/>
            <p className="py-5 text-sm text-center">Copyright 2026@ ArtistryHub.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer