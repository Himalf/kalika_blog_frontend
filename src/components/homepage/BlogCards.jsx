import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BlogCards = () => {
    const navigate = useNavigate();
    const [BlogCard, setBlogCard] = useState([]);
    const url = "https://kalikablog.onrender.com/blog";
    const fetchBlog = () => {
        try {
            axios.get(url).then(res => {
                setBlogCard(res.data.data);
            }).catch(err => {
                console.log(err);
            })

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBlog();
    }, [])
    return (
        <div className='mt-[5%]'>
            <div className='grid grid-cols-3'>
                {BlogCard.map((val, i) => {
                    return (
                        <div key={i} className='mx-[7%] mt-[5%] cursor-pointer' onClick={() => {
                            navigate(`/singleblog/${val._id}`)
                        }}>

                            <div className='flex flex-col border-2 h-[37rem] rounded-lg w-[100%]'>
                                <div className=''><img src={val.image[0].path} className='w-full h-80' /></div>
                                <div className='p-2 h-28'>
                                    <div className='mt-10 w-96 font-bold'>{val.title},{val.sub_title}<div className='text-gray-300'>{val.date}</div></div>
                                </div>
                                <div className='text-gray-500 w-fit line-clamp-2 p-2 '>{val.description}</div>
                                <div className='flex items-center gap-2 mt-[5%] p-2'>
                                    {val.image.slice(1, 2).map((val, i) => (<div key={i}><img src={val.path} className='w-12 h-12 rounded-full' alt='profile' /></div>))}
                                    <div className='font-bold'>{val.author_name}</div>
                                    <div>{val.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default BlogCards