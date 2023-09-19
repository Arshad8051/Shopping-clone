import React from 'react';
import './Footer.css';
import Facebook from "../../productimg/facebook.png"
import Instagram from "../../productimg/instagram.png"
import Linkedin from "../../productimg/linkedin.png"
import Youtube from "../../productimg/youtube.png"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-section'>
        <h2>Shop Non-Stop on Meesho</h2>
        <p>Trusted by More than 1 Crore Indians</p>
        <p>Cash On Delivery | Free Delivery</p>
      </div>
      <div className='footer-section'>
        <h3 className='heading-f'>Quick Links</h3>
        <ul>
          <li>Careers</li>
          <li>Become a Supplier</li>
          <li>Hall of Fame</li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3 className='heading-f'>Legal and Policies</h3>
        <ul>
          <li>Legal and Policies</li>
          <li>Meesho Tech Blog</li>
          <li>Notices and Returns</li>
        </ul>
      </div>
      <div className='footer-section'>
       
        <h3 className='heading-f'>Reach out to us</h3>
       <img className='facebookimg'  src={Facebook} />
       <img className='instagramimg'  src={Instagram} />
       <img className='linkedinimg'  src={Linkedin} />
       <img className='youtubeimg'  src={Youtube} />

      </div>
      <div className='footer-section contact-us'>
        
        <h3 className='heading-f'>Contact Us</h3>
        <p>
          Fashnear Technologies <br />
          Private Limited,<br />
          CIN: U74900KA2015PTC082263<br />
          06-105-B, 06-102,<br />
          (138 Wu) Vaishnavi Signature,<br />
          No. 78/9, Outer Ring Road,<br />
          Bellandur, Varthur Hobli,<br />
          Bengaluru-560103, Karnataka, India<br />
          E-mail address: query@meesho.com<br />
          © 2015-2023 Meesho.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
