import { strategyData } from '@/app/_utils/services/accordianData';
import styles from './Services.module.css';

const StrategySection = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-1 pt-5 pb-5">
      <h1
        className={`text-center font-weight-bold mb-4 ${styles['main-title']} ${styles['heading-text']}`}
        style={{color: "var(--heading)" }}
      >


Oviya MedSafe has formed strong strategic alliances that enable us to provide  
        <br/> the following services:
      </h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center w-75 mt-4">
        {strategyData.map((item) => (
          <div
            key={item.id}
            className="d-flex flex-column align-items-center justify-content-center bg-white shadow rounded p-3 m-3"
            style={{
              width: "280px",
              height: "283px",
            }}
          >
            <div>
              <img src={item?.image_id} title={item?.tit} alt={item?.alt} className="img-fluid" />
            </div>
            <p
              className="mt-3 text-center secondary-text"
              style={{ fontWeight: "600"}}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default StrategySection;
