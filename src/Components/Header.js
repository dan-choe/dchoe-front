import React from 'react';

import { connect } from 'react-redux';

import classNames from 'classnames';

import { withStyles, withTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Swich from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
// import IconBase from '@material-ui/core/IconBase';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


import { toggle_theme } from '../actions';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    primaryLight: {
        color: theme.palette.primary.dark
    },
    primaryDark: {
        color: theme.palette.primary.dark
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
          },
    },

    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },

    toolbar: {
        paddingRight: 24
    },
    toolbarIcon: {
        display: 'flex',
        alighItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    hide: {
        display: 'none'
    }
});


class Header extends React.Component {
    
    
    state = {
        open: false,
        mobileOpen: false,
      };

      handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
      };

    render(){

        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </div>
        );


        return (
            <div className="Header">

               
                        
                {/* <AppBar position="static" className={classNames(classes.AppBar)}> */}
                <AppBar position="static">
                    <Toolbar variant="dense">
                        {/* <IconButton onClick={()=> this.props.clickedMenu(this.props.isOpen)} className={classes.menuButton} color="inherit">  */}

                        
                        
                        {/* <IconButton className={classes.menuButton} color="inherit"> 
                            <MenuIcon />
                        </IconButton> */}
                        
                        <Toolbar>
                            <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                            >
                            <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap>
                            Responsive drawer
                            </Typography>
                        </Toolbar>


                        {/* <Typography variant="h6" color="inherit" className={classes.grow}>
                            About
                        </Typography>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Projects
                        </Typography>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Blog
                        </Typography>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Contact
                        </Typography> */}

                        <div className={classes.grow} />
                        <div className={classes.search}>
                        
                        </div>

                        <IconButton color="inherit">
                            <MailIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>

                        <Icon className={classNames('far fa-sun ') + classes.primaryLight} />
                        <Swich onClick={() => this.props.toggleTheme() }></Swich>
                        <Icon className={classNames('far fa-moon ') + classes.primaryDark} />
                    </Toolbar>
                </AppBar>
                
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    
                    <Hidden mdDown implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                        {drawer}
                        </Drawer>
                    </Hidden>

                    <Hidden mdDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                        {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state, 
        // isOpen: state.sideBarToggleReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // clickedMenu: (isOpen) => {
        //     dispatch(sideBarToggle(isOpen))
        // },

        toggleTheme: () => {
            dispatch(toggle_theme())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(Header)));