import React, { } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
const Sidebar = ({ sideMenu, setsideMenu }) => {
    const location = useLocation();
    // console.log(location)
    const sideItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "categories",
            path: "/categories"
        },
        {
            name: "travel",
            path: "/travel"
        },
        {
            name: "food",
            path: "/food"
        },
        {
            name: "technology",
            path: "/technology"
        },
        {
            name: "business",
            path: "/business"
        }
    ]
    return (
        <div className={`fixed  shadow-gray-500 shadow-xl z-50 bg-mainColor p-3  h-screen top-1 right-0 w-[20%] ${sideMenu ? "translate translate-x-0 ease-in-out duration-300 delay-150" : "translate translate-x-96 ease-in-out duration-200 delay-150"}`}>
            <div className='text-5xl absolute top-0 right-0 p-2 cursor-pointer'
                onClick={() => {
                    setsideMenu(false)
                }}
            ><RxCross2 /></div>
            <div className={`flex flex-col gap-3  justify-start mt-[20%] `}>
                {sideItems.map((val, i) => {
                    return (
                        <div key={i} className={`cursor-pointer hover:text-sideColor ml-[10%] capitalize ${location.pathname === val.path ? "text-sideColor" : ""}`}>
                            <Link to={val.path}>
                                <div> {val.name}</div>
                            </Link>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}
export default Sidebar