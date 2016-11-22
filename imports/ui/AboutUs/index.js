import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import './index.css';

export default class AboutUs extends Component {
  render() {
    return(
      <div>
        <h4 id="header">About us:</h4>
        <p id="paragraph">Students tend to frequent a limited set of places, namely their place of residence and classes.
         The people who share their interests are not necessarily in these same places.
          We intend SmirkSpace to provide a place for people with like interests to connect.
          To this end, we are targeting niche groups in the UVic community; people whose interests are rare
          enough that they won’t necessarily find congenial company without intentionally seeking it out.</p>
          <h4>Our Team:</h4>
          <table >
           <tr>
             <td><img width="200" height="200" src="/images/tim.png" /><p>Tim Baker</p></td>
             <td><img width="200" height="200" src="/images/madd.png" /><p>Madeline Petersen</p></td>
             <td><img width="200" height="200" src="/images/om.png" /><p>Omnielle Halton</p></td>
           </tr>
           <tr>
             <td><img width="200" height="200" src="/images/dah.png" /><p>Dahv Reinhart</p></td>
             <td><img width="200" height="200" src="/images/kol.png" /><p>Kolby Chapman</p></td>
             <td><img width="200" height="200" src="/images/brid.png" /><p>Bridget Rassell</p></td>
           </tr>
          </table>
          <br></br><br></br><br></br><br></br>
      </div>
    );
  }
}
