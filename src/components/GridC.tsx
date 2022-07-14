import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const GridC = () => {
  return (
    <Box sx={{mt: 5, display: 'flex', justifyContent:'center', alignItems: 'center', }}>
        <Typography sx={{boxShadow: '2px 4px #888888',p:3}}>Grid Component</Typography> 
    </Box>
  )
}

export default GridC