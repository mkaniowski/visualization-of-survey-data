import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CategoricalChartState } from 'recharts/types/chart/types'

import styles from './SentimentVisualizer.module.scss'

export interface ISentimentVisualizer {
  data: any
  onBarHover: (state: CategoricalChartState) => void
}

export const SentimentVisualizer = ({ data, onBarHover }: ISentimentVisualizer) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labels}>
        <span>😥</span>
        <span>😀</span>
      </div>
      <ResponsiveContainer
        width='100%'
        height='100%'
      >
        <BarChart
          layout='vertical'
          width={500}
          height={300}
          data={data}
          onMouseMove={(state: CategoricalChartState) => onBarHover(state)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray='3 3'
            stroke='#fff'
          />
          <XAxis
            type='number'
            stroke='#fff'
            domain={[-1, 1]}
          />
          <YAxis
            type='category'
            dataKey='name'
            stroke='#fff'
          />
          <Tooltip />
          <Legend />
          <ReferenceLine
            x={0}
            stroke='#000'
          />
          <Bar
            dataKey='sentiment'
            fill='#36b5b0'
          />
          <Bar
            dataKey='magnitude'
            fill='#3c216e'
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
