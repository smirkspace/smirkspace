import Slider from 'react-slick';
import Button from '../SpaceButton';
import React, { Component } from 'react';

const NextArrow = React.createClass({
  render: function() {
    return <div {...this.props}>
    			<button type="button" className="col-sm-offset-6"><i className="glyphicon glyphicon-arrow-right" aria-hidden="true"> </i></button>
    		</div>
  }
});

const PrevArrow = React.createClass({
  render: function() {
    return <div {...this.props} >
       		<button type="button" className="col-sm-offset-6"><i className="glyphicon glyphicon-arrow-left" aria-hidden="true"> </i></button>
       	</div>
  }
});

export default class Carousel extends Component {

  render() {

    //Function to give alerts for buttons not yet made
    //And to incrememnt counters for fake doors
    function spaceNotAvailable() {
      alert('This space is still being developed.\nCheck back soon!');
    }

    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToScroll: 3, //normal computer
      slidesToShow: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [{
        breakpoint: 1024, //tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 480, //mobile phone
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };

    return ( 
      <div className="row align-center">
        <Slider {...settings}> 
          <div>
            <br/>
            <br/>
          	<h3>
            	<div className='travel_button'>
              		<Button source='images/new_travel.jpg' link="/space/travel"/>
            	</div>
            </h3>
          </div>

          <div>
          <br/>
            <br/>
          	<h3>
            	<div className='parenting_button'>
              		<Button source='images/Parenting.jpg' onClick={spaceNotAvailable()} link="/dashboard"/>
            	</div>
            </h3>
          </div>

          <div>
          <br/>
            <br/>
          	<h3>
            	<div className='insomnia_button'>
              		<Button source='images/insomnia.png' link="/dashboard"/>
            	</div>
            </h3>
          </div>

          <div>
          <br/>
            <br/>
          	<h3>
            	<div className='lgbt_button'>
              		<Button source='images/LGBT.jpg' link="/dashboard"/>
            	</div>
            </h3>
          </div>

          <div>
          <br/>
            <br/>
          	<h3>
            	<div className='fitness_button'>
              		<Button source='images/workout.jpg' link="/dashboard"/>
            	</div>
            </h3>
          </div>

          <div>
          <br/>
            <br/>
          	<h3>
            	<div className='got_button'>
              		<Button source='images/thrones.jpg' link="/dashboard"/>
            	</div>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
