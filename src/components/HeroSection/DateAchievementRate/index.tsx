import classNames from 'classnames';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import { getMonthYearFromDate } from 'utils/common';

import styles from './index.module.scss';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
  date: string; // Date string ISO format
  achievementRate: number;
};

const DateAchievementRate = ({ date, achievementRate }: Props) => {
  const dateString = getMonthYearFromDate(new Date(date));

  return (
    <div className={styles.container}>
      <img className={styles.bgImage} src="/images/d01.jpg" alt="Date - Achievement rate background" />
      <div className={classNames('english-text', styles.dateAchievementRateContainer)}>
        <CircularProgressbarWithChildren 
          value={achievementRate} 
          strokeWidth={2}
          styles={buildStyles({
            trailColor: "transparent",
            pathColor: "white"
          })}
        >
          <div className={styles.dateAchievementRateWrapper}>
            <span className={styles.dateString}>{dateString}</span>
            <span className={styles.achievementRateString}>{achievementRate}%</span>
          </div>
        </CircularProgressbarWithChildren>
        </div>
    </div>
  );
};

export default DateAchievementRate;
