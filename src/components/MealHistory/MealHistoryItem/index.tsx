import classNames from "classnames";

import MealType from "types/MealType";
import { MEAL_TYPES } from "constants/commons";
import { getDateMonthFromDate } from "utils/common";

import styles from './index.module.scss';

const mealImageMaps = {
  [MEAL_TYPES.MORNING]: '/images/m01.jpg',
  [MEAL_TYPES.LUNCH]: '/images/l03.jpg',
  [MEAL_TYPES.DINNER]: '/images/d01.jpg',
  [MEAL_TYPES.SNACK]: '/images/m03.jpg',
}

type Props = {
  mealItem: MealType  
};

export const MealHistoryItem = ({ mealItem }: Props) => {
  return (
    <div className={styles.mealHistoryItem}>
      <img src={mealImageMaps[mealItem.type]} alt={mealItem.type} className={styles.image} />
      <span className={classNames('english-text', styles.mealLogInfo)}>{getDateMonthFromDate(new Date(mealItem.enjoyAt))}.{mealItem.type}</span>
    </div>
  );
};

export default MealHistoryItem;
