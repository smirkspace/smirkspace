import React from 'react';
import './index.css';

export default function Guide() {
  return (
    <div>
      <p id="#top">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</p>
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</p>
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p>
      <table className="table22">
        <tr>
          <td className="td11">
            <iframe className="iframe33" width="760" height="516" src="http://www.youtube.com/embed/pdOwkcoZfX4?rel=0&showinfo=0&autohide=1" frameBorder="0" allowFullscreen />
          </td>
        </tr>
        <tr>
          <td className="td22">
            <h1 className="paragraph33">Check out a sample user case. </h1>
            <iframe className="iframe22" width="660" height="415" src="https://www.youtube.com/embed/a6zcJPBVmqg?rel=0&showinfo=0&autohide=1" frameBorder="0" allowFullscreen />
            <p className="paragraph44">Demonstration of a real-life situation and how to go about it.</p>
          </td>
        </tr>
        <tr>
          <td className="td44">
          <img className="img23" width="500" height="450" src="/images/back5.png" />
            <h1 className="paragraph77">Variety of different topics</h1>
            <p className="paragraph88">Choose a favourite topic or create a new one and start chatting. You will be matched
            instantly to the first person available.
            </p>
          </td>
        </tr>
        <tr>
          <td className="td33">
            <h1 className="paragraph55">Fun. Easy. Free</h1>
            <p className="paragraph66">Sign up today and start connecting</p>
            <button className="go_top"><a href="#" className="scrollup">Sign up</a></button>
          </td>
        </tr>
      </table>
    </div>
  );
}
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 600);
    return false;
  });
});
