import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Footer.css"
export default function App() {

  return (
    <>
      <footer class="footer">
        <div class="developer-credits">
          <h3>DEVELOPERS</h3>
          <ul>
            <li>Anshul Chaudhary</li>
            <li>Deepansh Chaturvedi</li>
            <li>Narayani Patil</li>
            <li>Kartikey Hebbar</li>
            <li>Aaryan Praveen</li>
            <li>Jilson Correia</li>
            <li>Kartik Shanbhag</li>
          </ul>
        </div>
        <div class="social-connect">
          <h3>CONNECT WITH US:</h3>
          <ul>
            <li>
              <a href="https://twitter.com/your_twitter_handle">
                <i class="fa fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/your_instagram_handle">
                <i class="fa fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/your_facebook_page">
                <i class="fa fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/your_youtube_channel">
                <i class="fa fa-youtube"></i> Youtube
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
