import React from 'react';
import styles from './Counter.module.css';

const counter = [styles.counter];

const Counter = ({ step, artic }) => {
  return (
    <p className={counter}>
      {step}/{artic.length}
    </p>
  );
};

export default Counter;
