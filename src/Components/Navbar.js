import React from 'react';
import { Box, Typography, Avatar, Menu, MenuItem, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Learn', 'Practice'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#000', padding: 2, color: '#fff' }}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box component="span" sx={{ fontWeight: 'bold', paddingRight: 1 }}>THE</Box>
        <Box component="span" sx={{ bgcolor: '#fff', color: '#000', padding: '0 4px' }}>PRODUCT</Box>
        <Box component="span" sx={{ paddingLeft: 1 }}>PLATFORM</Box>
      </Typography>
      {isMobile ? (
        <>
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList}
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ marginRight: 2, cursor: 'pointer' }}>Learn</Typography>
          <Typography sx={{ cursor: 'pointer' }}>Practice</Typography>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar sx={{ bgcolor: '#ff5722' }}>N</Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
