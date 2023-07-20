import classNames from 'classnames';

import CategoryType from 'types/CategoryType';

import styles from './index.module.scss';

type Props = {
  categories: CategoryType[];
  className?: string;
}

const CategoriesSection = ({ categories, className }: Props) => {
  return (
    <div className={classNames(styles.categoriesGrid, className)}>
      {categories.map((cat: CategoryType) => (
        <div key={cat.title} className={styles.categoryItem}>
          <img src={cat.imageUrl} alt={cat.title} className={styles.categoryImage} />
          <div className={styles.textWraper}>
            <p className={classNames('english-text', styles.title)}>{cat.title}</p>
            <p className={styles.desc}>{cat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
