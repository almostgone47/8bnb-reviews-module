import React from 'react';
import star from '../images/star.png';

const ReviewHeader = (props) => {
  return (
    <>
      <div>
        <h4 className="Reviews">Reviews</h4>
        <h4 className="ReviewNum LeftNum">Overall Average Rating <img src={star}/>{props.totalAverageRating}</h4><h4 className="ReviewNum RightNum">{props.reviews.length} </h4><span >reviews</span>
      </div>

      <input
        type="text"
        className="ReviewSearch"
        placeholder="Search reviews.."
        name="searchInput"
        onChange={props.inputHandler}
        value={props.searchInput}
      />
      <div className="ButtonContainer">
        <button
          className="CancelSearchBtn"
          style={{display: props.searching ? 'block' : 'none' }}
          onClick={props.cancelSearchHandler}>
            X
        </button>
        <button
          style={{display: props.searching ? 'none' : 'block' }}
          onClick={props.searchHandler}
          type="submit"
          className="SearchBtn">
            &#x1F50D;
        </button>
      </div>
    </>
  );
};

export default ReviewHeader;