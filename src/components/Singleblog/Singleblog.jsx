import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Singleblog = () => {
    const { id } = useParams();
    const url = "https://kalikablog.onrender.com/blog";
    const [oneBlog, setoneBlog] = useState([]);
    const fetchBlog = () => {
        try {
            axios.get(`${url}/${id}`).then(res => {
                setoneBlog([res.data.data])
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBlog();
    }, [])
    return (
        <div className='mt-[3%]'>
            <div>
                {oneBlog.map((val, i) => {
                    return (
                        <div key={i}>
                            <div className='md:w-full mx-auto   flex flex-col items-center'>{val.image.slice(1, 2).map((val, i) => (<div key={i}><img src={val.path} className='md:w-20 h-20 rounded-full mx-auto' /></div>))}
                                <div className='md:text-gray-400 font-bold'>{val.author_name}</div>
                                <div className='md:text-gray-400 font-bold'>{val.date}</div>
                            </div>
                            <div className='text-center'>{val.title},{val.sub_title}</div>

                            <div className='md:mt-[5%] text-center mx-[25%] text-xl text-gray-500'><div dangerouslySetInnerHTML={{ __html: val.description }} />
                                <div><img src={val.image[0].path} className='w-full h-full rounded-lg mt-[3%] mb-[3%]' /></div>
                                <div className='text-lg'>{val.description}</div>
                                <div className='text-sm mt-[5%]'>{val.description}</div>
                                <div className='md:grid grid-cols-3 gap-2 h-full mt-[5%]'>
                                    {val.image.map((value, i) => {
                                        return (
                                            <div key={i}>
                                                <img src={value.path} className='rounded-md h-full' />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>{val.description}</div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Singleblog