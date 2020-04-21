import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import Pagination from './Pagination.jsx';
import Graph from './Graph.jsx';
import * as d3 from 'd3';
import '../styles/App.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      paginatedReviews: [],
      currentPage: 0,
      reviewsPerPage: 7,
      searchResults: [],
      searchInput: '',
      searching: false,
      totalAverageRating: 0,
      cleanRating: 4,
      socialRating: 5,
      comfortRating: 4,
      locationRating: 3,
      serviceRating: 5,
      sleepRating: 4,
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.pageForward = this.pageForward.bind(this);
    this.pageBack = this.pageBack.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.setRatings = this.setRatings.bind(this);
    this.cancelSearchHandler = this.cancelSearchHandler.bind(this);
  }

  getReviews() {
    axios.get('/reviews')
      .then((response) => {
        this.paginate(response.data);
        this.setState({
          searching: false,
          reviews: response.data
        });
      })
      .then(() => {
        this.setRatings();
      })
      .then(() => {
        d3.select('.GraphContainer').selectAll('svg').remove();
        this.addGraph();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchHandler() {
    let searchArr = this.state.reviews.slice();
    let tempArr = [];
    for (let i = 0; i < searchArr.length; i++) {
      const reviewText = searchArr[i].body.toLowerCase();
      if (reviewText.includes(this.state.searchInput)) {
        tempArr.push(searchArr[i]);
      }
    }
    this.setState({
      searching: true
    });
    this.paginate(tempArr);
  }

  paginate(reviews) {
    let result = [];
    let page = [];
    for (let i = 0; i < reviews.length; i += 7) {
      for (let j = 0; j < this.state.reviewsPerPage; j++) {
        page.push(reviews[j + i]);
      }
      result.push(page);
      page = [];
    }
    this.setState({
      reviews: reviews,
      paginatedReviews: result
    });
  }

  inputHandler(e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  pageBack(e) {
    if (this.state.currentPage > 0) {
      const pageState = this.state.currentPage - 1;
      console.log(pageState);
      this.setState({
        currentPage: pageState
      });
    }
  }

  pageForward(e) {
    if (this.state.currentPage < this.state.paginatedReviews.length) {
      const pageState = this.state.currentPage + 1;
      this.setState({
        currentPage: pageState
      });
    }
  }

  setRatings() {
    const reviews = this.state.reviews;
    const dataSet = [ 'clean_rating', 'social_rating', 'comfort_rating', 'location_rating', 'service_rating', 'sleep_rating' ];
    const ratingState = [ 'cleanRating', 'socialRating', 'comfortRating', 'locationRating', 'serviceRating', 'sleepRating' ];
    let totalAverage = 0;
    dataSet.forEach((rating, index ) => {
      let sum = 0;
      reviews.forEach(review => {
        sum += review[rating];
      });
      let average = (sum / rating.length / 5);
      totalAverage += average;
      average = average.toFixed(1);
      this.setState({
        [ ratingState[index] ]: average
      });
    });
    totalAverage = totalAverage / 6;
    totalAverage = totalAverage.toFixed(2);
    this.setState({
      totalAverageRating: totalAverage
    });
  }
  // console.log('average: ', totalAverage)

  addGraph() {
    const graph = this.state;
    const dataSet = [graph.cleanRating, graph.socialRating, graph.comfortRating, graph.locationRating, graph.serviceRating, graph.sleepRating ];

    d3.select('.GraphContainer').selectAll('.Rating')
      .data(dataSet)
      .append('svg')
      .style('background', 'lightgrey')
      .style('border-radius', '5px')
      .style('margin-bottom', '2px')
      .attr('width', 300)
      .attr('height', 4)
      .attr('fill', '#00b4b4')
      .append('rect')
      .attr('width', (d) => d * 20)
      .attr('height', 4)
      .attr('x', 0)
      .attr('y', 0);
  }

  cancelSearchHandler() {
    this.getReviews();
    this.setState({
      searchInput: ''
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {

    let currReviews = this.state.paginatedReviews[this.state.currentPage] || [];

    return (
      <>
        <div className="ReviewBody">
          <div className="ReviewTop">
            <ReviewHeader
              reviews={this.state.reviews}
              inputHandler={this.inputHandler}
              searchInput={this.state.searchInput}
              searching={this.state.searching}
              cancelSearchHandler={this.cancelSearchHandler}
              searchHandler={this.searchHandler}
              totalAverageRating={this.state.totalAverageRating}
            />
            {currReviews.map(review => {
              return <Review
                key={review.id}
                review={review} />;
            })}
            <Pagination
              reviews={this.state.reviews}
              reviewsPerPage={this.state.reviewsPerPage}
              currentPage={this.state.currentPage}
              pageForward={this.pageForward}
              pageBack={this.pageBack}
            />
          </div>
        </div>
        <div>
          <Graph
            cleanRating={this.state.cleanRating}
            socialRating={this.state.socialRating}
            comfortRating={this.state.comfortRating}
            locationRating={this.state.locationRating}
            serviceRating={this.state.serviceRating}
            sleepRating={this.state.sleepRating}
          />
        </div>
      </>
    );
  }
}

export default Reviews;