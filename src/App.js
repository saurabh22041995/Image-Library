import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from "./upload";

function App() {
  return (
    <div>
    <div className="App">
      <Upload/>
    </div>
    <footer className="aps-footer">
      <div className="aps-footer__top" style={{margin: "0% 8% 0% 8%"}}>
        <div className="content ">
          {/* <div className="row">
            <div className="col-sm-6 col-md-12 col-lg-3 footer_social_icons_section">
              <img src="https://aperfectspace.com/images/new-home-logo-black.png" alt className="footer-logo-image" width="180"/>
              <ul className="social-links">
                <li>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-vimeo-v"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 footer_menu_link col-md-8">
              <div className="row">
                <div className="col-4">
                  <ul className="">
                    <li>About</li>
                    <li>Meet The Team</li>
                    <li>Work With Us</li>
                    <li>Help Centre</li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="">
                    <li>List A Space</li>
                    <li>Find A Space</li>
                    <li>Blog (coming soon)</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="">
                    <li>FAQ’s</li>
                    <li>Terms & Privacy</li>
                    <li>Subscribe to our Mailing List</li>
                    <li>
                      <form>
                        <div className="form-group">
                          <input placeholder="Enter your email"/>
                          <button>Subscribe</button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="aps-footer__bottom">
        <div className="content">
          <p className="copyright-text">@ 2020 A Perfect Space</p>
        </div>
      </div> */}
    </footer>
    </div>
  );
}

export default App;
