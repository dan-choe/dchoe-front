import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { ThemeProvider, useTheme, makeStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';
// import { withStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
// import { withStyles, withTheme } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader  from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import ArrowLeftIcon from '@material-ui/icons/ChevronLeft';
// import ArrowRightIcon from '@material-ui/icons/ChevronRight';
import ReportIcon from '@material-ui/icons/Report';
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
import Pagination from './Pagination';


// import { fetchNotes } from '../../actions';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
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
}));

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

const fetchData = async (path) => {
    return await dataLoader.get(path).then(response => {
        return response.data;
    }).catch(error => {
        return []
    });
}

const fetchNotesBySize = async (page=1, page_size=1) => {
    let path = `/notes/page?page=${page}&page-size=${page_size}`
    const reponse = await this.fetchData(path);
    console.log('fetchNotesBySize: ', reponse)
    this.setState({notes: reponse.content, currentPage: reponse.number, totalPages: reponse.totalPages, totalElements: reponse.totalElements})
    return reponse
}

function List() {

    const classes = useStyles();
    // const { classes } = this.props;

    // console.log('[Note/List] Render Props: ', this.props);
    // console.log('[Note/List] Render state: ', this.state.notes);

    const [notes, setNotes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);
    
    /*
        useEffect runs on every render, 
        it is a combination of componentDidUpdate, componentDidMount and ComponentWillUnmount.
    */

    useEffect(() => {
        console.log("componentDidMount");
        // if (componentDidUpdate & (currentPage or pageSize changed))
        this.fetchNotesBySize(currentPage, pageSize);
        return () => {
            console.log("componentWillUnmount");
        };
    }, [currentPage, pageSize]);

    // handleDelete = data => () => {
    //     alert('Why would you want to delete React?! :)');
    //     return;
    // }

    // handleChangeMultiple = (event) => {
    //     setSelectedTags(event.target.value);
    // }

    return (
        // <div className={classNames(classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>             
        <div className={classNames(classes.bgLight, classes.content)}>             

            {/* <ReportIcon /> Page is still in construction. */}
            
            <div>                  
                <div>
                    <Pagination 
                        pageSize={pageSize} 
                        totalPages={totalPages} 
                        currentPage={currentPage} 
                        totalElements={totalElements}/>
                </div>


                <div>
                    <Link to={"/Notes/post/"}>
                        <IconButton aria-label="delete" className={classes.margin} size="small" variant="contained">
                            <EditIcon />
                        </IconButton>
                    </Link>
                </div>
            </div>
            <div>
            <FilterListIcon /> 
            {/* <InputBase className={classes.input} placeholder="Filter" inputProps={{ 'aria-label': 'Filter' }} /> */}

            <FormControl className={classes.margin}>
                {/* <InputLabel htmlFor="age-customized-native-simple">Age</InputLabel> */}
                <Select
                    multiple
                    value={selectedTags}
                    // onChange={this.handleChangeMultiple}
                    renderValue={selected => {
                        if (selected.length === 0) {
                        return <em>Placeholder</em>;
                        }
                        return selected.join(', ');
                    }}
                >
                    {names.map(name => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={selectedTags.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            </div>
            <div className="BlogListItems">
                <ul>
                    {notes && notes.map((note, key) => 
                        <li key={key}>
                            <Card>
                                <Link to={`/Notes/View/${note._id}`}>
                                    <CardHeader 
                                        title={note.title}
                                        subheader={'@' + note.userName}
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
                            </Card>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

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

// export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(List)));
// export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(List));
// export default withStyles(useStyles, { withTheme: true })(List);
export default List;
