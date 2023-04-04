import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import BlogCards from "./BlogCards";
import Loading from "../Loading/Loading";
const Homepage = () => {
  const url = "https://kalikablog.onrender.com/blog";
  const divSlider = useRef();
  const [Blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(0);
  const [loadData, setLoadData] = useState(false);
  // const navigate = useNavigate();
  const fetchTrend = () => {
    try {
      setLoadData(true)
      axios
        .get(`${url}`)
        .then((res) => {
          setBlogs(res.data.data);
          setLoadData(false)
        })
        .catch((err) => {
          console.log(err);
          setLoadData(false)
        });
    } catch (error) {
      console.log(error);
      setLoadData(false)
    }
  };
  useEffect(() => {
    fetchTrend();
  }, []);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      console.log("scrolling");
      if (index >= Blogs.length - 1) {
        setIndex(0);
        divSlider.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        setIndex(index + 1);
        divSlider.current.scrollBy({
          top: 0,
          left: window.innerWidth,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, [index, Blogs.length]);

  return (
    <>
      {loadData ? <Loading /> : (
        <div>
          {/* <Loading /> */}
          <div className="text-center text-5xl font-bold mt-[3%] mb-[4%]">
            Trending
          </div>
          <div className="">
            <div className="flex w-full overflow-hidden" ref={divSlider}>
              {Blogs.map((val, i) => {
                return (
                  <div>
                    <div className="w-screen">
                      <div
                        key={i}
                        className={`mt-5 rounded-md w-11/12 mx-auto cursor-pointer border-2 ${index === i ? "transition-all delay-200 duration-200" : ""}  `}
                      >
                        <Link to={`/singleblog/${val._id}`}>
                          <div className="md:flex gap-9">
                            <div className="w-[100%] h-[100%]">
                              <div className="w-full h-96">
                                <img
                                  src={val.image[0].path}
                                  alt="a place holder text"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-5 justify-center w-fit">
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
                                    alt="a place holder text"
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
                    className={`text-6xl   ${index === i ? "text-sideColor" : "text-gray-500"
                      }`}
                  >
                    .
                  </button>
                );
              })}
            </div>
            <div>
              <BlogCards setLoadData={setLoadData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
