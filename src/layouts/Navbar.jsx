import { useState } from "react"
import { Link, Outlet } from "react-router-dom";


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0">
        <div className="flex items-center justify-between container mx-auto p-4 bg-white">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-bold text-3xl">Vnn</h3>
          {/* Menu */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            <Link to="/" className="text-lg hover:underline underline-offset-4 hover:text-primary">Home</Link>
            <Link to="about" className="text-lg hover:underline underline-offset-4 hover:text-primary">About</Link>
            <Link to="plans" className="text-lg hover:underline underline-offset-4 hover:text-primary">Pricing</Link>
            <Link to="contact" className="text-lg hover:underline underline-offset-4 hover:text-primary">Contact</Link>
          </div>
          {/* Hamburger */}
          <svg onClick={() => setIsActive(!isActive)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:hidden hover:cursor-pointer transition-all ease-out duration-700">
          <path strokeLinecap="round" strokeLinejoin="round" d={isActive ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}/></svg>
        </div>
        {/* Hamburger Menu */}
        {isActive && 
          <div onClick={() => setIsActive(false)} className="flex flex-col font-medium gap-4 items-center w-full md:hidden py-4 bg-gradient-to-r from-primary to-secondary text-white absolute">
            <Link to="/" className="text-lg">Home</Link>
            <Link to="about" className="text-lg">About</Link>
            <Link to="plans" className="text-lg">Pricing</Link>
            <Link to="contact" className="text-lg">Contact</Link>
          </div>
        }
      </nav>
      
      <Outlet />
    </>
  )
}

export default Navbar