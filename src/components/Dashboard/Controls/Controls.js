import React, { Component } from 'react';
import PropTypes from 'prop-types';
import types from '../utils/TransactionTypes';
import styles from './Controls.module.css';

class Controls extends Component {
  static propTypes = {
    onClickDeposit: PropTypes.func.isRequired,
    onClickWithdraw: PropTypes.func.isRequired,
  };

  state = { inputValue: 0 };

  handlerChange = e => {
    this.setState({ inputValue: +e.target.value });
  };

  render() {
    const { inputValue } = this.state;
    const { onClickDeposit, onClickWithdraw } = this.props;
    return (
      <section className={styles.controls}>
        <input
          className={styles.input}
          type="number"
          value={inputValue}
          onChange={this.handlerChange}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => onClickDeposit(inputValue)}
        >
          {types.DEPOSIT}
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => onClickWithdraw(inputValue)}
        >
          {types.WITHDRAW}
        </button>
      </section>
    );
  }
}

export default Controls;
