import { Grid, Typography } from '@mui/material'
import React from 'react'

const Bottom = () => {
  return (
     <Grid container sx={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid', mb: 2}}>
      <Grid item xs={12} md={6} lg={6} sx={{display: 'flex', mt: 2}}>
        <Typography sx={{ml: 1}}>Home</Typography>
        <Typography sx={{ml: 1}}>Company</Typography>
        <Typography sx={{ml: 1}}>Portfolio</Typography>
        <Typography sx={{ml: 1}}>Blog</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} sx={{mt: 2}}>
        <Typography>Creative Tim, made with love for a better web</Typography>
      </Grid>
    </Grid>
  )
}

export default Bottom
