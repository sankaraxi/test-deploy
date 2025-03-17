import { servicesData } from "@/app/_utils/services/servicesData";
import styles from "./Services.module.css";
import Image from "next/image";


const DynamicServices = ({ index }) => {
  
  return (
    <div
      id={servicesData[index]?.id}
      className={`position-relative d-flex flex-column flex-sm-row align-items-center justify-content-between ${styles['overall-pad']} ${styles['other-pad']}`}
    >
      {/* Content */}
      <div className="w-100 w-sm-50">
        <h1 className={`font-weight-bold ${styles['main-title']} mb-3`} style={{ fontSize: "32px", color: "var(--heading)" }}>
          {servicesData[index]?.title}
        </h1>
        <p
          className={styles['main-text']}
          dangerouslySetInnerHTML={{
            __html: servicesData[index]?.description,
          }}
          style={{ fontSize: "18px", lineHeight: "1.6", textAlign: "justify" }}
        ></p>
      </div>

      {/* Image */}
      <div className="w-100 w-sm-50 position-relative d-flex justify-content-center mt-4 mt-sm-1">
        {/* Main Image */}
        <div className="position-relative" style={{ zIndex: 10 }}>
          <Image
            src={servicesData[index]?.image_id}
            alt={servicesData[index]?.alt}
            className={styles['img-size']}
            width={419}
            height={419}
           title={servicesData[index]?.tit}
          />
        </div>
      </div>

      <img
        src="./SER_TOPSVG.png"
        alt=""
        className="position-absolute"
        style={{zIndex:"-1000", top: "-240px", left: "-100px", margin: "auto" }}
      />

      <img
        src="./SER_BOTTOMSVG.png"
        alt=""
        className="position-absolute"

        style={{zIndex:"-1000", bottom: "0px", right: "0px", margin: "auto"}}
      />
    </div>
  );
};

export default DynamicServices;


