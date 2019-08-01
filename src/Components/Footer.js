import React from 'react';

import { connect } from 'react-redux';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 200;

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
        backgroundColor: theme.palette.primary.main
    },

    content: {
        display: 'flex',
        flexGrow: 1,
        minHeight: '100px',
        alignContent: 'center',
        justifyContent: 'center',

        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 0,
        },
        boxShadow: 'none',
        borderTop: '1px solid #d2d2d2',
        padding: '20px',
        color: theme.palette.temp.main,
    },

    contentShift: {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
})


class Footer extends React.Component {

    render(){

        const { classes } = this.props;

        return (
            <div className={classNames("tempbox", classes.bgLight, classes.content, this.props.mobileOpen? classes.contentShift : '')}>
                <div className="center">
                    © 2019 dchoe, Designed & Built by Dan Choe
                </div>

                {/* <ul>
                    <i class="fab fa-github"></i>
                    <i class="fab fa-linkedin"></i>
                </ul> */}
                
                <div className="rightMost">
                    <Icon className={classNames('fab fa-github')} />
                    <Icon className={classNames('fab fa-linkedin')} />
                </div>

                
                

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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(Footer)));
