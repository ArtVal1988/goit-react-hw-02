import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    className={styles.input}
    value={value}
    onChange={onChange}
    placeholder="Type to filter movies..."
  />
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
