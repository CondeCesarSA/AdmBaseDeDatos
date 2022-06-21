import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const SideBar = (props) => {

    const options = [
        { label: "Panel Principal", redirect: "/dashboard", icon: DashboardIcon, accessLevel: [0,2] },
        { label: "Inventario", redirect: "/inventory", icon: InventoryIcon, accessLevel: [1,2] },
        { label: "Proveedor", redirect: "/provider", icon: EngineeringIcon, accessLevel: [1,2] },
        { label: "Facturacion", redirect: "/invoice", icon: ReceiptIcon, accessLevel: [1,2] },
        { label: "Ordenes", redirect: "/orders", icon: DescriptionIcon, accessLevel: [1,2] },
        { label: "Usuarios", redirect: "/users", icon: PersonIcon, accessLevel: [2] },
        { label: "Configuracion", redirect: "/configuration", icon: SettingsIcon, accessLevel: [0,1,2] }
    ]
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState("");
    const [accessUser, setAccessUser] = useState(null);
    const location = useLocation()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('UserInfo'))
        setAccessUser(user.accessLevel)
        setSelectedIndex(location.pathname)
    },[])

    const handleSelectedItem = (e) => {
        setSelectedIndex(e)
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List sx={{ py: 0 }}>
                {options.filter(item => item.accessLevel.includes(accessUser)).map((text, index) => {
                    const Icon = text.icon;
                    return (
                        <ListItem
                            sx={{
                                background: selectedIndex === text.redirect ? "grey" : "white",
                                color: selectedIndex === text.redirect ? "white" : "black",
                            }}    
                            component={Link} 
                            to={text.redirect} 
                            key={text.label} 
                            onClick={() => handleSelectedItem(text.redirect)} 
                            disablePadding
                        >
                            <ListItemButton >
                                <ListItemIcon sx={{justifyContent: "center"}}>
                                    <Icon sx={selectedIndex === text.redirect ? { color: "white" } : {}} />
                                </ListItemIcon>
                                <ListItemText primary={text.label} />
                            </ListItemButton>
                        </ListItem>)
                })}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={!mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, top: 'unset' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, top: 'unset' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}
