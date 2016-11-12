import React, { Component } from 'react';
import Slider from 'react-slick';
import Button from '../SpaceButton';

const NextArrow = React.createClass({
  render: function f1() {
    return <div {...this.props}>
      <button type="button" className="col-sm-offset-6"><i className="glyphicon glyphicon-arrow-right" aria-hidden="true" /></button>
    </div>
  },
});

const PrevArrow = React.createClass({
  render: function f2() {
    return <div {...this.props} >
      <button type="button" className="col-sm-offset-6"><i className="glyphicon glyphicon-arrow-left" aria-hidden="true" /></button>
    </div>;
  },
});

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }],
    };
    return (
      <div className="align-center">
        <Slider {...settings}>
          <div>
            <h3>
              <div className="travel_button">
                <Button source="images/new_travel.jpg" link="/space/travel" />
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="travel_button">
                <Button source="images/Parenting.jpg" link="/space/travel" />
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="travel_button">
                <Button source="images/insomnia.png" link="/space/travel" />
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="travel_button">
                <Button source="images/LGBT.jpg" link="/space/travel" />
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="travel_button">
                <Button source="images/workout.jpg" link="/space/travel" />
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="travel_button">
                <Button source="images/thrones.jpg" link="/space/travel" />
              </div>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
