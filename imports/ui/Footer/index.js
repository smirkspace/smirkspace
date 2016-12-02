import React from 'react';
import { Link } from 'react-router';
import './index.css';

export default function Footer() {
  return (
    <footer className="footer"><Link to="/about-us" className="divButton">About us</Link> &nbsp; | &nbsp;
    <Link to="/contact-us" className="divButton2">Contact us</Link></footer>
  );
}
