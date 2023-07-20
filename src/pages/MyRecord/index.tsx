import classNames from "classnames";

import MyDiary from "components/MyDiary";
import MyDiaryType from "types/MyDiaryType";
import CategoryType from "types/CategoryType";
import BodySizeGraph from "components/BodySizeGraph";
import DarkSection from "components/shared/DarkSection";
import ExerciseRecords from "components/ExerciseRecords";
import ExerciseRecordType from "types/ExerciseRecordType";
import CategoriesSection from "components/CategoriesSection";

import styles from './index.module.scss';

const categories: CategoryType[] = [
  { title: 'BODY RECORD', desc: '自分のカラダの記録', imageUrl: '/images/MyRecommend-1.jpg' },
  { title: 'MY EXERCISE', desc: '自分の運動の記録', imageUrl: '/images/MyRecommend-2.jpg' },
  { title: 'MY DIARY', desc: '自分の日記', imageUrl: '/images/MyRecommend-3.jpg' },
];

const exerciseRecords: ExerciseRecordType[] = Array(100).fill({ title: '家事全般（立位・軽い）', kcal: 26, minutes: 10 });

const diaryRecords: MyDiaryType[] = Array(100).fill({
  updatedAtString: '2023-07-19T14:01:59.366Z',
  content: `私の日記の記録が一部表示されます。
  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
});

const MyRecordPage = () => {
  return (
    <div className={classNames("container", styles.container)}>
      <CategoriesSection categories={categories} />
      <DarkSection title="Body record" dateString="2021.05.21" className={styles.sectionItem} ><BodySizeGraph className={styles.bodySizeGraphContainer} /></DarkSection>
      <DarkSection title="My exercise" dateString="2021.05.21" className={styles.sectionItem} ><ExerciseRecords records={exerciseRecords} /></DarkSection>
      <MyDiary diaryRecords={diaryRecords} className={styles.sectionItem} />
    </div>
  );
};

export default MyRecordPage;
