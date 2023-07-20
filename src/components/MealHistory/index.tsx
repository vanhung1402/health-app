import { useEffect, useMemo, useState } from "react";

import FilterButtons from "./FilterButtons";
import { MEAL_TYPES } from "constants/commons";
import MealType from "types/MealType";

import styles from './index.module.scss';
import MealHistoryItem from "./MealHistoryItem";
import { Button } from "components/common/Button";

const data: MealType[] = [
  { id: 1, type: MEAL_TYPES.MORNING, enjoyAt: '2023-07-19T14:01:59.366Z' },
  { id: 2, type: MEAL_TYPES.LUNCH, enjoyAt: '2023-07-19T14:01:59.366Z' },
  { id: 3, type: MEAL_TYPES.DINNER, enjoyAt: '2023-07-19T14:01:59.366Z' },
  { id: 4, type: MEAL_TYPES.SNACK, enjoyAt: '2023-07-19T14:01:59.366Z' },
  { id: 5, type: MEAL_TYPES.MORNING, enjoyAt: '2023-07-18T14:01:59.366Z' },
  { id: 6, type: MEAL_TYPES.LUNCH, enjoyAt: '2023-07-18T14:01:59.366Z' },
  { id: 7, type: MEAL_TYPES.DINNER, enjoyAt: '2023-07-18T14:01:59.366Z' },
  { id: 8, type: MEAL_TYPES.SNACK, enjoyAt: '2023-07-18T14:01:59.366Z' },
  { id: 9, type: MEAL_TYPES.MORNING, enjoyAt: '2023-07-17T14:01:59.366Z' },
  { id: 10, type: MEAL_TYPES.SNACK, enjoyAt: '2023-07-11T14:01:59.366Z' },
  { id: 11, type: MEAL_TYPES.LUNCH, enjoyAt: '2023-07-16T14:01:59.366Z' },
  { id: 12, type: MEAL_TYPES.DINNER, enjoyAt: '2023-07-16T14:01:59.366Z' },
  { id: 13, type: MEAL_TYPES.SNACK, enjoyAt: '2023-07-16T14:01:59.366Z' },
  { id: 14, type: MEAL_TYPES.MORNING, enjoyAt: '2023-07-15T14:01:59.366Z' },
  { id: 15, type: MEAL_TYPES.LUNCH, enjoyAt: '2023-07-15T14:01:59.366Z' },
  { id: 16, type: MEAL_TYPES.DINNER, enjoyAt: '2023-07-15T14:01:59.366Z' },
  { id: 17, type: MEAL_TYPES.LUNCH, enjoyAt: '2023-07-14T14:01:59.366Z' },
  { id: 18, type: MEAL_TYPES.DINNER, enjoyAt: '2023-07-14T14:01:59.366Z' },
  { id: 19, type: MEAL_TYPES.SNACK, enjoyAt: '2023-07-14T14:01:59.366Z' },
  { id: 20, type: MEAL_TYPES.MORNING, enjoyAt: '2023-07-13T14:01:59.366Z' },
  { id: 21, type: MEAL_TYPES.LUNCH, enjoyAt: '2023-07-13T14:01:59.366Z' },
  { id: 22, type: MEAL_TYPES.DINNER, enjoyAt: '2023-07-12T14:01:59.366Z' },
];

const PAGE_SIZE_DEFAULT = 8;

const MealHistory = () => {
  const [filterKey, setFilterKey] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(0);
  
  const filteredData = useMemo(() => {
    if (!filterKey) return data;

    return data.filter((mealLog) => mealLog.type === filterKey);
  }, [filterKey]);

  const mealHistoryData = useMemo(() => {
    const itemCount = (currentPage + 1) * PAGE_SIZE_DEFAULT;
    return filteredData.slice(0, itemCount);
  }, [filteredData, currentPage]);

  const isLastPage = mealHistoryData.length >= filteredData.length;

  const onClickFilterButton = (key: string) => setFilterKey(filterKey === key ? '' : key);

  useEffect(() => {
    setCurrentPage(0);
  }, [filterKey]);

  return (
    <section className="container">
      <FilterButtons onClick={onClickFilterButton} />
      <div className={styles.mealHistoryItemList}>
        {mealHistoryData.map((mealHistoryItem: MealType) => (
          <MealHistoryItem key={mealHistoryItem.id} mealItem={mealHistoryItem} />
        ))}
      </div>
      {!isLastPage && (
        <Button className={styles.btnLoadMore} onClick={() => setCurrentPage(currentPage + 1)}>記録をもっと見る</Button>
      )}
    </section>
  );
};

export default MealHistory;
