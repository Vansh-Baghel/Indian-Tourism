import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.scss"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="flex justify-center align-middle">
            <div className="footer-col">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/vansh-baghel-24ab42232/" className="facebook">
                  <LinkedInIcon />
                </a>
                <a href="https://twitter.com/VanshBaghel07" className="facebook">
                  <TwitterIcon />
                </a>
                <a href="https://github.com/Vansh-Baghel" className="github">
                  <GitHubIcon />
                </a>
                <a href="mailto:vanshbaghel912@gmail.com" className="facebook">
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="relative -bottom-10 text-black">
            <div className="col-md-7">
              <p className="copyright tracking-wider">
                © {year} Copyright <span className="font-bold ">Indian Tours</span> by Vansh Baghel. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
