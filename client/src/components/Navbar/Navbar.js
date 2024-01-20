import React from 'react';
import { AppBar, Button, Toolbar, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import components
import DrawerNav from './DrawerNav/DrawerNav.js';
// import styles/images
import useStyles from './styles.js';
import Logo from '../../image/Logo.jpg';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='sticky' color='inherit'>
            <Grid container justify='flex-start' alignItems='center' spacing={3}>
                <Grid item container justify='flex-start' xs={12} md={1}>
                    <img className={classes.icon} src={Logo} alt="icon" height="100" width="100" />
                </Grid>
            </Grid>
            <Grid item xs={12} md={10} container jusfy='center' alignItems='center' >

                <Typography className={classes.heading} component={Link} to='/' variant='h4' align='center'>HEALTHY EATING PLATE</Typography>
            </Grid>
            <Grid item xs={12} md={10} container justify='flex-end' alignItems='center' >
                <Grid item container justify='flex-end' xs={12} md={1}>
                    <DrawerNav />
                </Grid>
            </Grid>

        </AppBar >
    )
}

export default Navbar;
