import { NavLink, Link  } from "react-router-dom"
import {  useState } from "react"
import logo from '../logo/logo.svg'

const NavBar = () => {

    //a boolean to check whether see or change the visibility of the nav element
    const [visible, setVisible] = useState<boolean>(false)
    
    const handleVisibility = () => {
        setVisible(!visible)
    }
  return (
    <header className={`w-full  flex  items-center pl-4 pr-4 justify-between h-24 sticky top-0 z-[4] bg-transparent backdrop-blur-lg backdrop-brightness-50`}>
        
            <div className="w-12 md:w-[8%] h-20">
                <Link to="/" className="w-full h-full"><img src={logo} alt="logo" className="w-full h-full object-cover"/></Link>
            </div>
            <button className="w-12 md:w-[4%] h-10  flex flex-col items-center relative justify-around md:hidden" onClick={handleVisibility}>
                <span className={`w-8 h-[2px] bg-white  ${visible? 'rotate-45 absolute z-[1] transition-transform duration-2 delay-75 ease-in-out': ''}`}></span>
                <span className={`w-8 h-[2px] bg-white ${visible? 'opacity-0' :''}`}></span>
                <span className={`w-8 h-[2px] bg-white  ${visible? '-rotate-45 absolute z-[1] transition-transform duration-2 delay-75 ease-in-out': ''}`}></span>
            </button>
            <nav className={`w-full absolute z-[4] top-[94px] right-0 h-[80vh] md:w-[60%] md:static md:h-16 ${visible ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 sm:bg-slate-700 text-white sm:bg-opacity-70 md:bg-transparent md:text-black md:backdrop-blur-none`}>
            <NavLink to="/" className={({ isActive }) =>`${isActive ? "border-[1px] border-white" : ""} w-[80%] md:h-full sm:h-16 md:w-1/5 text-xl font-bold text-center pt-4 text-white rounded-md`}>Home</NavLink>
            <NavLink to="/About-us" className={({ isActive }) =>`${isActive ? "border-[1px] border-white" : ""} w-[80%] md:h-full sm:h-16 md:w-1/5 text-xl font-bold text-center pt-4 text-white rounded-md`}>Who We Are</NavLink>
            <NavLink to="/Projects" className={({ isActive }) =>`${isActive ? "border-[1px] border-white" : ""} w-[80%] md:h-full sm:h-16 md:w-1/5 text-xl font-bold text-center pt-4 text-white rounded-md`}>Projects</NavLink>
            <NavLink to="/Contact" className={({ isActive }) =>`${isActive ? "border-[1px] border-white" : ""} w-[80%] md:h-full sm:h-16 md:w-1/5 text-xl font-bold text-center pt-4 text-white rounded-md`}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default NavBar