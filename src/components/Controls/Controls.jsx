import React from 'react';
import styles from './Controls.module.css';

const controls = [styles.controls];
const button = [styles.button];

const Controls = ({ onCounter, getCurrentPage, items }) => (
  <section className={controls}>
    <button
      type="button"
      className={button}
      onClick={onCounter}
      disabled={!getCurrentPage}
    >
      Назад
    </button>
    <button
      type="button"
      className={button}
      onClick={onCounter}
      disabled={getCurrentPage === items.length - 1}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
