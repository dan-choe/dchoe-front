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
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

// import * as Notes from './../../assets/mock_posts.json';
let Notes = require('./../../assets/mock_posts.json');

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
    chips: {
        display: 'flex',
    },
    chip: {
        margin: theme.spacing.unit / 2,
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


class List extends React.Component {

    handleDelete = data => () => {
        alert('Why would you want to delete React?! :)');
        return;
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classNames(classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>             
                <div>
                    Filter by Tags 
                </div>
                <div className="BlogListItems">
                    <ul>
                        {Notes.map((note, key) => 
                            <li>
                                <Card>
                                    <CardHeader 
                                        title={note.title}
                                        subheader={note.userId + " - " + note.id + " - " + note.date}
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            {note.body}
                                        </Typography>
                                        
                                        <div className={classes.chips}>
                                            {note.tags.map((tag, key) =>
                                                <Chip
                                                    key={key}
                                                    label={tag.name}
                                                    // onDelete={this.handleDelete("1")}
                                                    className={classes.chip}
                                                    variant="outlined"
                                                    style={{ height: '24px' }}
                                                />
                                            )}
                                        </div>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions> */}
                                </Card>
                            </li>
                        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(List)));
