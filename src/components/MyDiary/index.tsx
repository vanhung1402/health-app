import { useMemo, useState } from 'react';
import classNames from 'classnames';

import MyDiaryType from 'types/MyDiaryType';
import { Button } from 'components/common/Button';
import { getDateStringFromDate, getTimeStringFromDate } from 'utils/common';

import styles from './index.module.scss';

const PAGE_SIZE_DEFAULT = 8;

type Props = {
  diaryRecords: MyDiaryType[];
  className?: string;  
};

const MyDiary = ({ diaryRecords, className }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const records = useMemo(() => {
    const itemCount = (currentPage + 1) * PAGE_SIZE_DEFAULT;
    return diaryRecords.slice(0, itemCount);
  }, [diaryRecords, currentPage]);

  const isLastPage = records.length >= diaryRecords.length;

  return (
    <div className={classNames(styles.container, className)}>
      <p className={styles.title}>My diary</p>
      <div className={styles.recordList}>
        {records.map((record, index) => (
          <div key={index} className={styles.recordItem}>
            <p className={classNames('english-string', styles.date)}>{getDateStringFromDate(new Date(record.updatedAtString))}</p>
            <p className={classNames('english-string', styles.time)}>{getTimeStringFromDate(new Date(record.updatedAtString))}</p>
            <p className={styles.content}>{record.content}</p>
          </div>
        ))}
      </div>
      {!isLastPage && (
        <Button className={styles.btnLoadMore} onClick={() => setCurrentPage(currentPage + 1)}>自分の日記をもっと見る</Button>
      )}
    </div>
  );
};

export default MyDiary;
