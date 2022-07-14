// export default SalesChart
import { Box, Grid, Typography } from '@mui/material'
import {Component} from 'react'
import Chart from 'react-apexcharts'
import Tasks from './Tasks'
import CheckIcon from '@mui/icons-material/Check';

class SalesChart extends Component {
  state = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [{
      name: 'Tesla ts model',
      data: [44, 30, 39, 36, 102, 89, 52, 92, 81 ]
    },
    {
      name: 'Bmw series',
      data: [30, 40, 35, 50, 125, 49, 60, 70, 91]
    }]
  }
  render() {
    return (
   <Grid container >
    <Grid item xs={11} md={5} lg={5} sx={{border: '1px solid #cee0d2', margin: 2, padding: 2}}>
       <Box>
      <Typography sx={{color: '#8a9291'}}>2017 Sales</Typography>
      <Typography sx={{color: '#bfd4da'}}>All products including Taxes</Typography>
      </Box>
        <Chart 
        options={this.state.options} 
        series={this.state.series}
         type="bar"
          />
        <hr />
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <CheckIcon style={{color: '#bfd4da',}} />
          <Typography sx={{color: '#bfd4da'}}>Data information certified</Typography>
        </Box>
   </Grid>

   <Grid item xs={11} md={6} lg={6} sx={{border: '1px solid #cee0d2', margin: 2, padding: 2}}>
    <Tasks />
   </Grid>
   </Grid>
    )
  }
}

export default SalesChart