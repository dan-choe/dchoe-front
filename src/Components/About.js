import React from 'react';

import { connect } from 'react-redux';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import profileImg from '../assets/profile-circle.png';

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
    },

    contentShift: {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    
    headline: {
        marginBottom: 20,
    },
    profileBody: {
        maxWidth: 600,
        width: '80%',
    },
    profileBox: {
        display: 'flex',
        flexGrow: 1,
        alignContent: 'flex-start',
        flexWrap: 'wrap',
    },
    profilePicture: {
        maxWidth: 300,
        width: '100%',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    centerBox: {
        // margin: '0px auto',
        // width: '80%',
    }
})


class About extends React.Component {

    render(){

        const { classes } = this.props;
    
        return (
            <div className={classNames(classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>
                <div className={classes.centerBox}>
                    <div className={classes.profileBox}>
                        <div>
                            <div className={classes.headline}>
                                <Typography variant="headline">
                                    About Me
                                </Typography>
                            </div>
                            <div className={classes.profileBody}>
                                <Typography variant="body1">
                                    bla bla
                                    <br/>
                                    <br/>
                                    Here's a few things I'm experienced with:
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.profilePicture}>
                            {/* <Avatar alt="Dan Choe" src={profileImg} className={classes.avatar} /> */}
                            <img src={profileImg} className={classes.avatar}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ...state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(About)));
