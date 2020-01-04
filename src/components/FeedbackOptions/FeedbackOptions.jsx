import React from 'react';
import PropTypes from 'prop-types';
import Styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ option, onLeaveFeedback, name }) => {
  return (
    <button
      className={Styles.feedbackButtons}
      name={name}
      onClick={onLeaveFeedback}
      type="button"
    >
      {option}
    </button>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FeedbackOptions;
