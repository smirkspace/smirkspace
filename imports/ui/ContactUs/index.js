import React from 'react';
import './index.css';

export default function ContactUs() {
  function toTop(){
    window.scrollTo(0, 0);
  }
  toTop();
  return (
    <div>
      <h4 id="header">Contact us:</h4>
      <p>
        You can reach us at
        <strong> smirkspace@gmail.com</strong>
        , feel free to provide us with feedback or any concerns.
      </p>
      <div className="empty-box" />
    </div>
  );
}
