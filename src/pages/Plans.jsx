import React from 'react'
import Footer from '../layouts/Footer'

const Plans = () => {
  return (
    <>
      <div className='container mx-auto my-24 flex flex-col gap-4 items-center justify-center min-h-[calc(100vh_-_8vh)] md:my-0 md:flex-row'>
          <div className='w-72 p-6 bg-primary text-center text-white rounded-xl shadow-lg shadow-gray-400'>
            <h1 className='font-extrabold text-5xl mb-8 text-white'>$99</h1>
            <h4 className='text-bold text-xl bg-secondary rounded-full'>Bronze</h4>
            <p className='text-light mt-2'>2N/3D</p>
            <hr />
            <div className='my-4'>
              <ul className='mt-2 text-lg'>
                <li>Breakfast</li>
                <li>Sight Seeing</li>
                <li>Jeep Available</li>
                <li>Pickup and Drop</li>
                <li>English Support</li>
              </ul>
            </div>
            <button className='bg-white text-primary px-6 py-2 rounded-full transition-all duration-500 hover:scale-110'>Book Now</button>
          </div>
          {/* Second Card */}
          <div className='w-72 p-6 bg-primary text-center text-white rounded-xl shadow-lg shadow-gray-400'>
            <h1 className='font-extrabold text-5xl mb-8 text-white'>$199</h1>
            <h4 className='text-bold text-xl bg-secondary rounded-full'>Silver</h4>
            <p className='text-light mt-2'>4N/5D</p>
            <hr />
            <div className='my-4'>
              <ul className='mt-2 text-lg'>
                <li>Breakfast</li>
                <li>Sight Seeing</li>
                <li>Private Car</li>
                <li>Pickup and Drop</li>
                <li>English Support</li>
              </ul>
            </div>
            <button className='bg-white text-primary px-6 py-2 rounded-full transition-all duration-500 hover:scale-110'>Book Now</button>
          </div>
          {/* Third */}
          <div className='w-72 p-6 bg-primary text-center text-white rounded-xl shadow-lg shadow-gray-400'>
            <h1 className='font-extrabold text-5xl mb-8 text-white'>$299</h1>
            <h4 className='text-bold text-xl bg-secondary rounded-full'>Gold</h4>
            <p className='text-light mt-2'>6N/7D</p>
            <hr />
            <div className='my-4'>
              <ul className='mt-2 text-lg'>
                <li>Luxary Stay with Food</li>
                <li>Sight Seeing</li>
                <li>Private Car</li>
                <li>Pickup and Drop</li>
                <li>English Support</li>
              </ul>
            </div>
            <button className='bg-white text-primary px-6 py-2 rounded-full transition-all duration-500 hover:scale-110'>Book Now</button>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Plans