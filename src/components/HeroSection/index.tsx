import BodySizeGraph from './BodySizeGraph';
import DateAchievementRate from './DateAchievementRate';

import styles from './index.module.scss';

const dateAchievementRateData = {
  dataString: '2023-07-19T14:01:59.366Z',
  achievementRateNumber: 75
}

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <DateAchievementRate date={dateAchievementRateData.dataString} achievementRate={dateAchievementRateData.achievementRateNumber} />
      <BodySizeGraph />
    </section>
  );
};

export default HeroSection;
