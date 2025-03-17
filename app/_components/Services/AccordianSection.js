'use client';

import { useState } from "react";
import { accordianData } from "@/app/_utils/services/accordianData";
import { FaPlus, FaMinus } from "react-icons/fa";

import styles from "./Services.module.css";


const AccordianSection = ({ index }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const clickHandle = (id) => {
    // Toggle the expanded state for the clicked item
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };
  const currentIndex = index === 0 ? "serviceOne" : "serviceTwo";

  return (
    <div
      className="position-relative d-flex flex-column justify-content-center align-items-center py-5"
      style={{
        width: "100%",
        background: "linear-gradient(to right, var(--gradientfrom), var(--gradientto))",
      }}
    >
      <div
        className={`bg-white ${styles['accordion-container']}`}
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {accordianData[0]?.[currentIndex]?.map((item) => {
          const isExpanded = expandedItemId === item.id;

          return (
            <div
              key={item.id}
              className="d-flex flex-column border-bottom py-3 px-4 cursor-pointer"
              onClick={() => clickHandle(item.id)}
              style={{ minHeight: "80px",  borderColor: "var(--subhead2-color)", borderWidth: "1px", borderStyle: "solid" }}
            >
              <div className="row d-flex align-items-center justify-content-center">
                {/* Icon Section: 1 grid */}
                <div className="col-1"> 
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center bg-black "
                    style={{ width: "36px", height: "36px", fontSize: "17px",  color: "var(--subhead2-color)" }}
                  >
                    {isExpanded ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>

                {/* Title Section: 11 grid */}
                <div className="col-11">
                  <h1
                    className={styles['acc-text-pad']}
                    style={{ fontSize: "20px", color: "var(--subhead2-color)" }}
                  >
                    {item.title}
                  </h1>
                  
                </div>
                {/* Display content only for the expanded item */}
                <div
                    className={`ps-4 row overflow-hidden transition-all col-11`}
                    style={{
                      maxHeight: isExpanded ? "1000px" : "0",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    {/* <p
                      className="mt-3 text-muted"
                      dangerouslySetInnerHTML={{ __html: servicesData[index]?.description }}
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.7",
                        textAlign: "justify",
                      }}
                    >
                      {item.content}
                    </p> */}
                     <p
    className="mt-3 text-muted"
    style={{
      fontSize: "15px",
      lineHeight: "1.7",
      textAlign: "justify",
    }}
    dangerouslySetInnerHTML={{ __html: item.content }}
  />
                  </div>
              </div>
            </div>
          );
        })}
      </div>

      <img 
        src='./SER_TOPGREYSVG.png'
        alt=""
        className="position-absolute"
        style={{
          top: "0",
          left: "0",
          margin: "auto",
          width: "",
          maxWidth: "",
        }}
      />
    
      <img 
          src='./SER_BOTTOMGREYSVG.png'
          alt=""
          className="position-absolute"
          style={{
              bottom: "0",
              right: "0",
              margin: "auto",
              width: "",
              maxWidth: "",
          }}
      />
    </div>
  );
};

export default AccordianSection;



