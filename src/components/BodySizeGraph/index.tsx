import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import styles from './index.module.scss';
import classNames from 'classnames';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
);

export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: { display: false },
    },
    x: {
      ticks: { color: 'white' },
      grid: { color: 'white' }
    }
  }
};

const labels = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

type Props = {
  className?: string;
}

const BodySizeGraph = ({ className }: Props) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Line options={options} data={data} />
    </div>
  );
};

export default BodySizeGraph;
