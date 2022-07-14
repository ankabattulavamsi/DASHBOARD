import { Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import MainNavbar from './MainNavbar'
import SideNavbar from './SideNavbar'

import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import CropDinIcon from '@mui/icons-material/CropDin';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PagesIcon from '@mui/icons-material/Pages';
import BoyIcon from '@mui/icons-material/Boy';
import Routing from './Routing'

// const navigate = useNavigate()
  

const Home = () => {
    const [open, setOpen]  = React.useState<any>(true)
      
      const items = [
        {
            name: "Tania Andrew",
            label: "Tania Andrew",
            Icon: BoyIcon,
            items: [
              { label: "My Profile", i: 'MP', path: '/my-profile',  },
              { label: "Edit Profile", i: 'EP', path: '/edit-profile',  },
              { label: "Settings",  i: 'S', path: '/settings',  },
            ]
          },
          "divider",
        { name: "Dashboard", label: "DASHBOARD", Icon: DonutLargeOutlinedIcon, path: '/' },
        {
          name: "components",
          label: "COMPONENTS",
          Icon: CropDinIcon,
          // path: '/components',
          items: [
            { label: "Button", i: 'B', path: 'button' ,  },
            { label: "GridSystem", i: 'GS', path: '/grid',  },
            { label: "Panels", i: 'P', path: '/panels',  },
            { label: "SW", i: 'SA', path: '/sweet-alert',  },
            { label: "notifications", i: 'N', path: '/notifications',  },
            { label: "Icons", i: 'I', path: '/icons',  },
            { label: "Typography", i: 'T', path: '/typography',  }
          ]
        },
        
        {
          name: "Forms",
          label: "FORMS",
          Icon: AssignmentIcon,
          items: [
            { label: "Regular Forms", i: 'MP', path: '/button',  },
            { label: "Extended Forms", i: 'MP', path: '/button',  },
            { label: "Validation Forms", i: 'MP', path: '/button',  },
            { label: "WIZARD", i: 'MP', path: '/button',  },
          ]
        },
    
        {
            name: "tables",
            label: "TABLES",
            Icon: FactCheckIcon,
            items: [
              { label: "Regular Tables", i: 'MP', path: '/button',  },
              { label: "Extended Tables", i: 'MP', path: '/button',  },
              { label: "React Tables", i: 'MP', path: '/button',  },
            ]
          },
    
          {
            name: "tables",
            label: "Maps",
            Icon: AddLocationIcon,
            items: [
              { label: "Google maps", i: 'MP', path: '/button',  },
              { label: "Full Screen Maps", i: 'MP', path: '/button',  },
              { name: "Panels", label: "Vector Map", i: 'MP', path: '/button',  },
            ]
          },
          { name: "Dashboard", label: "CHARTS", Icon: BarChartIcon },
          { name: "Dashboard", label: "CALENDER", Icon: CalendarMonthIcon },
    
          {
            name: "tables",
            label: "Pages",
            Icon: PagesIcon,
            items: [
              { label: "User Page", i: 'MP', path: '/button',  },
              { label: "Login Page", i: 'MP', path: '/button',  },
              { label: "Register", i: 'MP', path: '/button',  },
              { label: "Lock Screen Page", i: 'MP', path: '/button',  },
            ]
          },
      ];

    // const navigate = useNavigate()

    // function onClick(e : any, item : any) {
    //     console.log('e', e)
    //     console.log('item==', item)
    //     navigate(item.path)
    //   }

    const sidebar:any = useRef(null)
    const  main:any = useRef(null)

    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    useEffect(() => {
        if(isMatch){
            sidebar.current.style.width = '0px'
            main.current.style.marginLeft = '0px'
        }
        else{
            sidebar.current.style.width = '250px'
            main.current.style.marginLeft = '250px'
        }
    },[isMatch])

    const handleOpen = () => {
        setOpen(true)
        sidebar.current.style.width = '255px'
        main.current.style.marginLeft = '255px'
    }

    const handleClose = () => {
        setOpen(false)
        sidebar.current.style.width = '72px'
        main.current.style.marginLeft = '72px'
    }

    const handleOpenMini = () => {
        setOpen(true)
        sidebar.current.style.width = '220px'
        main.current.style.marginLeft = '220px'
    }

    const handleCloseMini = () => {
        setOpen(false)
        sidebar.current.style.width = '0px'
        main.current.style.marginLeft = '0px'
    }

  return (
    <>
    {isMatch ? <Grid container sx={{}}>
       <Grid  item ref={sidebar}
       lg={3} md={3} 
       sx={{
        top: 0,
        left: 0,
        backgroundColor: '#1f2020', 
        height: '100%',
        position:' fixed',
        zIndex: 5,
       overflowX: 'hidden', 
       transition: '0.3s'
       }}>
       <SideNavbar items={items} />
       </Grid>
      <Grid container >
      <Grid ref={main} item lg={12} md={12} xs={12} >
      <MainNavbar handleClose={handleCloseMini} handleOpen={handleOpenMini} open={open} setOpen={setOpen} />
      <Routing />
      </Grid>
      </Grid>
    </Grid> : <Grid container sx={{}}>
       <Grid  item ref={sidebar}
       lg={3} md={3} 
       sx={{
        top: 0,
        left: 0,
        backgroundColor: '#1f2020', 
        height: '100%',
        position:' fixed',
        zIndex: 10,
       overflowX: 'hidden', 
       transition: '0.3s'
       }}>
       <SideNavbar items={items} />
       </Grid>
      <Grid container >
      <Grid ref={main} item lg={12} md={12} xs={12} >
      <MainNavbar handleClose={handleClose} handleOpen={handleOpen} open={open} setOpen={setOpen} />
      <Routing />
      </Grid>
      </Grid>
    </Grid> }
    </>
  )
}

export default Home

