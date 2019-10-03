import React from 'react';

import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { withStyles, withTheme } from '@material-ui/core/styles';
// import classNames from 'classnames';

// import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import ArrowLeftIcon from '@material-ui/icons/ChevronLeft';
// import ArrowRightIcon from '@material-ui/icons/ChevronRight';

import { select_page } from '../../actions';

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    curPageButton: {
        color: theme.palette.blue.main,
    },
    defaultPageButton: {
        color: theme.palette.blue.dark,
    }
})

class Pagination extends React.Component {

    select_page(pageId) {
        this.props.select_page({
            currentPage: pageId,
            pageSize: this.props.totalPages
        });
    }

    render() {
        const { classes, totalPages, currentPage, pageSize, totalElements } = this.props;

        let getPageButtons = (currentPage=0, totalPage=0) => {
            let buttons = [];
            for(let i=0; i<totalPage; i++){
                buttons.push(
                    <Button id={i} key={i} aria-label="delete" className={currentPage === i ? classes.curPageButton : classes.defaultPageButton} size="small" variant="outlined" onClick={() => this.select_page(i)}>
                        {i}
                    </Button>
                );
            }
            return buttons;
        }

        return (
            <div className={classes.root}>
                <div>
                    {/* <IconButton aria-label="delete" className={classes.margin} size="small" variant="outlined">
                        <ArrowLeftIcon />Prev
                    </IconButton> */}

                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></svg> 
                        Prev
                    </Button>
                    
                    {getPageButtons(currentPage, totalPages)}
                            
                    {/* <IconButton aria-label="delete" className={classes.margin} size="small" variant="outlined">
                        <ArrowRightIcon />Next
                    </IconButton> */}
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>								
                        Next
                    </Button>
                </div>
                <div>
                    {currentPage * pageSize} - {currentPage * pageSize + pageSize} of {totalElements}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        select_page: (pageInfo) => {
            dispatch(select_page(pageInfo))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles, { withTheme: true })(Pagination)));