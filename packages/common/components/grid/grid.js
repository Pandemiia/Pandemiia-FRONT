import React, { memo } from 'react';
import PropTypes from 'prop-types';
import StackGrid from 'react-stack-grid';

const ImageGrid = ({ className, columnWidth, children, ...props }) => {
  return (
    <StackGrid className={className} columnWidth={columnWidth} {...props}>
      {children}
    </StackGrid>
  );
};

ImageGrid.defaultProps = {
  columnWidth: 150
};

ImageGrid.propTypes = {
  columnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string
};

export default memo(ImageGrid);
