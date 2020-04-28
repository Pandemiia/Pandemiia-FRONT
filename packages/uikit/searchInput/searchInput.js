import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchInput.scss';

// const searchInput = ({ label, ...props }) => {
//   return (
//     <label className={styles.searchInputWrapper}>
//       {label && <span>{label}</span>}
//       <input {...props} type="text" name="" placeholder="Пошук серед закладів" />
//     </label>
//   );
// };

const searchInput = () => {
  return (
    <label className={styles.searchInputWrapper}>
      <input type="text" name="" placeholder="Пошук серед закладів" />
    </label>
  );
};
// const searchInput = ({ label, ...props }) => {
//     return (
//       <label className={styles.searchInputWrapper}>
//         {label && <span>{label}</span>}
//         <input {...props} type="text" name="" placeholder="Пошук серед закладів" />
//       </label>
//     );
//   };
searchInput.propTypes = {
  label: PropTypes.string
};

export default searchInput;
