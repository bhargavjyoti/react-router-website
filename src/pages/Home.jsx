import React from 'react'
import Safari from '../assets/safari.jpg'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <>
      <div className='container mx-auto'>
        <section className='hero'>
          <div className="flex flex-col text-center min-h-[calc(100vh_-_16vh)] items-center justify-center">
            <h1 className='text-4xl font-extrabold md:text-6xl capitalize mb-8'>Once in a lifetime <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>wildlife experience</span></h1>
            <h4 className='text-lg mb-4 text-gray-500'>Welcome to Vnn. Your one stop place for all your adventure needs.</h4>
            {/* button */}
            <div>
              <button className='px-4 py-2 bg-primary text-white rounded-md shadow-md mt-4 transition-all lg:hover:scale-110 md:px-8 md:py-4'>Book Now</button>
            </div>
          </div>
          {/* SVG Arrow Icon with animation */}
          <div className='flex justify-center items-end'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
          </div>    
        </section>
        <section className='mt-8'>
          <div className="container mx-auto">
            <div className="flex flex-col-reverse min-h-screen items-center justify-center md:flex-row md:justify-around max-w-8xl">
              {/* Left Text */}
              <div className='max-w-md text-center lg:text-left'>
                <h3 className='text-4xl font-semibold lg:text-6xl mt-8 lg:mt-0'>Incredible <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>India</span></h3>
                <p className='text-gray-500 my-4 font-light'>One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.</p>
                <div>
                  <button className='px-4 py-2 bg-primary text-white rounded-md shadow-md mt-4 transition-all lg:hover:scale-110 md:px-8 md:py-4'>Book Now</button>
                </div>
              </div>
              {/* Right */}
              <div className='w-auto md:max-w-3xl m-4 md:m-0'>
                <img src={Safari} alt="" className='rounded-lg'/>
              </div>
            </div>
          </div>
        </section>
        {/* Why Us */}
        <section className='bg-gradient-to-r from-primary to-secondary rounded-t-3xl mt-8'>
          <h2 className='text-center text-3xl text-white font-bold py-4 md:text-5xl'>Why Choose Us</h2>
          <div className="flex flex-col min-h-auto items-center justify-center py-8 gap-6 md:flex-row md:justify-around md:gap-0">
            <div className='bg-white h-56 w-56 p-4 rounded-3xl shadow-lg text-center'>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className='font-semibold py-2'>Pocket Friendly</h3>
              <p className='text-gray-500 font-light leading-tight'>Tight on budget? Our plans are pocket friendly so that you can enjoy without breaking a bank</p>
            </div>
            {/* Second */}
            <div className='bg-white h-56 w-56 p-4 rounded-3xl shadow-lg text-center'>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className='font-semibold py-2'>English Speaking Environment</h3>
              <p className='text-gray-500 font-light leading-tight'>Coming from a different cultural background? Our staffs speak fluent english </p>
            </div>
            {/* Third */}
            <div className='bg-white h-56 w-56 p-4 rounded-3xl shadow-lg text-center'>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
              </div>
              <h3 className='font-semibold py-2'>Video Allowed</h3>
              <p className='text-gray-500 font-light leading-tight'>We don't stop our tourists from capturing the unseen like others do. You're your own boss</p>
            </div>
            {/* Fourth */}
            <div className='bg-white h-56 w-56 p-4 rounded-3xl shadow-lg text-center'>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
              </div>
              <h3 className='font-semibold py-2'>Pickup and Drop</h3>
              <p className='text-gray-500 font-light leading-tight'>Welcome! We'll pick you up from the airport and drop you as well after you are done exploring for free.</p>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className='my-16'>
          <h2 className='text-center text-3xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Happy Customers</h2>
          <div className='flex flex-col gap-4 my-8 md:flex-row'>
            <div className="flex flex-col items-center p-6 gap-6 rounded-lg text-white bg-primary md:w-1/3">
              <h5 className='text-lg font-bold'>Skshm</h5>
              <p className='text-sm text-darkGrayishBlue'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et nostrum ipsam in asperiores deleniti similique eos? Numquam explicabo fugiat, a iure voluptatum, vel natus alias voluptate nam repellat sed.
              </p>
            </div>
            {/* Second */}
            <div className="flex flex-col items-center p-6 gap-6 rounded-lg text-white bg-primary md:w-1/3">
              <h5 className='text-lg font-bold'>Dheeraj</h5>
              <p className='text-sm text-darkGrayishBlue'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et nostrum ipsam in asperiores deleniti similique eos? Numquam explicabo fugiat, a iure voluptatum, vel natus alias voluptate nam repellat sed.
              </p>
            </div>
            {/* Third */}
            <div className="flex flex-col items-center p-6 gap-6 rounded-lg text-white bg-primary md:w-1/3">
              <h5 className='text-lg font-bold'>Rohit</h5>
              <p className='text-sm text-darkGrayishBlue'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et nostrum ipsam in asperiores deleniti similique eos? Numquam explicabo fugiat, a iure voluptatum, vel natus alias voluptate nam repellat sed.
              </p>
            </div>
          </div>
          {/* second row */}
          <div className='flex flex-col justify-center gap-4 md:flex-row'>
            <div className="flex flex-col items-center p-6 gap-6 rounded-lg text-white bg-primary md:w-1/2">
              <h5 className='text-lg font-bold'>Ashish</h5>
              <p className='text-sm text-darkGrayishBlue'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et nostrum ipsam in asperiores deleniti similique eos? Numquam explicabo fugiat, a iure voluptatum, vel natus alias voluptate nam repellat sed.
              </p>
            </div>
            {/* Second */}
            <div className="flex flex-col items-center p-6 gap-6 rounded-lg text-white bg-primary md:w-1/2">
              <h5 className='text-lg font-bold'>Roushan</h5>
              <p className='text-sm text-darkGrayishBlue'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et nostrum ipsam in asperiores deleniti similique eos? Numquam explicabo fugiat, a iure voluptatum, vel natus alias voluptate nam repellat sed.
              </p>
            </div>
            {/* Third */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home