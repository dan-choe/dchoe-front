import React, {useState} from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader  from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowRightIcon from '@material-ui/icons/ChevronRight';
import FilterListIcon from '@material-ui/icons/FilterList';
import EditIcon from '@material-ui/icons/Edit';

import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import dataLoader from '../../API/dataLoader';
import _ from 'lodash';
// import { fetchNotes } from '../../actions';

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

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

class List extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            notes : [],
            totalPages: 0,
            totalElements: 0,
            selectedTags: []
        }
    }

    componentWillMount () {
        this.fetchNotesBySize(1, 3);
    }

    fetchData = async (path) => {
        return await dataLoader.get(path).then(response => {
            return response.data;
        }).catch(error => {
            return []
        });
    }

    fetchNotesBySize = async (page=1, page_size=1) => {
        let path = `/notes/page?page=${page}&page-size=${page_size}`
        const reponse = await this.fetchData(path);
        console.log('fetchNotesBySize: ', reponse)
        this.setState({notes: reponse.content, currentPage: reponse.number, totalPages: reponse.totalPages, totalElements: reponse.totalElements})
        return reponse
    }  

    handleDelete = data => () => {
        alert('Why would you want to delete React?! :)');
        return;
    }

    handleChangeMultiple = (event) => {
        this.setState({selectedTags: event.target.value});
    }
    

    render(){
        const { classes } = this.props;
        console.log('[Note/List] Render Props: ', this.props);
        console.log('[Note/List] Render state: ', this.state.notes);
        
        if(this.state.notes.length > 0){
            console.dir(this.state.notes[0]._id.toString())
        }

        return (
            <div className={classNames(classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>             
                <div>
                    currentPage: {this.state.currentPage}/{this.state.totalPages} | Total : {this.state.totalElements}
                </div>
                <div>
                {/* color="primary"  */}
                    <IconButton aria-label="delete" className={classes.margin} size="small" variant="contained">
                        <ArrowLeftIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.margin} size="small" variant="contained">
                        <ArrowRightIcon />
                    </IconButton>
                    <Link to={"/Notes/post/"}>
                        <IconButton aria-label="delete" className={classes.margin} size="small" variant="contained">
                            <EditIcon />
                        </IconButton>
                    </Link>
                </div>
                <div>
                <FilterListIcon /> 
                {/* <InputBase className={classes.input} placeholder="Filter" inputProps={{ 'aria-label': 'Filter' }} /> */}

                <FormControl className={classes.margin}>
                    {/* <InputLabel htmlFor="age-customized-native-simple">Age</InputLabel> */}
                    <Select
                        multiple
                        value={this.state.selectedTags}
                        onChange={this.handleChangeMultiple}
                        renderValue={selected => {
                            if (selected.length === 0) {
                            return <em>Placeholder</em>;
                            }
                            return selected.join(', ');
                        }}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.selectedTags.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                </div>
                <div className="BlogListItems">
                    <ul>
                        {this.state.notes.length > 0 && this.state.notes.map((note, key) => 
                            <li>
                                <Card>
                                    <Link to={"/Notes/view/" + note._id}>
                                        <CardHeader 
                                            title={note.title}
                                            // subheader={note.userId}
                                        />
                                    </Link>
                                    <CardContent>
                                        <Typography component="p">
                                            {note.body}
                                        </Typography>
                                        
                                        <div className={classes.chips}>
                                            {note.tags.map((tag, key) =>
                                                <Chip
                                                    key={key}
                                                    label={tag}
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


// <Link to={"/" + text}>
//                         <ListItem button key={text}>
//                         <ListItemIcon className={classes.primaryLight}>
//                             {this.getIcon(index)}
//                         </ListItemIcon>
//                         <ListItemText primary={text} classes={{primary: classes.primaryLight }}/>
//                         </ListItem>
//                     </Link>

const mapStateToProps = state => {
    console.log('[Note/List] mapStateToProps', state)
    return {
        ...state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchNotesBySize: (page, page_size) => {
        //     dispatch(fetchNotes(page, page_size))
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(List)));
