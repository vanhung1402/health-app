import React from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

type Props = {
  children: React.ReactElement | string;
  onClick?: any;
  className?: string;
};

export const Button = ({ children, onClick, className }: Props) => {
  return (
    <button className={classNames(styles.btn, className)} onClick={() => onClick?.()}>
      {children}
    </button>
  );
};