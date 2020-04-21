import React from 'react';
import bathtub from '../images/bathtub.png';
import chair from '../images/chair.png';
import chatBubble from '../images/chatBubbles.png';
import coffeeCup from '../images/coffeeCup.png';
import heart from '../images/heart.png';
import '../styles/Graph.css';

const Graph = (props) => {
  return (
    <div className='GraphContainer'>
      <ul>
        <li>
          <div>
            <span>Cleanliness</span>
            <span className="RatingNum">{props.cleanRating}</span>
          </div>
          <div className="Rating"></div>
        </li>
        <li>
          <div>
            <span>Social Scene</span>
            <span className="RatingNum">{props.socialRating}</span>
          </div>
          <div className="Rating"></div>
        </li>
        <li>
          <div>
            <span>Comfort</span>
            <span className="RatingNum">{props.comfortRating}</span>
          </div>
          <div className="Rating"></div>
        </li>
        <li>
          <div>
            <span>Location</span>
            <span className="RatingNum">{props.locationRating}</span>
          </div>
          <div className="Rating"></div>
        </li>
        <li>
          <div>
            <span>Customer Service</span>
            <span className="RatingNum">{props.serviceRating}</span>
          </div>
          <div className="Rating"></div>
        </li>
        <li>
          <div>
            <span>Sleep</span>
            <span className="RatingNum">{props.sleepRating}</span>
          </div>
          <div className="Rating"></div>
        </li>
      </ul>
    </div>
  );
};

export default Graph;

{ /* <tbody>
  <tr>
    <td className="LowerFirstCol">Sparkling Clean</td>
    <td className="ImageCell"><img src={bathtub} /></td>
    <td className="RatingNum">{props.cleanFav}</td>
    <td>Quick Responses</td>
    <td className="ImageCell"><img src={chatBubble} /></td>
    <td className="RatingNum">{props.responseFav}</td>
  </tr>
  <tr>
    <td className="LowerFirstCol">Outstanding hospitality</td>
    <td className="ImageCell"><img src={heart} /></td>
    <td className="RatingNum">{props.hospitalityFav}</td>
    <td>Stylish space</td>
    <td className="ImageCell"><img src={chair} /></td>
    <td className="RatingNum">{props.stylishFav}</td>
  </tr>
  <tr>
    <td className="FirstCol">Amazing amenities</td>
    <td className="ImageCell"><img src={coffeeCup} /></td>
    <td className="RatingNum">{props.amenitiesFav}</td>
    <td></td>
    <td></td>
    <td className="RatingNum"></td>
  </tr>
</tbody> */ }