import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2 className={Styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);
Section.defaultProps = {
  children: '',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
