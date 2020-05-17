import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Box } from '@pinua/uikit';
import styles from './pagination.scss';

class Pagination extends PureComponent {
  static propTypes = {
    onPageChange: PropTypes.func,
    pageCount: PropTypes.number
  };

  handlePageClick = ({ selected }) => {
    const { onPageChange } = this.props;
    const data = selected + 1;
    onPageChange && onPageChange(data);
  };
  render() {
    const { pageCount } = this.props;
    return (
      <Box direction="row" justify="center">
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          breakLabel={'...'}
          breakLinkClassName={styles.brakeLink}
          breakClassName={styles.brake}
          pageCount={pageCount}
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
      </Box>
    );
  }
}

export default Pagination;
