import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onNext, onPrev, currentIndex, pubCount }) => (
  <section className={styles.controls}>
    <button
      type="button"
      onClick={onPrev}
      className={styles.button}
      disabled={currentIndex === 0}
    >
      Назад
    </button>
    <button
      type="button"
      onClick={onNext}
      className={styles.button}
      disabled={currentIndex === pubCount}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  pubCount: PropTypes.number.isRequired,
};

export default Controls;
