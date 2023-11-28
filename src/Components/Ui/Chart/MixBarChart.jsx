import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  Label,
} from 'recharts';

const data = [
  { index: 10000, attempted: 0, completed: 0 },
  { index: 1666, attempted: 182, completed: 42 },
  { index: 625, attempted: 56, completed: 11 },

];

const calculateWinPercentage = (completed, attempted) => {
  if (attempted === 0) {
    return 0; // Avoid division by zero
  }
  return ((completed / attempted) * 100).toFixed(2); // Calculate win percentage
};

export default class ChartComponent extends PureComponent {
  render() {
    // Calculate win percentages
    data.forEach(entry => {
      if (entry.completed && entry.attempted) {
        entry.completedWinPercentage = calculateWinPercentage(entry.completed, entry.attempted);
        entry.attemptedWinPercentage = calculateWinPercentage(entry.attempted, entry.completed);
      }
    });

    return (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <Tooltip />
          <Legend />

          <XAxis
            dataKey="index"
            type="number"
            label={{ value: 'Index', position: 'insideBottomRight', offset: 0 }}
          />
          <YAxis unit="ms" type="number" label={{ value: 'Time', angle: -90, position: 'insideLeft' }} />

          <Scatter name="attempted" dataKey="attempted" fill="red" />
          <Scatter name="completed" dataKey="completed" fill="blue" />

          <Line dataKey="attemptedLine" stroke="red" dot={false} activeDot={false} legendType="none" />
          <Line dataKey="completedLine" stroke="blue" dot={false} activeDot={false} legendType="none" />

          {/* Adding new Lines for win percentages */}
          <Line dataKey="completedWinPercentage" stroke="green" dot={false} legendType="none">
            <Label content={({ value }) => `${value}%`} position="top" />
          </Line>
          <Line dataKey="attemptedWinPercentage" stroke="orange" dot={false} legendType="none">
            <Label content={({ value }) => `${value}%`} position="top" />
          </Line>
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}