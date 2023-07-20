import classNames from 'classnames';

import styles from './index.module.scss';

const dataTest = [
  { title: 'Recommended column', desc: 'オススメ' },
  { title: 'Recommended diet', desc: 'ダイエット' },
  { title: 'Recommended beauty', desc: '美容' },
  { title: 'Recommended health', desc: '健康' },
];

type Props = {
  className?: string;
}

const RecommendSection = ({ className }: Props) => {
  return (
    <div className={classNames(styles.container, className)}>
      {dataTest.map((data) => (
        <div key={data.title} className={styles.recommenItem}>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.separateBorder} />
          <p className={styles.desc}>{data.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendSection;
