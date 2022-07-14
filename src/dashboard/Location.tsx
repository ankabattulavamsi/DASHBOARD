import { Divider, Grid, Typography,  } from '@mui/material'
import { Box } from '@mui/system'
import WorldMap from 'react-svg-worldmap';

import React from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks
// const theme = useTheme()
// eslint-disable-next-line react-hooks/rules-of-hooks
// const isLargeDisplay = useMediaQuery(theme.breakpoints.down('lg'))

const Location = () => {
    const data = [
        {country: 'cn', value: 1389618778}, // china
        {country: 'in', value: 1311559204}, // india
        {country: 'us', value: 331883986}, // united states
        {country: 'id', value: 264935824}, // indonesia
        {country: 'pk', value: 210797836}, // pakistan
        {country: 'br', value: 210301591}, // brazil
        {country: 'ng', value: 208679114}, // nigeria
        {country: 'bd', value: 161062905}, // bangladesh
        {country: 'ru', value: 141944641}, // russia
        {country: 'mx', value: 127318112}, // mexico
      ];
  return (
    <Grid container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #cee0d2', borderRadius: '5px', padding: 1, margin: 1 }}>
        <Grid item xs={9} md={6} lg={6} >
        <Box>
            <Typography variant='h5' sx={{ color: '#8a9291'}}>Global Sales by Top Locations</Typography>
            <Typography sx={{ color: '#bfd4da'}}>All products that were shipped</Typography>
        </Box>
        <Divider />
        <Box sx={{display:'flex', justifyContent:"space-between", mt: 2, mb: 2,  }}>
            <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656765809/stqwgt1ik89oioejoas6.png' alt='usa' style={{width: 45}} />
            <Typography>USA</Typography>
            <Typography>2.920</Typography>
            <Typography>53.23%</Typography>
        </Box>
        
        <Divider />
        <Box sx={{display:'flex', justifyContent:"space-between", mt: 2, mb: 2 }}>
            <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656907866/360_F_62198618_kmINdbapAkSqo9owU0ROsXjW7ivEz2ha_oplsec.jpg' alt='usa' style={{width: 45}} />
            <Typography>Germany</Typography>
            <Typography>1.300</Typography>
            <Typography>20.43%</Typography>
        </Box>
        <Divider />
        <Box sx={{display:'flex', justifyContent:"space-between", mt: 2, mb: 2  }}>
            <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656909380/ausflag_bhznfk.gif' alt='usa' style={{width: 45}} />
            <Typography>Australia</Typography>
            <Typography>760</Typography>
            <Typography>10.35%</Typography>
        </Box>
        <Divider />
        <Box sx={{display:'flex', justifyContent:"space-between", mt: 2, mb: 2  }}>
            <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656909451/1200px-Flag_of_the_United_Kingdom.svg_rc0bwi.png' alt='usa' style={{width: 45}} />
            <Typography>United Kingdom</Typography>
            <Typography>690</Typography>
            <Typography>7.87%</Typography>
        </Box>
        <Divider />
        <Box sx={{display:'flex', justifyContent:"space-between", mt: 2, mb: 2  }}>
            <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656909554/romania-flag-small_sjxshv.png' alt='usa' style={{width: 45}} />
            <Typography>Romania</Typography>
            <Typography>2.920</Typography>
            <Typography>5.94%</Typography>
        </Box>
        <Divider />
        <Box sx={{display:'flex', justifyContent:"space-between", mt: 2,  }}>
            <img src='https://res.cloudinary.com/dq21uo3uq/image/upload/v1656909593/Flag_of_Brazil_gzfr8d.svg' alt='usa' style={{width: 45}} />
            <Typography>Brasil</Typography>
            <Typography>550</Typography>
            <Typography>4.34%</Typography>
        </Box>
        </Grid>
        <Grid item xs={6} md={5} lg={5} className='map'>
        <WorldMap
        color="black"
        value-suffix="people"
        size="md"
        data={data}
      />
        </Grid>
    </Grid>
  )
}

export default Location
