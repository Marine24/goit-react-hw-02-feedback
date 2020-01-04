import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={Styles.Notification}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
