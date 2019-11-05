import React from 'react';
import styles from './Controls.module.css';

const controls = [styles.controls];
const button = [styles.button];

const Controls = ({ onCounter, getInitialIdx, items }) => (
  <section className={controls}>
    <button
      type="button"
      className={button}
      onClick={onCounter}
      disabled={getInitialIdx === 1}
    >
      Назад
    </button>
    <button
      type="button"
      className={button}
      onClick={onCounter}
      disabled={getInitialIdx === items.length}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
