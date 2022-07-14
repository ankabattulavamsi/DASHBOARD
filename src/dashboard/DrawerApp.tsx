import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Home from './Home';

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import { Avatar, } from '@mui/material';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import CropDinIcon from '@mui/icons-material/CropDin';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PagesIcon from '@mui/icons-material/Pages';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEle, setAnchorEle] = React.useState(null);
  const [anchorElp, setAnchorElp] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [bool, setBool] = React.useState(true)
  

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const isProfileOpen = Boolean(anchorEle);
  const isPostOpen = Boolean(anchorElp);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event: any) => {
    setAnchorEle(event.currentTarget);
  };

  const handlePostOpen= (event: any) => {
    setAnchorElp(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileClose = () => {
    setAnchorEle(null);
    handleMobileMenuClose();
  };

  const handlePostClose = () => {
    setAnchorElp(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuPostId = 'primary-search-account-post';

  const renderPost = (
    <Menu
      anchorEl={anchorElp}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuPostId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isPostOpen}
      onClose={handlePostClose}
    >
      <Box >
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'transparent',
        },}}>Create New Post</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'transparent',
        },}}>Manage something</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'transparent',
        },}}>Do Something</MenuItem>
    
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
  '&:hover': {
    backgroundColor: 'transparent',
  },}}>Submit to live</MenuItem>
    <hr /> 
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
  '&:hover': {
    backgroundColor: 'transparent',
  },}}>Another action</MenuItem>
      </Box>
    </Menu>
  );

  const menuProfileId = 'primary-search-account-profile';

  const renderProfile = (
    <Menu
      anchorEl={anchorEle}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuProfileId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isProfileOpen}
      onClose={handleProfileClose}
    >
      <Box >
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'transparent',
        },}}>Notification 1</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'transparent',
        },}}>Notification 2</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'transparent',
        },}}>Notification 3</MenuItem>
      <hr /> 
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
  '&:hover': {
    backgroundColor: 'transparent',
  },}}>Notification 4</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
  '&:hover': {
    backgroundColor: 'transparent',
  },}}>Notification 5</MenuItem>
      </Box>
    </Menu>
  );


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box >
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue', 
        '&:hover': {
            backgroundColor: 'transparent',
        },}}><IconButton><MailOutlineIcon /> </IconButton> Messages</MenuItem>

      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'transparent',
        },}}> <IconButton><HelpOutlineIcon/></IconButton> Help Centers</MenuItem>

      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'transparent',
        },}}> <IconButton><SettingsIcon /></IconButton> Settings</MenuItem>
      <hr /> 
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
  '&:hover': {
    backgroundColor: 'transparent',
  },}}><IconButton><LockIcon /></IconButton> Lock Screen</MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{backgroundColor: 'blue',
  '&:hover': {
    backgroundColor: 'transparent',
  },}}><IconButton><LogoutIcon /></IconButton> Logout</MenuItem>
      </Box>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handlePostOpen}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <VisibilityOffIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleNotificationMenuOpen}>
        <IconButton
          size="large"
          aria-label="show 5 new notifications"
          aria-controls="primary-search-account-profile"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ListIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:'#1b1d1d', height: '100%'}} >
      {/* <Toolbar /> */}
      <Divider />
      <List>
      <Box sx={{display: 'flex', alignItems:'center', mt: 3, mb: 3}}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react' 
        style={{ width: '40px', alignSelf : 'start', marginLeft: 10}}  />
        <Typography sx={{color: '#fff', ml: 2.5,}}>CREATIVE TIM</Typography>
        </Box>
        <Divider />

        <Box sx={{display: 'flex', alignItems:'center', mt: 2, mb: 2 }}>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{color: "#fff", ml: 1}} />
        <Typography sx={{color: '#fff', ml: 3,}}>Tania Andrew</Typography>
        </Box>
        <Divider />

        <Box sx={{display: 'flex', alignItems:'center', borderRadius: 2, padding: '5px', size: 'cover', backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: '#999e9e',
            }}}>
        <IconButton>
        <DonutLargeOutlinedIcon fontSize='large' sx={{color: "#fff",}} />
        </IconButton>
        <Typography sx={{color: '#fff', ml: 2,}}>DASHBOARD</Typography>
        </Box>
        <Divider />

        <Box  sx={{display: 'flex', alignItems:'center', borderRadius: 2, width: '100%', padding: '4px', backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: '#999e9e',
            }}}>
            <IconButton 
              edge="end"
              aria-label="account of current user"
            //aria-controls={menuId}
              aria-haspopup="true" >
            <CropDinIcon fontSize='large' sx={{color: "#fff",}}   />
            </IconButton>
        <Typography sx={{color: '#fff', ml: 3.5}}>COMPONENTS</Typography>
        <ArrowDropDownIcon sx={{color: "#fff", ml: 2,}}/>
        </Box>

        <Box sx={{display: 'flex', alignItems:'center', borderRadius: 2, padding: '4px', backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: '#999e9e',
            }}}>
        <IconButton>
        <AssignmentIcon fontSize='large' sx={{color: "#fff",}} />
        </IconButton>
        <Typography sx={{color: '#fff', ml: 2,}}>FORMS</Typography>
        <ArrowDropDownIcon sx={{color: "#fff", ml: 8,}}/>
        </Box>

        <Box sx={{display: 'flex', alignItems:'center', borderRadius: 2,  padding: '4px', backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: '#999e9e',
            }}}>
        <IconButton>
        <FactCheckIcon fontSize='large' sx={{color: "#fff",}} />
        </IconButton>
        <Typography sx={{color: '#fff', ml: 2,}}>TABLES</Typography>
        <ArrowDropDownIcon sx={{color: "#fff", ml: 7.5,}}/>
        </Box>

        <Box sx={{display: 'flex', alignItems:'center', borderRadius: 2, padding: '4px', backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: '#999e9e',
            }}}>
        <IconButton>
        <AddLocationIcon fontSize='large' sx={{color: "#fff",}} />
        </IconButton>
        <Typography sx={{color: '#fff', ml: 2,}}>MAPS</Typography>
        <ArrowDropDownIcon sx={{color: "#fff", ml: 9,}}/>
        </Box>

        <Box sx={{display: 'flex', alignItems:'center', borderRadius: 2, padding: '4px', backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: '#999e9e',
            }}}>
        <IconButton>
        <BarChartIcon fontSize='large' sx={{color: "#fff", }} />
        </IconButton>
        <Typography sx={{color: '#fff', ml: 2,}}>CHARTS</Typography>
        </Box>

        <Box  sx={{display: 'flex', alignItems:'center', borderRadius: 2, padding: '4px', backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: '#999e9e',
            }}}>
        <IconButton>
        <CalendarMonthIcon fontSize='large' sx={{color: "#fff",}} />
        </IconButton>
        <Typography sx={{color: '#fff', ml: 2}}>CALENDER</Typography>
        </Box>

        <Box sx={{display: 'flex', alignItems:'center', borderRadius: 2, padding: '4px', backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: '#999e9e',
            }}}>
        <IconButton>
        <PagesIcon fontSize='large' sx={{color: "#fff", }} />
        </IconButton>
        <Typography sx={{color: '#fff', ml: 2}}>PAGES</Typography>
        <ArrowDropDownIcon sx={{color: "#fff", ml: 7,}}/>
        </Box>
      </List>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'InfoText'
        }}
      >
        <Toolbar>
          {bool ? (
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 5,}}
          >
            <MenuIcon />
          </IconButton>
          ) : (
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,}}
          >
            <MoreVertIcon />
          </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Buttons
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" 
            aria-controls={menuPostId}
            aria-haspopup="true"
            onClick={handlePostOpen}>
              <Badge badgeContent={4} color="error">
                <VisibilityOffIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              aria-controls={menuProfileId}
              aria-haspopup="true"
              onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ListIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 25 }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
      {renderMenu}
      {renderProfile}
      {renderPost}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none', },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="persistent"
          sx={{
            display: { xs: 'none', sm: 'block', lg: 'block', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, xs: `calc(100% - ${drawerWidth}px)`, lg: `calc(100% - ${drawerWidth}px)`},  }}
      >
        <Toolbar />
        <Home />
      </Box>
    </Box>
  );
}

