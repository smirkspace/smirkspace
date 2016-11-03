import React, { Component } from 'react';
import Slider  from 'react-slick';

import Button from '../SpaceButton';

const SampleNextArrow = React.createClass({
  render: function() {
    return <div {...this.props}>
    			<button type="button"><i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
    		</div>
  }
});

const SamplePrevArrow = React.createClass({
  render: function() {
    return <div {...this.props}>
          		<button type="button"><i className="fa fa-arrow-left"> </i></button>
          	</div>
  }
});



export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 4,

      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          	<h3>
            	<div className='travel_button'>
              		<Button source='images/new_travel.jpg' link="/space/travel"/>
            	</div>
            </h3>
          </div>

          <div>
          	<h3>
            	<div className='travel_button'>
              		<Button source='images/new_travel.jpg' link="/space/travel"/>
            	</div>
            </h3>
          </div>
          <div>
          	<h3>
            	<div className='travel_button'>
              		<Button source='images/new_travel.jpg' link="/space/travel"/>
            	</div>
            </h3>
          </div>
          <div>
          	<h3>
            	<div className='travel_button'>
              		<Button source='images/new_travel.jpg' link="/space/travel"/>
            	</div>
            </h3>
          </div>
          <div>
          	<h3>
            	<div className='travel_button'>
              		<Button source='images/new_travel.jpg' link="/space/travel"/>
            	</div>
            </h3>
          </div>
          <div>
          	<h3>
            	<div className='travel_button'>
              		<Button source='images/new_travel.jpg' link="/space/travel"/>
            	</div>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}