import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ income, expenses, balance }) => (
  <section className={styles.balance}>
    <span>&#8593; {income}$</span>
    <span> &#8595; ️{expenses}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default Balance;
