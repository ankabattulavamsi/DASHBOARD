
// import { Avatar, Box, Collapse, Divider,  List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
// import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
// import CropDinIcon from '@mui/icons-material/CropDin';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import FactCheckIcon from '@mui/icons-material/FactCheck';
// import AddLocationIcon from '@mui/icons-material/AddLocation';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import PagesIcon from '@mui/icons-material/Pages';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SideNavbar = ({bool, setBool} : any) => {
//     const [open, setOpen] = useState(false);
//     const [form, setForm] = useState(false);
//     const [table, setTable] = useState(false);
//     const [map, setMap] = useState(false);
//     const [page, setPage] = useState(false);
//     const [avatar, setAvatar] = useState(false);

//     const navigate = useNavigate()

//     const DataItems : any = [
//       {
//         name : 'Tania Andrew',
//         label : 'Tania Andrew',
//         image : '/static/images/avatar/1.jpg',
//         item : [ 
//           {
//             name: 'My Profile',
//             label: 'MP',
//             initialLetter: 'MP',
//             path: '/profile',
//           },
//           {
//               name: 'Edit Profile',
//               label: 'EP',
//               initialLetter: 'MP',
//               path: '/edit-profile',
//             },
//           {
//               name: 'Settings',
//               label: 'SP',
//               initialLetter: 'MP',
//               path: '/settings',
//             },
//       ]
//     }, 
//     {
//       name: 'DASHBOARD',
//       label: DonutLargeOutlinedIcon,
//       initialLetter: 'MP',
//       path: '/settings',
//     },
//     ]

//     const onClickButtons = () => {
//       navigate('/button')
//     }

//     const onClickGrid = () => {
//       navigate('/grid')
//     }

//     const onClickPanels = () => {
//       navigate('/panels')
//     }

//     const onClickAlert = () => {
//       navigate('/sweet-alert')
//     }

//     const onClickNotify  = () => {
//       navigate('/notification')
//     }

//     const onClickIcons  = () => {
//       navigate('/icons')
//     }

