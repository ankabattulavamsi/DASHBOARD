import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Panels = () => {
  return (
    <Box sx={{mt: 5, display: 'flex', justifyContent:'center', alignItems: 'center', }}>
        <Typography sx={{boxShadow: '2px 4px #888888',p:3}}>Panels Component</Typography> 
    </Box>
  )
}

export default Panels