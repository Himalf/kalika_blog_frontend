import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
    const Icons = [
        {
            name: <FaFacebookF />,
        },
        {
            name: <FaTwitter />
        },
        {
            name: <FaLinkedinIn />
        },
        {
            name: <FaYoutube />
        },
    ]
    return (
        <div className=' p-5 bg-[#F8F9FA] mt-[8%] '>
            <div className='text-2xl font-bold ml-[10%]'>
                Subscribe to newsletter
            </div>
            <div className='flex w-full items-center justify-center gap-3 '>
                <div className='w-[45rem] border-2 rounded-md'><input type="email" name="subscribe" id="sub" placeholder='Enter your Email' className='w-full outline-none p-3 bg-white' /></div>
                <div className='bg-sideColor w-[30rem] rounded-full text-center font-bold text-xl text-white hover:bg-white hover:shadow-2xl hover:shadow-gray-700 cursor-pointer hover:text-sideColor'><button type='submit' className='p-3'>Subscribe</button></div>
            </div>

            <div className='flex justify-center gap-1 text-lg items-center mt-[10%]'>
                {Icons.map((val, i) => {
                    return (
                        <div key={i} className='bg-gray-300 rounded-lg w-fit p-3 hover:bg-sideColor hover:text-white cursor-pointer'>
                            {val.name}
                        </div>
                    )
                })}
            </div>
            <div className='text-center mt-10'>
                Copyright ©2023 All rights reserved | This template is made by Himal
            </div>
            <div className='mt-5 text-center pb-5'>
                Terms & Conditions/ Privacy Policy
            </div>
        </div>
    )
}

export default Footer