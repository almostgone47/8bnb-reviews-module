import React from 'react';
import '../styles/Review.css';

const Review = ({review}) => {
  const reviewAve = ((review.clean_rating + review.social_rating + review.comfort_rating + review.location_rating + review.service_rating + review.sleep_rating) / 6).toFixed(1);

  return (
    <div className="ReviewCard">
      <div className="ReviewHeader">
        <img src={review.image} />
        <div className="NameDate">
          <p className="Name">{review.author}</p>
          <p className="Date">{review.created_at}</p>
        </div>
        <div className="ReviewHeadAve">
          {reviewAve}
        </div>
      </div>
      <p className="ReviewBody">{review.body}</p>
      <div className="ReviewRatingCol">
        <div>
          <ul>
            <li>Cleanliness</li>
            <li>Social Scene</li>
            <li>Comfort</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="CardNums">{review.clean_rating}.0</li>
            <li className="CardNums">{review.social_rating}.0</li>
            <li className="CardNums">{review.comfort_rating}.0</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Location</li>
            <li>Customer Service</li>
            <li>Sleep</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="CardNums">{review.location_rating}.0</li>
            <li className="CardNums">{review.service_rating}.0</li>
            <li className="CardNums">{review.sleep_rating}.0</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Review;