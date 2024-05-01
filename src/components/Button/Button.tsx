import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ loading, children, onClick, disabled, className, ...other }) => {
  return (
    <button
      className={classNames(
        className, 
        'btn',
        loading && 'btn-loading',
        disabled && 'btn-disabled',
        styles.btn
      )}
      onClick={(e) => onClick?.(e)}
      disabled={disabled || loading}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
