import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
      </label>
      <input
        className={`${styles.input} ${styles[props.className]}`}
        id={props.id}
        name={props.id}
        required={props.required || false}
        autoComplete="off"
        type={props.type || 'text'}
        onChange={(e) => props.onInputChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
};

export default Input;
