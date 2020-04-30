import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.scss';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['a', 'b', 'a', 'b'],
      offset: 0,
      perPage: 3
    };
  }
  handlePageClick = data => {
    this.setState({ data });
  };
  render() {
    return (
      <div>
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          breakLabel={'...'}
          breakLinkClassName={styles.brakeLink}
          breakClassName={styles.brake}
          pageCount={20}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={styles.pagination}
          pageClassName={styles.paginationPage}
          pageLinkClassName={styles.paginationPageLink}
          activeLinkClassName={styles.paginationPageLinkActive}
          previousClassName={styles.previousBtn}
          nextClassName={styles.nextBtn}
          previousLinkClassName={styles.previousLink}
          nextLinkClassName={styles.nextLink}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default Pagination;
