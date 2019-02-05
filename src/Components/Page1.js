import React from 'react';

import { connect } from 'react-redux';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    marginRight: {
        marginRight: '24px'
    },
    sizeEighty: {
        scale: .8
    },
    bgLight: {
        backgroundColor: theme.palette.temp.light
    },

    content: {
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 0,
        },
        // boxShadow: 'none',
        // borderBottom: '1px solid #d2d2d2',
    },

    contentShift: {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
})


class Page1 extends React.Component {

    render(){

        const { classes } = this.props;

        return (
            <div className={classNames(classes.bgLight, classes.content, this.props.mobileOpen? classes.contentShift : '')}>
                <Typography paragraph>
                    <h4>Hi, my name is</h4>
                    <h1>Dan Choe.</h1>
                    <h4>I build things for solving problems.</h4>
                    <p>I'm a software engineer based in New Jersey specializing in developing 
                        (and occasionally designing) exceptional, high-quality websites and applications. 
                        Currently working at RBC as a Fullstack Engineer.</p>
                </Typography>
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

        // toggleTheme: () => {
        //     dispatch(toggle_theme())
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(Page1)));
