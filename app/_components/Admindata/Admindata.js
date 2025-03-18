'use client';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./Admindata.css";
import { Link } from "react-scroll";

function Admindata() {
  const [selectedCategory, setSelectedCategory] = useState("Contact");
  const [generalLeads, setGeneralLeads] = useState([]);
  const [downloadLeads, setDownloadLeads] = useState([]);
  const [subscribedata, setSubscribedata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    setUserRole(userRole);
    if (userRole !== "2") {
      window.location.href="/medsafelogin"; // Redirect if not an admin
    }
    const fetchData = async () => {
      try {
        
        fetch("https://medsafe-test-deploy.vercel.app/api/leads")
        .then(res=>res.json())
        .then(finaldata=>setGeneralLeads(finaldata))
        fetch("https://medsafe-test-deploy.vercel.app/api/leadsdownload")
        .then(res=>res.json())
        .then(finaldata=>setDownloadLeads(finaldata))
        // Fetch subscribe data
        fetch("https://medsafe-test-deploy.vercel.app/api/subscribe")
        .then(res=>res.json())
        .then(finaldata=>setSubscribedata(finaldata.subscriptions))
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userRole]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    window.location.href="/";
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const exportToExcel = (data, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${filename}.xlsx`);
  };

  const TableComponent = ({ data, headers }) => {
    if (!Array.isArray(data) || data.length === 0) {
      return <p>No data available for this category.</p>;
    }

    return (
      <div className="table-responsive table-sales">
        <table className="w-100">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((lead, index) => (
              <tr key={index}>
                {Object.keys(lead).map((key, idx) => (
                  <td key={idx}>{lead[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center headblog my-3 subhead2">Leads Page</h1>
      <div className="row m-4">
        <div className="col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start">
          {["Contact", "Downloads", "Subscribe"].map((category) => (
           
            <Link
              key={category}
              to={category.toLowerCase()} // Matches the `id` of the target element
              smooth={true}
              className={`${
                selectedCategory === category ? "active" : ""
              } mb-2 mb-md-0 text-decoration-none text-dark fw-bold`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Link>
          ))}
          <Link className="logouttxt" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </div>

      <div className="row">
        {loading ? (
          <div>Loading data...</div>
        ) : (
          <>
            {selectedCategory === "Contact" && (
              <>
                <div className="d-flex justify-content-between mb-3">
                  <h1>{selectedCategory} Leads</h1>
                  <button
                    className="leadsdownloadbtn p-2"
                    onClick={() => exportToExcel(generalLeads, "General_Leads")}
                  >
                    Download Leads <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
             
                <TableComponent className="table-responsive"
                  data={generalLeads}
                  headers={[
                    "S.no",
                    "Name",
                    "Designation",
                    "Organization",
                    "Email",
                    "Phone Number",
                    "Message",
                    "Time",
                  ]}
                />
              </>
            )}

            {selectedCategory === "Downloads" && (
              <>
                <div className="d-flex justify-content-between mb-3">
                  <h1>{selectedCategory} Leads</h1>
                  <button
                    className="leadsdownloadbtn p-2"
                    onClick={() => exportToExcel(downloadLeads, "Download_Leads")}
                  >
                    Download Leads <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
                <TableComponent
                  data={downloadLeads}
                  headers={[
                    "S.no",
                    "Name",
                    "Designation",
                    "Organization",
                    "Email",
                    "Phone Number",
                    "Time",
                  ]}
                />
              </>
            )}

            {selectedCategory === "Subscribe" && (
              <>
                <div className="d-flex justify-content-between mb-3">
                  <h1>{selectedCategory} Leads</h1>
                  <button
                    className="leadsdownloadbtn p-2"
                    onClick={() => exportToExcel(subscribedata, "Subscribe_Leads")}
                  >
                    Download Leads <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
            
                <TableComponent
                  data={subscribedata}
                  headers={["S.no", "Email"]}
                />
               
              </>
            )}
            {/* {selectedCategory === "Subscribe" && (
  
)} */}

          </>
        )}
      </div>
    </div>
  );
}

export default Admindata;
