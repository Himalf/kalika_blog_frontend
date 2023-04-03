import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineSearch } from 'react-icons/ai'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { FaFacebookF } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Navbar = ({ sideMenu, setsideMenu }) => {
    const navigate = useNavigate();

    return (
        <div className={`bg-mainColor flex items-center justify-evenly p-2 mt-3 border-b-2 pb-6 sticky `}>
            <div className='flex  gap-3 border-2 items-center p-1 rounded-xl w-[20rem]' >
                <AiOutlineSearch className='text-sm text-gray-400' />
                <input type="search" name="" id="" placeholder='search...' className='outline-none w-[20rem]' />
            </div>
            <div className='text-xl font-bold cursor-pointer' onClick={() => {
                navigate("/");
            }}>
                MAGDESIGN
            </div>
            <div className='flex gap-3 cursor-pointer'>
                <div><AiOutlineTwitter /></div>
                <div><FaFacebookF /></div>
                <div><AiOutlineInstagram /></div>
            </div>
            <div>
                <div className='text-4xl cursor-pointer'
                    onClick={() => {
                        // setsideMenu(!sideMenu)
                        console.log("clicked")
                        setsideMenu(true);
                    }}
                >
                    {sideMenu ? <RxCross2 /> : <RxHamburgerMenu />} </div>
            </div>
        </div>
    )
}

export default Navbar