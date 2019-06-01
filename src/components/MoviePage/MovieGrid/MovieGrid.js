import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieGridItem from '../MovieGridItem/MovieGridItem';

const MovieGrid = ({ items }) => (
  <div className={styles.movieGrid}>
    {items.map(item => (
      <MovieGridItem key={item.id} {...item} />
    ))}
  </div>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
