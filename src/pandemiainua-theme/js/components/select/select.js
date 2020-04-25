import React from 'react';
import PropTypes from 'prop-types';

function select({ options, ...props }) {
  return (
    <select {...props}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

select.propTypes = {
  options: PropTypes.array.isRequired
};

export default select;

// function select({ options, ...props }) {
//   return (
//     <select {...props}>
//       {options.map((item, index) => {
//         return (
//           <option key={item.value} value={item.value}>
//             {item.label}
//           </option>
//         );
//       })}
//     </select>
//   );
// }

// function select({ options, ...props }) {
//   return (
//     <select {...props}>
//       {options.map(({ value, label }) => (
//         <option key={value} value={value}>
//           {label}
//         </option>
//       ))}
//     </select>
//   );
// }
