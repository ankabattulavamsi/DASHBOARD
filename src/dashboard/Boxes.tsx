import { Box } from '@mui/system'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UpdateIcon from '@mui/icons-material/Update';
import { Grid, Typography } from '@mui/material';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import HighlightIcon from '@mui/icons-material/Highlight';
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Boxes = () => {
  return (
    <Grid container  sx={{mt: 4, display: {xs: 'center'}}}>
    <Grid item xs={12} md={6} lg={3}>
      <Box sx={{border: '1px solid #cee0d2',   borderRadius: '5px', padding: 2, margin: 2 }}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <DataUsageIcon style={{ color: 'orange', fontSize: '65px', marginBottom: 12 }} />
            {/* <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656755641/852875-200_qapuqz.png' alt='data' style={{width: '80px'}} /> */}
            <Box>
            <Typography variant='h6' sx={{color: '#bfd4da'}}>Number</Typography>
            <Typography  sx={{color: '#8a9291', fontSize: '28px'}}>150GB</Typography>
            </Box>
        </Box>
            <hr />
            <Box sx={{display: 'flex',}}>
                <UpdateIcon color="action" /> 
                <Typography sx={{color: '#484d4e', ml: 1}}>Update now</Typography>
            </Box>
        </Box>
    </Grid>

    <Grid item xs={12} md={6} lg={3}>
      <Box sx={{border: '1px solid #cee0d2',  borderRadius: '5px', padding: 2, margin: 2 }}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <HighlightIcon  rotate="180deg" style={{ color: 'lightGreen', fontSize: '65px', marginBottom: 12 }} />
            {/* <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656760599/flashlight-icon-vector-illustration-design-vector-id1299819497_rjbf6k.jpg' alt='data' style={{width: '80px'}} /> */}
            <Box>
            <Typography variant='h6' sx={{color: '#bfd4da'}}>Revenue</Typography>
            <Typography  sx={{color: '#8a9291', fontSize: '28px'}}>$ 13245</Typography>
            </Box>
        </Box>
            <hr />
            <Box sx={{display: 'flex',}}>
                <CalendarMonthIcon color="action" /> 
                <Typography sx={{color: '#484d4e', ml: 1}}>Last day</Typography>
            </Box>
        </Box>
    </Grid>


    <Grid item xs={12} md={6} lg={3}>
      <Box sx={{border: '1px solid #cee0d2',   borderRadius: '5px', padding: 2, margin: 2 }}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <WifiTetheringErrorIcon style={{ color: '#bd3b3b', fontSize: '65px', marginBottom: 12 }} />
            {/* <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656761199/platform-trial-saves-time-icon_aiulvw.png' alt='data' style={{width: '80px'}} /> */}
            <Box>
            <Typography variant='h6' sx={{color: '#bfd4da'}}>Errors</Typography>
            <Typography  sx={{color: '#8a9291', fontSize: '28px'}}>23</Typography>
            </Box>
        </Box>
            <hr />
            <Box sx={{display: 'flex',}}>
                <AccessTimeIcon color="action" /> 
                <Typography sx={{color: '#484d4e', ml: 1}}>In the last hour </Typography>
            </Box>
        </Box>
    </Grid>



    <Grid item xs={12} md={6} lg={3}>
      <Box sx={{border: '1px solid #cee0d2',  borderRadius: '5px', padding: 2, margin: 2 }}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <FavoriteBorderIcon style={{ color: 'blue', fontSize: '65px', marginBottom: 12 }} />
            {/* <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656763124/c07a5e84a9d3034cd2511a54960e23d1_sfkhtg.jpg' alt='data' style={{width: '80px', color: 'blue', background:' transparent'}} /> */}
            <Box>
            <Typography variant='h6' sx={{color: '#bfd4da'}}>Followers</Typography>
            <Typography  sx={{color: '#8a9291', fontSize: '28px'}}>+ 45K</Typography>
            </Box>
        </Box>
            <hr />
            <Box sx={{display: 'flex',}}>
                <UpdateIcon color="action" /> 
                <Typography sx={{color: '#484d4e', ml: 1}}>Update now</Typography>
            </Box>
        </Box>
    </Grid>
    
    </Grid>
  )
}

export default Boxes
