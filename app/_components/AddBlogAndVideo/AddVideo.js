'use client';
import React, { useEffect, useState } from "react";
import "./Addblog.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import convertYouTubeLink from "./convertYouTubeLink.js";

function AddVideo() {
  const [link, setLink] = useState("");
  const [videos, setVideos] = useState([]);
  const [userRole, setUserRole] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!link) {
      toast.error("All fields are required.");
      return;
    }

    const newLink = convertYouTubeLink(link);

    try {
      const response = await fetch("https://medsafe-test-deploy.vercel.app/api/addvideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ video: newLink, published: 0 }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setLink("");
        fetchVideos(); // Refresh videos list
      } else {
        toast.error(data.message || "Failed while adding video.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await fetch("https://medsafe-test-deploy.vercel.app/api/videos");
      const finaldata = await response.json();
      setVideos(finaldata.videos.reverse()); // Display latest videos first
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    setUserRole(userRole);

    if (userRole !== "1") {
      window.location.href="/medsafelogin"; // Redirect if not an admin
    }
    fetchVideos();
  }, [userRole]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://medsafe-test-deploy.vercel.app/api/video/delete/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        fetchVideos(); // Refresh videos list after deletion
      } else {
        toast.error(data.message || "Failed to delete video.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handlePublish = async (id,currentStatus) => {
    try {
      await axios.put(`https://medsafe-test-deploy.vercel.app/api/video/publish/${id}`, {
        publish: !currentStatus // Toggle publish status
      });
      toast.success(currentStatus ? "Video Unpublished" : "Video Published");
      fetchVideos();
    } catch (error) {
      toast.error("Failed to update video status");
    }
  }

  return (
    <div className="container bgblogs">
      <div className="row mx-1 mx-md-3">
        <h1 className="newshead pt-5 pb-1">Add Video</h1>
        <div className="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="my-3 row align-items-center">
              <label htmlFor="link" className="col-sm-2 col-form-label">
                Video Link
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  id="link"
                  className="form-control"
                  placeholder="Paste the YouTube video link here"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                />
              </div>
              <div className="col-sm-2">
                <button type="submit" className="btn btnsub w-100">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Available Videos Section */}
     <div className="row mx-1 mx-md-3">
        <h1 className="newshead pt-5 pb-1">Available Videos</h1>
        {videos.length > 0 ? <div className="d-flex flex-wrap" style={{justifyContent:"center"}}>
          {videos.map((video, index) => (
            <div key={index} className="m-2 p-2 border rounded shadow-sm" style={{alignItems:"center", width: "380px" }}>
              <iframe
                width="100%"
                height="180"
                src={video.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="d-flex justify-content-between">
                  <button
                    className={`btn ${video.publish ? "btn-warning" : "btn-success"} mt-2 bt-w`}
                    onClick={() => handlePublish(video.id, video.publish)}
                  >
                    {video.publish ? "Unpublish" : "Publish"}
                  </button>
                <button
                  className="btn btn-danger mt-2 bt-w"
                  onClick={() => handleDelete(video.id)}
                >
                  Delete
                </button>
              </div>
              
            </div>
          ))} 
        </div>: <p style={{paddingTop:"40px", textAlign:"center"}}>No videos available</p>}
      </div>

      <ToastContainer />
    </div>
  );
}

export default AddVideo;
