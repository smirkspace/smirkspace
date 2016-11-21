import React from 'react';
import { Link } from 'react-router';
import './index.css';

export default function Footer() {
  return (
    <div>
      <footer className="footer"><Link to="/about-us" className="link1">About us</Link> &nbsp; | &nbsp;
      <Link to="/contact-us" className="link1">Contact us</Link></footer>
    </div>
  );
}
