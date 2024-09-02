import React from 'react'
import { BarChart } from '@mui/x-charts';


function ChartBar() {
  return (
    <>
           
    <BarChart 
series={[
{ data: [35, 44, 24, 34, 36, 42, 28, 30, 25, 38, 45, 39], label: "current", color: "#635bff" },
{ data: [30, 40, 20, 31, 32, 38, 22, 26, 20, 34, 42, 35], label: "previous", color: "#d8d6ff" },
]}
height={290}
xAxis={[{ data: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'], scaleType: "band" }]}
margin={{ top: 10, bottom: 30, left: 40, right: 10 }}/>


    </>
  )
}

export default ChartBar
