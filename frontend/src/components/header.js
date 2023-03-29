import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';


const Header = () => {
    const navItems = {
        Accueil: '/',
        Produits: '/produits',
        FAQ: '/faq',
        Panier: '/panier'
    };

    const navigate = useNavigate();

    function navigateTo(item) {
        navigate(navItems[item], {replace: false});
    }

    return (
        <AppBar color={"primary"} position="static" sx={{alignItems: 'stretch'}}>
            <Toolbar>
                <Typography
                    variant="h4"
                    component="div"
                    color={"secondary"}
                    fontFamily={"Limelight"}
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    OR DU TEMPS
                </Typography>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    {Object.keys(navItems).map((item, index) => (
                        <Button key={index} color="inherit"
                                onClick={() => navigateTo(item)}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;