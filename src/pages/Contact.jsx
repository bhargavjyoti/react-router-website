import React from 'react'
import Footer from '../layouts/Footer'

const Contact = () => {
  return (
    <>
        <form>
            <div className="container mx-auto">
                <div className='flex items-center justify-center min-h-screen'>
                    <div className='p-6 bg-gradient-to-r from-primary to-secondary rounded-lg'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-md font-medium text-white'>Name</label>
                            <input type="text" id='name' className='bg-white text-black w-full rounded-lg p-2 focus:outline-none md:w-72' required/>
                            {/* Email */}
                            <label htmlFor="email" className='text-md font-medium text-white'>Email</label>
                            <input type="email" id='email' className='bg-white text-black w-full rounded-lg p-2 focus:outline-none md:w-72' required/>
                            {/* Text Area */}
                            <label htmlFor="message" className='text-md font-medium text-white'>Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" className='bg-white text-black rounded-lg p-2 mb-4 focus:outline-none' required></textarea>
                            {/* Button */}
                            <div>
                                <button className='bg-white text-black rounded-md px-8 py-2 transition-all duration-300 hover:scale-110'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <Footer />
    </>
  )
}

export default Contact