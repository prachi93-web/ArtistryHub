import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-112.5 rounded-3xl" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>ArtistryHub was created with a passion for celebrating creativity and craftsmanship. Our platform brings together talented artisans and handmade product enthusiasts, offering a unique collection of carefully crafted items that reflect skill, dedication, and artistic expression.</p>
          <p>From elegant home décor and handcrafted gifts to resin art and crochet creations, every product at ArtistryHub is made with attention to detail and a personal touch. We aim to support local creators while helping customers discover meaningful, high-quality handmade products that stand out from mass-produced alternatives.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Our mission at ArtistryHub is to empower artisans by providing a platform where their creativity and craftsmanship can reach a wider audience. We strive to promote handmade products, support independent creators, and help customers discover unique, high-quality items that bring beauty, authenticity, and meaning into their everyday lives.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are committed to offering handmade products that meet high standards of quality and craftsmanship. Every item is carefully selected and reviewed to ensure it is durable, well-made, and created with attention to detail, giving our customers a reliable and satisfying shopping experience.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping for handmade products is simple and enjoyable. We make it easy for customers to browse unique creations, place orders securely, and have their favorite handcrafted items delivered conveniently to their doorstep.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We believe that great customer service is just as important as great products. Our team is always ready to assist customers with their questions, provide support when needed, and ensure a smooth and satisfying shopping experience from start to finish.</p>        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About