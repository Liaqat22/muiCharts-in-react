import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

function ChartPie() {
  return (
    <>

<PieChart
colors={['red', 'blue', 'green',"orange","purple"]}
  series={[
    {
      data: [ 
         {label:"A", value: 17, color: 'orange' },
         {label:"B", value: 10, color: 'blue' },
         { label:"C",value: 10, color: 'red' },
         { label:"C",value: 20, color: 'purple' },
         { label:"C",value: 13, color: 'green' },

       ],
      innerRadius: 25,
      outerRadius: 100,
      paddingAngle: 3,
      cornerRadius: 10,
      startAngle: -180,
      endAngle: 180,
      cx: 120,
      cy: 130,
    }
  ]}
  height={290}
  width={330}

/>
    </>
  )
}

export default ChartPie
