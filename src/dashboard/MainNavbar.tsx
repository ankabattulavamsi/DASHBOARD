import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
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
import { Button } from '@mui/material';

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

export const MainNavbar = ({handleClose, handleOpen, open, setOpen}: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEle, setAnchorEle] = React.useState(null);
  const [anchorElp, setAnchorElp] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  

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
  

  return (
    <Box sx={{ flexGrow: 1, }}>
      <Box sx={{borderBottom: '1px solid #1f2020',}}>
        <Toolbar>
          <Button sx={{padding: 0, marginRight: 0, borderRadius: 2,}}>
          {open ?
            <MenuIcon 
            onClick={handleClose}
            sx={{color: '#fff',backgroundColor: '#1f2020',borderRadius: 2 }} />
            : 
            <MoreVertIcon
            onClick={handleOpen} 
            sx={{color: '#fff',backgroundColor: '#1f2020',borderRadius: 2}} /> 
        }
          </Button>
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
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
      </Box>
      {renderMobileMenu}
      {renderMenu}
      {renderProfile}
      {renderPost}
    </Box>
  );
}

export default MainNavbar
