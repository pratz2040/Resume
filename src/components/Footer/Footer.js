import React from 'react';
import "./Footer.css";
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">Prathamesh Pawar</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copy">
          Designed by <a href="/" target="_blank" rel="noopener noreferrer">Prathamesh Pawar</a>
          <br />
          Idea by <a href="https://travonline.com" target="_blank" rel="noopener noreferrer">Travonline</a>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
