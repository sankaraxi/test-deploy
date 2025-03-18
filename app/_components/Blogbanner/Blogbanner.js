'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Blogbanner.css";
import { LiaCalendar } from "react-icons/lia";

import { LuCircleUserRound } from "react-icons/lu";

function Blogbanner() {
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
  const fetchCourses = async () => {
      try {
        const response = await fetch("https://medsafe-test-deploy.vercel.app/api/news");
        if (response.ok) {
          const data = await response.json();
          const sortedBlogs = data
          .filter(blog => blog.publish === 1)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
          setBlogs(sortedBlogs);
        } else {
          console.error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("An error occurred while fetching blogs:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="container-fluid" id="blogs">
      <div className="row my-5 pb-5 insightspart">
        <h1 className="text-center subhead2 mb-5">News</h1>
        {blogs.length === 0 ? (
          <div className="col-12 text-center">
            <p>Coming Soon</p>
          </div>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="col-sm-12 col-lg-4 mb-2">
              <div className="card colourcard mt-3 h-100 rounded-3">
                <img
                  src={`https://medsafe-test-deploy.vercel.app/api/uploads/${blog.image}`} 
                  title={blog.news_title}
                  alt={blog.news_title} 
                  className="card-img-top"
                  style={{objectFit:"contain", maxHeight: "300px"}}
                />
                <div className="card-body">
                  <div className="d-flex px-2 align-items-center readbtn">
                    <p>
                      <LuCircleUserRound
                        style={{
                          fontSize: "22px",
                          verticalAlign: "middle",
                          color: "#64B556",
                        }}
                      />{" "}
                      by Admin /
                    </p>
                      <p className="d-flex gap-1 align-items-center" style={{paddingLeft: "10px"}}>
                        <LiaCalendar
                          style={{
                            fontSize: "22px",
                            verticalAlign: "middle",
                            color: "#64B556",
                          }}
                        />
                        {new Date(blog.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                      </p>
                  </div>
                  <h5 className="card-title text-dark blogtitle px-2">
                    <b className="title-ellipsis">{blog.news_title}</b>
                  </h5>
                  <Link
                    className="px-2 readbtn my-2"
                    href={`/news/${blog.id}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center pb-4">
        {" "}
        <Link href="/news" style={{ color: "#64B556" }}>
          View All
        </Link>
      </div>
    </div>
  );
}

export default Blogbanner;
