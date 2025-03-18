'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

export default function SwiperCard3D() {

  const [videos, setVideos] = useState([]);
  const swiperRef = useRef(null);
  const iframesRef = useRef([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch("https://medsafe-test-deploy.vercel.app/api/videos");
      const finaldata = await response.json();
      const filteredVideos = finaldata.videos.filter(video => video.publish === 1);
      setVideos(filteredVideos.reverse()); // Display latest videos first
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchVideos();
  }, []);

  const playFullscreen = (iframe, index) => {
    swiperRef.current?.autoplay.stop();
    iframesRef.current.forEach((frame, i) => {
      if (frame && i !== index) {
        frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });

    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  return (
    <div className="pb-5 relative">
      <h1 className="subhead2 py-3 text-center">Video Library</h1>
      {videos.length > 0 ?<Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        centeredSlides={false}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <iframe
              className="responsive-iframe"
              src={`${video.video}`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              ref={(el) => (iframesRef.current[index] = el)}
              onClick={(e) => playFullscreen(e.target, index)}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper> : <p className="text-center">No videos available</p>}

      <style jsx>{`
        .swiper-slide-custom {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .responsive-iframe {
          width: 100%;
          height: 250px;
          margin: 10px;
          border-radius: 8px;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .responsive-iframe:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        /* Custom Navigation Buttons */
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.7);
          padding: 15px;
          border-radius: 50%;
          transition: background 0.3s ease-in-out;
          width: 50px;
          height: 50px;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
