import React from 'react';
import PropTypes from 'prop-types';

const select = ({ options, ...props }) => {
  return (
    <select {...props}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

select.propTypes = {
  options: PropTypes.array.isRequired
};

export default select;
