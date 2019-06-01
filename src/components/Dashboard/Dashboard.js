/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import uuidv1 from 'uuid/v1';
import styles from './Dashboard.module.css';
// import TransactionHistory from '../TransactionHistory/TransactionHistory';
// import Balance from '../Balance/Balance';
import Controls from './Controls/Controls';
import types from './utils/TransactionTypes';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 5000,
  };

  createTransaction = (amount, type) => {
    return {
      id: uuidv1(),
      type,
      amount,
      date: new Date().toLocaleString(),
    };
  };

  handleDeposit = value => {
    if (value === 0) {
      // eslint-disable-next-line no-alert
      alert('Введите сумму для проведения операции!');
    } else {
      this.setState(state => {
        const updatedBalance = state.balance + value;
        return {
          history: [
            ...state.history,
            this.createTransaction(value, types.DEPOSIT),
          ],
          balance: updatedBalance,
        };
      });
    }
  };

  handleWithdraw = value => {
    if (value > this.state.balance) {
      // eslint-disable-next-line no-alert
      alert('На счету недостаточно средств для проведения операции!');
    } else if (value === 0) {
      // eslint-disable-next-line no-alert
      alert('Введите сумму для проведения операции!');
    } else {
      this.setState(state => {
        const updatedBalance = state.balance - value;
        return {
          history: [
            ...state.history,
            this.createTransaction(value, types.WITHDRAW),
          ],
          balance: updatedBalance,
        };
      });
    }
  };

  countTotalBy = type =>
    this.state.history
      .filter(t => t.type === type)
      .reduce((acc, current) => acc + current.amount, 0);

  render() {
    const { history, balance } = this.state;
    const balanceVars = {
      income: this.countTotalBy(types.DEPOSIT),
      expenses: this.countTotalBy(types.WITHDRAW),
      balance,
    };

    return (
      <div className={styles.dashboard}>
        <Controls
          onClickDeposit={this.handleDeposit}
          onClickWithdraw={this.handleWithdraw}
        />
        <Balance {...balanceVars} />

        <TransactionHistory transactions={history} />
      </div>
    );
  }
}
