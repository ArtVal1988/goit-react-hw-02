import React, { Component } from 'react';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import publications from './publications.json';
import Dashboard from './Dashboard/Dashboard';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Reader items={publications} />
        <MoviePage />
        <Dashboard />
      </>
    );
  }
}
