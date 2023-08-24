import * as React from 'react';
import {
    Box, AppBar,
    List, ListItem,  
    ListItemButton, ListItemText,
    Toolbar, Typography, Button,
    Divider, Drawer, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { generateColors } from '../initialSettings';
const drawerWidth = 240;
const navItems = [{name : 'Home', link : "/"}, {name : 'About', link : "/about"},{name : 'Contact', link : "/contact"}];

function TopNavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map(({name, link}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={link}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const colors = generateColors()
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position='sticky' style={{ background: colors.primary }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({name, link}) => (
              <Button key={name} sx={{ color: colors.text }} href={link}>
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor : colors.secondary },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default TopNavBar;