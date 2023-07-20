import ExerciseRecordType from "types/ExerciseRecordType";

import styles from './index.module.scss';
import classNames from 'classnames';

type Props = {
  records: ExerciseRecordType[];
  className?: string;
}

const ExerciseRecords = ({ records, className }: Props) => {
  return (
    <div className={classNames(styles.container, className)}>
      {records.map((recordData, index) => (
        <div key={index} className={styles.recordItem}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>{recordData.title}</span>
            <span className={styles.minutes}>{recordData.minutes} min</span>
          </div>
          <span className={styles.kcal}>{recordData.kcal}kcal</span>
        </div>
      ))}
    </div>
  );
};

export default ExerciseRecords;
