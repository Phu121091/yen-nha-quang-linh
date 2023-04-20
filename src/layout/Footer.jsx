import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { GrFacebookOption } from 'react-icons/gr';
import { TiSocialInstagram } from 'react-icons/ti';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="logo-footer">
            <img src="./logo-footer.png" alt="logo-ql" />
            <div className="logo-name">
              <span>YẾN NHÀ</span>
              <p>QUANG LINH</p>
            </div>
          </div>
          <div className="contact-item">
            <BsFillTelephoneFill /> <p>098 592 44 95</p>
          </div>
          <div className="contact-item">
            <ImLocation2 /> <p>số 27 ngõ 651/26 Minh Khai</p>
          </div>
          <div className="list-social">
            <div className="social sc1"><GrFacebookOption/></div>         
            <div className="social sc2"><BsTwitter/></div>
            <div className="social sc3"><TiSocialInstagram/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