//     const onClickType = () => {
//       navigate('/typography')
//     }

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const handleClickForm = () => {
//     setForm(!form)
//   }

//   const handleClickTable = () => {
//     setTable(!table)
//   }

//   const handleClickMaps = () => {
//     setMap(!map)
//   }

//   const handleClickPage = () => {
//     setPage(!page)
//   }

//   const handleClickAvatar = () => {
//     setAvatar(!avatar)
//   }



//   const handleClickDashBoard = () => {
//         navigate('/')
//   }
   
//   return (
//     <List sx={{  }}>
//         <Box sx={{display: 'flex', alignItems:'center', mt: 3, mb: 3}}>
//         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react' 
//         style={{ width: '40px', alignSelf : 'start', marginLeft: 10}}  />
//         <Typography sx={{color: '#fff', ml: 2.5,}}>CREATIVE TIM</Typography>
//         </Box>
//         <hr style={{color: '#fff'}}  /> 

//         <Box>
//           {DataItems.map((each : any) => (
//             <List>
//               <ListItemButton onClick={handleClickAvatar} sx={{mt: 2, mb: 2, backgroundColor: 'transparent',
//                   '&:hover': {
//                       backgroundColor: '#999e9e',
//                   }}}>
//               <ListItemIcon>
//               <Avatar alt="Cindy Baker" src={each.image} sx={{}} />
//               </ListItemIcon>
//               <ListItemText primary={each.name} sx={{color: '#fff'}} />
//               {avatar ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />}
//             </ListItemButton>
//             </List>
//           ))}
//         </Box>

//         {/* <ListItemButton onClick={handleClickAvatar} sx={{mt: 2, mb: 2, backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{}} />
//         </ListItemIcon>
//         <ListItemText primary="Tania Andrew" sx={{color: '#fff'}} />
//         {avatar ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />}
//       </ListItemButton> */}

//       <Collapse in={avatar} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           {DataItems?.item?.map((item : any) => 
//           <ListItemButton sx={{ pl: 4 }}>
//           <ListItemIcon sx={{color: '#fff'}}>
//             {item.label}
//           </ListItemIcon>
//           <ListItemText primary={item.name} sx={{color: '#fff'}} />
//         </ListItemButton> 
//         )}

//           {/* <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               EP 
//             </ListItemIcon>
//             <ListItemText primary="Edit Profile" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               S
//             </ListItemIcon>
//             <ListItemText primary="Settings" sx={{color: '#fff'}} />
//           </ListItemButton> */}
//         </List>
//       </Collapse>
//         <Divider style={{border: '1px solid #999e9e', }}  /> 
//         <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>


//         <ListItemButton onClick={handleClickDashBoard} sx={{mt: 3, backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <DonutLargeOutlinedIcon fontSize='large' sx={{color: "#fff",}} />
//         </ListItemIcon>
//         <ListItemText primary="DASHBOARD" sx={{color: '#fff'}} />
//         {/* {table ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />} */}
//       </ListItemButton>


//         <ListItemButton onClick={handleClick} sx={{backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <CropDinIcon fontSize='large' sx={{color: "#fff",}}   />
//         </ListItemIcon>
//         <ListItemText primary="COMPONENTS" sx={{color: '#fff'}} />
//         {open ? <ExpandMore sx={{color: '#fff'}} /> : <ExpandLess sx={{color: '#fff'}} />}
//       </ListItemButton>

//       <Collapse in={!open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }} onClick={onClickButtons}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               B
//             </ListItemIcon>
//             <ListItemText primary="Buttons" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }} onClick={onClickGrid}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               GS
//             </ListItemIcon>
//             <ListItemText primary="Grid System" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }} onClick={onClickPanels}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               P
//             </ListItemIcon>
//             <ListItemText primary="Panels" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }} onClick={onClickAlert}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               SA
//             </ListItemIcon>
//             <ListItemText primary="Sweet Alert" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }} onClick={onClickNotify}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               N
//             </ListItemIcon>
//             <ListItemText primary="Notification" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }} onClick={onClickIcons}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               I
//             </ListItemIcon>
//             <ListItemText primary="Icons" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }} onClick={onClickType}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               T
//             </ListItemIcon>
//             <ListItemText primary="Typography" sx={{color: '#fff'}} />
//           </ListItemButton>
//         </List>
//       </Collapse>

//         <ListItemButton onClick={handleClickForm} sx={{backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <AssignmentIcon fontSize='large' sx={{color: "#fff",}} />
//         </ListItemIcon>
//         <ListItemText primary="FORMS" sx={{color: '#fff'}} />
//         {form ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />}
//       </ListItemButton>

//       <Collapse in={form} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               RF
//             </ListItemIcon>
//             <ListItemText primary="Regular Forms" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               EF
//             </ListItemIcon>
//             <ListItemText primary="Extended Forms" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               VF
//             </ListItemIcon>
//             <ListItemText primary="Validation Form" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               W
//             </ListItemIcon>
//             <ListItemText primary="Wizard" sx={{color: '#fff'}} />
//           </ListItemButton>
//         </List>
//       </Collapse>


//         <ListItemButton onClick={handleClickTable} sx={{backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <FactCheckIcon fontSize='large' sx={{color: "#fff",}} />
//         </ListItemIcon>
//         <ListItemText primary="TABLES" sx={{color: '#fff'}} />
//         {table ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />}
//       </ListItemButton>

//       <Collapse in={table} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               RT
//             </ListItemIcon>
//             <ListItemText primary="Regular Table" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               ET
//             </ListItemIcon>
//             <ListItemText primary="Extended Table" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               RT
//             </ListItemIcon>
//             <ListItemText primary="React Table" sx={{color: '#fff'}} />
//           </ListItemButton>
//         </List>
//       </Collapse>

  
//         <ListItemButton onClick={handleClickMaps} sx={{backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <AddLocationIcon fontSize='large' sx={{color: "#fff",}} />
//         </ListItemIcon>
//         <ListItemText primary="MAPS" sx={{color: '#fff'}} />
//         {map ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />}
//       </ListItemButton>

      
//       <Collapse in={map} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               GM
//             </ListItemIcon>
//             <ListItemText primary="Google Maps" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               FSM
//             </ListItemIcon>
//             <ListItemText primary="Full Screen Map" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               VM
//             </ListItemIcon>
//             <ListItemText primary="Vector Map" sx={{color: '#fff'}} />
//           </ListItemButton>
//         </List>
//       </Collapse>

    
//         <ListItemButton sx={{backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <BarChartIcon fontSize='large' sx={{color: "#fff", }} />
//         </ListItemIcon>
//         <ListItemText primary="CHARTS" sx={{color: '#fff'}} />
//         {/* {map ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />} */}
//       </ListItemButton>

//         <ListItemButton sx={{backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <CalendarMonthIcon fontSize='large' sx={{color: "#fff",}} />
//         </ListItemIcon>
//         <ListItemText primary="CALENDER" sx={{color: '#fff'}} />
//         {/* {map ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />} */}
//       </ListItemButton>


//         <ListItemButton onClick={handleClickPage} sx={{backgroundColor: 'transparent',
//             '&:hover': {
//                 backgroundColor: '#999e9e',
//             }}}>
//         <ListItemIcon>
//         <PagesIcon fontSize='large' sx={{color: "#fff", }} />
//         </ListItemIcon>
//         <ListItemText primary="PAGES" sx={{color: '#fff'}} />
//         {page ? <ExpandLess sx={{color: '#fff'}} /> : <ExpandMore sx={{color: '#fff'}} />}
//       </ListItemButton>

      
//       <Collapse in={page} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               UP
//             </ListItemIcon>
//             <ListItemText primary="User Page" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               LP
//             </ListItemIcon>
//             <ListItemText primary="Login Page" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               RP
//             </ListItemIcon>
//             <ListItemText primary="Register" sx={{color: '#fff'}} />
//           </ListItemButton>

//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon sx={{color: '#fff'}}>
//               LSP
//             </ListItemIcon>
//             <ListItemText primary="Lock Screen Page" sx={{color: '#fff'}} />
//           </ListItemButton>
//         </List>
//       </Collapse>

//         </Box>
//     </List>
//   )
// }

// export default SideNavbar


import React from "react";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }: any) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, i, path } = item;

  console.log('rest',items)

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }
  const navigate = useNavigate()
  function onClick(e : any) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    navigate(path)
    // if (onClickProp) {
    //   onClickProp(e, item);
    // }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLess style={{color: '#fff',marginBottom: '10px'}}
        
      />
    ) : (
      <ExpandMore style={{color: '#fff', marginBottom: '10px'}}  />
    );
  }

  return (
    <>
    
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{}}
          className="sidebar-item-content"
        >
        {Icon ? <ListItemIcon>
            {Icon && <Icon fontSize='large' sx={{color: "#fff", }} />}
        </ListItemIcon> : null}
        {i ? <ListItemText>{i}</ListItemText> : null}
        <ListItemText primary={label} sx={{color: '#fff'}} />
          {/* <div className="sidebar-item-text">{label}</div> */}
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {/* <p>{subItem.label}</p> */}
                {subItem === "divider" ? (
                  <Divider style={{ margin: "6px 0", color: '#fff' }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}

function SideNavbar({ items, depthStep, depth, expanded } : any) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
      <Box sx={{display: 'flex', alignItems:'center', mt: 3, mb: 3}}>
     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react' 
         style={{ width: '40px', alignSelf : 'start', marginLeft: 10}}  />
        <Typography sx={{color: '#fff', ml: 2.5,}}>CREATIVE TIM</Typography>
       </Box>
       <Divider style={{ marginBottom: "8px", marginTop: "8px", color: '#fff' }}  />
        {items.map((sidebarItem: any, index: any) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ marginBottom: "8px", marginTop: "8px", color: '#fff' }} />
            ) : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default SideNavbar;