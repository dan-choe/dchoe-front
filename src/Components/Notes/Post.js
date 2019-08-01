import React from 'react';

import { connect } from 'react-redux';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

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


class Post extends React.Component {

    handleSubmit = (event) => {
        // make a network call somewhere
        event.preventDefault();
        console.log("submitted ");
    }

    render(){
        const { classes } = this.props;
    
        return (
            <div className={classNames(classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>
                <div className="formContainer">
                    <Card>
                        <CardHeader title="Post a Note" />

                        <form className="EnterForm" onSubmit={this.handleSubmit}>
                            <TextField 
                                id="1"
                                label="ID"
                                defaultValue="dchoe"
                                margin="normal"
                                required={true}
                            />
                            <TextField 
                                id="2"
                                label="Date"
                                type="datetime-local"
                                defaultValue={new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]}
                                margin="normal"
                                required={true}
                            />
                            <TextField 
                                id="3"
                                label="Title"
                                defaultValue="Enter Title"
                                margin="normal"
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                            />
                            <TextField 
                                id="4"
                                label="Content"
                                multiline={true}
                                rows={10}
                                placeholder="Type Content..."
                                margin="normal"
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                            />
                            <TextField 
                                id="5"
                                label="Tags"
                                margin="normal"
                                fullWidth={true}
                            />

                            <Button variant="standard" color="primary" type="submit">Submit</Button>
                            <Button variant="standard" color="secondary">Cancel</Button>
                        </form>
                    </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(Post)));
