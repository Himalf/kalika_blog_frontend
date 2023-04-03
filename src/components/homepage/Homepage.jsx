import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BlogCards from "./BlogCards";
const Homepage = () => {
  const url = "https://kalikablog.onrender.com/blog";
  const [Blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const fetchTrend = () => {
    try {
      axios
        .get(`${url}`)
        .then((res) => {
          setBlogs(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTrend();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (index >= Blogs.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
  }, [index, Blogs.length]);

  return (
    <div>
      <div className="text-center text-5xl font-bold mt-[3%] mb-[4%]">
        Trending
      </div>
      <div className="">
        <div className="flex w-full bg-red-300 overflow-scroll">
          {Blogs.map((val, i) => {
            return (
              <div>
                <div
                  key={i}
                  className={`mt-5 rounded-md mx-[10%] w-screen bg-green-300 cursor-pointer border-2 transition-all delay-100 duration-1000
${index === i ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}

                `}
                >
                  <Link to={`/singleblog/${val._id}`}>
                    <div className="md:flex gap-9">
                      <div className="w-[100%] h-[100%]">
                        <div className="w-full h-96">
                          <img
                            src={val.image[0].path}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 p-3 justify-center pl-0 w-fit">
                        <div className="flex gap-2">
                          <div>{val.title},</div>
                          <div>{val.sub_title}--</div>
                          <div
                            className="text-gray-600
                    "
                          >
                            {val.date}
                          </div>
                        </div>
                        <div className="text-xl">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: val.description,
                            }}
                            className="md:w-[95%] line-clamp-5 lg:line-clamp-4 sm:line-clamp-none"
                          />
                        </div>
                        <div className="flex items-center mt-2 gap-2">
                          <div className="">
                            <img
                              src={val.image[0].path}
                              className="w-12 h-12  rounded-full"
                            />
                          </div>
                          <div> {val.author_name}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-1">
          {Blogs.slice(0, 5).map((val, i) => {
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`text-6xl   ${
                  index === i ? "text-sideColor" : "text-gray-500"
                }`}
              >
                .
              </button>
            );
          })}
        </div>
        <div>
          <BlogCards />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
