import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Statistic.module.css';

const Statistic = ({ label, value }) => {
  return (
    <p className={Styles.statistic}>
      {label}: {value}
    </p>
  );
};
Statistic.defaultProps = {
  value: 0,
};
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
};

export default Statistic;
