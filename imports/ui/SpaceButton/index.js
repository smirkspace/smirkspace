// imports/ui/Button/index.js
import './index.css'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Button extends Component {
  render () {
    return (
        <Link to={this.props.link}>
            <input type='image' className='spaceButton' src={this.props.source}/>
        </Link>
    )
  }
}

Button.propTypes = {
  source: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
