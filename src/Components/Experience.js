import React from 'react';

import { connect } from 'react-redux';

import { withStyles, withTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

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


class Experience extends React.Component {

    state = { activeIndex: 0 }
    handleChange = (_, activeIndex) => this.setState({ activeIndex })

    render(){

        const { classes } = this.props;
        const { activeIndex } = this.state;

        return (
            <div className={classNames(classes.bgLight, classes.content, this.props.sidebarReducer.isSidebarOpen? classes.contentShift : '')}>
                <div class="tab">
                    <button class="tablinks" onclick="openCity(event, 'London')">London</button>
                    <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
                    <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
                    </div>

                    <div id="London" class="tabcontent">
                    <h3>London</h3>
                    <p>London is the capital city of England.</p>
                    </div>

                    <div id="Paris" class="tabcontent">
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p> 
                    </div>

                    <div id="Tokyo" class="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(Experience)));
