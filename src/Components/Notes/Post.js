import React from 'react';
import { connect } from 'react-redux';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import dataLoader from '../../API/dataLoader';


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

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            date: '',
            title: '',
            body: '',
            tags: [],
            selectedTab: 'write'
        }
    }

    handleSubmit = (event) => {
        // make a network call somewhere
        event.preventDefault();
        this.postData(`/notes`);
    }

    updateField = event => {
        let target = event.target;
        this.setState({[target.name]: target.value});
    }

    updateBodyField = event => {
        this.setState({body: event});
    }

    postData = async (path) => {
        return await dataLoader.post(path, this.state).then(response => {
            return response.data;
        }).catch(error => {
            console.log('postData error: ', error)
            return ''
        });
    }
    
    render(){
        const { classes } = this.props;
        const converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
          });

        return (
            <div className={classNames(classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>
                <div className="formContainer">
                    <Card>
                        <CardHeader title="Post a Note" />

                        <form className="EnterForm" onSubmit={this.handleSubmit}>
                            <TextField 
                                id="1"
                                name="userId"
                                label="ID"
                                defaultValue="dchoe"
                                margin="normal"
                                required={true}
                            />
                            <TextField 
                                id="2"
                                name="date"
                                label="Date"
                                type="datetime-local"
                                defaultValue={new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]}
                                margin="normal"
                                required={true}
                            />
                            <TextField 
                                id="3"
                                name="title"
                                label="Title"
                                margin="normal"
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                                value={this.state.title}
                                onChange={e => this.updateField(e)}
                            />
                             <ReactMde 
                                name="body"
                                value={this.state.body} 
                                // onChange={e => this.updateField(e)}
                                onChange={e => this.updateBodyField(e)} 
                                selectedTab={this.state.selectedTab}
                                onTabChange={tab => this.setState({selectedTab: tab})}
                                generateMarkdownPreview={markdown =>
                                    Promise.resolve(converter.makeHtml(markdown))
                                }
                            />
                            {/* <TextField 
                                id="4"
                                name="body"
                                label="Content"
                                multiline={true}
                                rows={10}
                                placeholder="Type Content..."
                                margin="normal"
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                                value={this.state.body}
                                onChange={e => this.updateField(e)}
                            /> */}
                            <TextField 
                                id="5"
                                name="tags"
                                label="Tags"
                                margin="normal"
                                fullWidth={true}
                                onChange={e => this.updateField(e)}
                            />

                            <Button variant="text" color="secondary" type="submit">Submit</Button>
                            <Button variant="text" color="secondary">Cancel</Button>
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
