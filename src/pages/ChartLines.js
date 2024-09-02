import { LineChart } from '@mui/x-charts'
import React from 'react'

function ChartLines() {
  return (
    <>
       <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, -5.5, 2, -7.5, 1.5, 6],
        //   area: true,
        label: 'Previous year',
          baseline: 'min',
        },
        {
          data: [3, -9.5, 6, -3.5, 0.5, 4],
        //   area: true,
        label: 'Current year',
          baseline: 'min',
        },
      ]}
    //   width={290}
      height={290}
    />
    </>
  )
}

export default ChartLines
