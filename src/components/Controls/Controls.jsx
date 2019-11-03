import React from 'react';
import styles from './Controls.module.css';

const controls = [styles.controls];
const button = [styles.button];
const buttonDisabled = [styles.button_disabled];

const Controls = ({ onIncrement, onDecrement, getInitValue, items }) => (
  <section className={controls}>
    <button
      type="button"
      className={getInitValue === 1 ? buttonDisabled : button}
      onClick={onDecrement}
    >
      Назад
    </button>
    <button
      type="button"
      className={getInitValue === items.length ? buttonDisabled : button}
      onClick={onIncrement}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
