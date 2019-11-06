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
    currentPage: 0,
  };

  static propTypes = {
    currentPage: T.number.isRequired,
  };

  state = {
    currentPage: 0,
  };

  handleCounter = e => {
    const { currentPage } = this.state;
    if (e.currentTarget.innerText === 'Назад') {
      this.setState({
        currentPage: currentPage - 1,
      });
    }
    if (e.currentTarget.innerText === 'Вперед') {
      this.setState({
        currentPage: currentPage + 1,
      });
    }
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div className={reader}>
        <Controls
          onCounter={this.handleCounter}
          getCurrentPage={currentPage}
          items={publications}
        />
        <Counter numPage={currentPage} artic={publications} />
        <Publication items={publications[currentPage]} />
      </div>
    );
  }
}

export default Reader;
