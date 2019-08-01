import React from 'react';

import { connect } from 'react-redux';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const drawerWidth = 200;

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    // icon: {
    //     margin: theme.spacing.unit * 2,
    // },
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
})


class View extends React.Component {

    render(){

        const { classes } = this.props;
    
        return (
            <div className={classNames("blogView", classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>
                <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></svg> 
                    Prev (Title)</Button>
                <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>								
                    Next (Title)
                </Button>
               
                <div className="title">
                    <Typography variant="h4">The hidden components of Web Caching 😃</Typography>
                    <Typography variant="subtitle2">@dchoe 12:50PM - 2019.02.01</Typography>
                </div>
                
                <div className="content">
                    <Typography variant="body1" component="p">
                        Caching allows you to increase application processing speed. 
                        Storing a copy of the previously fetched data or computed results 
                        increases processing speed. This enables future requests to be served faster. 
                        It is an effective architectural pattern, because most programs access the same 
                        data or instructions over and over. It is applied to everything from web-browsers 
                        to web-servers and hard-disks to CPUs. Let’s take a bottom-up approach to understanding
                        the various layers of caching. We will focus on where data can be cached instead of 
                        how to cache it.
                    </Typography>
                </div>
                <div className="tags">
                    <Chip
                        key="1"
                        label="label"
                        // onDelete={this.handleDelete("1")}
                        className={classes.chip}
                        variant="outlined"
                        style={{ height: '24px' }}
                    />
                    <Chip
                        key="1"
                        label="label"
                        // onDelete={this.handleDelete("1")}
                        className={classes.chip}
                        variant="outlined"
                        style={{ height: '24px' }}
                    />  
                    <Chip
                        key="1"
                        label="label"
                        // onDelete={this.handleDelete("1")}
                        className={classes.chip}
                        variant="outlined"
                        style={{ height: '24px' }}
                    />                
                </div>
                <Button>Go back</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(View)));
