import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Singleblog = () => {
    const { id } = useParams();
    const [Loadings, setLoading] = useState(false);
    const url = "https://kalikablog.onrender.com/blog";
    const [oneBlog, setoneBlog] = useState([]);
    const fetchBlog = () => {
        try {
            setLoading(true)
            axios.get(`${url}/${id}`).then(res => {
                setoneBlog([res.data.data])
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchBlog();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {Loadings ? <Loading /> : (
                <div className='mt-[3%]'>
                    <div>
                        {oneBlog.map((val, i) => {
                            return (
                                <div key={i}>
                                    <div className=' md:w-full mx-auto   flex flex-col items-center'>{val.image.slice(1, 2).map((val, i) => (<div key={i}><img src={val.path} className='md:w-20 h-20 rounded-full mx-auto' alt='preview' /></div>))}
                                        <div className='md:text-gray-400 font-bold'>{val.author_name}</div>
                                        <div className='md:text-gray-400 font-bold'>{val.date}</div>
                                    </div>
                                    <div className='text-center'>{val.title},{val.sub_title}</div>

                                    <div className='md:mt-[5%] text-justify mx-[25%] text-xl text-gray-500'><div dangerouslySetInnerHTML={{ __html: val.description }} />
                                        <div><img src={val.image[0].path} className='w-full h-full rounded-lg mt-[3%] mb-[3%]' alt='preview' /></div>
                                        <div className='text-lg'>{val.description}</div>
                                        <div className='text-sm mt-[5%]'>{val.description}</div>
                                        <div className='md:grid grid-cols-3 gap-2 h-full mt-[5%]'>
                                            {val.image.map((value, i) => {
                                                return (
                                                    <div key={i}>
                                                        <img src={value.path} className='rounded-md h-full' alt='preview' />
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
            )}
        </>
    )
}

export default Singleblog