import React, { Component } from 'react';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import styles from './MoviePage.module.css';
import movies from '../movies.json';

const notMatch = 'No matching results';

const filterMovies = (title, moviesList) => {
  return moviesList.filter(movie =>
    movie.title.toLowerCase().includes(title.toLowerCase()),
  );
};

export default class MoviePage extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    const filtredMovies = filterMovies(value, movies);

    return (
      <div className={styles.container}>
        <SearchBar value={value} onChange={this.handleChange} />
        {filtredMovies.length > 0 ? (
          <MovieGrid items={filtredMovies} />
        ) : (
          <h2>{notMatch}</h2>
        )}
      </div>
    );
  }
}
