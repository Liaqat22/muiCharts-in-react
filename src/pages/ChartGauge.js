import { Gauge, gaugeClasses } from '@mui/x-charts'
import React from 'react'

function ChartGauge() {
  return (
    <>
     <Gauge
  value={64}
  startAngle={-110}
  endAngle={110}

  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 38,
      transform: 'translate(0px, 0px)',
      fill:"blue"
    },
  }}
  text={
     ({ value, valueMax }) => `${value} / ${valueMax}`
  }
  height={290}
/> 

    </>
  )
}

export default ChartGauge
