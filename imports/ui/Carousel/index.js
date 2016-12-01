import React, { Component } from 'react';
import Slider from 'react-slick';
import Button from '../SpaceButton';

const NextArrow = React.createClass({
  render() {
    return (
      <div {...this.props}>
        <button type="button" className="col-sm-offset-6"><i className="glyphicon glyphicon-arrow-right" aria-hidden="true" /></button>
      </div>
    );
  },
});

const PrevArrow = React.createClass({
  render() {
    return (<div {...this.props} >
      <button type="button" className="col-sm-offset-6"><i className="glyphicon glyphicon-arrow-left" aria-hidden="true" /></button>
    </div>);
  },
});

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToScroll: 3, // normal computer
      slidesToShow: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [{
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      }, {
        breakpoint: 480, // mobile phone
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }],
    };

    return (
      <div className="row align-center">
        <Slider {...settings}>
          <div>
            <br />
            <br />
            <h3>
              <div className="travel_button">
                <Button source="images/new_travel.jpg" spaceIsDeployed="true" buttonName="travel" />
              </div>
            </h3>
          </div>

          <div>
            <br />
            <br />
            <h3>
              <div className="parenting_button">
                <Button source="images/Parenting.jpg" buttonName="parenting" />
              </div>
            </h3>
          </div>

          <div>
            <br />
            <br />
            <h3>
              <div className="insomnia_button">
                <Button source="images/insomnia.png" buttonName="insomnia" />
              </div>
            </h3>
          </div>

          <div>
            <br />
            <br />
            <h3>
              <div className="lgbt_button">
                <Button source="images/LGBT.jpg" buttonName="lgbt" />
              </div>
            </h3>
          </div>

          <div>
            <br />
            <br />
            <h3>
              <div className="fitness_button">
                <Button source="images/workout.jpg" buttonName="fitness" />
              </div>
            </h3>
          </div>

          <div>
            <br />
            <br />
            <h3>
              <div className="got_button">
                <Button source="images/thrones.jpg" buttonName="got" />
              </div>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
