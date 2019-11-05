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
    initialIdx: 0,
    initialStep: 1,
  };

  static propTypes = {
    initialIdx: T.number,
    initialStep: T.number,
  };

  state = {
    initialValue: 1,
    initialIdx: 0,
  };

  handleCounter = e => {
    const { initialValue, initialIdx } = this.state;
    const { initialStep } = this.props;
    if (e.currentTarget.innerText === 'Назад') {
      this.setState({
        initialValue: initialValue > 1 ? initialValue - initialStep : 1,
        initialIdx: initialIdx > 0 ? initialIdx - initialStep : 0,
      });
    }
    if (e.currentTarget.innerText === 'Вперед') {
      this.setState({
        initialValue:
          initialValue < publications.length
            ? initialValue + initialStep
            : publications.length - initialStep,
        initialIdx: initialValue > 0 ? initialIdx + 1 : 0,
      });
    }
  };

  render() {
    const { initialValue, initialIdx } = this.state;
    return (
      <div className={reader}>
        <Controls
          onCounter={this.handleCounter}
          getInitialIdx={initialValue}
          items={publications}
        />
        <Counter step={initialValue} artic={publications} />
        <Publication items={publications[initialIdx]} />
      </div>
    );
  }
}

export default Reader;
