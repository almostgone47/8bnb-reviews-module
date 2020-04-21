import React from 'react';
import Pagination from './Pagination.jsx';
import '../styles/Review.css';

const ReviewFooter = (props) => {
  return (
    <div className="ReviewFooter">
      <Pagination
        reviews={props.reviews}
        reviewsPerPage={props.reviewsPerPage}
        currentPage={props.currentPage}
        pageHandler={props.pageHandler}
      />
      <p>This host has 23 reviews for other properties.</p>
      <button className="ReviewFooterButton">View Other Reviews</button>
    </div>
  );
};

export default ReviewFooter;