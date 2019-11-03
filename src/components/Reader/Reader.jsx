import React, { Component } from 'react';
import T from 'prop-types';
import styles from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import publications from '../../db/publications.json';

const reader = [styles.reader];

class Reader extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
    initialIdx: 0,
  };

  static propTypes = {
    step: T.number,
    initialValue: T.number,
    initialIdx: T.number,
  };

  state = {
    step: 1,
    initialValue: 1,
    initialIdx: 0,
  };

  handleDecrement = e => {
    const { initialValue, step, initialIdx } = this.state;
    this.setState({
      initialValue: step < publications.length ? initialValue - step : null,
      initialIdx: step < publications.length ? initialIdx - step : null,
    });
  };

  handleIncrement = () => {
    const { initialValue, step, initialIdx } = this.state;
    this.setState({
      initialValue:
        initialValue < publications.length ? initialValue + step : null,
      initialIdx:
        initialValue < publications.length ? initialIdx + step : initialIdx + 1,
    });
  };

  render() {
    const { initialValue, initialIdx } = this.state;
    return (
      <div className={reader}>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          getInitValue={initialValue}
          items={publications}
        />
        <Counter step={initialValue} artic={publications} />
        <Publication items={publications[initialIdx]} />
      </div>
    );
  }
}

export default Reader;
