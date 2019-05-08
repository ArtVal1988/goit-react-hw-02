import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

export default class Controls extends Component {
  static defaultProps = {};

  static propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
  };

  state = {};

  render() {
    const { onNext, onPrev } = this.props;

    return (
      <section className={styles.controls}>
        <button type="button" className={styles.button} onClick={onPrev}>
          Назад
        </button>
        <button type="button" className={styles.button} onClick={onNext}>
          Вперед
        </button>
      </section>
    );
  }
}
