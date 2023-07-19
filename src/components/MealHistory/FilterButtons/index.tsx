import classNames from 'classnames';

import { MEAL_TYPES } from 'constants/commons';

import styles from './index.module.scss';

const buttons = [
  { key: MEAL_TYPES.MORNING, icon: '/icons/icon_knife.png' },
  { key: MEAL_TYPES.LUNCH, icon: '/icons/icon_knife.png' },
  { key: MEAL_TYPES.DINNER, icon: '/icons/icon_knife.png' },
  { key: MEAL_TYPES.SNACK, icon: '/icons/icon_cup.png' }
];

type Props = {
  onClick?: any;
}

const FilterButtons = ({ onClick }: Props) => {
  return (
    <div className={classNames('container', styles.container)}>
      {buttons.map((btn) => (
        <button key={btn.key} className={styles.btnTransitToInput} onClick={() => onClick?.(btn.key)}>
          <span className={classNames('english-text', styles.content)}>
            <img src={btn.icon} alt={btn.key} className={styles.image} />
            {btn.key}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
