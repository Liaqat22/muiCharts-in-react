import React from 'react'
import ChartBar from './ChartBar'
import { Typography } from '@mui/material'
import ChartPie from './ChartPie'
import ChartLines from './ChartLines'
import ChartGauge from './ChartGauge'
import { NavLink } from 'react-router-dom';


function ChartsMain() {
  const charts = [
    { chartname : "Pie", chartcomponent : <ChartPie/> },
    { chartname : "Bar", chartcomponent : <ChartBar/> },
    { chartname : "Line", chartcomponent : <ChartLines/> },
    { chartname : "Gauge", chartcomponent : <ChartGauge/> },
  ]
  return (
    <>
    <div className='container-fluid'>
        <NavLink to="https://github.com/Liaqat22/muiCharts-in-react/tree/main" className="btn btn-primary">github</NavLink>
        <NavLink to="https://mui.com/x/react-charts/" className="btn btn-info mx-2">Mui charts</NavLink>
      <div className='row d-flex justify-content-evenly align-items-center'>

        {charts?.map((c)=>(
          <div className='col-md-6 '   key={c.chartname}>
              <Typography variant="h5" className='mt-3 mb-3'sx={{ fontWeight: '700' , color: "brown" }}>{c.chartname} Chart</Typography>

{c.chartcomponent}
        </div>
        ))}

      </div>
    </div>
    </>
  )
}

export default ChartsMain
