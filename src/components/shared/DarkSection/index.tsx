import React from 'react';

import styles from './index.module.scss';
import classNames from 'classnames';

type Props = {
  title: string;
  dateString: string;
  children: React.ReactElement;
  className?: string;
};


const DarkSection = ({ title, dateString, children, className }: Props) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={classNames('english-text', styles.header)}>
        <span className={styles.title}>{title}</span>
        <span className={styles.dateString}>{dateString}</span>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default DarkSection;
