'use client';
import React, { useEffect, useState } from "react";
import "./Adminview.css";;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { LuCircleUserRound } from "react-icons/lu";
import { LiaCalendar } from "react-icons/lia";

function Adminview({id}) {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
const[email,setEmail]=useState("");

// GET LOGIC FOR BLOGS
  useEffect(() => {
    window.scroll(0,0)
    // Fetch all news from the backend
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://medsafe-test-deploy.vercel.app/api/news/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          setError('Failed to fetch News');
        }
      } catch (error) {
        setError('An error occurred while fetching News');
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await fetch("https://medsafe-test-deploy.vercel.app/api/news");
        if (response.ok) {
          const data = await response.json();
          // Sort blogs by date in descending order and slice to get max 3 items
          const sortedBlogs = data
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
            setRelatedBlogs(sortedBlogs);
        } else {
          console.error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("An error occurred while fetching blogs:", error);
      }
    };
    fetchBlog();
    fetchCourses();
  
  }, [id]);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    try {
      const response = await fetch("https://medsafe-test-deploy.vercel.app/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message); // Display success message
        setEmail(""); // Clear the email input
      } else {
        toast.error(data.message || "Subscription failed."); // Display error message
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later."); // Handle fetch errors
    }
  };


  return (  
    <>

      <div className="container-fluid blogpartcontent px-0 px-md-5">
          <h1 className="newshead py-3">News</h1>
        <div className="row my-3 mx-3">
          <div className="col-sm-12 col-lg-8 shcard">
            {blog ? (
              <>
                <div className="d-flex justify-content-center">
                  <img
                    src={`https://medsafe-test-deploy.vercel.app/api/uploads/${blog.image}`}
                    alt={blog.news_title}
                    className="imsp p-0 blogpartcontent m-0"
                  />
                </div>
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
                <h4 className="py-3 text-dark blogmainhead" >
                {blog.news_title}
                </h4>
                <div
                  dangerouslySetInnerHTML={{ __html: blog.news_content }}
                  style={{ color: "#291750" }}
                />
                  </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
      
        
          <div className="col-sm-12 col-lg-4">
          <div className="d-flex flex-column">
    <h2 className="py-3 latestnewshead">Subscribe Here to Get More Updates!</h2>
    <input
      type="email"
      className="email-input py-3 border-0 emailbrd"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)} // Update state with email input
      />
    <button className="border-0 subscribebtn1 py-3 mt-2"
      onClick={handleSubscribe} // Trigger subscription logic
    >SUBSCRIBE</button>
  </div>
            <div className="latestupdate">
              <h2 className="my-4 latestnewshead">
                <b>Latest News</b>
              </h2>
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  href={`/news/${relatedBlog.id}`}
                  key={relatedBlog.id}
                  style={{ textDecoration: "none" }}>    

                <div className="card shadowcard my-2 p-2" style={{ position: 'relative' }}>
                    <div className="row">
                    <div className="col-9">
                    <h5 className="card-title blogsubtitle my-3">
                      {relatedBlog.news_title}
                    </h5>
                      </div> 
                    <div className="col-3">
                    <div className="rectangular-box text-center">
                  {/* {relatedBlog.date} */}
                  {new Date(relatedBlog.date).toLocaleString('default', { month: 'short', year: 'numeric' })}
                  </div>
                    </div>
                    </div>
                  
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
    
  );
}

export default Adminview;
