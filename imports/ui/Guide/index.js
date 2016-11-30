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
            <td className="light-background flex-container column-container" id="what-we-do">
              <div className="title dark-text">What We Do</div>
              <iframe width="760" height="516" src="http://www.youtube.com/embed/pdOwkcoZfX4?rel=0&showinfo=0&autohide=1" frameBorder="0" allowFullScreen />
            </td>
          </tr>
          <tr>
            <td className="dark-background flex-container" id="user-story">
              <div className="column-container">
                <div className="title light-text">User Story</div>
                <div className="light-text">A real-life situation and how SmirkSpace can help.</div>
              </div>
              <iframe width="660" height="415" src="https://www.youtube.com/embed/a6zcJPBVmqg?rel=0&showinfo=0&autohide=1" frameBorder="0" allowFullScreen />
            </td>
          </tr>
          <tr>
            <td className="light-background flex-container">
              <img alt="topics" width="500" height="450" src="/images/back5.png" />
              <div className="column-container">
                <div className="title dark-text">A Variety of Different Topics</div>
                <div className="dark-text">
                  Choose your favourite topic and start chatting.
                  You will be matched to the first available person.
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="flex-container column-container" id="bottom-splash">
              <div className="title dark-text">Fun. Easy. Free.</div>
              <div className="offset dark-text">Sign up today and start connecting.&nbsp;<button className="go_top"><a href="#" className="scrollup">Sign up</a></button>
              </div>
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
