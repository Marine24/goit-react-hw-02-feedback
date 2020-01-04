import React from 'react';
import PropTypes from 'prop-types';
import Statistic from '../Statistic/Statistic';
import Styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2 className={Styles.statisticTitle}>Statistics</h2>
      <Statistic label="Good" value={good} />
      <Statistic label="Neutral" value={neutral} />
      <Statistic label="Bad" value={bad} />
      <Statistic label="Total" value={total} />
      <Statistic label="PositivePercentage" value={positivePercentage} />
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
