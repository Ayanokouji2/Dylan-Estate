import React from 'react'
import asset from '../../assets/asset'
import { NavLink } from 'react-router-dom'
import { MdOutlineTranslate } from "react-icons/md";
import { LuUser } from "react-icons/lu";
const Navbar = () => {
    return (
        <nav className=' flex justify-between px-12 py-2 items-baseline bg-[#FCF8F4] border-[#F6EFE6] '>
            <div className="nav-logo">
                <img src={asset.navLogo} alt="" />
            </div>
            <div className='nav-list uppercase flex gap-10 font-inter-bold '>
                <NavLink to='/' >properties</NavLink>
                <NavLink to='/dashboard' >my dashboard/activity</NavLink>
                <NavLink to='/listyourprop' >list your property</NavLink>
                <NavLink to="contact" >contact us</NavLink>
                <NavLink to="more">more</NavLink>
                <div>|</div>
                <div className="right-logo flex items-baseline text-2xl gap-5">
                    <MdOutlineTranslate />
                    <LuUser />
                </div>

            </div>

        </nav>
    )
}

export default Navbar
