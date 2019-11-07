import React from 'react';
import styles from './Counter.module.css';

const counter = [styles.counter];

const Counter = ({ numPage, artic }) => (
  <p className={counter}>
    {numPage + 1}/{artic}
  </p>
);

export default Counter;
