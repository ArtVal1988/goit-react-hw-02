import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentIndex, pubCount }) => (
  <p className={styles.counter}>
    {currentIndex + 1}/{pubCount + 1}
  </p>
);

Counter.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  pubCount: PropTypes.number.isRequired,
};

export default Counter;
