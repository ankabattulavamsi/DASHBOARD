import { Grid, Typography,} from '@mui/material'
import { Box } from '@mui/system'

// import PieChart from "react-pie-graph-chart";
// @ts-ignore
import ReactApexChart from "react-apexcharts";
import React from 'react'
import LineChart from './LineChart';



const Status = () => {
    // const theme = useTheme()
    // const isLargeDisplay = useMediaQuery(theme.breakpoints.down('lg'))
    
    // const example : any = [
    //     {
    //       type: "Unsubscribe",
    //       value: 40,
    //       color: "#d2e00f"
    //       //blue
    //     },
    //     {
    //       type: "Bounce",
    //       value: 20,
    //       color: "#f1481e"
    //     },
    //     {
    //         type: "Open",
    //         value: 40,
    //         color: "#1ef1e6"
    //       }
    //   ]; 

      const data:any = {
          
        series: [40, 20, 40],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Bounce', 'Open', 'Unsubscribed'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      };
      
  return (
    <>
    <Grid container>
        <Grid item xs={10} md={5} lg={5} sx={{ border: '1px solid #cee0d2', borderRadius: '5px', padding: 2, margin: 2, }}>
            <Typography sx={{color: '#8a9291'}}  variant='h4'>Email Statistics</Typography>
            <Typography sx={{color: '#bfd4da'}}>Last Campaign Performance</Typography>
            <Box sx={{display:'flex', flexDirection: 'column',}}>
            <ReactApexChart options={data.options} series={data.series} type="pie" width={380}  />
            </Box>
            <Typography sx={{color: '#bfd4da'}}>Campaign sent 2 days ago</Typography>
        </Grid>

        <Grid  item xs={10} md={6} lg={6}
        sx={{ml: 5, border: '1px solid #cee0d2', borderRadius: '5px', padding: 2, margin: 2,}}>
        
            <Typography sx={{color: '#8a9291'}} variant='h4'>Users Behavior</Typography>
            <Typography sx={{color: '#bfd4da'}}>24 Hours performance</Typography>
            <LineChart />
            <hr />
            <Typography sx={{color: '#bfd4da',}}>Updated 3 minutes ago</Typography>
        </Grid>
    </Grid>
    </>
  )
}

export default Status
