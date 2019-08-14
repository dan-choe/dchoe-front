import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
import InputBase from '@material-ui/core/InputBase';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import FaceIcon from '@material-ui/icons/Face';
import ListIcon from '@material-ui/icons/List';
import CodeIcon from '@material-ui/icons/Code';
import FolderIcon from '@material-ui/icons/Folder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import logo_bk from '../assets/logo-bk.png';
import logo_w from '../assets/logo-w.png';
import { toggle_theme, toggle_sidebar } from '../actions';
import resumeFile from '../assets/DanChoe-Resume.pdf';

const drawerWidth = 200;

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    flowRowDirection: {
        flexDirection: 'row',
    },
    grow: {
        flexGrow: 1
    },
    primaryLight: {
        color: theme.palette.primary.dark,
        // fontSize: '.9rem',
    },
    primaryDark: {
        color: theme.palette.primary.dark
    },
    marginRight: {
        marginRight: '24px'
    },
    sizeEighty: {
        scale: .8
    },
    bgLight: {
        backgroundColor: theme.palette.temp.main
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 0,
        },
        boxShadow: 'none',
        borderBottom: '1px solid #d2d2d2',
    },
    appBarShift: {
        marginLeft: drawerWidth,
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
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.dark,
    },
    
    logo: {
        width: '20%',
        paddingTop: 20,
        paddingBottom: 20,
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },

    toolbar: {
        paddingRight: 24,
        maxHeight: 48,
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
        marginRight: 36,
        [theme.breakpoints.up('lg')]: {
            display: 'none'
        },
    },
    hide: {
        display: 'none'
    },

    // A::after {
    //     content: "";
    //     display: block;
    //     width: 1px;
    //     height: 90px;
    //     background-color: rgb(168, 178, 209);
    //     margin: 0px auto;
    // }
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
});


class Header extends React.Component {

    state = {
        open: false,
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    getIcon(idx){
        switch(idx){
            case 0: return <FaceIcon style={{ fontSize: 20 }} />
            case 1: return <ListIcon style={{ fontSize: 20 }} />
            case 2: return <CodeIcon style={{ fontSize: 20 }} />
            case 3: return <MailIcon style={{ fontSize: 20 }} />
        }
    }

    render(){
        
        console.log(this.state);

        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <Link to={"/"}>
                    <ListItem button>
                        <img src={logo_bk} className={classes.logo}/> 
                        {/* <ListItemText primary="" classes={{primary: classes.primaryLight }} /> */}
                    </ListItem>                
                </Link>
                {/* <Divider /> */}
                <List>
                {['About', 'Experience', 'Projects', 'Contact'].map((text, index) => (
                    <Link to={"/" + text}>
                        <ListItem button key={text}>
                        <ListItemIcon className={classes.primaryLight}>
                            {this.getIcon(index)}
                        </ListItemIcon>
                        <ListItemText primary={text} classes={{primary: classes.primaryLight }}/>
                        </ListItem>
                    </Link>
                ))}
                </List>
                <Divider />
                <List>
                {['Notes/List'].map((text, index) => (
                    <Link to={"/" + text}>
                        <ListItem button key={text}>
                        <ListItemIcon className={classes.primaryLight}>{index === 0 ? <InboxIcon style={{ fontSize: 20 }}/> : <FolderIcon style={{ fontSize: 20 }} />}</ListItemIcon>
                        <ListItemText primary={text} classes={{primary: classes.primaryLight }}/>
                        </ListItem>
                    </Link>
                ))}
                </List>
            </div>
        );


        return (
            <div className="Header">
                                     
                <AppBar position="static" className={
                    // classNames(classes.appBar, this.state.mobileOpen? classes.appBarShift : '')}>
                    classNames(classes.appBar, this.props.sidebarReducer.isSidebarOpen? classes.appBarShift : '')}>
                    <Toolbar variant="dense" color="orange" className={classes.toolbar}>
                      
                        <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        // onClick={this.handleDrawerToggle}
                        onClick={() => this.props.toggleSidebar()}
                        className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* <div className={classNames(classes.root, classes.flowRowDirection)}> */}
                        <div className="header2">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <Typography variant="h6" noWrap>
                                        Home
                                        </Typography>                            
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/About">
                                        <Typography variant="h6" noWrap>
                                        About
                                        </Typography>                            
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Experience">
                                        <Typography variant="h6" noWrap>
                                        Experience
                                        </Typography>                            
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Projects">
                                        <Typography variant="h6" noWrap>
                                        Projects
                                        </Typography>                            
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Contact">
                                        <Typography variant="h6" noWrap>
                                        Contact
                                        </Typography>                            
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>

                        
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            />
                        </div>

                        <div className={classes.grow} />
                        <div className={classes.search}>
                        
                        </div>

                        <div className={classes.marginRight}>
                            {/* <IconButton color="inherit">
                                <MailIcon />
                            </IconButton> */}
                            {/* <IconButton color="inherit">
                                <AccountCircle />
                            </IconButton> */}
                            <Link to={resumeFile} target="_blank" download>
                                <Button variant="outlined" color="secondary">
                                    Resume
                                </Button>
                            </Link>
                        </div>

                        <Icon className={classNames('far fa-sun ') + classes.primaryLight} />
                        <Swich onClick={() => this.props.toggleTheme() }></Swich>
                        <Icon className={classNames('far fa-moon ') + classes.primaryLight} />
                    </Toolbar>
                </AppBar>
                
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    
                    <Hidden mdDown implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.props.sidebarReducer.isSidebarOpen}
                            onClose={() => this.props.toggleSidebar()}
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
        toggleSidebar: () => {
            dispatch(toggle_sidebar())
        },

        toggleTheme: () => {
            dispatch(toggle_theme())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(Header)));