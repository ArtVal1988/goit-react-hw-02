import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

import styles from './Reader.module.css';

export default class Reader extends Component {
  static defaultProps = {};

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = { index: 0 };

  handleNext = () => {
    this.setState(prevState => ({
      index:
        prevState.index === this.props.items.length - 1
          ? prevState.index
          : prevState.index + 1,
    }));
  };

  handlePrev = () => {
    this.setState(prevState => ({
      index: prevState.index === 0 ? prevState.index : prevState.index - 1,
    }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;

    return (
      <div className={styles.reader}>
        <Publication item={items[index]} />
        <Counter currentIndex={index} pubCount={items.length} />
        <Controls onNext={this.handleNext} onPrev={this.handlePrev} />
      </div>
    );
  }
}
