import React from 'react'

function Maparea() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
    <div className="row d-flex justify-content-center align-items-center text-center w-100">
      {/* First Map */}
      <div className="col-sm-12 col-md-5 my-1 d-flex justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1124559835844!2d76.92713197504555!3d11.030188789134405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858c8a7c5fcb9%3A0x68130739e0dea19!2sOviya%20MedSafe%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1679835431333!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Oviya MedSafe Location"
        ></iframe>
      </div>

      {/* Green Vertical Line */}
      <div className="col-md-1 d-none d-md-flex justify-content-center align-items-center">
        <div className="separator"></div>
      </div>

      {/* Second Map */}
      <div className="col-sm-12 col-md-5 my-1 d-flex justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0496882078814!2d-0.09613232352858389!3d51.530648471818616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca0ab2ddc0b%3A0xe07efba243f983f1!2s20-22%20Wenlock%20Rd%2C%20London%20N1%207GU%2C%20UK!5e0!3m2!1sen!2sin!4v1738475495374!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Oviya MedSafe Location"
        ></iframe>
      </div>
    </div>

    {/* Inline CSS for the green separator line */}
    <style>
      {`
        .separator {
          width: 3px;
          height: 350px; /* Match the iframe height */
          background-color: #66CC66;
        }
      `}
    </style>
  </div>
);
}
  

export default Maparea