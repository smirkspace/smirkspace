import React from 'react';
import './index.css';

export default function Guide() {
  return (
    <div>
      <p id="#top" />
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</p>
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</p>
      <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p>

      <table className="table22">
        <tbody>
          <tr>
            <td className="td11" id="whatwedo">
              <iframe width="760" height="516" src="http://www.youtube.com/embed/pdOwkcoZfX4?rel=0&showinfo=0&autohide=1" frameBorder="0" allowFullScreen />
            </td>
          </tr>
          <tr>
            <td className="td22" id="usecase">
              <div className="text">
                <p className="paragraph33">Check out a sample user case. </p>
                <p className="paragraph44">Demonstration of a real-life situation and how to go about it.</p>
              </div>
              <iframe className="iframe22" width="660" height="415" src="https://www.youtube.com/embed/a6zcJPBVmqg?rel=0&showinfo=0&autohide=1" frameBorder="0" allowFullScreen />
            </td>
          </tr>
          <tr>
            <td className="td44">
              <img className="img23" alt="topics" width="500" height="450" src="/images/back5.png" />
              <p className="paragraph77">Variety of Different Topics</p>
              <p className="paragraph88">Choose a favourite topic or create a new one and start chatting. You will be matched
              instantly to the first person available.
              </p>
            </td>
          </tr>
          <tr>
            <td className="td33" id="bottom_splash">
              <p className="paragraph55">Fun. Easy. Free</p>
              <p className="paragraph66">Sign up today and start connecting&nbsp;<button className="go_top"><a href="#" className="scrollup">Sign up</a></button>
              </p>
            </td>
          </tr>
        </tbody>
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
