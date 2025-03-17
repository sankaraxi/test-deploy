import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import styles from './ContactPart.module.css'; // Import CSS file
import Image from 'next/image';
import Link from 'next/link';

function Contactpart() {
  return (
    <div className='d-none d-md-block' style={{ paddingLeft: '68px', paddingRight: '0px', paddingBottom: '11px', paddingTop: '11px' }}>
      <div className='d-flex'>
        <div className='col-md-4'>
          <div className='d-flex gap-4'>
            <div>
              <Link href='https://x.com/OviyaMedSafe' target='_blank'>
                <Image src="/TWT.png" alt='Twitter Logo' className='me-1' width={16} height={16} />
              </Link>
            </div>

            <div>
              <Link href='https://www.facebook.com/OviyaMedSafe' target='_blank'>
                <Image src="/FB.png" alt='Facebook Logo' className='mx-1' width={20} height={20} />
              </Link>
            </div>

            <div>
              <Link href='https://www.youtube.com/channel/UCJMIsvtEWEP0NwUalnRgODQ/videos' target='_blank'>
                <Image src="/YT.png" alt='YouTube Logo' className='mx-1' width={22} height={22} />
              </Link>
            </div>

            <div>
              <Link href='https://www.linkedin.com/company/oviya-medsafe/' target='_blank'>
                <Image src="/LNKDIN.png" alt='LinkedIn Logo' className='mx-1' width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className='col-md-8 d-flex align-items-center justify-content-end'>
          <Link href="mailto:info@oviyamedsafe.com" className={`text-decoration-none ${styles['text-size']} d-block d-lg-inline mx-0 mx-md-1 mx-lg-3 ${styles.paracontact}`}>
            <Image src="/ML.png" alt='Mail Logo' className='mx-1' width={20} height={20} />
            info@oviyamedsafe.com
          </Link>
          <a href="tel:+442033936037" className={`text-decoration-none d-block ${styles['text-size']} d-lg-inline mx-0 mx-md-2 mx-lg-3 ${styles.paracontact}`}>
            <FontAwesomeIcon icon={faPhone} className={`me-2 ${styles.iconclr}`} style={{height:"12px"}}/>
            UK +44 20 3393 6037
          </a>
          <a href="tel:+914223502276" className={`text-decoration-none d-block ${styles['text-size']} d-md-inline mx-0 mx-md-2 ms-lg-3 me-lg-5 pe-0 pe-lg-5 ${styles.paracontact}`}>
            <FontAwesomeIcon icon={faPhone} className={`me-2 ${styles.iconclr}`} style={{height:"12px"}}/>
            IND +91 422 3502276
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactpart;
