import React from 'react';

import { connect } from 'react-redux';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader  from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

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


class Projects extends React.Component {

    render(){

        const { classes } = this.props;
    
        return (
            <div className={classNames(classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>             
                <div className="BlogListItems">
                    <ul>
                        <li>
                            <Card>
                                <CardHeader 
                                    title="The hidden components of Web Caching 😃"
                                    subheader="@dchoe 12:50PM - 2019.02.01"
                                />
                                <CardContent>
                                    <Typography component="p">
                                        Caching allows you to increase application processing speed. 
                                        Storing a copy of the previously fetched data or computed results 
                                        increases processing speed. This enables future requests to be served faster. 
                                        It is an effective architectural pattern, because most programs access the same 
                                        data or instructions over and over. It is applied to everything from web-browsers 
                                        to web-servers and hard-disks to CPUs. Let’s take a bottom-up approach to understanding
                                        the various layers of caching. We will focus on where data can be cached instead of 
                                        how to cache it.
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </li>
                        <li>
                            <Card>
                                <CardHeader 
                                    title="The hidden components of Web Caching 😃"
                                    subheader="@dchoe 12:50PM - 2019.02.01"
                                />
                                <CardContent>
                                    <Typography component="p">
                                        Caching allows you to increase application processing speed. 
                                        Storing a copy of the previously fetched data or computed results 
                                        increases processing speed. This enables future requests to be served faster. 
                                        It is an effective architectural pattern, because most programs access the same 
                                        data or instructions over and over. It is applied to everything from web-browsers 
                                        to web-servers and hard-disks to CPUs. Let’s take a bottom-up approach to understanding
                                        the various layers of caching. We will focus on where data can be cached instead of 
                                        how to cache it.
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </li>
                        <li>
                            <Card>
                                <CardHeader 
                                    title="The hidden components of Web Caching 😃"
                                    subheader="@dchoe 12:50PM - 2019.02.01"
                                />
                                <CardContent>
                                    <Typography component="p">
                                        Caching allows you to increase application processing speed. 
                                        Storing a copy of the previously fetched data or computed results 
                                        increases processing speed. This enables future requests to be served faster. 
                                        It is an effective architectural pattern, because most programs access the same 
                                        data or instructions over and over. It is applied to everything from web-browsers 
                                        to web-servers and hard-disks to CPUs. Let’s take a bottom-up approach to understanding
                                        the various layers of caching. We will focus on where data can be cached instead of 
                                        how to cache it.
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </li>
                    </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(Projects)));
